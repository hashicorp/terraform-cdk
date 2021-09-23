import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codestarconnections_connection.html#id DataAwsccCodestarconnectionsConnection#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodestarconnectionsConnectionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCodestarconnectionsConnectionTagsToTerraform(struct?: DataAwsccCodestarconnectionsConnectionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codestarconnections_connection.html awscc_codestarconnections_connection}
*/
export declare class DataAwsccCodestarconnectionsConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codestarconnections_connection.html awscc_codestarconnections_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodestarconnectionsConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodestarconnectionsConnectionConfig);
    get connectionArn(): string;
    get connectionName(): string;
    get connectionStatus(): string;
    get hostArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ownerAccountId(): string;
    get providerType(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
