import React, { Fragment } from "react";
import { Text, Box } from "ink";
import * as fs from "fs";
import Spinner from "ink-spinner";
import { convert } from "@cdktf/hcl2cdk";

interface ConvertConfig {
  language: "typescript";
  file?: string;
}
type State =
  | { type: "init" }
  | { type: "processing" }
  | { type: "done"; code: string }
  | { type: "error"; error: string };

function readStreamAsString(stream: typeof process.stdin): Promise<string> {
  return new Promise((ok, ko) => {
    if (stream.isTTY) {
      ko(
        "No stdin was passed, please use it like this: cat main.tf | cdktf convert > imported.ts"
      );
    } else {
      let string = "";
      stream.on("data", (data) => (string += data.toString()));

      stream.on("close", () => ok(string));
      stream.on("error", (err) => ko(err));
    }
  });
}

function useConversion(
  codeStream: typeof process.stdin,
  language: string,
  file?: string
) {
  const [state, setState] = React.useState<State>({ type: "init" });

  React.useEffect(() => {
    setState({ type: "processing" });
    readStreamAsString(codeStream).then(
      (code) => {
        convert("stdin.tf", code, { language: language as any }).then(
          ({ all }) => {
            setState({ type: "done", code: all });
            if (file) {
              fs.writeFileSync(file, all, "utf8");
            }
          },
          (err) => setState({ type: "error", error: err.toString() })
        );
      },
      (err) => setState({ type: "error", error: err.toString() })
    );
  }, [codeStream, language]);

  return state;
}

export const Convert = ({
  language,
  file,
}: ConvertConfig): React.ReactElement => {
  const state = useConversion(process.stdin, language, file);

  switch (state.type) {
    case "error":
      return (
        <Box>
          <Text color="red">{state.error}</Text>
        </Box>
      );
    case "processing":
      return (
        <Box>
          <Fragment>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            <Box paddingLeft={1}>
              <Text>Transforming...</Text>
            </Box>
          </Fragment>
        </Box>
      );
    case "done":
      if (file) {
        return <Text color="green">Done converting, please see {file}</Text>;
      } else {
        return <Text>{state.code}</Text>;
      }
    default:
      return <Box />;
  }
};
