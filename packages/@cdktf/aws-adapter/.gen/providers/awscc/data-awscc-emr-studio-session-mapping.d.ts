import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html#id DataAwsccEmrStudioSessionMapping#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html awscc_emr_studio_session_mapping}
*/
export declare class DataAwsccEmrStudioSessionMapping extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html awscc_emr_studio_session_mapping} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrStudioSessionMappingConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEmrStudioSessionMappingConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get identityName(): string;
    get identityType(): string;
    get sessionPolicyArn(): string;
    get studioId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
