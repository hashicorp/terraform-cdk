// Singleton class for each synth / plan / deploy

import { Construct } from "constructs";

/**
 *
 */
export class LiveRunner {
  private static instance: LiveRunner;

  static get session() {
    if (!LiveRunner.instance) {
      LiveRunner.instance = new LiveRunner();
    }
    return LiveRunner.instance;
  }

  private constructor() {}

  public async createResource(
    instance: Construct,
    scope: Construct
  ): Promise<any> {
    console.log("createResource");
    console.log("With instance", instance);
    console.log("With scope", scope);

    return {
      id: "id",
    };
  }

  public async useProvider(
    instance: Construct,
    scope: Construct
  ): Promise<any> {
    console.log("useProvider");
    console.log("With instance", instance);
    console.log("With scope", scope);
  }
}
