/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import Table from "ink-table";

interface ProviderListProps {
  data: any[];
}

export const ProviderListTable = ({
  data,
}: ProviderListProps): React.ReactElement => {
  return <Table data={data} />;
};
