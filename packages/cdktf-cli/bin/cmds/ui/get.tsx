import React, { Fragment } from "react";

import { Text, Box, useApp, Newline } from "ink";
import Spinner from "ink-spinner";
import { Language, GetOptions, config } from "@cdktf/provider-generator";
import { sendTelemetry } from "../../../lib/checkpoint";
import { get, GetStatus as Status } from "../../../lib";

interface GetConfig {
  codeMakerOutput: string;
  language: Language;
  constraints: config.TerraformDependencyConstraint[];
}

export const Get = ({
  codeMakerOutput,
  language,
  constraints,
}: GetConfig): React.ReactElement => {
  const [currentStatus, setCurrentStatus] = React.useState<Status>(
    Status.STARTING
  );
  const { exit } = useApp();

  const constructsOptions: GetOptions = {
    codeMakerOutput: codeMakerOutput,
    targetLanguage: language,
  };

  React.useEffect(() => {
    const runGet = async () => {
      try {
        await get({
          constraints,
          constructsOptions,
          onUpdate: setCurrentStatus,
          reportTelemetry: (payload: {
            targetLanguage: string;
            trackingPayload: Record<string, any>;
          }) =>
            sendTelemetry("get", {
              language: payload.targetLanguage,
              ...payload.trackingPayload,
            }),
        });
      } catch (e) {
        console.error(e);
        exit(e);
      }
    };
    runGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once, we don't expect props to change

  React.useEffect(() => {
    if (currentStatus === Status.DONE) {
      exit();
    }
    if (currentStatus === Status.ERROR) {
      exit(
        new Error(
          `ERROR: synthesis failed, app expected to create "${codeMakerOutput}"`
        )
      );
    }
  }, [currentStatus]);

  const isGenerating: boolean = currentStatus != Status.DONE;
  const statusText = `${currentStatus}...`;
  const jsonTerraformOutput = (
    <Text>
      Generated <Text color="green">{language}</Text> constructs in the output
      directory: <Text bold>{codeMakerOutput}</Text>
      {language === Language.GO && (
        <>
          <Newline />
          <Newline />
          <Text>
            The generated code depends on{" "}
            <Text color="cyan">jsii-runtime-go</Text>. If you haven&apos;t yet
            installed it, you can run{" "}
            <Text color="blueBright">go mod tidy</Text> to automatically install
            it.
          </Text>
        </>
      )}
    </Text>
  );

  return (
    <Box>
      {isGenerating ? (
        <Fragment>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          <Box paddingLeft={1}>
            <Text>{statusText}</Text>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box>{jsonTerraformOutput}</Box>
        </Fragment>
      )}
    </Box>
  );
};
