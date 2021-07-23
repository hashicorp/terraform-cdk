import React, { useEffect, useMemo, useState } from "react";
import { Text, Box, Static, Spacer } from "ink";
import { Props as TextProps } from "ink/build/components/Text";
import Spinner from "ink-spinner";
import stripAnsi from "strip-ansi";
import useStdoutDimensions from "ink-use-stdout-dimensions";
import { gql, useSubscription } from "@apollo/client";
import { GraphQLWatchState } from "../../../lib/server/util";
import format from "date-fns/format";

const StatusBox = ({
  status,
  stackName,
  error,
}: {
  status: string;
  stackName?: string;
  error?: GraphQLWatchState["error"];
}) => {
  const [didDeployAlready, setDidDeployAlready] = useState(false);
  useEffect(() => {
    if (status === "DEPLOYING" && !didDeployAlready) setDidDeployAlready(true);
  }, [didDeployAlready, status]);

  let statusText = <Text>{status}</Text>;
  const stack = stackName ? <Text color="blueBright">{stackName}</Text> : null;
  switch (status) {
    case "IDLE":
      statusText = (
        <Text>
          {didDeployAlready && !error && "Deployment done. "}
          Watching {stack}
          {stack && " "}for changes
        </Text>
      );
      break;
    case "DEPLOYING":
      statusText = <Text>Deploying {stack || "stack"}</Text>;
      break;
    case "SYNTHESIZING":
      statusText = <Text>Synthesizing {stack || "stack"}</Text>;
      break;
    case "INITIALIZING":
      statusText = <Text>Initializing Terraform for {stack || "stack"}</Text>;
      break;
    case "CONNECTING":
      statusText = <Text>Connecting</Text>;
      break;
  }
  return (
    <Box>
      {status === "IDLE" ? (
        <Text></Text>
      ) : (
        <Text color="green">
          <Spinner type="dots" />
        </Text>
      )}
      <Box paddingLeft={status === "IDLE" ? undefined : 1}>{statusText}</Box>
    </Box>
  );
};

const DeployedResource = ({
  resource,
}: {
  resource: GraphQLWatchState["resources"][number];
}) => {
  let color: TextProps["color"] | undefined = undefined;
  let icon: string | React.ReactNode = " ";
  switch (resource.deployState) {
    case "CREATING":
      color = "greenBright";
      icon = <Spinner type="dots" />;
      break;
    case "CREATED":
      color = "greenBright";
      icon = "+";
      break;
    case "UPDATING":
      icon = <Spinner type="dots" />;
      color = "yellowBright";
      break;
    case "UPDATED":
      color = "yellowBright";
      icon = "~";
      break;
    case "DESTROYING":
      icon = <Spinner type="dots" />;
      color = "redBright";
      break;
    case "DESTROYED":
      color = "redBright";
      icon = "-";
      break;
    case "WAITING":
      icon = <Spinner type="dots" />;
      break;
    case "ERROR":
    case "SUCCESS":
      break;
  }

  const [columns] = useStdoutDimensions();

  return (
    <Box width={columns}>
      <Text color={color}>
        {icon} {resource.id}
      </Text>
      <Spacer />
      <Text color="gray">{format(new Date(resource.changedAt), "pp")}</Text>
    </Box>
  );
};

const resourceIsInProgress = (
  resource: GraphQLWatchState["resources"][number]
) => {
  return ["WAITING", "UPDATING", "CREATING", "DESTROYING"].includes(
    resource.deployState
  );
};

const DeployingResources = ({
  resources,
}: {
  resources?: GraphQLWatchState["resources"];
}) => {
  const inProgressResources = useMemo(
    () => resources?.filter(resourceIsInProgress) || [],
    [resources]
  );

  return (
    <Box>
      {inProgressResources.map((r) => (
        <DeployedResource key={r.id} resource={r} />
      ))}
    </Box>
  );
};

const DeployedResources = ({
  resources,
}: {
  resources?: GraphQLWatchState["resources"];
}) => {
  const [finishedResourcesHistory, setFinishedResourcesHistory] = useState<
    GraphQLWatchState["resources"]
  >([]);

  useEffect(() => {
    const doneResources =
      resources?.filter((r) => !resourceIsInProgress(r)) || [];
    setFinishedResourcesHistory((hist) => {
      const newDoneResources = doneResources.filter(
        (newDone) =>
          // skips items that already exist with the same id and timestamp
          !hist.some(
            (existingDone) =>
              existingDone.id === newDone.id &&
              existingDone.changedAt === newDone.changedAt
          )
      );
      return hist.concat(newDoneResources);
    });
  }, [resources]);

  return (
    <Static items={finishedResourcesHistory}>
      {(r) => <DeployedResource key={r.id} resource={r} />}
    </Static>
  );
};

const ErrorComponent = ({
  error,
}: {
  error: NonNullable<GraphQLWatchState["error"]>;
}) => {
  if (!error.recoverable) {
    throw new Error(`${error.origin}: ${error.message}`);
  }
  return (
    <Text color="redBright">
      {error.origin}: {stripAnsi(error.message)}
    </Text>
  );
};

interface WatchConfig {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
}

const WATCH = gql`
  subscription Watch(
    $dir: String!
    $stack: String
    $cmd: String!
    $aprv: Boolean!
  ) {
    watch(
      inputs: {
        autoApprove: $aprv
        targetDir: $dir
        targetStack: $stack
        synthCommand: $cmd
      }
    ) {
      status
      stacks {
        name
      }
      resources {
        id
        action
        deployState
        changedAt
      }
      error {
        message
        recoverable
        origin
      }
    }
  }
`;

export const Watch = ({
  targetDir,
  targetStack,
  synthCommand,
  autoApprove,
}: WatchConfig): React.ReactElement => {
  const { error, data } = useSubscription(WATCH, {
    variables: {
      dir: targetDir,
      stack: targetStack,
      cmd: synthCommand,
      aprv: autoApprove,
    },
  });
  const watchedStackName =
    targetStack ||
    data?.watch.stacks.find((_: any, idx: number) => idx === 0)?.name;
  const status = data?.watch.status || "CONNECTING";

  if (error) console.error("uncaught error ", error);
  // TODO: display error if an error happened

  return (
    <>
      <DeployedResources resources={data?.watch.resources} />
      {data?.watch.error && <ErrorComponent error={data.watch.error} />}
      <Box flexDirection="column">
        {status === "DEPLOYING" && (
          <DeployingResources resources={data?.watch.resources} />
        )}
        <StatusBox
          status={status}
          stackName={watchedStackName}
          error={data?.watch.error}
        />
      </Box>
    </>
  );
};
