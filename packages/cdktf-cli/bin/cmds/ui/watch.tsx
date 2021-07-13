/* eslint-disable no-control-regex */
import React, { useRef, useState, useCallback, useEffect } from "react";
import { Status, useTerraform, useTerraformState } from "./terraform-context";
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
  const { synth, deploy } = useTerraform({
    targetDir,
    targetStack,
    synthCommand,
  });
  // TODO: use some statemachine to only run one synth at a time
  const queueSynth = useCallback(() => {
    synth(true);
  }, [synth]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const queueDeployRef = useRef<{ callback: () => void }>({ callback: () => {} });

  const queueDeploy = useCallback(() => {
    if (state.status === Status.SYNTHESIZED) {
      console.log("GOGOGO deploy()");
      deploy();
    } else {
      // requeue
      console.log(`deferred deploy as status was ${state.status}`);

      setTimeout(queueDeployRef.current.callback, 500);
    }
  }, [deploy, state.status]);

  useEffect(() => { queueDeployRef.current.callback = queueDeploy }, [queueDeploy]);

  const [lastStartTime, setLastStartTime] = useState(0);
  const [lastSynthTime, setLastSynthTime] = useState(0);

  useEffect(() => {
    if (state.status === Status.SYNTHESIZING) {
      setLastStartTime(Date.now());
    } else if (state.status === Status.SYNTHESIZED) {
      setLastSynthTime(Date.now() - lastStartTime);
    }
  }, [state.status]);

  useEffect(() => {
    const watcher = chokidar
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
      .on("change", (path) => {
        console.log(`path changed: ${path}`);
        queueSynth();
      });
    return function cleanup() {
      watcher.close();
    };
  }, []);

  // watch synth output and deploy
  useEffect(() => {
    const watcher = chokidar
      .watch("./cdktf.out", {
        ignored: ["**/.terraform", "**/.terraform.lock.hcl", "*/*/*/plan"],
      })
      .on("all", (evt, path) => {
        // console.log({evt, path});
      })
      .on("change", (path) => {
        console.log(`deploy: path changed: ${path}`);
        queueDeploy();
      });
    return function cleanup() {
      watcher.close();
    };
  }, []);

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
        <Text>lastSynthTime: {lastSynthTime}</Text>
        <Newline />
      </Text>
    </Box>
  );
};
