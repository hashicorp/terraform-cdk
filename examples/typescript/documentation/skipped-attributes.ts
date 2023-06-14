// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:skipped-attributes

import * as constructs from "constructs";
import { TerraformStack } from "cdktf";

import { AwsProvider } from "./.gen/providers/aws/provider";
import { QuicksightTemplate } from "./.gen/providers/aws/quicksight-template";

export class SkippedAttributesStack extends TerraformStack {
  constructor(scope: constructs.Construct, name: string) {
    super(scope, name);
    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new QuicksightTemplate(this, "example", {
      definition: {
        data_set_configuration: [
          {
            data_set_schema: {
              column_schema_list: [
                {
                  data_type: "STRING",
                  name: "Column1",
                },
                {
                  data_type: "INTEGER",
                  name: "Column2",
                },
              ],
            },
            placeholder: "1",
          },
        ],
        sheets: [
          {
            sheetId: "Test1",
            title: "Test",
            visuals: [
              {
                bar_chart_visual: {
                  chart_configuration: {
                    field_wells: {
                      bar_chart_aggregated_field_wells: {
                        category: [
                          {
                            categorical_dimension_field: {
                              column: {
                                column_name: "Column1",
                                data_set_identifier: "1",
                              },
                              field_id: "1",
                            },
                          },
                        ],
                        values: [
                          {
                            numerical_measure_field: {
                              aggregation_function: {
                                simple_numerical_aggregation: "SUM",
                              },
                              column: {
                                column_name: "Column2",
                                data_set_identifier: "1",
                              },
                              field_id: "2",
                            },
                          },
                        ],
                      },
                    },
                  },
                  visual_id: "BarChart",
                },
              },
            ],
          },
        ],
      },
      name: "example-name",
      templateId: "example-id",
      versionDescription: "version",
    });
  }
}
// DOCS_BLOCK_END:skipped-attributes
