import nock from "nock";
import * as terraformCloudClient from "../../../bin/cmds/helper/terraform-cloud-client";

describe("terraform cloud client", () => {
  beforeEach(() => {
    nock.cleanAll();
    terraformCloudClient.resetServiceDiscoveryCache();
  });

  it("can discover the service", async () => {
    const discoveryMock = nock("https://app.terraform.io")
      .get("/.well-known/terraform.json")
      .reply(200, {
        "tfe.v2": "/api/v2/",
      });
    const orgIdMock = nock("https://app.terraform.io")
      .get("/api/v2/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(discoveryMock.isDone()).toBeTruthy();
    expect(orgIdMock.isDone()).toBeTruthy();
  });

  it("doesn't call service discovery twice", async () => {
    const discoveryMock = nock("https://app.terraform.io")
      .get("/.well-known/terraform.json")
      .reply(200, {
        "tfe.v2": "/api/v2/",
      });
    const orgIdMock = nock("https://app.terraform.io")
      .get("/api/v2/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(discoveryMock.isDone()).toBeTruthy();
    expect(orgIdMock.isDone()).toBeTruthy();
    const orgIdMock2 = nock("https://app.terraform.io")
      .get("/api/v2/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    // If a request is made to the service discovery endpoint, nock will complain because
    // it doesn't have a mock for it. Nock resets each endpoint after a single use unless `persist` is called.
    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(orgIdMock2.isDone()).toBeTruthy();
  });

  it("requests on a different endpoint", async () => {
    const discoveryMock = nock("https://app.terraform.io")
      .get("/.well-known/terraform.json")
      .reply(200, {
        "tfe.v2": "/my-api/v2.1/",
      });
    const customOrgIdMock = nock("https://app.terraform.io")
      .get("/my-api/v2.1/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });
    const orgIdMock = nock("https://app.terraform.io")
      .get("/my-api/v2.1//organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(discoveryMock.isDone()).toBeTruthy();
    expect(customOrgIdMock.isDone()).toBeTruthy();
    expect(orgIdMock.isDone()).toBeFalsy();
  });

  it("can handle absolute paths", async () => {
    const discoveryMock = nock("https://app.terraform.io")
      .get("/.well-known/terraform.json")
      .reply(200, {
        "tfe.v2": "https://app.terraform.io/my-api/v2.1/",
      });
    const customOrgIdMock = nock("https://app.terraform.io")
      .get("/my-api/v2.1/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(discoveryMock.isDone()).toBeTruthy();
    expect(customOrgIdMock.isDone()).toBeTruthy();
  });

  it("can handle paths without trailing slashes", async () => {
    const discoveryMock = nock("https://app.terraform.io")
      .get("/.well-known/terraform.json")
      .reply(200, {
        "tfe.v2": "my-api/v2.1",
      });
    const customOrgIdMock = nock("https://app.terraform.io")
      .get("/my-api/v2.1/organizations")
      .reply(200, {
        data: [
          {
            id: "org-abc123",
            type: "organizations",
            attributes: {
              name: "my-org",
              email: "",
            },
          },
        ],
      });

    await terraformCloudClient.getOrganizationIds("app.terraform.io", "token");
    expect(discoveryMock.isDone()).toBeTruthy();
    expect(customOrgIdMock.isDone()).toBeTruthy();
  });
});
