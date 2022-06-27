"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../../../test/test-helper");
describe("full integration test", () => {
    describe("deploy", () => {
        test("build providers", async () => {
            // We have an arcane bug where the deploy is invoked twice although it's just called once.
            // This is a workaround for that, by having a new driver every run we don't have this bug.
            const deployDriver = new test_helper_1.TestDriver(__dirname);
            await deployDriver.setupTypescriptProject();
            const deployLog = await deployDriver.deploy(["using-all-providers"]);
            expect(deployLog).toContain("null_resource.test (test) will be created");
            expect(deployLog).toContain("1 to add");
            expect(deployLog).toContain("Apply complete!");
        }, 600000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBNkQ7QUFFN0QsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDakMsMEZBQTBGO1lBQzFGLDBGQUEwRjtZQUMxRixNQUFNLFlBQVksR0FBRyxJQUFJLHdCQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsTUFBTSxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM1QyxNQUFNLFNBQVMsR0FBRyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxNQUFPLENBQUMsQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0RHJpdmVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3Rlc3QvdGVzdC1oZWxwZXJcIjtcblxuZGVzY3JpYmUoXCJmdWxsIGludGVncmF0aW9uIHRlc3RcIiwgKCkgPT4ge1xuICBkZXNjcmliZShcImRlcGxveVwiLCAoKSA9PiB7XG4gICAgdGVzdChcImJ1aWxkIHByb3ZpZGVyc1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBXZSBoYXZlIGFuIGFyY2FuZSBidWcgd2hlcmUgdGhlIGRlcGxveSBpcyBpbnZva2VkIHR3aWNlIGFsdGhvdWdoIGl0J3MganVzdCBjYWxsZWQgb25jZS5cbiAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciB0aGF0LCBieSBoYXZpbmcgYSBuZXcgZHJpdmVyIGV2ZXJ5IHJ1biB3ZSBkb24ndCBoYXZlIHRoaXMgYnVnLlxuICAgICAgY29uc3QgZGVwbG95RHJpdmVyID0gbmV3IFRlc3REcml2ZXIoX19kaXJuYW1lKTtcbiAgICAgIGF3YWl0IGRlcGxveURyaXZlci5zZXR1cFR5cGVzY3JpcHRQcm9qZWN0KCk7XG4gICAgICBjb25zdCBkZXBsb3lMb2cgPSBhd2FpdCBkZXBsb3lEcml2ZXIuZGVwbG95KFtcInVzaW5nLWFsbC1wcm92aWRlcnNcIl0pO1xuICAgICAgZXhwZWN0KGRlcGxveUxvZykudG9Db250YWluKFwibnVsbF9yZXNvdXJjZS50ZXN0ICh0ZXN0KSB3aWxsIGJlIGNyZWF0ZWRcIik7XG4gICAgICBleHBlY3QoZGVwbG95TG9nKS50b0NvbnRhaW4oXCIxIHRvIGFkZFwiKTtcbiAgICAgIGV4cGVjdChkZXBsb3lMb2cpLnRvQ29udGFpbihcIkFwcGx5IGNvbXBsZXRlIVwiKTtcbiAgICB9LCA2MDBfMDAwKTtcbiAgfSk7XG59KTtcbiJdfQ==