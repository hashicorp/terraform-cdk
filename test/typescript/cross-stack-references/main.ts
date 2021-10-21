import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import { RandomProvider, Integer, Password } from "./.gen/providers/random";
import { LocalProvider, File } from "./.gen/providers/local";

function writeToFile(scope: Construct, name: string, value: any) {
  new File(scope, name, {
    filename: `../../../${name}`,
    content: value,
  });
}

export class SourceStack extends TerraformStack {
  public num: number;
  public str: string;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new RandomProvider(this, "random");
    new LocalProvider(this, "local");

    const int = new Integer(this, "int", {
      min: 0,
      max: 6,
    });

    this.num = int.result;

    const str = new Password(this, "str", {
      length: 32,
    });
    this.str = str.result;

    writeToFile(this, "originNum", this.num);
    writeToFile(this, "originStr", this.str);
  }
}

export class ConsumerStack extends TerraformStack {
  public num?: number;
  public str?: string;
  constructor(
    scope: Construct,
    id: string,
    inputs: { num?: number; str?: string }
  ) {
    super(scope, id);

    new RandomProvider(this, "random");
    new LocalProvider(this, "local");

    if (inputs.num) {
      writeToFile(this, `${id}Num`, inputs.num);
      this.num = inputs.num;
    }

    if (inputs.str) {
      writeToFile(this, `${id}Str`, inputs.str);
      this.str = inputs.str;
    }
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
const src = new SourceStack(app, "source");
new ConsumerStack(app, "passthrough", {
  num: src.num,
  str: src.str,
});
// new ConsumerStack(app, "sink", {
//   num: Fn.sum([passthrough.num, passthrough.num]),
//   str: passthrough.str,
// });
app.synth();
