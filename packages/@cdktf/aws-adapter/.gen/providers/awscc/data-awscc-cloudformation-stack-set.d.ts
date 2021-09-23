import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html#id DataAwsccCloudformationStackSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudformationStackSetAutoDeployment extends cdktf.ComplexComputedList {
    get enabled(): any;
    get retainStacksOnAccountRemoval(): any;
}
export declare function dataAwsccCloudformationStackSetAutoDeploymentToTerraform(struct?: DataAwsccCloudformationStackSetAutoDeployment): any;
export declare class DataAwsccCloudformationStackSetOperationPreferences extends cdktf.ComplexComputedList {
    get failureToleranceCount(): number;
    get failureTolerancePercentage(): number;
    get maxConcurrentCount(): number;
    get maxConcurrentPercentage(): number;
    get regionConcurrencyType(): string;
    get regionOrder(): string[];
}
export declare function dataAwsccCloudformationStackSetOperationPreferencesToTerraform(struct?: DataAwsccCloudformationStackSetOperationPreferences): any;
export declare class DataAwsccCloudformationStackSetParameters extends cdktf.ComplexComputedList {
    get parameterKey(): string;
    get parameterValue(): string;
}
export declare function dataAwsccCloudformationStackSetParametersToTerraform(struct?: DataAwsccCloudformationStackSetParameters): any;
export declare class DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets extends cdktf.ComplexComputedList {
    get accounts(): string[];
    get organizationalUnitIds(): string[];
}
export declare function dataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets): any;
export declare class DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides extends cdktf.ComplexComputedList {
    get parameterKey(): string;
    get parameterValue(): string;
}
export declare function dataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides): any;
export declare class DataAwsccCloudformationStackSetStackInstancesGroup extends cdktf.ComplexComputedList {
    get deploymentTargets(): any;
    get parameterOverrides(): any;
    get regions(): string[];
}
export declare function dataAwsccCloudformationStackSetStackInstancesGroupToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroup): any;
export declare class DataAwsccCloudformationStackSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCloudformationStackSetTagsToTerraform(struct?: DataAwsccCloudformationStackSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html awscc_cloudformation_stack_set}
*/
export declare class DataAwsccCloudformationStackSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html awscc_cloudformation_stack_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudformationStackSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudformationStackSetConfig);
    get administrationRoleArn(): string;
    get autoDeployment(): any;
    get callAs(): string;
    get capabilities(): string[];
    get description(): string;
    get executionRoleName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get operationPreferences(): any;
    get parameters(): any;
    get permissionModel(): string;
    get stackInstancesGroup(): any;
    get stackSetId(): string;
    get stackSetName(): string;
    get tags(): any;
    get templateBody(): string;
    get templateUrl(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
