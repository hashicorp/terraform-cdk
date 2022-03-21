import { Construct } from "constructs";
import { App, Fn, TerraformStack, Testing, TerraformLocal } from "cdktf";
import {
  RandomProvider,
  Integer as NumericResource,
  Password as StringResource,
  Shuffle as ListResource,
} from "./.gen/providers/random";
import { LocalProvider, File } from "./.gen/providers/local";

function writeToFile(scope: Construct, name: string, value: any) {
  const filename = `../../../${name}`;
  if (Array.isArray(value)) {
    new File(scope, name, {
      filename,
      content: Fn.jsonencode(value),
    });
  } else {
    new File(scope, name, {
      filename,
      content: value,
    });
  }
}

export class SourceStack extends TerraformStack {
  public numericResource: NumericResource;
  public stringResource: StringResource;
  public listResource: ListResource;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    new RandomProvider(this, "random");
    new LocalProvider(this, "local");

    this.numericResource = new NumericResource(this, "int", {
      min: 0,
      max: 6,
    });

    this.stringResource = new StringResource(this, "str", {
      length: 32,
    });

    this.listResource = new ListResource(this, "list", {
      input: ["a", "b", "c", "d", "e", "f"],
    });

    writeToFile(this, `${id}Num`, this.numericResource.result);
    writeToFile(this, `${id}Str`, this.stringResource.result);
    writeToFile(this, `${id}List`, this.listResource.result);
  }
}

export class ConsumerStack extends TerraformStack {
  public numericResource?: NumericResource;
  public stringResource?: StringResource;
  public listResource?: ListResource;

  public numericValue?: number;
  public stringValue?: string;
  public listValue?: any[];

  constructor(
    scope: Construct,
    id: string,
    inputs: {
      useLocalsForAllValues?: boolean;
      numericResource?: NumericResource;
      stringResource?: StringResource;
      listResource?: ListResource;
      numericValue?: number;
      stringValue?: string;
      listValue?: string[];
    }
  ) {
    super(scope, id);

    new RandomProvider(this, "random");
    new LocalProvider(this, "local");
    this.numericResource = inputs.numericResource;
    this.numericValue = inputs.numericValue;

    this.stringResource = inputs.stringResource;
    this.stringValue = inputs.stringValue;

    this.listResource = inputs.listResource;
    this.listValue = inputs.listValue;

    const num = inputs.numericResource?.result ?? inputs.numericValue;
    if (num) {
      writeToFile(this, `${id}Num`, num);
    }

    const str = inputs.stringResource?.result ?? inputs.stringValue;
    if (str) {
      writeToFile(this, `${id}Str`, str);
    }

    const list = inputs.listResource?.result ?? inputs.listValue;
    if (list) {
      writeToFile(this, `${id}List`, list);
    }

    if (inputs.useLocalsForAllValues) {
      this.numericValue = new TerraformLocal(
        this,
        "local_numeric_value",
        inputs.numericValue
      ).expression;

      this.stringValue = new TerraformLocal(
        this,
        "local_string_value",
        inputs.stringValue
      ).expression;

      this.listValue = new TerraformLocal(
        this,
        "local_list_value",
        inputs.listValue
      ).expression;
    }
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
const src = new SourceStack(app, "origin");
const passthrough = new ConsumerStack(app, "passthrough", {
  numericResource: src.numericResource,
  stringResource: src.stringResource,
  listResource: src.listResource,
});

new ConsumerStack(app, "sink", {
  numericResource: passthrough.numericResource,
  stringResource: passthrough.stringResource,
  listResource: src.listResource,
});

const fns = new ConsumerStack(app, "fns", {
  // From one stack
  numericValue: Fn.sum([
    src.numericResource.result,
    src.numericResource.result,
  ]),
  // From two stacks
  stringValue: Fn.join(",", [
    src.stringResource.result,
    passthrough.stringResource!.result,
  ]),
});

new ConsumerStack(app, "functionOutput", {
  // From function output
  numericValue: fns.numericValue,
  stringValue: fns.stringValue,
});

const pinnedFns = new ConsumerStack(app, "pinnedFns", {
  useLocalsForAllValues: true,
  // From one stack
  numericValue: Fn.sum([
    src.numericResource.result,
    src.numericResource.result,
  ]),
  // From two stacks
  stringValue: Fn.join(",", [
    src.stringResource.result,
    passthrough.stringResource!.result,
  ]),
});
new ConsumerStack(app, "functionOutputPinned", {
  // From pinned function output
  numericValue: pinnedFns.numericValue,
  stringValue: pinnedFns.stringValue,
});

// Check for Deadly embrace scenario: https://github.com/aws/aws-cdk/pull/12778
const secondOrigin = new SourceStack(app, "secondOrigin");
new ConsumerStack(app, "switchedStack", {
  numericResource:
    process.env.SWITCH_STACK === "on"
      ? secondOrigin.numericResource
      : undefined,
});

app.synth();
