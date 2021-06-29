import React from "react";
import { Text } from "ink";
import { PlannedResource, PlannedResourceAction } from "../models/terraform";
import { ResourceName } from "./resource-name";

interface PlanElementStatusProps {
  action: PlannedResourceAction;
}

export const PlanElementStatus = ({ action }: PlanElementStatusProps) => {
  let actionSymbol: string;
  let color: string;

  switch (action) {
    case PlannedResourceAction.CREATE:
      actionSymbol = "+";
      color = "green";
      break;
    case PlannedResourceAction.UPDATE:
      actionSymbol = "~";
      color = "yellow";
      break;
    case PlannedResourceAction.DELETE:
      actionSymbol = "-";
      color = "red";
      break;
    case PlannedResourceAction.READ:
      actionSymbol = "~";
      color = "cyan";
      break;
    case PlannedResourceAction.NO_OP:
      actionSymbol = "~";
      color = "cyan";
      break;
  }

  return <Text color={color}>{actionSymbol}&nbsp;</Text>;
};

interface PlanElementProps {
  resource: PlannedResource;
  stackName?: string;
}

export const PlanElement = ({ resource, stackName }: PlanElementProps) => (
  <>
    <PlanElementStatus action={resource.action} />
    <ResourceName name={resource.id} stackName={stackName} />
  </>
);
