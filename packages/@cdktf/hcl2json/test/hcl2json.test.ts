// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse, convertFiles } from "../lib";
import * as fs from "fs";
import * as path from "path";

jest.mock("console", () => {
  return {
    readFile: jest.fn().mockResolvedValue("contents"),
    stat: jest.fn().mockResolvedValue({}),
  };
});

describe("parse", () => {
  const loadFixture = (...fileNames: string[]) => {
    return fs.readFileSync(
      path.join(__dirname, "fixtures", ...fileNames),
      "utf-8",
    );
  };

  test("converts VPC module", async () => {
    const parsed = await parse("vpc.tf", loadFixture("vpc-module", "main.tf"));
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("handles escape sequences in templates", async () => {
    const parsed = await parse(
      "main.tf",
      loadFixture("with-escaped-template", "main.tf"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });
});

describe("convertFiles", () => {
  test("a simple directory", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "vpc-module"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with multiple files", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "multiple-files"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with submodule", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-submodule"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with tf json", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-tf-json"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  test("a directory with tf json only", async () => {
    const parsed = await convertFiles(
      path.join(__dirname, "fixtures", "with-tf-json-only"),
    );
    expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot();
  });

  describe("not matching due to", () => {
    let mock: jest.SpyInstance;

    beforeEach(() => {
      mock = jest.spyOn(global.console, "error").mockImplementation();
    });

    afterEach(() => {
      mock.mockRestore();
    });

    test("a directory with standard json only", async () => {
      const parsed = await convertFiles(
        path.join(__dirname, "fixtures", "with-standard-json"),
      );
      expect(JSON.stringify(parsed, null, 2)).toMatchInlineSnapshot(`"{}"`);
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining("No '.tf' or '.tf.json' files found in"),
      );
    });

    test("no files", async () => {
      const parsed = await convertFiles(
        path.join(__dirname, "fixtures", "no-files"),
      );
      expect(JSON.stringify(parsed, null, 2)).toMatchInlineSnapshot(`"{}"`);
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining("No '.tf' or '.tf.json' files found in"),
      );
    });
  });

  test("invalid files", () => {
    return expect(
      convertFiles(path.join(__dirname, "fixtures", "invalid-files")),
    ).rejects.toMatchInlineSnapshot(
      `[Error: parse config: [hcl2json.tf:7,18-8,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:8,2-9,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:9,32-10,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:10,35-13,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:13,18-14,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:14,128-15,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:15,23-16,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:16,28-17,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:17,2-19,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:19,25-20,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:20,177-21,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:21,21-22,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:22,22-23,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:23,2-25,1: Invalid multi-line string; Quoted strings may not be split over multiple lines. To produce a multi-line string, either use the \\n escape to represent a newline character or use the "heredoc" multi-line template syntax. hcl2json.tf:4,16-5,1: Invalid block definition; A block definition must have block content delimited by "{" and "}", starting on the same line as the block header.]]`,
    );
  });

  test("invalid path", () => {
    return expect(
      convertFiles(path.join("/some/not/existing/path")),
    ).rejects.toMatchInlineSnapshot(
      `[Error: ENOENT: no such file or directory, scandir '/some/not/existing/path']`,
    );
  });
});
