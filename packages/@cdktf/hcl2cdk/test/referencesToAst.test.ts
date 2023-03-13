/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import {
  extractReferencesFromExpression,
  referencesToAst,
} from "../lib/expressions";
import { Scope } from "../lib/types";
import generate from "@babel/generator";

describe("references resolution", () => {
  it.each([
    [
      "property with array index",
      "${data.aws_availability_zones.changeme_az_list_ebs_snapshot.names[0]}",
      "data.aws_availability_zones.changeme_az_list_ebs_snapshot",
      "`\\${${dataAwsAvailabilityZonesChangemeAzListEbsSnapshot.fqn}.names[0]}`",
      "",
    ],
    [
      "keyed resource",
      '${data.aws_lb.r1["a"].dns_name}',
      "data.aws_lb.r1",
      '`\\${${dataAwsLbR1.fqn}["a"].dns_name}`',
      "",
    ],
    [
      "indexed resource",
      "${data.aws_lb.r1[0].dns_name}",
      "data.aws_lb.r1",
      "`\\${${dataAwsLbR1.fqn}[0].dns_name}`",
      "",
    ],
    [
      "sub property",
      "${data.aws_lb.r1.dns_name}/o/v1/multi/get/m/content",
      "data.aws_lb.r1",
      "`\\${${dataAwsLbR1.dnsName}}/o/v1/multi/get/m/content`",
      "",
    ],
    [
      "resource property",
      "${aws_iam_group.my_group.name}-property",
      "aws_iam_group.my_group",
      "`\\${${awsIamGroupMyGroup.name}}-property`",
      "",
    ],
    [
      "resource property with splat",
      '"${aws_subnet.changeme_spot_and_fargate_subnet_private.*.id}"',
      "aws_subnet.changeme_spot_and_fargate_subnet_private",
      '`"\\${${awsSubnetChangemeSpotAndFargateSubnetPrivate.fqn}.*.id}"`',
      "",
    ],
  ])(`should resolve %s`, async (_, input, variables, output, schema) => {
    // @ts-ignore
    const scope: Scope = {
      providerSchema: (schema && JSON.parse(schema)) || {},
      providerGenerator: {},
      constructs: new Set<string>(),
      variables: {},
    };

    const refs = await extractReferencesFromExpression(input, [variables], []);
    const ast = await referencesToAst(scope, input, refs, []);
    const out = generate(ast).code;
    expect(out).toEqual(output);
  });
});
