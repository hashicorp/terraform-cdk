/* eslint-disable no-control-regex */
import React, { Fragment, useEffect, useState } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { DeployingElement, Outputs } from "./components";
import {
  DeployingResource,
  PlannedResourceAction,
  TerraformPlan,
  TerraformOutput,
} from "../../../lib/models/terraform";
import { CdktfProject, ProjectUpdate } from "../../../lib";
import { NestedTerraformOutputs } from "../../../lib/output";
import { ErrorComponent } from "./components/error";
import { Confirm } from "./components/confirm";

interface DeploySummaryConfig {
  resources: DeployingResource[];
}

export const DeploySummary = ({
  resources,
}: DeploySummaryConfig): React.ReactElement => {
  const summary = resources.reduce(
    (accumulator, resource) => {
      if (accumulator[resource.applyState] !== undefined) {
        accumulator[resource.applyState] += 1;
      }

      return accumulator;
    },
    {
      created: 0,
      updated: 0,
      destroyed: 0,
    } as any
  );

  return (
    <>
      {Object.keys(summary).map((key, i) => (
        <Box key={key}>
          {i > 0 && <Text>, </Text>}
          <Text>
            {summary[key]} {key}
          </Text>
        </Box>
      ))}
    </>
  );
};

interface ApplyableResourcesConfig {
  resources: DeployingResource[];
  stackName: string;
}
const ApplyableResources = ({
  resources,
  stackName,
}: ApplyableResourcesConfig): React.ReactElement => {
  if (!resources.length) {
    return <></>;
  }

  return (
    <>
      <Text bold>Resources</Text>
      {resources.map((resource: any) => (
        <Box key={resource.id} marginLeft={1}>
          <DeployingElement resource={resource} stackName={stackName} />
        </Box>
      ))}
      <Box marginTop={1}>
        <Text bold>Summary: </Text>
        <DeploySummary resources={resources} />
        <Text>.</Text>
      </Box>
    </>
  );
};

interface DeployConfig {
  outDir: string;
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
}

export const Deploy = ({
  outDir,
  targetStack,
  synthCommand,
  autoApprove,
  onOutputsRetrieved,
  outputsPath,
}: DeployConfig): React.ReactElement => {
  const [lastProjectUpdate, setProjectUpdate] = useState<ProjectUpdate>();
  const [stackName, setStackName] = useState<string>();
  const [plan, setPlan] = useState<TerraformPlan>();
  const [error, setError] = useState<Error>();
  const [outputs, setOutputs] = useState<{ [key: string]: TerraformOutput }>();
  const [resources, setResources] = useState<DeployingResource[]>([]);

  useEffect(() => {
    const project = new CdktfProject({
      outDir,
      synthCommand,
      onUpdate: (event) => {
        setStackName(project.stackName || "");
        setProjectUpdate(event);
        setOutputs(project.outputs);
        setPlan(project.currentPlan!);
        if (event.type === "deployed") {
          onOutputsRetrieved(event.outputsByConstructId);
        }
        if ("resources" in event) {
          setResources(event.resources);
        }
      },
      autoApprove,
    });

    project.deploy(targetStack).catch(setError);
  }, []);

  if (error) {
    return <ErrorComponent fatal error={error} />;
  }

  if (plan && !plan.needsApply) {
    return (
      <>
        <Text>
          No changes for Stack: <Text bold>{stackName}</Text>
        </Text>
        {outputs && Object.keys(outputs).length > 0 && (
          <Box flexDirection="column">
            <Box marginTop={1}>
              <Text bold>Output: </Text>
              <Outputs outputs={outputs} />
            </Box>
            <Box>
              {outputsPath && outputs ? (
                <Text>The outputs have been written to {outputsPath}</Text>
              ) : (
                <Text></Text>
              )}
            </Box>
          </Box>
        )}
      </>
    );
  }

  switch (lastProjectUpdate?.type) {
    case undefined: // starting
    case "synthesizing":
    case "synthesized":
    case "planning":
    case "planned": {
      const status = lastProjectUpdate?.type || "starting";
      return (
        <Box>
          <>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            <Box paddingLeft={1}>
              <Text>
                {stackName === "" ? (
                  <Text>{status}...</Text>
                ) : (
                  <Text>
                    {status}
                    <Text bold>&nbsp;{stackName}</Text>...
                  </Text>
                )}
              </Text>
            </Box>
          </>
        </Box>
      );
    }
    case "waiting for approval":
      return (
        <Box>
          <Box flexDirection="column">
            {/* <Plan currentStackName={stackName} plan={plan!} /> */}
            <Confirm onApprove={lastProjectUpdate.approve} />
          </Box>
        </Box>
      );

    case "deploying":
    case "deploy update":
    case "deployed": {
      const applyActions = [
        PlannedResourceAction.UPDATE,
        PlannedResourceAction.CREATE,
        PlannedResourceAction.DELETE,
        PlannedResourceAction.READ,
      ];
      const applyableResources = resources.filter((resource) =>
        applyActions.includes(resource.action)
      );
      return (
        <Fragment>
          <Box flexDirection="column">
            <Box>
              <>
                {lastProjectUpdate?.type !== "deployed" ? (
                  <Text color="green">
                    <Spinner type="dots" />
                  </Text>
                ) : (
                  <></>
                )}
                <Box paddingLeft={1}>
                  <Text>Deploying Stack: </Text>
                  <Text bold>{stackName}</Text>
                </Box>
              </>
            </Box>
            <ApplyableResources
              resources={applyableResources}
              stackName={stackName || ""}
            />
            {outputs && Object.keys(outputs).length > 0 && (
              <Box flexDirection="column">
                <Box marginTop={1}>
                  <Text bold>Output: </Text>
                  <Outputs outputs={outputs} />
                </Box>
                <Box>
                  {outputsPath && outputs ? (
                    <Text>The outputs have been written to {outputsPath}</Text>
                  ) : (
                    <Text></Text>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Fragment>
      );
    }
    default:
      return (
        <Text>{`An unknown state occured: ${lastProjectUpdate?.type}`}</Text>
      );
  }
};
