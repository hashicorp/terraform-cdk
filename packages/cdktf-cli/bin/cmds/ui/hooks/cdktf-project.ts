import { useEffect, useState } from "react";
import { CdktfProject, ProjectUpdate } from "../../../../lib/";
import { NestedTerraformOutputs } from "../../../../lib/output";

export type LogEntry = {
  content: string;
  id: string;
  stackName: string;
};

type CdktfProjectOpts = {
  autoApprove?: boolean;
  onOutputsRetrieved?: (outputs: any) => void;
  outDir: string;
  synthCommand: string;
};

export function useCdktfProject<T>(
  opts: CdktfProjectOpts,
  projectCallback: (project: CdktfProject) => Promise<T>
) {
  const [projectUpdate, setProjectUpdate] = useState<ProjectUpdate>();
  const [done, setDone] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [id, setID] = useState<number>(0);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [outputs, setOutputs] = useState<NestedTerraformOutputs>();
  const [returnValue, setReturnValue] = useState<T>();
  const [stackName, setStackName] = useState<string>();

  useEffect(() => {
    const project = new CdktfProject({
      outDir: opts.outDir,
      synthCommand: opts.synthCommand,
      autoApprove: opts.autoApprove,
      onUpdate: (update: ProjectUpdate) => {
        setStackName(project.stackName || "");
        setProjectUpdate(update);

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

    projectCallback(project).then(
      (value) => {
        setReturnValue(value);
        setDone(true);
      },
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return {
    done,
    errorMessage,
    logEntries,
    outputs,
    projectUpdate,
    returnValue,
    stackName,
  };
}
