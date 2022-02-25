import React from "react";
import { Confirm } from "../confirm";

type Props = {
  onApprove: () => void;
  onReject: () => void;
};
export function ApproveBottomBar({ onApprove }: Props) {
  return <Confirm onApprove={onApprove} />;
}
