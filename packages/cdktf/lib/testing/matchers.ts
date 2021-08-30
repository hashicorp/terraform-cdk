import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { snakeCase } from "../util";

const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || "terraform";

export interface TerraformConstructor {
  new (...args: any[]): any;
  readonly tfResourceType: string;
}
export type SynthesizedStack = {
  resource: Record<string, any>;
  data: Record<string, any>;
};
export type MatcherReturn = { message: () => string; pass: boolean };

function assertElementWithProperties(
  type: keyof SynthesizedStack,
  received: string,
  itemType: TerraformConstructor,
  properties: Record<string, any> = {}
) {
  let stack: SynthesizedStack;
  try {
    stack = JSON.parse(received) as SynthesizedStack;
  } catch (e) {
    throw new Error(`invalid JSON passed: ${received}`);
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
    return {
      pass,
      message: () =>
        `Expected ${
          itemType.tfResourceType
        } not to be present in synthesised stack with properties ${JSON.stringify(
          properties
        )}`,
    };
  } else {
    return {
      message: () =>
        `Expected ${
          itemType.tfResourceType
        } to be present in synthesised stack with properties ${JSON.stringify(
          properties
        )}`,
      pass,
    };
  }
}

export function toHaveDataSourceWithProperties(
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

export function toHaveResourceWithProperties(
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

export function toBeValidTerraform(received: string): MatcherReturn {
  try {
    if (!fs.statSync(received).isDirectory()) {
      throw new Error("Path is not a directory");
    }
  } catch (e) {
    return {
      message: () => `Expected subject to be a terraform directory: ${e}`,
      pass: false,
    };
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

    return {
      pass: true,
      message: () => `Expected subject not to be a valid terraform stack`,
    };
  } catch (e) {
    return {
      pass: false,
      message: () => `Expected subject to be a valid terraform stack: ${e}`,
    };
  }
}

export function toPlanSuccessfully(received: string): MatcherReturn {
  try {
    if (!fs.statSync(received).isDirectory()) {
      throw new Error("Path is not a directory");
    }
  } catch (e) {
    return {
      message: () => `Expected subject to be a terraform directory: ${e}`,
      pass: false,
    };
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
      execSync(`${terraformBinaryName} plan -input=false `, opts);
    });

    return {
      pass: true,
      message: () => `Expected subject not to plan successfully`,
    };
  } catch (e) {
    return {
      pass: false,
      message: () => `Expected subject to plan successfully: ${e}`,
    };
  }
}
