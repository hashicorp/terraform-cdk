import React from "react";
import { Confirm } from "../confirm";

type Props = {
  onApprove: () => void;
};
export function ApproveBottomBar({ onApprove }: Props) {
  return <Confirm onApprove={onApprove} />;
}
