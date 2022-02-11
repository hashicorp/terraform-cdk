import { Box, Text } from "ink";
import React, { useEffect } from "react";

function extractError(error: any) {
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (error && typeof error === "object" && "stderr" in error) {
    return error.stderr;
  }

  return JSON.stringify(error);
}

export function ErrorComponent({
  error,
  setExitCode = true,
}: {
  error: any;
  setExitCode?: boolean;
}) {
  useEffect(() => {
    if (setExitCode) {
      process.exitCode = 1;
    }
  });
  return (
    <Box>
      <Text>An error occured: {extractError(error)}</Text>
    </Box>
  );
}
