// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package myconstructs

import (
	"github.com/aws/constructs-go/constructs/v10"
)

type VPC struct {
	Id string
}

func NewVPC(scope constructs.Construct, id string) *VPC {
	// Content is left to the readers imagination
	return &VPC{
		Id: "dummy",
	}
}
