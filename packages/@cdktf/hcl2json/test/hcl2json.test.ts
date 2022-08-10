// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse, convertFiles } from "../lib";
import * as fs from "fs";
import * as path from "path";

describe("parse", () => {
  const loadFixture = (...fileNames: string[]) => {
    return fs.readFileSync(
      path.join(__dirname, "fixtures", ...fileNames),
      "utf-8"
    );
  };

  test("converts VPC module", async () => {
    const parsed = await parse("vpc.tf", loadFixture("vpc-module", "main.tf"));
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });
});

describe("convertFiles", () => {
  test("a simple directory", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "vpc-module")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with multiple files", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "multiple-files")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with submodule", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-submodule")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with tf json", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-tf-json")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with tf json only", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-tf-json-only")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with standard json only", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-standard-json")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchInlineSnapshot(`"{}"`);
  });

  test("no files", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "no-files")
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("invalid files", async () => {
    try {
      await convertFiles(path.join(__dirname, "fixtures", "invalid-files"));
    } catch (e) {
      expect(e.message).toMatch(/Invalid multi-line string/);
    }
  });

  test("invalid path", async () => {
    try {
      await convertFiles(path.join("/some/not/existing/path"));
    } catch (e) {
      expect(e.message).toMatch(/no such file or directory/);
    }
  });
});
