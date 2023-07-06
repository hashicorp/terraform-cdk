/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CodeMaker } from "codemaker";

export function sanitizedComment(code: CodeMaker) {
  let wasSanitized = false;
  code.line(`/**`);
  return {
    line: (comment: string | number) => {
      const sanitized =
        typeof comment === "string" ? comment.replace(/\*\//g, "* /") : comment;

      if (sanitized === "") {
        code.line(`*`);
        return;
      }

      if (sanitized !== comment) {
        wasSanitized = true;
      }
      code.line(`* ${sanitized}`);
    },
    end: () => {
      if (wasSanitized) {
        code.line(` *`);
        code.line(
          "* Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space."
        );
      }
      code.line(`*/`);
    },
  };
}
