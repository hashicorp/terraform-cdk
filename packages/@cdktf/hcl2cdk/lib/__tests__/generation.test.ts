/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { variableTypeToAst } from "../generation";
import { ProgramScope } from "../types";
import { astToCode } from "./testHelpers";

describe("variableTypeToAst", () => {
  async function run(type: string) {
    return astToCode(
      await variableTypeToAst(
        {
          importables: [],
        } as unknown as ProgramScope,
        type,
      ),
    );
  }

  it("should convert a simple type", async () => {
    expect(await run("${string}")).toMatchInlineSnapshot(
      `"VariableType.STRING"`,
    );
  });

  it("should convert a object type", async () => {
    expect(
      await run(
        "${object({\n          name    = string\n          address = string\n        })}",
      ),
    ).toMatchInlineSnapshot(`
      "VariableType.object({
        "address": VariableType.STRING,
        "name": VariableType.STRING
      })"
    `);
  });

  it("should convert a list type", async () => {
    expect(
      await run(
        "${list(object({\n            internal = number\n            external = number\n            protocol = string\n        }))}",
      ),
    ).toMatchInlineSnapshot(`
      "VariableType.list(VariableType.object({
        "external": VariableType.NUMBER,
        "internal": VariableType.NUMBER,
        "protocol": VariableType.STRING
      }))"
    `);
  });

  it("should convert a set type", async () => {
    expect(await run("${set(string)}")).toMatchInlineSnapshot(
      `"VariableType.set(VariableType.STRING)"`,
    );
  });

  it("should convert a map type", async () => {
    expect(await run("${map(string)}")).toMatchInlineSnapshot(
      `"VariableType.map(VariableType.STRING)"`,
    );
  });

  it("should convert a tuple type", async () => {
    expect(await run("${tuple(string, number, bool)}")).toMatchInlineSnapshot(
      `"VariableType.tuple(VariableType.STRING, VariableType.NUMBER, VariableType.BOOL)"`,
    );
  });
});
