import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html#id DataAwsccIotsitewiseAccessPolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser extends cdktf.ComplexComputedList {
    get id(): string;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity extends cdktf.ComplexComputedList {
    get iamRole(): any;
    get iamUser(): any;
    get user(): any;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal extends cdktf.ComplexComputedList {
    get id(): string;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject extends cdktf.ComplexComputedList {
    get id(): string;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject): any;
export declare class DataAwsccIotsitewiseAccessPolicyAccessPolicyResource extends cdktf.ComplexComputedList {
    get portal(): any;
    get project(): any;
}
export declare function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html awscc_iotsitewise_access_policy}
*/
export declare class DataAwsccIotsitewiseAccessPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html awscc_iotsitewise_access_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAccessPolicyConfig);
    get accessPolicyArn(): string;
    get accessPolicyId(): string;
    get accessPolicyIdentity(): any;
    get accessPolicyPermission(): string;
    get accessPolicyResource(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
