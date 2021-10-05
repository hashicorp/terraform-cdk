import React, { Fragment } from "react";
import * as fs from "fs-extra";
import { Text, Box, useApp, Newline } from "ink";
import Spinner from "ink-spinner";
import {
  Language,
  ConstructsMaker,
  GetOptions,
  config,
} from "@cdktf/provider-generator";
import { sendTelemetry } from "../../../lib/checkpoint";

enum Status {
  STARTING = "starting",
  DOWNLOADING = "downloading and generating modules and providers",
  DONE = "done",
}

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
    const get = async () => {
      try {
        await fs.remove(constructsOptions.codeMakerOutput);
        const constructsMaker = new ConstructsMaker(
          constructsOptions,
          constraints,
          (payload: {
            targetLanguage: string;
            trackingPayload: Record<string, any>;
          }) =>
            sendTelemetry("get", {
              language: payload.targetLanguage,
              ...payload.trackingPayload,
            })
        );
        setCurrentStatus(Status.DOWNLOADING);
        await constructsMaker.generate();
        setCurrentStatus(Status.DONE);
        if (!(await fs.pathExists(codeMakerOutput))) {
          console.error(
            `ERROR: synthesis failed, app expected to create "${codeMakerOutput}"`
          );
          process.exit(1);
        }
      } catch (e) {
        console.error(e);
        exit(e);
      }
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once, we don't expect props to change

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
