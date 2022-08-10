// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { deepMerge } from "../lib/util";

test("merge arrays", () => {
  const target = {
    foo: [1, 2],
  };

  const source = {
    foo: [3, 4],
  };

  expect(JSON.stringify(deepMerge(target, source))).toMatchSnapshot();
});

test("merge objects", () => {
  const target = {
    foo: {
      bar: 2,
    },
  };

  const source = {
    foo: {
      baz: 3,
    },
  };

  expect(JSON.stringify(deepMerge(target, source))).toMatchSnapshot();
});
