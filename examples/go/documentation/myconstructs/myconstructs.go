package myconstructs

import (
	"github.com/aws/constructs-go/constructs/v10"
)

type KubernetesWebAppDeployment struct {
	// Fill in whatever you want to expose to the outside
}

func NewKubernetesWebAppDeployment(scope constructs.Construct, id string, props map[string]interface{}) *KubernetesWebAppDeployment {
	// Content is left to the readers imagination
	return &KubernetesWebAppDeployment{}
}
