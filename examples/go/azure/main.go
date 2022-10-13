package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/azurermprovider"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/linuxvirtualmachine"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/networkinterface"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/resourcegroup"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/subnet"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/hashicorp/azurerm/virtualnetwork"
	"github.com/hashicorp/terraform-cdk/examples/go/azure/generated/nullmodule"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	//Initialise the provider
	azurermprovider.NewAzurermProvider(stack, jsii.String("azurerm"), &azurermprovider.AzurermProviderConfig{
		Features: &azurermprovider.AzurermProviderFeatures{},
		//Subscription:    jsii.String(""), //Just for an example, login credential is coming from ARM* environment variables
	})

	nm := nullmodule.NewNullmodule(stack, jsii.String("null"), &nullmodule.NullmoduleOptions{
		Trigger: jsii.String("one"),
	})

	//Name evrything as the output of the Naming module
	//Naming module outputs map instead of string literal, see: https://github.com/Azure/terraform-azurerm-naming/issues/64
	/*
		n := naming.NewNaming(stack, jsii.String("resource_naming"), &naming.NamingOptions{
			Prefix:               &[]*string{jsii.String("test")},
			UniqueIncludeNumbers: jsii.Bool(false),
		})
	*/

	//Create a resource group
	rg := resourcegroup.NewResourceGroup(stack, jsii.String("test_rg"), &resourcegroup.ResourceGroupConfig{
		//Name:     n.ResourceGroupOutput(), //GOTO 26
		Name:     jsii.String("test-rg"),
		Location: jsii.String("westeurope"),
	})

	//Create the azurerm Virtual Network with a subnet
	vm_nw := virtualnetwork.NewVirtualNetwork(stack, jsii.String("test_vm_nw"), &virtualnetwork.VirtualNetworkConfig{
		Name:              jsii.String("test-vm-nw"),
		AddressSpace:      &[]*string{jsii.String("10.0.0.0/16")},
		Location:          rg.Location(),
		ResourceGroupName: rg.Name(),
	})

	vm_nw_sn := subnet.NewSubnet(stack, jsii.String("test_vm_nw_sn"), &subnet.SubnetConfig{
		Name:               jsii.String("test-vm-nw-sn"),
		ResourceGroupName:  rg.Name(),
		VirtualNetworkName: vm_nw.Name(),
		AddressPrefixes:    &[]*string{jsii.String("10.0.2.0/24")},
	})

	//Create the test Virtual Machine with its Network Interface
	vm_nic := networkinterface.NewNetworkInterface(stack, jsii.String("test_vm_nic"), &networkinterface.NetworkInterfaceConfig{
		Name:              jsii.String("test-vm-nic"),
		Location:          rg.Location(),
		ResourceGroupName: rg.Name(),

		IpConfiguration: &[]*networkinterface.NetworkInterfaceIpConfiguration{{
			Name:                       jsii.String("internal"),
			SubnetId:                   vm_nw_sn.Id(),
			PrivateIpAddressAllocation: jsii.String("Dynamic"),
		}},
	})

	vm := linuxvirtualmachine.NewLinuxVirtualMachine(stack, jsii.String("test_vm"), &linuxvirtualmachine.LinuxVirtualMachineConfig{
		Name:                jsii.String("test-vm"),
		Location:            rg.Location(),
		ResourceGroupName:   rg.Name(),
		Size:                jsii.String("Standard_F2"),
		AdminUsername:       jsii.String("adminuser"),
		NetworkInterfaceIds: &[]*string{vm_nic.Id()},

		AdminSshKey: &[]*linuxvirtualmachine.LinuxVirtualMachineAdminSshKey{{
			Username:  jsii.String("glados"),
			PublicKey: cdktf.Fn_File(jsii.String("~/.ssh/id_rsa.pub")),
		}},

		OsDisk: &linuxvirtualmachine.LinuxVirtualMachineOsDisk{
			Caching:            jsii.String("ReadWrite"),
			StorageAccountType: jsii.String("Standard_LRS"),
		},

		SourceImageReference: &linuxvirtualmachine.LinuxVirtualMachineSourceImageReference{
			Publisher: jsii.String("Canonical"),
			Offer:     jsii.String("UbuntuServer"),
			Sku:       jsii.String("16.04-LTS"),
			Version:   jsii.String("latest"),
		},
	})

	//Output stuff
	cdktf.NewTerraformOutput(stack, jsii.String("names"), &cdktf.TerraformOutputConfig{
		Value: &[]*string{vm.Name(), rg.Name(), nm.NullResourceIdOutput()},
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "cdktf-azure-go")

	app.Synth()
}
