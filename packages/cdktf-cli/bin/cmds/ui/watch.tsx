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

  if (status === "IDLE") {
    return (
      <Box>
        {/* empty Text is somehow needed for showing/hiding
         Spinner component when status changes */}
        <Text></Text>
        <Box>{statusText}</Box>
      </Box>
    );
  }
  return (
    <Box>
      <Text color="green">
        <Spinner type="dots" />
      </Text>
      <Box paddingLeft={1}>{statusText}</Box>
    </Box>
  );
};

const DeployedResource = ({
  resource,
  columns,
}: {
  resource: GraphQLWatchState["resources"][number];
  columns: number;
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
  columns,
}: {
  resources?: GraphQLWatchState["resources"];
  columns: number;
}) => {
  const inProgressResources = useMemo(
    () => resources?.filter(resourceIsInProgress) || [],
    [resources]
  );

  return (
    <Box flexDirection="column">
      {inProgressResources.map((r) => (
        <DeployedResource key={r.id} columns={columns} resource={r} />
      ))}
    </Box>
  );
};

const DeployedResources = ({
  resources,
  columns,
}: {
  resources?: GraphQLWatchState["resources"];
  columns: number;
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
      {(r) => <DeployedResource key={r.id} resource={r} columns={columns} />}
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
  const [columns] = useStdoutDimensions();
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

  return (
    <>
      <DeployedResources resources={data?.watch.resources} columns={columns} />
      {data?.watch.error && <ErrorComponent error={data.watch.error} />}
      <Box flexDirection="column">
        {status === "DEPLOYING" && (
          <DeployingResources
            resources={data?.watch.resources}
            columns={columns}
          />
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
