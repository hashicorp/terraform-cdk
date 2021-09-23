import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
    */
    readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
    /**
    * The name of the association.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#association_name SsmAssociation#association_name}
    */
    readonly associationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
    */
    readonly automationTargetParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#calendar_names SsmAssociation#calendar_names}
    */
    readonly calendarNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}
    */
    readonly complianceSeverity?: string;
    /**
    * The version of the SSM document to associate with the target.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#document_version SsmAssociation#document_version}
    */
    readonly documentVersion?: string;
    /**
    * The ID of the instance that the SSM document is associated with.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#instance_id SsmAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}
    */
    readonly maxConcurrency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#max_errors SsmAssociation#max_errors}
    */
    readonly maxErrors?: string;
    /**
    * The name of the SSM document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#name SsmAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_location SsmAssociation#output_location}
    */
    readonly outputLocation?: SsmAssociationOutputLocation;
    /**
    * Parameter values that the SSM document uses at runtime.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#parameters SsmAssociation#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * A Cron or Rate expression that specifies when the association is applied to the target.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#sync_compliance SsmAssociation#sync_compliance}
    */
    readonly syncCompliance?: string;
    /**
    * The targets that the SSM document sends commands to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#targets SsmAssociation#targets}
    */
    readonly targets?: SsmAssociationTargets[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}
    */
    readonly waitForSuccessTimeoutSeconds?: number;
}
export interface SsmAssociationOutputLocationS3Location {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}
    */
    readonly outputS3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}
    */
    readonly outputS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#output_s3_region SsmAssociation#output_s3_region}
    */
    readonly outputS3Region?: string;
}
export declare function ssmAssociationOutputLocationS3LocationToTerraform(struct?: SsmAssociationOutputLocationS3Location): any;
export interface SsmAssociationOutputLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#s3_location SsmAssociation#s3_location}
    */
    readonly s3Location?: SsmAssociationOutputLocationS3Location;
}
export declare function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocation): any;
export interface SsmAssociationTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#key SsmAssociation#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html#values SsmAssociation#values}
    */
    readonly values: string[];
}
export declare function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html awscc_ssm_association}
*/
export declare class SsmAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_association.html awscc_ssm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SsmAssociationConfig);
    private _applyOnlyAtCronInterval?;
    get applyOnlyAtCronInterval(): boolean | cdktf.IResolvable;
    set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable);
    resetApplyOnlyAtCronInterval(): void;
    get applyOnlyAtCronIntervalInput(): boolean | cdktf.IResolvable | undefined;
    get associationId(): string;
    private _associationName?;
    get associationName(): string;
    set associationName(value: string);
    resetAssociationName(): void;
    get associationNameInput(): string | undefined;
    private _automationTargetParameterName?;
    get automationTargetParameterName(): string;
    set automationTargetParameterName(value: string);
    resetAutomationTargetParameterName(): void;
    get automationTargetParameterNameInput(): string | undefined;
    private _calendarNames?;
    get calendarNames(): string[];
    set calendarNames(value: string[]);
    resetCalendarNames(): void;
    get calendarNamesInput(): string[] | undefined;
    private _complianceSeverity?;
    get complianceSeverity(): string;
    set complianceSeverity(value: string);
    resetComplianceSeverity(): void;
    get complianceSeverityInput(): string | undefined;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): string | undefined;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    resetMaxErrors(): void;
    get maxErrorsInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _outputLocation?;
    get outputLocation(): SsmAssociationOutputLocation;
    set outputLocation(value: SsmAssociationOutputLocation);
    resetOutputLocation(): void;
    get outputLocationInput(): SsmAssociationOutputLocation | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string | undefined;
    private _syncCompliance?;
    get syncCompliance(): string;
    set syncCompliance(value: string);
    resetSyncCompliance(): void;
    get syncComplianceInput(): string | undefined;
    private _targets?;
    get targets(): SsmAssociationTargets[];
    set targets(value: SsmAssociationTargets[]);
    resetTargets(): void;
    get targetsInput(): SsmAssociationTargets[] | undefined;
    private _waitForSuccessTimeoutSeconds?;
    get waitForSuccessTimeoutSeconds(): number;
    set waitForSuccessTimeoutSeconds(value: number);
    resetWaitForSuccessTimeoutSeconds(): void;
    get waitForSuccessTimeoutSecondsInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
