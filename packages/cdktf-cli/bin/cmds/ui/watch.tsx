/* eslint-disable no-control-regex */
import React, { useState, useCallback, useEffect } from "react";
import { useTerraform, Status, useTerraformState } from "./terraform-context";
import { Text, Box, Newline } from "ink";
import chokidar from "chokidar";

interface WatchConfig {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  autoApprove: boolean;
}

export const Watch = ({
  targetDir,
  targetStack,
  synthCommand,
  autoApprove,
}: WatchConfig): React.ReactElement => {
  const state = useTerraformState();
  const { synth } = useTerraform({
    targetDir,
    targetStack,
    synthCommand,
    autoApprove,
  });
  // TODO: use some statemachine
  const queueSynth = useCallback(() => {
    const x = synth();
    console.log(x);
  }, [synth]);

  useEffect(() => {
    chokidar
      .watch(".", {
        ignored: [
          "node_modules/**",
          ".gen",
          "cdktf.out",
          "*.d.ts",
          "*.js",
          "terraform.demo-cdktf-ts-docker.tfstate",
        ],
      })
      .on("all", (event, path) => {
        console.log(`${event} ${path}`);
        // addEvent(`${event} ${path}`);
      })
      .on("change", (path) => {
        console.log(`path changed: ${path}`);
        queueSynth();
      });
  }, []);

  // todo: watcher on cdktf.out dir that does diff and then deploys

  return (
    <Box>
      <Text>
        <Text>watch command</Text>
        <Newline />
        <Text>targetDir: {targetDir}</Text>
        <Newline />
        <Text>targetStack: {targetStack}</Text>
        <Newline />
        <Text>synthCommand: {synthCommand}</Text>
        <Newline />
        <Text>autoApprove: {autoApprove}</Text>
        <Newline />
        <Text>status: {state.status}</Text>
        <Newline />
      </Text>
    </Box>
  );
};
