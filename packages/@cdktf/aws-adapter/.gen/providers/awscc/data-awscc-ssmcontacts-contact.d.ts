import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmcontactsContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html#id DataAwsccSsmcontactsContact#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo extends cdktf.ComplexComputedList {
    get channelId(): string;
    get retryIntervalInMinutes(): number;
}
export declare function dataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo): any;
export declare class DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo extends cdktf.ComplexComputedList {
    get contactId(): string;
    get isEssential(): any;
}
export declare function dataAwsccSsmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo): any;
export declare class DataAwsccSsmcontactsContactPlanTargets extends cdktf.ComplexComputedList {
    get channelTargetInfo(): any;
    get contactTargetInfo(): any;
}
export declare function dataAwsccSsmcontactsContactPlanTargetsToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargets): any;
export declare class DataAwsccSsmcontactsContactPlan extends cdktf.ComplexComputedList {
    get durationInMinutes(): number;
    get targets(): any;
}
export declare function dataAwsccSsmcontactsContactPlanToTerraform(struct?: DataAwsccSsmcontactsContactPlan): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html awscc_ssmcontacts_contact}
*/
export declare class DataAwsccSsmcontactsContact extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html awscc_ssmcontacts_contact} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmcontactsContactConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmcontactsContactConfig);
    get alias(): string;
    get arn(): string;
    get displayName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get plan(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
