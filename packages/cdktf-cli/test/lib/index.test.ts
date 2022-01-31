import { CdktfProject } from "../../lib/";
describe("CdktfProject", () => {
  it("should be able to create a CdktfProject", () => {
    const cdktfProject = new CdktfProject({
      synthCommand: "cdktf",
      targetDir: "/tmp/cdktf-project",
      onUpdate: () => {},
    });
    expect(cdktfProject).toBeTruthy();
  });

  describe("synth", () => {
    it.todo("runs synth command in the target dir and is done");
  });

  describe("diff", () => {
    it.todo("runs synth and diff once and is done");
  });

  describe("deploy", () => {
    it.todo("runs synth and diff once and waits in for approval");
    it.todo("runs synth and diff once and deploys on autoApprove");
  });

  describe("destroy", () => {
    it.todo("runs synth and diff once and waits in for approval");
    it.todo("runs synth and diff once and destroys on autoApprove");
  });
});
