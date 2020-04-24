import { Node } from "constructs";

import { TerraformResource, TerraformStack, App, Testing } from "cdktf/lib";
import { TerraformModule } from "cdktf/lib/terraform-module";

test('stack synthesis merges all elements into a single output', () => {
  const app = new App();
  const stack = new TerraformStack(app, 'MyStack');

  new MyResource(stack, 'Resource1', {
    type: 'aws_bucket',
    provider: 'my_provider'
  });

  new MyResource(stack, 'Resource2', {
    type: 'aws_topic',
    escapeHatch: {
      "//": "this is a comment",
      prop1: "overwritten"
    }
  });

  new MyModule(stack, 'EksModule', {
    source: 'terraform-aws-modules/eks/aws',
    version: '7.0.1',
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

class MyModule extends TerraformModule {
  protected synthesizeAttributes() {
    return {
      //eslint-disable-next-line @typescript-eslint/camelcase
      cluster_name: 'my_cluster_name'
    };
  }
}

class MyResource extends TerraformResource {
  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      foo: Node.of(this).uniqueId,
      prop1: 'bar1',
      prop2: 1234,
    };
  }
}
