// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:skipped-attributes
using System.Collections.Generic;
using Constructs;
using HashiCorp.Cdktf;
using aws.S3Bucket;
using aws.Provider;
using Amazon.JSII.Runtime;

namespace Examples
{
   

    class SkippedAttributesStack : TerraformStack
    {
        public SkippedAttributesStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "Aws", new AwsProviderConfig
            {
                Region = "us-east-1"
            });
          
            new QuicksightTemplate.QuicksightTemplate(this, "example", new QuicksightTemplateConfig {
                Definition = new Dictionary<string, IDictionary<string, object>[]> {
                    { "dataSetConfiguration", new [] { new Struct {
                        data_set_schema = new Struct {
                            column_schema_list = new [] { new Struct {
                                data_type = "STRING",
                                Name = "Column1"
                            }, new Struct {
                                data_type = "INTEGER",
                                Name = "Column2"
                            } }
                        },
                        Placeholder = "1"
                    } } },
                    { "sheets", new [] { new Struct {
                        SheetId = "Test1",
                        Title = "Test",
                        Visuals = new [] { new Struct {
                            BarChartVisual = new Struct {
                                ChartConfiguration = new Struct {
                                    FieldWells = new Struct {
                                        BarChartAggregatedFieldWells = new Struct {
                                            Category = new [] { new Struct {
                                                CategoricalDimensionField = new Struct {
                                                    Column = new Struct {
                                                        ColumnName = "Column1",
                                                        DataSetIdentifier = "1"
                                                    },
                                                    FieldId = "1"
                                                }
                                            } },
                                            Values = new [] { new Struct {
                                                NumericalMeasureField = new Struct {
                                                    AggregationFunction = new Struct {
                                                        SimpleNumericalAggregation = "SUM"
                                                    },
                                                    Column = new Struct {
                                                        ColumnName = "Column2",
                                                        DataSetIdentifier = "1"
                                                    },
                                                    FieldId = "2"
                                                }
                                            } }
                                        }
                                    }
                                },
                                VisualId = "BarChart"
                            }
                        } }
                    } } }
                },
                Name = "example-name",
                TemplateId = "example-id",
                VersionDescription = "version"
            });
        }
    }
}
// DOCS_BLOCK_END:skipped-attributes