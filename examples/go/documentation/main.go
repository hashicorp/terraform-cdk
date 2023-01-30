package main

import (
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func main() {
	app := cdktf.NewApp(nil)

	NewDatasourcesStack(app, "datasources")
	NewAspectsStack(app, "aspects")
	NewPrefixAspectsStack(app, "aspects-validation")

	app.Synth()

	// examples that include the App() & Synth() bits
	SynthAssets()
	SynthConstructs()
}
