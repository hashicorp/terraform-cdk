/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React, { Fragment } from "react";

import { Text, Box, useApp, Newline } from "ink";
import Spinner from "ink-spinner";
import { GetOptions } from "@cdktf/provider-generator";
import {
  Language,
  sendTelemetry,
  TerraformDependencyConstraint,
} from "@cdktf/commons";
import { get, GetStatus as Status } from "@cdktf/cli-core";

interface GetConfig {
  codeMakerOutput: string;
  language: Language;
  constraints: TerraformDependencyConstraint[];
  parallelism: number;
  force?: boolean;
  silent?: boolean;
  providerSchemaCachePath?: string;
}

export const Get = ({
  codeMakerOutput,
  language,
  constraints,
  parallelism,
  force,
  silent = false,
  providerSchemaCachePath,
}: GetConfig): React.ReactElement => {
  const [currentStatus, setCurrentStatus] = React.useState<Status>(
    Status.STARTING
  );
  const { exit } = useApp();

  const constructsOptions: GetOptions = {
    codeMakerOutput: codeMakerOutput,
    targetLanguage: language,
    jsiiParallelism: parallelism,
  };

  React.useEffect(() => {
    const runGet = async () => {
      try {
        await get({
          constraints,
          constructsOptions,
          cleanDirectory: force,
          onUpdate: setCurrentStatus,
          providerSchemaCachePath,
          reportTelemetry: async (payload) =>
            await sendTelemetry("get", {
              language: payload.targetLanguage,
              ...payload.trackingPayload,
            }),
        });
      } catch (e: any) {
        console.error(e);
        exit(new Error(e));
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

  if (silent) {
    return <Text></Text>;
  }

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
