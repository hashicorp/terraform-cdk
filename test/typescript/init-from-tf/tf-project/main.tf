# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

module "test" {
    source = "./modules/test"
}

output "module_value" {
    value = module.test.foo
}