import { App } from "@aws-cdk/core";
import * as fs from 'fs';
import * as path from 'path';
import { TerraformResource, TerraformStack } from "../lib";
import { TerraformModule } from "../lib/terraform-module";

test('stack synthesis merges all elements into a single output', () => {
  const app = new App();
  const stack = new TerraformStack(app, 'MyStack');

  new MyResource(stack, 'Resource1', {
    type: 'aws_bucket',
    provider: 'my_provider'
  });

  new MyResource(stack, 'Resource2', {
    type: 'aws_topic',
  });

  new MyModule(stack, 'EksModule', {
    source: 'terraform-aws-modules/eks/aws',
    version: '7.0.1',
  });

  expect(synth(stack)).toMatchSnapshot();
});

class MyModule extends TerraformModule {
  protected synthesizeAttributes() {
    return {
      cluster_name: 'my_cluster_name'
    };
  }
}

class MyResource extends TerraformResource {
  protected synthesizeAttributes(): { [name: string]: any; } {
    return {
      foo: this.node.uniqueId,
      prop1: 'bar1',
      prop2: 1234
    };
  }
}

function synth(stack: TerraformStack) {
  const app = stack.node.root as App;
  if (!(app instanceof App)) {
    throw new Error(`root must be an App`);
  }
  const assembly = app.synth();
  return JSON.parse(fs.readFileSync(path.join(assembly.directory, stack.artifactFile), 'utf-8'));
}