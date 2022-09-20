// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";

describe("full integration test", () => {
  describe("synth", () => {
    let driver: TestDriver;

    beforeAll(async () => {
      driver = new TestDriver(__dirname);
      await driver.setupTypescriptProject();
      await driver.synth();
    });

    describe("namespaces", () => {
      let stack;
      beforeAll(() => {
        stack = driver.synthesizedStack("namespaces");
      });

      test("has resources", () => {
        expect(stack.byId("instance")).toBeTruthy();
        expect(stack.byId("lambdaFn")).toBeTruthy();
      });

      test("has data source", () => {
        expect(stack.byId("ami")).toBeTruthy();
        expect(stack.byId("callerIdentity")).toBeTruthy();
      });
    });

    describe("provider functionality", () => {
      beforeAll(async () => {
        await driver.synth();
      });

      describe("references", () => {
        let stack;
        beforeAll(() => {
          stack = driver.synthesizedStack("references");
        });

        // HCL does not support referencing provider values
        test("provider references are no references", () => {
          const providerAddress = stack.output("provideraddress");
          expect(providerAddress).toEqual("http://127.0.0.1");
        });

        test("simple references", () => {
          const jobSpec = stack.byId("secondJob").jobspec;
          expect(jobSpec).toContain("${");
          expect(jobSpec).toContain("firstJob");
          expect(jobSpec).toContain("jobspec");
        });

        test("single-item references", () => {
          const namespace = stack.byId("myDeployment").metadata.namespace;
          expect(namespace).toContain("${");
          expect(namespace).toContain("myNamespace");
          expect(namespace).toContain(".metadata[0].name");
        });
      });

      describe("mutation", () => {
        describe("Simple", () => {
          let instance;
          beforeAll(() => {
            instance = driver.synthesizedStack("mutation").byId("instance");
          });

          test("direct primitive mutation", () => {
            expect(instance.instance_type).toBe("t2.small");
          });

          test("direct reference mutation", () => {
            expect(instance.ami).toEqual("${data.aws_ami.ami.id}");
          });

          test("reset method mutation", () => {
            expect(instance.availability_zone).not.toBeDefined();
          });

          test("put method mutation", () => {
            expect(instance.metadata_options).toEqual({
              http_endpoint: "127.0.0.1",
            });
          });
        });

        describe("single-item nesting", () => {
          let deployment;
          beforeAll(() => {
            deployment = driver
              .synthesizedStack("mutation")
              .byId("myDeployment");
          });
          test("direct primitive mutation", () => {
            expect(deployment.spec.replicas).toBe("2");
          });

          test("direct reference mutation", () => {
            expect(deployment.metadata.namespace).toContain("${");
            expect(deployment.metadata.namespace).toContain("var.");
            expect(deployment.metadata.namespace).toContain("namespace");
          });

          test("reset method mutation", () => {
            expect(deployment.spec.min_ready_seconds).not.toBeDefined();
          });

          test("put method mutation", () => {
            expect(deployment.spec.strategy).toEqual({
              type: "RollingUpdate",
              rolling_update: {
                max_surge: "10%",
                max_unavailable: "10%",
              },
            });
          });
        });
      });
    });
  });
});
