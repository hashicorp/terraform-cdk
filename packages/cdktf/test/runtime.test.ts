import { resolve } from "../lib/_tokens";
import { listMapper, hashMapper, anyToTerraform } from "../lib/runtime";
import { Token } from "../lib/tokens/token";

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
  });
});
