package main

import (
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func main() {
	app := cdktf.NewApp(nil)

	NewDatasourcesStack(app, "datasources")
	RemoteStateDataSourceStack(app, "datasources-remote-state")
	NewAspectsStack(app, "aspects")
	NewPrefixAspectsStack(app, "aspects-validation")
	NewFunctionsStack(app, "functions")
	NewOperatorsAndFunctionsRawStack(app, "operators-functions-raw")
	NewHclInteropStack(app, "hcl-interop")
	NewProvidersStack(app, "providers")
	NewModulesStack(app, "modules")
	NewCloudBackendStack(app, "backend-cloud")
	NewResourcesStack(app, "resources")
	NewResourcesReferencesStack(app, "resources-references")
	NewVariablesStack(app, "variables")
	NewTokensStack(app, "tokens", "myVpc")
	NewIteratorsStack(app, "iterators")

	app.Synth()

	// examples that include the App() & Synth() bits
	SynthAssets()
	SynthConstructs()
	SynthConstructsScope()
	SynthLocalBackend()
	SynthOutputs()
	SynthOutputsUsage()
	SynthRemoteState()
	SynthSingleStack()
	SynthMultiStack()
	SynthCrossStackReference()
	SynthStackDependencies()
}
