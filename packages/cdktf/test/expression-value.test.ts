import { valueFromExpression } from "../lib/expression-value";
import { join } from "path";
import { readFileSync } from "fs";
import * as tex from "../lib/expression-value/helpers";

const expressions = [
  {
    name: "cgw_arns",
    ast: JSON.parse(
      '{"children":[{"children":[],"type":"scopeTraversal","meta":{"fullAccessor":"aws_customer_gateway.this","traversal":[{"type":"nameTraversal","segment":"aws_customer_gateway","range":{"start":{"line":0,"column":16,"byte":16},"end":{"line":0,"column":36,"byte":36}}},{"type":"nameTraversal","segment":"this","range":{"start":{"line":0,"column":36,"byte":36},"end":{"line":0,"column":41,"byte":41}}}],"value":"aws_customer_gateway.this"},"range":{"start":{"line":0,"column":16,"byte":16},"end":{"line":0,"column":41,"byte":41}}},{"children":[],"type":"scopeTraversal","meta":{"fullAccessor":"v.arn","traversal":[{"type":"nameTraversal","segment":"v","range":{"start":{"line":0,"column":44,"byte":44},"end":{"line":0,"column":45,"byte":45}}},{"type":"nameTraversal","segment":"arn","range":{"start":{"line":0,"column":45,"byte":45},"end":{"line":0,"column":49,"byte":49}}}],"value":"v.arn"},"range":{"start":{"line":0,"column":44,"byte":44},"end":{"line":0,"column":49,"byte":49}}}],"type":"for","meta":{"closeRange":{"start":{"line":0,"column":49,"byte":49},"end":{"line":0,"column":50,"byte":50}},"closeRangeValue":"]","collectionExpression":"aws_customer_gateway.this","groupedValue":false,"keyVar":"k","openRange":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":4,"byte":4}},"openRangeValue":"[","valVar":"v","value":"[for k, v in aws_customer_gateway.this : v.arn]","valueExpression":"v.arn"},"range":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":4,"byte":4}}}'
    ),
  },
  {
    name: "private_subnets",
    ast: JSON.parse(
      '{"children":[{"children":[],"type":"scopeTraversal","meta":{"fullAccessor":"aws_subnet.private","traversal":[{"type":"nameTraversal","segment":"aws_subnet","range":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":13,"byte":13}}},{"type":"nameTraversal","segment":"private","range":{"start":{"line":0,"column":13,"byte":13},"end":{"line":0,"column":21,"byte":21}}}],"value":"aws_subnet.private"},"range":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":21,"byte":21}}},{"children":[{"children":[],"type":"","range":{"start":{"line":0,"column":21,"byte":21},"end":{"line":0,"column":24,"byte":24}}}],"type":"relativeTraversal","meta":{"fullAccessor":"id","sourceExpression":"[*]","traversal":[{"type":"nameTraversal","segment":"id","range":{"start":{"line":0,"column":24,"byte":24},"end":{"line":0,"column":27,"byte":27}}}],"value":"[*].id"},"range":{"start":{"line":0,"column":21,"byte":21},"end":{"line":0,"column":27,"byte":27}}}],"type":"splat","meta":{"anonSymbolExpression":"[*]","eachExpression":"[*].id","markerRange":{"start":{"line":0,"column":21,"byte":21},"end":{"line":0,"column":24,"byte":24}},"sourceExpression":"aws_subnet.private","value":"aws_subnet.private[*].id"},"range":{"start":{"line":0,"column":21,"byte":21},"end":{"line":0,"column":24,"byte":24}}}'
    ),
  },
  {
    name: "private_subnets_cidr_blocks",
    ast: JSON.parse(
      '{"children":[{"children":[{"children":[],"type":"scopeTraversal","meta":{"fullAccessor":"aws_subnet.private","traversal":[{"type":"nameTraversal","segment":"aws_subnet","range":{"start":{"line":0,"column":11,"byte":11},"end":{"line":0,"column":21,"byte":21}}},{"type":"nameTraversal","segment":"private","range":{"start":{"line":0,"column":21,"byte":21},"end":{"line":0,"column":29,"byte":29}}}],"value":"aws_subnet.private"},"range":{"start":{"line":0,"column":11,"byte":11},"end":{"line":0,"column":29,"byte":29}}},{"children":[{"children":[],"type":"","range":{"start":{"line":0,"column":29,"byte":29},"end":{"line":0,"column":32,"byte":32}}}],"type":"relativeTraversal","meta":{"fullAccessor":"cidr_block","sourceExpression":"[*]","traversal":[{"type":"nameTraversal","segment":"cidr_block","range":{"start":{"line":0,"column":32,"byte":32},"end":{"line":0,"column":43,"byte":43}}}],"value":"[*].cidr_block"},"range":{"start":{"line":0,"column":29,"byte":29},"end":{"line":0,"column":43,"byte":43}}}],"type":"splat","meta":{"anonSymbolExpression":"[*]","eachExpression":"[*].cidr_block","markerRange":{"start":{"line":0,"column":29,"byte":29},"end":{"line":0,"column":32,"byte":32}},"sourceExpression":"aws_subnet.private","value":"aws_subnet.private[*].cidr_block"},"range":{"start":{"line":0,"column":29,"byte":29},"end":{"line":0,"column":32,"byte":32}}}],"type":"function","meta":{"argsRanges":[{"start":{"line":0,"column":11,"byte":11},"end":{"line":0,"column":43,"byte":43}}],"closeParenRange":{"start":{"line":0,"column":43,"byte":43},"end":{"line":0,"column":44,"byte":44}},"expandedFinalArgument":false,"name":"compact","nameRange":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":10,"byte":10}},"openParenRange":{"start":{"line":0,"column":10,"byte":10},"end":{"line":0,"column":11,"byte":11}},"value":"compact(aws_subnet.private[*].cidr_block)"},"range":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":11,"byte":11}}}'
    ),
  },
  {
    name: "vpc_owner_id",
    ast: JSON.parse(
      '{"children":[{"children":[],"type":"scopeTraversal","meta":{"fullAccessor":"aws_vpc.this[0].owner_id","traversal":[{"type":"nameTraversal","segment":"aws_vpc","range":{"start":{"line":0,"column":7,"byte":7},"end":{"line":0,"column":14,"byte":14}}},{"type":"nameTraversal","segment":"this","range":{"start":{"line":0,"column":14,"byte":14},"end":{"line":0,"column":19,"byte":19}}},{"type":"indexTraversal","segment":"0","range":{"start":{"line":0,"column":19,"byte":19},"end":{"line":0,"column":22,"byte":22}}},{"type":"nameTraversal","segment":"owner_id","range":{"start":{"line":0,"column":22,"byte":22},"end":{"line":0,"column":31,"byte":31}}}],"value":"aws_vpc.this[0].owner_id"},"range":{"start":{"line":0,"column":7,"byte":7},"end":{"line":0,"column":31,"byte":31}}},{"children":[],"type":"literalValue","meta":{"type":"dynamic","value":"null"},"range":{"start":{"line":0,"column":33,"byte":33},"end":{"line":0,"column":37,"byte":37}}}],"type":"function","meta":{"argsRanges":[{"start":{"line":0,"column":7,"byte":7},"end":{"line":0,"column":31,"byte":31}},{"start":{"line":0,"column":33,"byte":33},"end":{"line":0,"column":37,"byte":37}}],"closeParenRange":{"start":{"line":0,"column":37,"byte":37},"end":{"line":0,"column":38,"byte":38}},"expandedFinalArgument":false,"name":"try","nameRange":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":6,"byte":6}},"openParenRange":{"start":{"line":0,"column":6,"byte":6},"end":{"line":0,"column":7,"byte":7}},"value":"try(aws_vpc.this[0].owner_id, null)"},"range":{"start":{"line":0,"column":3,"byte":3},"end":{"line":0,"column":7,"byte":7}}}'
    ),
  },
];

