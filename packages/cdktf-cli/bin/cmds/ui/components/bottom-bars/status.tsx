import React from "react";
import { Text, Box } from "ink";
import { ProjectUpdate } from "../../../../../lib/index";
import Spinner from "ink-spinner";

type Props = {
  done: boolean;
  latestUpdate?: ProjectUpdate;
  errorMessage?: string;
  children?: any;
};

type Status = {
  text: string;
  color?: string;
  showSpinner?: boolean;
};

function getStatus({
  latestUpdate,
  done,
  errorMessage,
}: Omit<Props, "children">): Status {
  if (errorMessage) {
    return {
      text: errorMessage,
      color: "red",
      showSpinner: false,
    };
  }

  if (done) {
    return {
      text: "Done",
      color: "green",
      showSpinner: false,
    };
  }

  switch (latestUpdate?.type) {
    case undefined:
      return {
        text: "Initializing",
        showSpinner: true,
      };

    case "synthesizing":
    case "synthesized":
      return {
        text: "Synthesizing",
        showSpinner: true,
      };

    case "planning":
    case "planned":
      return {
        text: "Planning",
        showSpinner: true,
      };

    case "deploy update":
    case "deploying":
    case "deployed":
      return {
        text: "Deploying",
        showSpinner: true,
      };

    case "destroy update":
    case "destroying":
    case "destroyed":
      return {
        text: "Destroying",
        showSpinner: true,
      };

    default:
      return {
        text: `An unknown status occured: {status}`,
        showSpinner: false,
        color: "red",
      };
  }
}

export function StatusBottomBar({
  latestUpdate,
  done,
  errorMessage,
  children,
}: Props) {
  if (done && children) {
    return children;
  }

  const { text, showSpinner, color } = getStatus({
    latestUpdate,
    done,
    errorMessage,
  });

  if (showSpinner) {
    return (
      <Box>
        <Box marginRight={2}>
          <Text color={color}>
            <Spinner type="dots" />
          </Text>
        </Box>
        <Box>
          <Text bold>{text}</Text>
        </Box>
      </Box>
    );
  }

  return <Text color={color}>{text}</Text>;
}
