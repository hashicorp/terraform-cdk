import { Terraform } from './ui/models/terraform'
import * as semver from 'semver';

const MIN_SUPPORTED_VERSION = '0.12.0'

export const terraformCheck = async (): Promise<void> => {
  try {
    const terraform: Terraform = new Terraform('./')

    // string in format of 'Terraform v0.13.3'
    const terraformVersion = await terraform.version()
    const cleanTerraformVersion = semver.clean(terraformVersion.substring(terraformVersion.indexOf('v')))

    if (cleanTerraformVersion && semver.lt(cleanTerraformVersion, MIN_SUPPORTED_VERSION)) {
      const errorMessage = `Error: unsupported Terraform version [${cleanTerraformVersion}] - please upgrade to >=${MIN_SUPPORTED_VERSION}`
        console.error(errorMessage)
        process.exit(1)
    }
  } catch(e) {
    console.error(e.message)
    process.exit(1)
  }
}
