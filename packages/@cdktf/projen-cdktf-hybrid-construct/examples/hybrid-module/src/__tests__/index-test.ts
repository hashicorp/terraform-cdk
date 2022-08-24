import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { MyConstruct } from "../";

// To learn more about testing see cdk.tf/testing
describe("MyConstruct", () => {
  it("should synthesize", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyConstruct(scope, "my-construct", {
          propertyA: "valueA",
        });
      })
    ).toMatchSnapshot();
  });
});