describe(__filename, () => {
  let state: any = {};

  beforeAll(() => {
    state = JSON.parse(
      readFileSync(join(__dirname, "fixtures", "state.json"), "utf8")
    );
  });

  it("works with for loops with a missing collection", () => {
    const value = valueFromExpression(
      expressions[0].ast as tex.ExpressionType,
      state.resources
    );

    expect(value).toMatchInlineSnapshot(`[]`);
  });

  it("works with splats", () => {
    const value = valueFromExpression(
      expressions[1].ast as tex.ExpressionType,
      state.resources
    );

    // console.log(JSON.stringify(expressions[1].ast, null, 2));

    expect(value).toMatchInlineSnapshot(`
      [
        "subnet-0ec4fe0cc3c050438",
        "subnet-069ce4e01458f3f4a",
        "subnet-0a3f51a3c4247ab95",
      ]
    `);
  });

  it("works with functions and splats", () => {
    const value = valueFromExpression(
      expressions[2].ast as tex.ExpressionType,
      state.resources
    );

    expect(value).toMatchInlineSnapshot(`""`);
  });

  it.only("works with indexes", () => {
    const value = valueFromExpression(
      expressions[3].ast as tex.ExpressionType,
      state.resources
    );

    console.log(JSON.stringify(expressions[3].ast, null, 2));

    expect(value).toMatchInlineSnapshot(`""`);
  });
});
