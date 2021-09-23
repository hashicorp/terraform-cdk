import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsoAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sso_assignment.html#id DataAwsccSsoAssignment#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sso_assignment.html awscc_sso_assignment}
*/
export declare class DataAwsccSsoAssignment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sso_assignment.html awscc_sso_assignment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsoAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsoAssignmentConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceArn(): string;
    get permissionSetArn(): string;
    get principalId(): string;
    get principalType(): string;
    get targetId(): string;
    get targetType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
