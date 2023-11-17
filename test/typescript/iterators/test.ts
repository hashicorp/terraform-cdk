// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import * as path from "path";
import * as fs from "fs";

describe("iterators integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname);
    await driver.setupTypescriptProject();
    await driver.copyFolders("files");
    console.log(driver.workingDirectory);
  });

  test("properly synthesizes", async () => {
    await driver.synth();

    const stack = driver.synthesizedStack("test-iterators");
    const stack2 = driver.synthesizedStack("test-iterators-synth-only");

    expect(stack.byId("inline")).toHaveProperty("dynamic.source.content", {
      content: "${upper(each.value)}",
      filename: "${each.value}.txt",
    });
    expect(stack.byId("inline")).toHaveProperty(
      "dynamic.source.for_each",
      "${toset(var.files)}"
    );
    expect(stack.byId("inline")).toHaveProperty(
      "dynamic.source.iterator",
      "each"
    );

    expect(stack.output("test-list-type")).toEqual(
      '${[ for key, val in toset(var.pets): {"name" = val.name, "age" = val.age}]}'
    );
    expect(stack.output("test-nested-list-type")).toHaveProperty(
      "nested.in.an.object",
      '${[ for key, val in toset(var.pets): {"name" = val.name, "age" = val.age}]}'
    );

    // tests that .dynamic() can also be passed to nested blocks
    // (tests the recursive handling in processDynamicAttributes util)
    expect(stack2.byId("mysqlvolume")).toHaveProperty(
      "topology_request.required.dynamic.topology.content",
      {
        segments: {
          rack: "${each.value.rack}",
          zone: "${each.value.zone}",
        },
      }
    );
    expect(stack2.byId("mysqlvolume")).toHaveProperty(
      "topology_request.required.dynamic.topology.for_each",
      "${toset(var.topologySegments)}"
    );
    expect(stack2.byId("mysqlvolume")).toHaveProperty(
      "topology_request.required.dynamic.topology.iterator",
      "each"
    );

    expect(stack2.byId("record")).toHaveProperty(
      "for_each",
      "${{ for key, val in tolist(aws_acm_certificate.cert.domain_validation_options): val.domain_name => val }}"
    );
    expect(stack2.byId("record")).toHaveProperty("name", "${each.value.name}");
  });

  test("non-synth stack is valid Terraform", async () => {
    await driver.exec("terraform", ["init"]);
    const res = await driver.exec("terraform", ["validate"]);
    expect(res.stdout).toContain("Success! The configuration is valid.");
  });

  test("apply produces the correct result for outputs", async () => {
    const deployOutputsPath = path.resolve(
      driver.workingDirectory,
      "deploy.outputs.json"
    );
    await driver.deploy(["test-iterators"], deployOutputsPath);
    const deployOutput = JSON.parse(fs.readFileSync(deployOutputsPath, "utf8"));

    expect(deployOutput).toHaveProperty("test-iterators.test-list-type", [
      { name: "Oscar", age: 3 },
      { name: "Fred", age: 6 },
    ]);
    expect(deployOutput).toHaveProperty(
      "test-iterators.test-nested-list-type.nested.in.an.object",
      [
        { name: "Oscar", age: 3 },
        { name: "Fred", age: 6 },
      ]
    );
  });
});
