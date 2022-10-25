// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import https = require("https");
import { format } from "url";

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

export interface Organization {
  data: OrganizationData[];
}

async function get(url: string, token: string) {
  return new Promise<any>((ok, ko) => {
    const req = https.request(
      format(url),
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
          return ok(response);
        });
      }
    );

    req.end();
  });
}

async function post(url: string, token: string, data: string) {
  return new Promise<any>((ok, ko) => {
    const req = https.request(
      format(url),
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
  return (await get(
    `https://${tfeHostname}/api/v2//account/details`,
    token
  )) as Account;
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

export async function getOrganizationNames(tfeHostname: string, token: string) {
  return (await get(
    `https://${tfeHostname}/api/v2//organizations`,
    token
  )) as Organization;
}
