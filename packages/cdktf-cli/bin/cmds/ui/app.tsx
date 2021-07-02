/* eslint-disable no-control-regex */
import React, { ReactNode } from "react";
import { TerraformProvider } from "./terraform-context";
import { useTerraformState } from "./terraform-context";
import { useApp } from "ink";

interface TerraformErrorProps {
  children: ReactNode;
}

export const TerraformErrors: React.FunctionComponent<TerraformErrorProps> = ({
  children,
}: TerraformErrorProps): React.ReactElement => {
  const { errors } = useTerraformState();
  const { exit } = useApp();

  if (errors) {
    const errorMessages = errors.map((e: any) => e.message);
    exit(new Error(errorMessages.join(", ")));
    return <></>;
  }

  return <>{children}</>;
};

interface AppProps {
  children?: ReactNode;
}
export const App: React.FunctionComponent<AppProps> = ({
  children,
}: AppProps): React.ReactElement => {
  return (
    <TerraformProvider>
      <TerraformErrors>{children}</TerraformErrors>
    </TerraformProvider>
  );
};
