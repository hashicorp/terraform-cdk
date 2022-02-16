import { Box, Text, useStderr } from "ink";
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
  fatal = true,
}: {
  error: any;
  fatal?: boolean;
}) {
  const { write } = useStderr();
  useEffect(() => {
    if (fatal) {
      process.exitCode = 1;
      write(`\n${extractError(error)}\n`);
    }
  }, []);

  return (
    <Box>
      <Text></Text>
    </Box>
  );
}
