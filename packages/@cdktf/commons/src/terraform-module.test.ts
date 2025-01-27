/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { isRegistryModule } from "./terraform-module";

describe("terraform-module", () => {
  describe.each`
    source                                                        | expected
    ${"hashicorp/consul/aws"}                                     | ${true}
    ${"hashicorp/consul/aws//foo"}                                | ${false}
    ${"./consul"}                                                 | ${false}
    ${"git@github.com:hashicorp/example.git"}                     | ${false}
    ${"github.com/hashicorp/example"}                             | ${false}
    ${"github.com/hashicorp/terraform-cidr-subnets"}              | ${false}
    ${"bitbucket.org/hashicorp/terraform-consul-aws"}             | ${false}
    ${"foo/var/baz/qux"}                                          | ${false}
    ${"foo.com/var/baz"}                                          | ${true}
    ${".foo.com/var/baz"}                                         | ${false}
    ${"f-o-o.com/var/baz"}                                        | ${true}
    ${"foo.com/var/baz/canz"}                                     | ${true}
    ${"example.com/awesomecorp/network/happycloud//examples/foo"} | ${false}
    ${"www.googleapis.com/storage/v1/BUCKET_NAME/PATH_TO_MODULE"} | ${false}
  `("isRegistryModule($source)", ({ source, expected }) => {
    it(`expects ${expected}`, () => {
      expect(isRegistryModule(source)).toBe(expected);
    });
  });
});
