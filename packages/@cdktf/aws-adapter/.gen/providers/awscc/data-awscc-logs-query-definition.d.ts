import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/logs_query_definition.html#id DataAwsccLogsQueryDefinition#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_query_definition.html awscc_logs_query_definition}
*/
export declare class DataAwsccLogsQueryDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_query_definition.html awscc_logs_query_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsQueryDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLogsQueryDefinitionConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get logGroupNames(): string[];
    get name(): string;
    get queryDefinitionId(): string;
    get queryString(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
