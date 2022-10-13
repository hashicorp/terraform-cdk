// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { createEnhanceLogMessage } from "../../lib/execution-logs";
import { SynthesizedStack } from "../../lib/synth-stack";
describe("enhanceLogs", () => {
  it("returns undefined if an error is thrown internally (e.g. broken inputs)", () => {
    expect(
      createEnhanceLogMessage({
        content: "MalformedJSON",
      } as SynthesizedStack)("MyMessage")
    ).toBe("MyMessage");
  });

  it("returns the message if no reference to an element is found", () => {
    const msg =
      "This is a log message with some_thing.that_looks_like_a_reference but is not";
    expect(
      createEnhanceLogMessage({
        content: JSON.stringify({
          data: {},
          resource: {
            some_thing: {
              different: {
                "//": {
                  metadata: {
                    path: "ThisConstruct",
                  },
                },
              },
            },
          },
        }),
      } as SynthesizedStack)(msg)
    ).toBe(msg);
  });

  it("adds a construct path to all occurences of a reference", () => {
    expect(
      createEnhanceLogMessage({
        content: JSON.stringify({
          data: {},
          resource: {
            some_thing: {
              different: {
                "//": {
                  metadata: {
                    path: "ThisConstruct",
                  },
                },
              },
            },
          },
        }),
      } as SynthesizedStack)(
        "This is a message where some_thing.different is used"
      )
    ).toMatchInlineSnapshot(
      `"This is a message where some_thing.different (ThisConstruct) is used"`
    );
  });
});
