#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { TerraformStack } from '../lib/terraform-stack';

const app = new cdk.App();
new TerraformStack(app, 'TerraformStack');
