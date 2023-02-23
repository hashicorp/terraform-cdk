import { convertToTypescript } from "../lib";
import schema from "./__fixtures__/schemas/aws-subnet-eks-node-group";

describe("generate typescript", () => {
  it("generates a simple templated expression", async () => {
    const input = ` 
resource "aws_subnet" "changeme_spot_and_fargate_subnet_private" {
  vpc_id            = "id"
  cidr_block        = ""
  availability_zone = "eu-west-1"
  count             = 3
}

resource "aws_eks_node_group" "foo" {
  subnet_ids      = aws_subnet.changeme_spot_and_fargate_subnet_private.*.id
}
        `;

    const schemaJson = JSON.parse(schema);
    const { code } = await convertToTypescript(input, schemaJson);
    expect(code).toMatchSnapshot();
  });
});
