import { useEffect, useState } from "react";
import { CdktfProject, ProjectUpdate } from "../../../../lib/";

export type LogEntry = {
  content: string;
  id: string;
  stackName: string;
};

type CdktfProjectOpts = {
  outDir: string;
  synthCommand: string;
};
export function useCdktfProject<T>(
  opts: CdktfProjectOpts,
  projectCallback: (project: CdktfProject) => Promise<T>
) {
  const [projectUpdate, setProjectUpdate] = useState<ProjectUpdate>();
  const [stackName, setStackName] = useState<string>();
  const [id, setID] = useState<number>(0);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [done, setDone] = useState<boolean>(false);
  const [returnValue, setReturnValue] = useState<T>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    const project = new CdktfProject({
      outDir: opts.outDir,
      synthCommand: opts.synthCommand,
      onUpdate: (update: ProjectUpdate) => {
        setStackName(project.stackName || "");
        setProjectUpdate(update);
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
    projectUpdate,
    stackName,
    logEntries,
    returnValue,
    errorMessage,
    done,
  };
}
