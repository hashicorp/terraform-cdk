/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CodeMaker } from "codemaker";

export function sanitizedComment(code: CodeMaker) {
  let wasSanitized = false;
  code.line(`/**`);
  return {
    line: (comment: string | number | string[] | object) => {
      // objects can not be valid comments
      if (typeof comment === "object" && !Array.isArray(comment)) {
        return;
      }

      const stringified = Array.isArray(comment)
        ? comment.join("\n")
        : comment.toLocaleString();

      const sanitized =
        typeof stringified === "string"
          ? stringified.replace(/\*\//g, "* /")
          : stringified;

      if (sanitized === "") {
        code.line(`*`);
        return;
      }

      if (sanitized !== stringified) {
        wasSanitized = true;
      }
      sanitized.split("\n").forEach((line) => {
        code.line(`* ${line}`);
      });
    },
    end: () => {
      if (wasSanitized) {
        code.line(` *`);
        code.line(
          "* Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.",
        );
      }
      code.line(`*/`);
    },
  };
}
