import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { snakeCase } from "../util";

const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || "terraform";

// TerraformConstructor is a class with a static property `tfResourceType`
export type TerraformConstructor = any;
export type SynthesizedStack = {
  resource: Record<string, any>;
  data: Record<string, any>;
};

export class MatcherReturn {
  constructor(public readonly pass: boolean, public readonly message: string) {}
}

export type JestMatcherReturn = { message: () => string; pass: boolean };
export function matcherReturnToJest(ret: MatcherReturn): JestMatcherReturn {
  return {
    message: () => ret.message,
    pass: ret.pass,
  };
}

function assertElementWithProperties(
  type: keyof SynthesizedStack,
  received: string,
  itemType: TerraformConstructor,
  properties: Record<string, any> = {}
): MatcherReturn {
  let stack: SynthesizedStack;
  try {
    stack = JSON.parse(received) as SynthesizedStack;
  } catch (e) {
    throw new Error(`invalid JSON string passed: ${received}`);
  }

  if (!(type in stack)) {
    throw new Error(`Type ${type} not found in stack`);
  }

  const items = Object.entries(stack[type] || {});

  const pass = items.some(([type, values]) => {
    if (type !== itemType.tfResourceType) {
      return false;
    }

    return Object.values(values).some((item: any) => {
      return Object.entries(properties).every(([key, value]) => {
        return item[key] === value || item[snakeCase(key)] === value;
      });
    });
  });

  if (pass) {
    return new MatcherReturn(
      pass,
      `Expected ${
        itemType.tfResourceType
      } not to be present in synthesised stack with properties ${JSON.stringify(
        properties
      )}`
    );
  } else {
    return new MatcherReturn(
      pass,
      `Expected ${
        itemType.tfResourceType
      } to be present in synthesised stack with properties ${JSON.stringify(
        properties
      )}`
    );
  }
}

export class Matchers {
  public static toHaveDataSourceWithProperties(
    received: string,
    resourceType: TerraformConstructor,
    properties: Record<string, any> = {}
  ): MatcherReturn {
    return assertElementWithProperties(
      "data",
      received,
      resourceType,
      properties
    );
  }

  public static toHaveResourceWithProperties(
    received: string,
    resourceType: TerraformConstructor,
    properties: Record<string, any> = {}
  ): MatcherReturn {
    return assertElementWithProperties(
      "resource",
      received,
      resourceType,
      properties
    );
  }

  public static toBeValidTerraform(received: string): MatcherReturn {
    try {
      if (!fs.statSync(received).isDirectory()) {
        throw new Error("Path is not a directory");
      }
    } catch (e) {
      return new MatcherReturn(
        false,
        `Expected subject to be a terraform directory: ${e}`
      );
    }

    try {
      const manifest = JSON.parse(
        fs.readFileSync(path.resolve(received, "manifest.json"), "utf8")
      );

      const stacks = Object.entries(manifest.stacks);

      stacks.forEach(([name, stack]) => {
        const opts = {
          cwd: path.resolve(received, (stack as any).workingDirectory),
          env: process.env,
          stdio: "pipe",
        } as any;
        execSync(`${terraformBinaryName} init`, opts);
        const out = execSync(`${terraformBinaryName} validate -json`, opts);

        const result = JSON.parse(out.toString());
        if (!result.valid) {
          throw new Error(
            `Found ${
              result.error_count
            } Errors in stack ${name}: ${result.diagnostics.join("\n")}`
          );
        }
      });

      return new MatcherReturn(
        true,
        `Expected subject not to be a valid terraform stack`
      );
    } catch (e) {
      return new MatcherReturn(
        false,
        `Expected subject to be a valid terraform stack: ${e}`
      );
    }
  }

  public static toPlanSuccessfully(received: string): MatcherReturn {
    try {
      if (!fs.statSync(received).isDirectory()) {
        throw new Error("Path is not a directory");
      }
    } catch (e) {
      return new MatcherReturn(
        false,
        `Expected subject to be a terraform directory: ${e}`
      );
    }

    try {
      const manifest = JSON.parse(
        fs.readFileSync(path.resolve(received, "manifest.json"), "utf8")
      );

      const stacks = Object.entries(manifest.stacks);

      stacks.forEach(([, stack]) => {
        const opts = {
          cwd: path.resolve(received, (stack as any).workingDirectory),
          env: process.env,
          stdio: "ignore",
        } as any;
        execSync(`${terraformBinaryName} init`, opts);

        // Throws on a non-zero exit code
        execSync(`${terraformBinaryName} plan -input=false`, opts);
      });

      return new MatcherReturn(
        true,
        `Expected subject not to plan successfully`
      );
    } catch (e) {
      return new MatcherReturn(
        false,
        `Expected subject to plan successfully: ${e}`
      );
    }
  }
}
