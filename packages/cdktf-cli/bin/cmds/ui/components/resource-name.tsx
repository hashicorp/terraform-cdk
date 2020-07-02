import React from 'react';
import { Text, Box, Color } from 'ink'

export interface ResourceNameConfig {
  name: string;
}

export const ResourceName = ({name}: ResourceNameConfig) => {
  const prettyName = name.replace(/(_[A-F\d]{8})$/, '')

  if (prettyName === name) {
    return <Text>{name}</Text>;
  } else {
    const [resource, resourceName] = prettyName.split('.')
    return(
      <Box flexDirection="column" width={80}>
        <Box>
          <Box width={"25%"}>
            <Text>{resource.toUpperCase()}</Text>
          </Box>
          <Box paddingLeft={1} width={"25%"}>
            <Text>{resourceName}</Text>
          </Box>
          <Box paddingLeft={1} width={"50%"}>
            <Color gray>{name}</Color>
          </Box>
        </Box>
      </Box>
    )
  }
}
