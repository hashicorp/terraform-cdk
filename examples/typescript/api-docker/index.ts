import { Api } from "@cdktf/api";
import { TerraformStack, TerraformOutput } from "cdktf";
// You would normally try to use pre-built providers, but for this example we use
// local ones to test the API.
import { Container as DockerContainer } from "./.gen/providers/docker/container";
import { DockerProvider } from "./.gen/providers/docker/provider/index";

const cliArgs = process.argv.slice(2);
const dockerContainerImage = cliArgs[0] || "nginx";

// Self executing async function for convenience with async/await
(async function () {
  // Declare an application inline
  const myApp = Api.inlineApp({
    program: {
      produce: (app) => {
        const stack = new TerraformStack(app, "my-docker-stack");

        new DockerProvider(stack, "docker", {});
        const container = new DockerContainer(stack, "my-container", {
          image: dockerContainerImage,
          name: "cdktf-api-container",
        });

        new TerraformOutput(stack, "containerIp", {
          value: container.ipAddress,
        });
      },
    },
  });

  // Synthesize the application
  const synthedApp = await myApp.synth();

  // Plan all stacks in the application
  await Promise.all(
    Object.entries(synthedApp.stacks).map(async ([name, stack]) => {
      console.log(`Planning stack: ${name}`);
      await stack.plan();
    })
  );

  // Deploy all stacks in the application
  await Promise.all(
    Object.entries(synthedApp.stacks).map(async ([name, stack]) => {
      console.log(`Deploying stack: ${name}`);
      await stack.deploy();
    })
  );
})();
