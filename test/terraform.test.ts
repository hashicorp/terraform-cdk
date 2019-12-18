import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Terraform = require('../lib/terraform-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Terraform.TerraformStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});