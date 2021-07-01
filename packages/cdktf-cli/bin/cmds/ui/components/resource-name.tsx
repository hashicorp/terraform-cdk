import React from "react";
import { Text, Box } from "ink";

export interface ResourceNameConfig {
  name: string;
  stackName?: string;
}

export const ResourceName = ({ name, stackName }: ResourceNameConfig) => {
  const prettyName = name.replace(/(_[A-F\d]{8})$/, "");

  // eslint-disable-next-line prefer-const
  let [resource, resourceName] = prettyName.split(".");
  if (stackName != null && resourceName.startsWith(stackName)) {
    const [, ...path] = resourceName.split("_");
    resourceName = path.join("_");
  }

  return (
    <Box flexDirection="column" width={80}>
      <Box>
        <Box width={"25%"}>
          <Text>{resource.toUpperCase()}</Text>
        </Box>
        <Box paddingLeft={1} width={"25%"}>
          <Text>{resourceName}</Text>
        </Box>
        <Box paddingLeft={1} width={"50%"}>
          <Text color="gray">{name}</Text>
        </Box>
      </Box>
    </Box>
  );
};
