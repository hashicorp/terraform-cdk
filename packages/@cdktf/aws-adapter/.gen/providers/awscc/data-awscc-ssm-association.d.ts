import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html#id DataAwsccSsmAssociation#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmAssociationOutputLocationS3Location extends cdktf.ComplexComputedList {
    get outputS3BucketName(): string;
    get outputS3KeyPrefix(): string;
    get outputS3Region(): string;
}
export declare function dataAwsccSsmAssociationOutputLocationS3LocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocationS3Location): any;
export declare class DataAwsccSsmAssociationOutputLocation extends cdktf.ComplexComputedList {
    get s3Location(): any;
}
export declare function dataAwsccSsmAssociationOutputLocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocation): any;
export declare class DataAwsccSsmAssociationTargets extends cdktf.ComplexComputedList {
    get key(): string;
    get values(): string[];
}
export declare function dataAwsccSsmAssociationTargetsToTerraform(struct?: DataAwsccSsmAssociationTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html awscc_ssm_association}
*/
export declare class DataAwsccSsmAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_association.html awscc_ssm_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmAssociationConfig);
    get applyOnlyAtCronInterval(): cdktf.IResolvable;
    get associationId(): string;
    get associationName(): string;
    get automationTargetParameterName(): string;
    get calendarNames(): string[];
    get complianceSeverity(): string;
    get documentVersion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceId(): string;
    get maxConcurrency(): string;
    get maxErrors(): string;
    get name(): string;
    get outputLocation(): any;
    parameters(index: string, key: string): string;
    get scheduleExpression(): string;
    get syncCompliance(): string;
    get targets(): any;
    get waitForSuccessTimeoutSeconds(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
