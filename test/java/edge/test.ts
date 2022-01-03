import * as path from "path";
import * as fs from "fs-extra";
import { QueryableStack, TestDriver } from "../../test-helper";

describe("java full integration", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupJavaProject();

    // use generated custom bindings
    fs.copySync(
      path.resolve(
        __dirname,
        "..",
        "..",
        "edge-provider-bindings",
        "java",
        "src",
        "main",
        "java",
        "imports",
        "edgeprovider"
      ),
      path.resolve(
        driver.workingDirectory,
        "src",
        "main",
        "java",
        "imports",
        "edgeprovider"
      )
    );

    fs.copySync(
      path.resolve(
        __dirname,
        "..",
        "..",
        "edge-provider-bindings",
        "java",
        "src",
        "main",
        "resources",
        "imports",
        "edgeprovider"
      ),
      path.resolve(
        driver.workingDirectory,
        "src",
        "main",
        "resources",
        "imports",
        "edgeprovider"
      )
    );

    await driver.synth("fixed");
  });

  describe("ReferenceStack", () => {
    let stack: QueryableStack;
    beforeAll(() => {
      stack = driver.synthesizedStack("reference");
      console.log(driver.workingDirectory);
    });

    it("renders plain values in lists", () => {
      const l = stack.byId("list");

      // Normal list
      expect(l.req[0].reqbool).toBe(true);
      expect(l.req[1].reqbool).toBe(false);
      expect(l.req[0].reqnum).toBe(1);
      expect(l.req[1].reqnum).toBe(0);
      expect(l.req[0].reqstr).toBe("reqstr");
      expect(l.req[1].reqstr).toBe("reqstr2");

      // Single item list
      expect(l.singlereq.reqbool).toBe(true);
      expect(l.singlereq.reqnum).toBe(1);
      expect(l.singlereq.reqstr).toBe("reqstr");
    });

    it("references plain values", () => {
      expect(stack.byId("plain").str).toEqual(
        "${optional_attribute_resource.test.str}"
      );
      expect(stack.byId("plain").num).toEqual(
        "${optional_attribute_resource.test.num}"
      );
      // Not supported in Java
      // expect(stack.byId("plain").bool).toEqual(
      //   "${optional_attribute_resource.test.bool}"
      // );
    });

    it("item references a required single item lists required values", () => {
      const item = stack.byId("from_single_list");

      // Not supported in Java
      // expect(item.bool).toEqual(
      //   "${list_block_resource.list.singlereq[0].reqbool}"
      // );
      expect(item.str).toEqual(
        "${list_block_resource.list.singlereq[0].reqstr}"
      );
      expect(item.num).toEqual(
        "${list_block_resource.list.singlereq[0].reqnum}"
      );
    });

    // Not supported in Java
    it.skip("item references required values from multi-item lists", () => {
      const item = stack.byId("from_list");

      // Direct access is not supported, we have to go through terraform functions
      // Not supported in Java
      // expect(item.bool).toEqual(
      //   '${lookup(element(list_block_resource.list.req, 0), "reqbool", false)}'
      // );
      expect(item.str).toEqual(
        '${lookup(element(list_block_resource.list.req, 0), "reqstr", "fallback")}'
      );
      expect(item.num).toEqual(
        '${lookup(element(list_block_resource.list.req, 0), "reqnum", 0)}'
      );
    });

    // Not supported in Java
    it.skip("item references a required single item list", () => {
      const item = stack.byId("list_reference");

      // Expands single item references
      expect(item.singlereq).toMatchInlineSnapshot();
    });

    // Not supported in Java
    it.skip("item references a required multi item list", () => {
      const item = stack.byId("list_reference");

      // Expands single item references
      expect(item.req).toEqual("${list_block_resource.list.req}");
    });

    // Not supported in Java
    it.skip("list attribute uses reference of single-item list", () => {
      const item = stack.byId("list_literal");

      // Expands single item references
      expect(item.req[0]).toMatchInlineSnapshot();
    });
  });
});
