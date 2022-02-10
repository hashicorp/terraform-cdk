import React, { Fragment, useState, useEffect } from "react";
import { Text, Box, Static } from "ink";
import Spinner from "ink-spinner";
import { PlannedResource, TerraformPlan } from "../../../lib/models/terraform";
import { PlanElement } from "./components";
import { CdktfProject, Status } from "../../../lib";
import { ErrorComponent } from "./components/error";

interface DiffConfig {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
}

interface PlanSummaryConfig {
  resources: PlannedResource[];
}

const PlanSummary = ({ resources }: PlanSummaryConfig): React.ReactElement => {
  const summary = resources.reduce(
    (accumulator, resource) => {
      if (accumulator[resource.action] !== undefined) {
        accumulator[resource.action] += 1;
      }

      return accumulator;
    },
    {
      create: 0,
      update: 0,
      delete: 0,
    } as any
  );

  return (
    <>
      {Object.keys(summary).map((key, i) => (
        <Box key={key}>
          {i > 0 && <Text>, </Text>}
          <Text>
            {summary[key]} to {key}
          </Text>
        </Box>
      ))}
    </>
  );
};

export const CloudRunInfo = ({ url }: { url?: string }): React.ReactElement => {
  if (url === undefined) return <></>;

  const staticElements = [url];

  // TODO: create follow up issue to use https://github.com/sindresorhus/ink-link
  return (
    <Static items={staticElements}>
      {(e) => (
        <Fragment key={e}>
          <Text>
            Running plan in the remote backend. To view this run in a browser,
            visit:
          </Text>
          <Text key={e}>{e}</Text>
        </Fragment>
      )}
    </Static>
  );
};

export const Plan = ({
  plan,
  currentStackName,
}: {
  plan: TerraformPlan;
  currentStackName: string;
}): React.ReactElement => {
  return (
    <Fragment>
      <Box flexDirection="column">
        <CloudRunInfo url={"url" in plan ? (plan as any).url : undefined} />
        <Box>
          <Text>Stack: </Text>
          <Text bold>{currentStackName}</Text>
        </Box>
        {plan?.needsApply ? <Text bold>Resources</Text> : <></>}
        {plan?.applyableResources.map((resource) => (
          <Box key={resource.id} marginLeft={1}>
            <PlanElement resource={resource} stackName={currentStackName} />
          </Box>
        ))}
        <Box marginTop={1}>
          <Text bold>Diff: </Text>
          <PlanSummary resources={plan?.applyableResources || []} />
          <Text>.</Text>
        </Box>
      </Box>
    </Fragment>
  );
};

export const Diff = ({
  targetDir,
  targetStack,
  synthCommand,
}: DiffConfig): React.ReactElement => {
  const [projectStatus, setProjectStatus] = useState<Status>();
  const [stackName, setStackName] = useState<string>();
  const [plan, setPlan] = useState<TerraformPlan>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const project = new CdktfProject({
      targetDir,
      synthCommand,
      onUpdate: () => {
        setStackName(project.stackName || "");
        setProjectStatus(project.status);
      },
    });

    project
      .diff(targetStack)
      .then(() => setPlan(project.currentPlan!), setError);
  }, [setPlan, setError]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (plan) {
    return (
      <Box>
        <Plan currentStackName={stackName || ""} plan={plan!} />
      </Box>
    );
  }

  // TODO: remove useTerraformState
  return (
    <Box>
      <Fragment>
        <Text color="green">
          <Spinner type="dots" />
        </Text>
        <Box paddingLeft={1}>
          <Text>
            {stackName === "" ? (
              `${projectStatus}...`
            ) : (
              <Text>
                {projectStatus}
                <Text bold>&nbsp;{stackName}</Text>...
              </Text>
            )}
          </Text>
        </Box>
      </Fragment>
    </Box>
  );
};
