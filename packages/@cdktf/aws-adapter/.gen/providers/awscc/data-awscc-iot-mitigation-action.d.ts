import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotMitigationActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html#id DataAwsccIotMitigationAction#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams extends cdktf.ComplexComputedList {
    get overrideDynamicGroups(): any;
    get thingGroupNames(): string[];
}
export declare function dataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams): any;
export declare class DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams extends cdktf.ComplexComputedList {
    get logLevel(): string;
    get roleArnForLogging(): string;
}
export declare function dataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams): any;
export declare class DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams extends cdktf.ComplexComputedList {
    get topicArn(): string;
}
export declare function dataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams): any;
export declare class DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams extends cdktf.ComplexComputedList {
    get templateName(): string;
}
export declare function dataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any;
export declare class DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams extends cdktf.ComplexComputedList {
    get action(): string;
}
export declare function dataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams): any;
export declare class DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams extends cdktf.ComplexComputedList {
    get action(): string;
}
export declare function dataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams): any;
export declare class DataAwsccIotMitigationActionActionParams extends cdktf.ComplexComputedList {
    get addThingsToThingGroupParams(): any;
    get enableIoTLoggingParams(): any;
    get publishFindingToSnsParams(): any;
    get replaceDefaultPolicyVersionParams(): any;
    get updateCaCertificateParams(): any;
    get updateDeviceCertificateParams(): any;
}
export declare function dataAwsccIotMitigationActionActionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParams): any;
export declare class DataAwsccIotMitigationActionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotMitigationActionTagsToTerraform(struct?: DataAwsccIotMitigationActionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html awscc_iot_mitigation_action}
*/
export declare class DataAwsccIotMitigationAction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html awscc_iot_mitigation_action} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotMitigationActionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotMitigationActionConfig);
    get actionName(): string;
    get actionParams(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get mitigationActionArn(): string;
    get mitigationActionId(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
