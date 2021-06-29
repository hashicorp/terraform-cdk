import React from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import {
  DeployingResourceApplyState,
  DeployingResource,
} from "../models/terraform";
import { ResourceName } from "./resource-name";

interface DeployingElementStatusProps {
  resource: DeployingResource;
}

export const DeployingElementStatus = ({
  resource,
}: DeployingElementStatusProps) => {
  let actionSymbol: string;
  let color: string;

  switch (resource.applyState) {
    case DeployingResourceApplyState.CREATING:
      actionSymbol = "+";
      color = "green";
      break;
    case DeployingResourceApplyState.CREATED:
      actionSymbol = "\u2714";
      color = "green";
      break;
    case DeployingResourceApplyState.UPDATING:
      actionSymbol = "~";
      color = "yellow";
      break;
    case DeployingResourceApplyState.UPDATED:
      actionSymbol = "\u2714";
      color = "yellow";
      break;
    case DeployingResourceApplyState.DESTROYING:
      actionSymbol = "-";
      color = "red";
      break;
    case DeployingResourceApplyState.DESTROYED:
      actionSymbol = "\u2714";
      color = "red";
      break;
    case DeployingResourceApplyState.WAITING:
      actionSymbol = "~";
      color = "cyan";
      break;
    case DeployingResourceApplyState.SUCCESS:
      actionSymbol = "\u2714";
      color = "green";
      break;
    case DeployingResourceApplyState.ERROR:
      actionSymbol = "x";
      color = "red";
      break;
  }

  const inProgress = [
    DeployingResourceApplyState.CREATING,
    DeployingResourceApplyState.UPDATING,
    DeployingResourceApplyState.DESTROYING,
  ].includes(resource.applyState);

  return (
    <>
      {inProgress ? (
        <Text color={color}>
          <Spinner />
          &nbsp;
        </Text>
      ) : (
        <Text color={color}>{actionSymbol}&nbsp;</Text>
      )}
    </>
  );
};

interface DeployingElementProps {
  resource: DeployingResource;
  stackName?: string;
}

export const DeployingElement = ({
  resource,
  stackName,
}: DeployingElementProps) => (
  <Box key={resource.id}>
    <DeployingElementStatus resource={resource} />
    <ResourceName name={resource.id} stackName={stackName} />
  </Box>
);
