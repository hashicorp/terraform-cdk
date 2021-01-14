import { TerraformCli } from './ui/models/terraform-cli'
import * as semver from 'semver';

const MIN_SUPPORTED_VERSION = '0.12.0'
const VERSION_REGEXP = /Terraform v\d+.\d+.\d+/

export const terraformCheck = async (): Promise<void> => {
  try {
    const terraform = new TerraformCli('./')

    const terraformVersion = await terraform.version()
    const terraformVersionMatches = terraformVersion.match(VERSION_REGEXP)

    if ( terraformVersionMatches !== null) {

      // Should always be the first match found in the string
      const cleanTerraformVersion = semver.clean(terraformVersionMatches[0].substring(terraformVersionMatches[0].indexOf('v')))

      if (cleanTerraformVersion && semver.lt(cleanTerraformVersion, MIN_SUPPORTED_VERSION)) {
        const errorMessage = `Error: unsupported Terraform version [${cleanTerraformVersion}] - please upgrade to >=${MIN_SUPPORTED_VERSION}`
          console.error(errorMessage)
          process.exit(1)
      }
    }
  } catch(e) {
    console.error(e.message)
    process.exit(1)
  }
}
