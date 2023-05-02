import * as inquirer from "inquirer";

export async function askForCrashReportingConsent() {
  const answer: { reportCrash: boolean } = await inquirer.prompt({
    name: "reportCrash",
    message:
      "Do you want to send crash reports to the CDKTF team? Refer to https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file#enable-crash-reporting-for-the-cli for more information",
    type: "confirm",
    default: true,
  });

  return answer.reportCrash;
}
