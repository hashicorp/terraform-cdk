package main

import (
	"os"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"

	// Google provider.
	"github.com/hashicorp/cdktf-provider-google-go/google"
)

// See https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service#containers
type Container struct {
	Image string `json:"image"`
}

type Binding struct {
	Role    string   `json:"role"`
	Members []string `json:"members"`
}

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// Set your project details.
	region := "europe-west1"
	projectID := "your-google-project-id" // e.g. plasma-goblin-123567

	// Hello World image.
	imageName := "gcr.io/cloudrun/hello"

	// Authenticate against Google.
	credentials, err := os.ReadFile("cdktf-example.json")
	if err != nil {
		panic("failed to load credentials: " + err.Error())
	}
	google.NewGoogleProvider(stack, jsii.String("GoogleAuth"), &google.GoogleProviderConfig{
		Region:      &region,
		Zone:        jsii.String(region + "-c"),
		Project:     &projectID,
		Credentials: jsii.String(string(credentials)),
	})

	crs := google.NewCloudRunService(stack, jsii.String("cloudRun"), &google.CloudRunServiceConfig{
		Location: &region,
		Name:     jsii.String("gcpcdktfcloudrunsvc2020"),
		Template: &google.CloudRunServiceTemplate{
			Spec: &google.CloudRunServiceTemplateSpec{
				// The "Containers" parameter type is just an interface{}.
				// So we have to provide our own type based on the documentation at:
				// https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service#containers
				Containers: []Container{
					{
						Image: imageName,
					},
				},
			},
		},
	})

	policyData := google.NewDataGoogleIamPolicy(stack, jsii.String("datanoauth"), &google.DataGoogleIamPolicyConfig{
		Binding: []Binding{
			{
				Role:    "roles/run.invoker",
				Members: []string{"allUsers"},
			},
		},
	})

	google.NewCloudRunServiceIamPolicy(stack, jsii.String("runsvciampolicy"), &google.CloudRunServiceIamPolicyConfig{
		Location:   &region,
		Project:    crs.Project(),
		Service:    crs.Name(),
		PolicyData: policyData.PolicyData(),
	})

	cdktf.NewTerraformOutput(stack, jsii.String("cdktfcloudrunUrl"), &cdktf.TerraformOutputConfig{
		Value: *crs.Fqn(),
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)
	NewMyStack(app, "learn-cdktf-docker")
	app.Synth()
}
