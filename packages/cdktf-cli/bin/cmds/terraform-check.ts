import { Terraform } from './ui/models/terraform'

export const terraformCheck = async (): Promise<void> => {
  try {
    const terraform = new Terraform('./')
    await terraform.version()
  } catch(e) {
    console.error(e.message)
    process.exit(1)
  }
}
