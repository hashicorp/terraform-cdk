#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkExampleAppStack } from '../lib/cdk-example-app-stack';

const app = new cdk.App();
new CdkExampleAppStack(app, 'CdkExampleAppStack');
