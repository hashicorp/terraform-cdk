import { enhanceLogMessage } from "../../lib/execution-logs";
import { SynthesizedStack } from "../../lib/synth-stack";
describe("enhanceLogs", () => {
  it("returns undefined if an error is thrown internally (e.g. broken inputs)", () => {
    expect(
      enhanceLogMessage("MyMessage", {
        content: "MalformedJSON",
      } as SynthesizedStack)
    ).toBeUndefined();
  });

  it("returns the message if no reference to an element is found", () => {
    const msg =
      "This is a log message with some_thing.that_looks_like_a_reference but is not";
    expect(
      enhanceLogMessage(msg, {
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
      } as SynthesizedStack)
    ).toBe(msg);
  });

  it("adds a construct path to all occurences of a reference", () => {
    expect(
      enhanceLogMessage(
        "This is a message where some_thing.different is used",
        {
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
        } as SynthesizedStack
      )
    ).toMatchInlineSnapshot(
      `"This is a message where some_thing.different (ThisConstruct) is used"`
    );
  });
});
