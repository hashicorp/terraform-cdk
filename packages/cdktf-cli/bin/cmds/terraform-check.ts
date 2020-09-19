import { Terraform } from './ui/models/terraform'

export const terraformCheck = async (): Promise<void> => {
  try {
    const terraform = new Terraform('./')
    const terraformVersion = await terraform.version()

    if (terraformVersion < SUPPORTED) {
      const errorMessage = `Exiting due to unsupported Terraform version [${terraformVersion}]. 
        Only Terraform versions [${SUPPORTED}] and up are supported,
        please upgrade Terraform version)`;
        console.error(errorMessage)
        process.exit(1)
    }

  } catch(e) {
    console.error(e.message)
    process.exit(1)
  }
}
