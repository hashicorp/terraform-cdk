import React from 'react';
import { Text, Box, Color } from 'ink'
import { PlannedResource, PlannedResourceAction } from "../models/terraform"

interface PlanElementStatusProps {
  action: PlannedResourceAction;
}

export const PlanElementStatus = ({action}: PlanElementStatusProps) => {
  let actionSymbol: string;
  let color: string;

  switch(action) {
    case PlannedResourceAction.CREATE:
      actionSymbol = '+';
      color = 'green'
      break;
    case PlannedResourceAction.UPDATE:
      actionSymbol = '~';
      color = 'yellow'
      break;
    case PlannedResourceAction.DELETE:
      actionSymbol = '-';
      color = 'red'
      break;
    case PlannedResourceAction.READ:
      actionSymbol = '~';
      color = 'cyan'
      break;
    case PlannedResourceAction.NO_OP:
      actionSymbol = '~';
      color = 'cyan'
      break;
  }

  return(<Color keyword={color}><Text>{ actionSymbol }&nbsp;</Text></Color>)
}

interface PlanElementProps {
  resource: PlannedResource;
}

export const PlanElement = ({resource}: PlanElementProps) => (
  <Box key={resource.id}>
    <PlanElementStatus action={resource.action}/>
    <Text>{ resource.id }</Text>
  </Box>
)