import { Node } from "constructs";

import { TerraformResource, TerraformStack, App, Testing, TerraformOutput } from "cdktf/lib";
import { TerraformModule } from "cdktf/lib/terraform-module";

test('stack synthesis merges all elements into a single output', () => {
  const app = new App();
  const stack = new TerraformStack(app, 'MyStack');

  new MyResource(stack, 'Resource1', {
    terraformResourceType: 'aws_bucket'
  });

  const overrideResource = new MyResource(stack, 'Resource2', {
    terraformResourceType: 'aws_topic',
  })
  overrideResource.addOverride('//', 'this is a comment');
  overrideResource.addOverride('prop2', undefined);
  overrideResource.addOverride('prop3.name', 'test');
  overrideResource.addOverride('provisioner', [{
    'local-exec': {
      command: "echo 'Hello World' >example.txt"
    }
  }]);

  const eks = new MyModule(stack, 'EksModule', {
    source: 'terraform-aws-modules/eks/aws',
    version: '7.0.1',
  });

  new TerraformOutput(stack, "eks_version", {
    value: eks.version
  })

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
      prop3: {
        name: 'should be overwritten in resource 2',
        value: 5678
      }
    };
  }
}
