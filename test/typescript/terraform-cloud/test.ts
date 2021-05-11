/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 * @group terraform-cloud
 */

import { TestDriver } from '../../test-helper'
import { TerraformCloud } from '@skorfmann/terraform-cloud';
import * as crypto from 'crypto';
const { TERRAFORM_CLOUD_TOKEN, GITHUB_RUN_NUMBER, TERRAFORM_VERSION } = process.env;
const withAuth = TERRAFORM_CLOUD_TOKEN ? it : it.skip

if (withAuth == it.skip) {
  console.log('TERRAFORM_CLOUD_TOKEN is undefined, skipping authed tests')
}

describe("full integration test", () => {
  let driver: TestDriver;
  let workspaceName: string;
  const orgName = 'cdktf'

  beforeAll(async () => {
    workspaceName = `${GITHUB_RUN_NUMBER}-${crypto.randomBytes(10).toString('hex')}`
    driver = new TestDriver(__dirname, {
      TERRAFORM_CLOUD_WORKSPACE_NAME: workspaceName,
      TERRAFORM_CLOUD_ORGANIZATION: orgName
    });
    await driver.setupTypescriptProject()
    driver.copyFolders("fixtures");
  });

  withAuth("deploy in Terraform Cloud", async () => {
    const client = new TerraformCloud(TERRAFORM_CLOUD_TOKEN)

    await client.Workspaces.create(orgName, {
      data: {
        attributes: {
          name: workspaceName,
          executionMode: 'remote',
          terraformVersion: TERRAFORM_VERSION
        },
        type: 'workspaces'
      }
    })

    expect(driver.deploy()).toMatchSnapshot()
    await client.Workspaces.deleteByName(orgName, workspaceName)
  })
})