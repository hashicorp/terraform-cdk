// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package myconstructs

import (
	"github.com/aws/constructs-go/constructs/v10"
)

type DockerBackendConfig struct {
	VPCId       string
	DockerImage string
}

type DockerBackend struct {
}

func NewDockerBackend(scope constructs.Construct, id string, config DockerBackendConfig) *DockerBackend {
	// Content is left to the readers imagination
	return &DockerBackend{}
}
