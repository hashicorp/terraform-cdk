import { useApp } from "ink";
import { useEffect, useState } from "react";
import { CdktfProject, ProjectUpdate } from "../../../../lib/";
import { CdktfStack } from "../../../../lib/cdktf-stack";
import { NestedTerraformOutputs } from "../../../../lib/output";

export type LogEntry = {
  content: string;
  id: string;
  stackName: string;
};

type CdktfProjectOpts = {
  onOutputsRetrieved?: (outputs: any) => void;
  outDir: string;
  synthCommand: string;
};

export type Status =
  | {
      type: "starting";
    }
  | {
      type: "synthesizing";
    }
  | {
      type: "running";
      inProgress: CdktfStack[];
      finished: CdktfStack[];
      pending: CdktfStack[];
    }
  | {
      type: "waiting for approval of stack";
      stackName: string;
      approve: () => void;
      dismiss: () => void;
      stop: () => void;
    }
  | {
      type: "done";
    };

export function useCdktfProject<T>(
  opts: CdktfProjectOpts,
  projectCallback: (project: CdktfProject) => Promise<T>
) {
  const { exit } = useApp();
  const [id, setID] = useState<number>(0);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [outputs, setOutputs] = useState<NestedTerraformOutputs>();
  const [returnValue, setReturnValue] = useState<T>();
  const [status, setStatus] = useState<Status>({ type: "starting" });

  useEffect(() => {
    const project = new CdktfProject({
      outDir: opts.outDir,
      synthCommand: opts.synthCommand,
      onUpdate: (update: ProjectUpdate) => {
        if (["synthesizing", "synthesized"].includes(update.type)) {
          setStatus({ type: "synthesizing" });
        } else if (update.type === "waiting for approval") {
          setStatus({
            type: "waiting for approval of stack",
            stackName: update.stackName,
            approve: update.approve,
            dismiss: update.dismiss,
            stop: update.stop,
          });
        } else {
          const inProgress = project.stacksToRun.filter((s) => s.isRunning);
          const finished = project.stacksToRun.filter((s) => s.isDone);
          const pending = project.stacksToRun.filter((s) => s.isPending);
          setStatus({ type: "running", inProgress, finished, pending });
        }

        if (update.type === "deployed" || update.type === "outputs fetched") {
          setOutputs(update.outputsByConstructId);
          if (opts.onOutputsRetrieved) {
            opts.onOutputsRetrieved(update.outputsByConstructId);
          }
        }
      },
      onLog: ({
        stackName,
        message,
      }: {
        stackName: string;
        message: string;
      }) => {
        setLogEntries((prev) => [
          ...prev,
          { id: `${stackName}-${id}`, stackName, content: message },
        ]);
        setID((current) => current + 1);
      },
    });

    const onAbort = () => {
      project.hardAbort();
    };
    process.on("SIGINT", onAbort);
    process.on("SIGTERM", onAbort);
    process.on("SIGQUIT", onAbort);

    projectCallback(project)
      .then((value) => {
        setReturnValue(value);
        setStatus({ type: "done" });
      })
      .catch((err) => {
        exit(err);
      });
  }, []);

  return {
    done: status.type === "done", // TODO: replace boolean done flag with this
    logEntries,
    outputs,
    returnValue,
    status,
  };
}
