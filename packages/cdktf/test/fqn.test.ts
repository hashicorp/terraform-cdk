// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, Fn } from "../lib";
import { TestProvider, TestResource } from "./helper";

test("able to use fqn on an element", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      other: firstResource.fqn,
    },
  });

  const res = JSON.parse(Testing.synth(stack));

  const expectedFirst = {
    name: "foo",
  };

  const expectedSecond = {
    name: "bar",
    tags: {
      other: "${test_resource.first-resource}",
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.first-resource",
    expectedFirst
  );
  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expectedSecond
  );
});

test("able to append to resource", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `$\{${firstResource.fqn}.name}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName: "${test_resource.first-resource.name}",
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("works when escape is mid-way", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });
  const otherResource = new TestResource(stack, "other-resource", {
    name: "baz",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `simple-test-${Fn.lookup(
        otherResource.fqn,
        "name",
        ""
      )}-$\{${firstResource.fqn}.name}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName:
        'simple-test-${lookup(test_resource.other-resource, "name", "")}-${test_resource.first-resource.name}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("after escape, reverts to normal", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });
  const otherResource = new TestResource(stack, "other-resource", {
    name: "baz",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `simple-test-$\{${firstResource.fqn}.name}-${Fn.lookup(
        otherResource.fqn,
        "name",
        ""
      )}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName:
        'simple-test-${test_resource.first-resource.name}-${lookup(test_resource.other-resource, "name", "")}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("can have multiple escapes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });
  const otherResource = new TestResource(stack, "other-resource", {
    name: "baz",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `simple-test-$\{${
        firstResource.fqn
      }.name}-$\{${Fn.lookup(otherResource.fqn, "name", "")}}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName:
        'simple-test-${test_resource.first-resource.name}-${lookup(test_resource.other-resource, "name", "")}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("can have literals within escapes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `simple-test-$\{"hello"}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName: 'simple-test-${"hello"}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("can extract tokens within escapes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `$\{${firstResource.fqn}.name}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName: "${test_resource.first-resource.name}",
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("works with functions", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });
  const otherResource = new TestResource(stack, "other-resource", {
    name: "baz",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `simple-test-$\{${
        firstResource.fqn
      }.name}-$\{${Fn.lookup(otherResource.fqn, "name", "")}}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName:
        'simple-test-${test_resource.first-resource.name}-${lookup(test_resource.other-resource, "name", "")}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});

test("works with functions containing escapes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });
  const otherResource = new TestResource(stack, "other-resource", {
    name: "baz",
  });

  new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: Fn.lookup(
        otherResource.fqn,
        "name",
        `$\{${firstResource.fqn}.name}`
      ),
    },
  });

  // secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName:
        '${lookup(test_resource.other-resource, "name", test_resource.other-resource.name)}',
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});
