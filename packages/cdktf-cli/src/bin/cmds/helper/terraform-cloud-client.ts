// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import https from "https";
import querystring from "querystring";
import { join } from "path";

const SUCCESS_STATUS_CODES = [200, 201];

export interface Attributes {
  username: string;
  "avatar-url": string;
}

export interface Data {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface Account {
  data: Data;
}

export interface OrganizationData {
  id: string;
  type: string;
  attributes: Record<string, unknown>;
}

export interface WorkspaceData {
  type: string;
  attributes: Record<string, unknown>;
}

export interface Organization {
  data: OrganizationData[];
}

export interface Workspaces {
  data: WorkspaceData[];
}

export interface ServiceDiscovery {
  "modules.v1": string;
  "providers.v1": string;
  "motd.v1": string;
  "state.v2": string;
  "tfe.v2": string;
  "tfe.v2.1": string;
  "tfe.v2.2": string;
  "versions.v1": string;
}

let cachedServiceDiscovery: ServiceDiscovery | undefined;
async function discoverService(hostname: string): Promise<ServiceDiscovery> {
  if (cachedServiceDiscovery) return cachedServiceDiscovery;

  return new Promise<ServiceDiscovery>((resolve, reject) => {
    const req = https.request(
      new URL(`https://${hostname}/.well-known/terraform.json`).toString(),
      (res) => {
        if (res.statusCode !== 200) {
          const error = new Error(res.statusMessage);
          (error as any).statusCode = res.statusCode;
          return reject(error);
        }
        const data = new Array<Buffer>();
        res.on("data", (chunk) => data.push(chunk));
        res.once("error", (err) => reject(err));
        res.once("end", () => {
          const response = JSON.parse(Buffer.concat(data).toString("utf-8"));
          cachedServiceDiscovery = response as ServiceDiscovery;
          return resolve(cachedServiceDiscovery);
        });
      }
    );
    req.end();
  });
}

// Testing only method, not needed for production use
export function resetServiceDiscoveryCache() {
  cachedServiceDiscovery = undefined;
}

async function get<T>(url: string, token: string) {
  return new Promise<T>((ok, ko) => {
    const req = https.request(
      new URL(url).toString(),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": "HashiCorp/cdktf-cli",
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          if (res.statusCode === 401) {
            console.log(
              "ERROR: Your existing token for Terraform Cloud is invalid."
            );
          }
          const error = new Error(res.statusMessage);
          (error as any).statusCode = res.statusCode;
          return ko(error);
        }
        const data = new Array<Buffer>();
        res.on("data", (chunk) => data.push(chunk));

        res.once("error", (err) => ko(err));
        res.once("end", () => {
          const response = JSON.parse(Buffer.concat(data).toString("utf-8"));
          return ok(response as T);
        });
      }
    );

    req.end();
  });
}

async function post(url: string, token: string, data: string) {
  return new Promise<any>((ok, ko) => {
    const req = https.request(
      new URL(url).toString(),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/vnd.api+json",
          "Content-Length": data.length,
          "User-Agent": "HashiCorp/cdktf-cli",
        },
        method: "POST",
      },
      (res) => {
        const data = new Array<Buffer>();
        res.on("data", (chunk) => data.push(chunk));
        res.once("error", (err) => ko(err));
        res.once("end", () => {
          const response = JSON.parse(Buffer.concat(data).toString("utf-8"));

          if (res.statusCode) {
            const statusCode = res.statusCode;
            if (!SUCCESS_STATUS_CODES.includes(statusCode)) {
              const { errors } = response;
              const message = errors
                .map((error: { detail: string }) => error.detail)
                .join(", ");

              return ko(new Error(message));
            }
          }
          return ok(response);
        });
      }
    );

    req.write(data);

    req.end();
  });
}

async function endpointUrl(tfeHostname: string, path: string) {
  const serviceDiscovery = await discoverService(tfeHostname);
  const url = serviceDiscovery["tfe.v2"];
  if (/^https?:/.test(url)) {
    return join(url, path);
  }
  return `https://${join(tfeHostname, url, path)}`;
}

export async function getAccountDetails(tfeHostname: string, token: string) {
  return await get<Account>(
    await endpointUrl(tfeHostname, "/account/details"),
    token
  );
}

export async function createWorkspace(
  tfeHostname: string,
  organizationName: string,
  workspaceName: string,
  token: string
) {
  await post(
    await endpointUrl(
      tfeHostname,
      `/organizations/${organizationName}/workspaces`
    ),
    token,
    JSON.stringify({
      data: {
        attributes: {
          name: workspaceName,
          operations: false,
        },
        type: "workspaces",
      },
    })
  );
}

export async function getOrganizationIds(tfeHostname: string, token: string) {
  const organizations = await get<Organization>(
    await endpointUrl(tfeHostname, "/organizations"),
    token
  );

  return organizations.data.map((organization) => organization.id);
}

export async function isExistingWorkspaceWithName(
  tfeHostname: string,
  organizationName: string,
  workspaceName: string,
  token: string
) {
  const url = await endpointUrl(
    tfeHostname,
    `/organizations/${organizationName}/workspaces`
  );
  const queryParameters = querystring.stringify({
    "search[name]": workspaceName,
  });

  const workspaces = await get<Workspaces>(`${url}?${queryParameters}`, token);

  return (
    workspaces.data.length > 0 &&
    workspaces.data[0].attributes.name === workspaceName
  );
}
