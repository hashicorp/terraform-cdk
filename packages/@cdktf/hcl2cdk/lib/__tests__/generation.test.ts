import generate from "@babel/generator";
import { variableTypeToAst } from "../generation";

describe("variableTypeToAst", () => {
  async function run(type: string) {
    return generate(await variableTypeToAst(type)).code;
  }

  it("should convert a simple type", async () => {
    expect(await run("${string}")).toMatchInlineSnapshot(
      `"cdktf.VariableType.STRING"`
    );
  });

  it("should convert a object type", async () => {
    expect(
      await run(
        "${object({\n          name    = string\n          address = string\n        })}"
      )
    ).toMatchInlineSnapshot(`
      "cdktf.VariableType.object({
        \\"address\\": cdktf.VariableType.STRING,
        \\"name\\": cdktf.VariableType.STRING
      })"
    `);
  });

  it("should convert a list type", async () => {
    expect(
      await run(
        "${list(object({\n            internal = number\n            external = number\n            protocol = string\n        }))}"
      )
    ).toMatchInlineSnapshot(`
      "cdktf.VariableType.list(cdktf.VariableType.object({
        \\"external\\": cdktf.VariableType.NUMBER,
        \\"internal\\": cdktf.VariableType.NUMBER,
        \\"protocol\\": cdktf.VariableType.STRING
      }))"
    `);
  });

  it("should convert a set type", async () => {
    expect(await run("${set(string)}")).toMatchInlineSnapshot(
      `"cdktf.VariableType.set(cdktf.VariableType.STRING)"`
    );
  });

  it("should convert a map type", async () => {
    expect(await run("${map(string)}")).toMatchInlineSnapshot(
      `"cdktf.VariableType.map(cdktf.VariableType.STRING)"`
    );
  });

  it("should convert a tuple type", async () => {
    expect(await run("${tuple(string, number, bool)}")).toMatchInlineSnapshot(
      `"cdktf.VariableType.tuple(cdktf.VariableType.STRING, cdktf.VariableType.NUMBER, cdktf.VariableType.BOOL)"`
    );
  });
});
