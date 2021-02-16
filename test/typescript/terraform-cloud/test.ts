/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 * @group terraform-cloud
 */

import { TestDriver } from '../../test-helper'
import { TerraformCloud } from '@skorfmann/terraform-cloud';
const { TERRAFORM_CLOUD_TOKEN, GITHUB_RUN_NUMBER, TERRAFORM_VERSION } = process.env;
const withAuth = TERRAFORM_CLOUD_TOKEN ? it : it.skip

if (withAuth == it.skip) {
  console.log('TERRAFORM_CLOUD_TOKEN is undefined, skipping authed tests')
}

describe("full integration test", () => {
  let driver: TestDriver;

  beforeAll(() => {
    driver = new TestDriver(__dirname)
    driver.setupTypescriptProject()
  });

  withAuth("deploy in Terraform Cloud", async () => {
    const orgName = 'cdktf'
    const workspaceName = `${GITHUB_RUN_NUMBER}-${Date.now()}`
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

    expect(driver.deploy()).toMatchInlineSnapshot(``)

    await client.Workspaces.deleteByName(orgName, workspaceName)
  })
})