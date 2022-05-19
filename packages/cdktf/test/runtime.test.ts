import { resolve } from "../lib/_tokens";
import { listMapper, hashMapper, anyToTerraform } from "../lib/runtime";
import { Token } from "../lib/tokens/token";
import { Intrinsic } from "../lib/tokens/private/intrinsic";
import { deepMerge } from "../lib/util";

const resolveExpression = (expr: any) => resolve(null as any, expr);
describe("Runtime", () => {
  describe("listmapper", () => {
    it("maps through the list", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);

      expect(resolveExpression(listMapper(identity)(["a", "b", "c", "d"])))
        .toMatchInlineSnapshot(`
              Array [
                "a",
                "b",
                "c",
                "d",
              ]
            `);
      expect(identity).toHaveBeenCalledTimes(4);
    });

    it("leaves references in tact", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = Token.asString(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression(listMapper(identity)(["a", reference, "b", "c", "d"]))
      ).toMatchInlineSnapshot(`
              Array [
                "a",
                "\${some_resource.my_resource.some_attribute_array}",
                "b",
                "c",
                "d",
              ]
            `);
      expect(identity).toHaveBeenCalledTimes(5);
    });

    it("leaves directly passed references in tact with a list", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = Token.asString(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression(listMapper(identity)(reference))
      ).toMatchInlineSnapshot(
        `"\${some_resource.my_resource.some_attribute_array}"`
      );
    });

    it("leaves directly passed references intact with a tokenized list", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = Token.asString(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression({
          x: listMapper(identity)(Token.asList(reference)),
        })
      ).toMatchInlineSnapshot(`
        Object {
          "x": "\${some_resource.my_resource.some_attribute_array}",
        }
      `);
    });

    it("works together with a hashmapper", () => {
      const reference = Token.asString(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression({
          match_labels: hashMapper(anyToTerraform)(reference),
        })
      ).toMatchInlineSnapshot(`
        Object {
          "match_labels": "\${some_resource.my_resource.some_attribute_array}",
        }
      `);
    });

    it("can be passed tokenized resolvables", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = Token.asList(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression({
          x: listMapper(identity)(reference),
        })
      ).toMatchInlineSnapshot(`
        Object {
          "x": "\${some_resource.my_resource.some_attribute_array}",
        }
      `);
    });

    it("can be passed untokenized resolvables", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = new Intrinsic(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression({
          x: listMapper(identity)(reference),
        })
      ).toMatchInlineSnapshot(`
        Object {
          "x": "\${some_resource.my_resource.some_attribute_array}",
        }
      `);
    });

    it("can be passed untokenized resolvables in a mixed list ", () => {
      const identity = jest.fn().mockImplementation((x: any) => x);
      const reference = new Intrinsic(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(
        resolveExpression({
          x: listMapper(identity)(["a", reference, "b"]),
        })
      ).toMatchInlineSnapshot(`
        Object {
          "x": Array [
            "a",
            "\${some_resource.my_resource.some_attribute_array}",
            "b",
          ],
        }
      `);
    });

    it("throws an error when a value a token is overwriten", () => {
      const reference = new Intrinsic(
        "${some_resource.my_resource.some_attribute_array}"
      );

      expect(() =>
        resolveExpression(
          deepMerge(
            {
              x: reference,
            },
            { x: { foo: "bar" } }
          )
        )
      ).toThrowErrorMatchingInlineSnapshot(
        `"Invalid usage. Target (\${TfToken[TOKEN.2]}) can not be a resolvable token when overrides are specified. Please replace the value of the field you are overriding with a static value."`
      );
    });
  });
});
