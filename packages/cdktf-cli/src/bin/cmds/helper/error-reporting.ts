/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { confirm } from "@inquirer/prompts";

export async function askForCrashReportingConsent() {
  return await confirm({
    message:
      "Do you want to send crash reports to the CDKTF team? Refer to https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file#enable-crash-reporting-for-the-cli for more information",
    default: true,
  });
}
