import { useConstructIdsForOutput } from "../../bin/cmds/ui/terraform-context";
describe("useConstructIdsForOutput", () => {
  test("in a flat structure", () => {
    const result = useConstructIdsForOutput(
      {
        ["//"]: {
          outputs: {
            myResourceName: "myResourceId",
          },
        },
      },
      {
        myResourceId: {
          value: "my-resource-value",
          sensitive: false,
          type: "string",
        },
      }
    );

    expect(result).toMatchInlineSnapshot(`
      Object {
        "myResourceName": Object {
          "sensitive": false,
          "type": "string",
          "value": "my-resource-value",
        },
      }
    `);
  });

  test("in a nested structure", () => {
    const result = useConstructIdsForOutput(
      {
        ["//"]: {
          outputs: {
            MyStack: {
              MyCustomConstruct: {
                myResourceName: "myResourceId",
              },
            },
          },
        },
      },
      {
        myResourceId: {
          value: "my-resource-value",
          sensitive: false,
          type: "string",
        },
      }
    );

    expect(result).toMatchInlineSnapshot(`
      Object {
        "MyStack": Object {
          "MyCustomConstruct": Object {
            "myResourceName": Object {
              "sensitive": false,
              "type": "string",
              "value": "my-resource-value",
            },
          },
        },
      }
    `);
  });

  test("in a mixed structure", () => {
    const result = useConstructIdsForOutput(
      {
        ["//"]: {
          outputs: {
            MyStack: {
              MyCustomConstruct: {
                myResourceName: "myResourceId",
              },
              mySecondResourceName: "myOtherResourceId",
            },
          },
        },
      },
      {
        myResourceId: {
          value: "my-resource-value",
          sensitive: false,
          type: "string",
        },
        myOtherResourceId: {
          value: "my-other-resource-value",
          sensitive: false,
          type: "string",
        },
      }
    );

    expect(result).toMatchInlineSnapshot(`
      Object {
        "MyStack": Object {
          "MyCustomConstruct": Object {
            "myResourceName": Object {
              "sensitive": false,
              "type": "string",
              "value": "my-resource-value",
            },
          },
          "mySecondResourceName": Object {
            "sensitive": false,
            "type": "string",
            "value": "my-other-resource-value",
          },
        },
      }
    `);
  });

  test("omits outputs with missing results (e.g. not deployed yet)", () => {
    const result = useConstructIdsForOutput(
      {
        ["//"]: {
          outputs: {
            MyStack: {
              MyCustomConstruct: {
                myResourceName: "myResourceId",
              },
              mySecondResourceName: "myOtherResourceId",
            },
          },
        },
      },
      {
        myOtherResourceId: {
          value: "my-other-resource-value",
          sensitive: false,
          type: "string",
        },
      }
    );

    expect(result).toMatchInlineSnapshot(`
      Object {
        "MyStack": Object {
          "mySecondResourceName": Object {
            "sensitive": false,
            "type": "string",
            "value": "my-other-resource-value",
          },
        },
      }
    `);
  });
});
