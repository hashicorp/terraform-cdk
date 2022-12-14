// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import https = require("https");
import querystring from "querystring";

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

export async function getAccountDetails(tfeHostname: string, token: string) {
  return await get<Account>(
    `https://${tfeHostname}/api/v2//account/details`,
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
    `https://${tfeHostname}/api/v2//organizations/${organizationName}/workspaces`,
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
    `https://${tfeHostname}/api/v2//organizations`,
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
  const queryParameters = querystring.stringify({
    "search[name]": workspaceName,
  });
  const url = `https://${tfeHostname}/api/v2//organizations/${organizationName}/workspaces?${queryParameters}`;

  const workspaces = await get<Workspaces>(url, token);

  return (
    workspaces.data.length > 0 &&
    workspaces.data[0].attributes.name === workspaceName
  );
}
