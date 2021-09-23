import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * The destination in which evidence reports are stored for the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}
    */
    readonly assessmentReportsDestination?: AuditmanagerAssessmentAssessmentReportsDestination;
    /**
    * The AWS account associated with the assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_account AuditmanagerAssessment#aws_account}
    */
    readonly awsAccount?: AuditmanagerAssessmentAwsAccount;
    /**
    * The description of the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#description AuditmanagerAssessment#description}
    */
    readonly description?: string;
    /**
    * The identifier for the specified framework.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#framework_id AuditmanagerAssessment#framework_id}
    */
    readonly frameworkId?: string;
    /**
    * The name of the related assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
    */
    readonly name?: string;
    /**
    * The list of roles for the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#roles AuditmanagerAssessment#roles}
    */
    readonly roles?: AuditmanagerAssessmentRoles[];
    /**
    * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#scope AuditmanagerAssessment#scope}
    */
    readonly scope?: AuditmanagerAssessmentScope;
    /**
    * The status of the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#status AuditmanagerAssessment#status}
    */
    readonly status?: string;
    /**
    * The tags associated with the assessment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#tags AuditmanagerAssessment#tags}
    */
    readonly tags?: AuditmanagerAssessmentTags[];
}
export interface AuditmanagerAssessmentAssessmentReportsDestination {
    /**
    * The URL of the specified Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#destination AuditmanagerAssessment#destination}
    */
    readonly destination?: string;
    /**
    * The destination type, such as Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#destination_type AuditmanagerAssessment#destination_type}
    */
    readonly destinationType?: string;
}
export declare function auditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: AuditmanagerAssessmentAssessmentReportsDestination): any;
export interface AuditmanagerAssessmentAwsAccount {
    /**
    * The unique identifier for the email account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#email_address AuditmanagerAssessment#email_address}
    */
    readonly emailAddress?: string;
    /**
    * The identifier for the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#id AuditmanagerAssessment#id}
    */
    readonly id?: string;
    /**
    * The name of the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
    */
    readonly name?: string;
}
export declare function auditmanagerAssessmentAwsAccountToTerraform(struct?: AuditmanagerAssessmentAwsAccount): any;
export declare class AuditmanagerAssessmentDelegations extends cdktf.ComplexComputedList {
    private _assessmentId?;
    get assessmentId(): string;
    set assessmentId(value: string);
    resetAssessmentId(): void;
    get assessmentIdInput(): string | undefined;
    private _assessmentName?;
    get assessmentName(): string;
    set assessmentName(value: string);
    resetAssessmentName(): void;
    get assessmentNameInput(): string | undefined;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _controlSetId?;
    get controlSetId(): string;
    set controlSetId(value: string);
    resetControlSetId(): void;
    get controlSetIdInput(): string | undefined;
    private _createdBy?;
    get createdBy(): string;
    set createdBy(value: string);
    resetCreatedBy(): void;
    get createdByInput(): string | undefined;
    private _creationTime?;
    get creationTime(): number;
    set creationTime(value: number);
    resetCreationTime(): void;
    get creationTimeInput(): number | undefined;
    get id(): string;
    private _lastUpdated?;
    get lastUpdated(): number;
    set lastUpdated(value: number);
    resetLastUpdated(): void;
    get lastUpdatedInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _roleType?;
    get roleType(): string;
    set roleType(value: string);
    resetRoleType(): void;
    get roleTypeInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export declare function auditmanagerAssessmentDelegationsToTerraform(struct?: AuditmanagerAssessmentDelegations): any;
export interface AuditmanagerAssessmentRoles {
    /**
    * The Amazon Resource Name (ARN) of the IAM user or role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#role_arn AuditmanagerAssessment#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The IAM role type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#role_type AuditmanagerAssessment#role_type}
    */
    readonly roleType?: string;
}
export declare function auditmanagerAssessmentRolesToTerraform(struct?: AuditmanagerAssessmentRoles): any;
export interface AuditmanagerAssessmentScopeAwsAccounts {
    /**
    * The unique identifier for the email account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#email_address AuditmanagerAssessment#email_address}
    */
    readonly emailAddress?: string;
    /**
    * The identifier for the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#id AuditmanagerAssessment#id}
    */
    readonly id?: string;
    /**
    * The name of the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#name AuditmanagerAssessment#name}
    */
    readonly name?: string;
}
export declare function auditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: AuditmanagerAssessmentScopeAwsAccounts): any;
export interface AuditmanagerAssessmentScopeAwsServices {
    /**
    * The name of the AWS service.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#service_name AuditmanagerAssessment#service_name}
    */
    readonly serviceName?: string;
}
export declare function auditmanagerAssessmentScopeAwsServicesToTerraform(struct?: AuditmanagerAssessmentScopeAwsServices): any;
export interface AuditmanagerAssessmentScope {
    /**
    * The AWS accounts included in scope.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_accounts AuditmanagerAssessment#aws_accounts}
    */
    readonly awsAccounts?: AuditmanagerAssessmentScopeAwsAccounts[];
    /**
    * The AWS services included in scope.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#aws_services AuditmanagerAssessment#aws_services}
    */
    readonly awsServices?: AuditmanagerAssessmentScopeAwsServices[];
}
export declare function auditmanagerAssessmentScopeToTerraform(struct?: AuditmanagerAssessmentScope): any;
export interface AuditmanagerAssessmentTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#key AuditmanagerAssessment#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html#value AuditmanagerAssessment#value}
    */
    readonly value: string;
}
export declare function auditmanagerAssessmentTagsToTerraform(struct?: AuditmanagerAssessmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html awscc_auditmanager_assessment}
*/
export declare class AuditmanagerAssessment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/auditmanager_assessment.html awscc_auditmanager_assessment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerAssessmentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AuditmanagerAssessmentConfig);
    get arn(): string;
    get assessmentId(): string;
    private _assessmentReportsDestination?;
    get assessmentReportsDestination(): AuditmanagerAssessmentAssessmentReportsDestination;
    set assessmentReportsDestination(value: AuditmanagerAssessmentAssessmentReportsDestination);
    resetAssessmentReportsDestination(): void;
    get assessmentReportsDestinationInput(): AuditmanagerAssessmentAssessmentReportsDestination | undefined;
    private _awsAccount?;
    get awsAccount(): AuditmanagerAssessmentAwsAccount;
    set awsAccount(value: AuditmanagerAssessmentAwsAccount);
    resetAwsAccount(): void;
    get awsAccountInput(): AuditmanagerAssessmentAwsAccount | undefined;
    get creationTime(): number;
    get delegations(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _frameworkId?;
    get frameworkId(): string;
    set frameworkId(value: string);
    resetFrameworkId(): void;
    get frameworkIdInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _roles?;
    get roles(): AuditmanagerAssessmentRoles[];
    set roles(value: AuditmanagerAssessmentRoles[]);
    resetRoles(): void;
    get rolesInput(): AuditmanagerAssessmentRoles[] | undefined;
    private _scope?;
    get scope(): AuditmanagerAssessmentScope;
    set scope(value: AuditmanagerAssessmentScope);
    resetScope(): void;
    get scopeInput(): AuditmanagerAssessmentScope | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tags?;
    get tags(): AuditmanagerAssessmentTags[];
    set tags(value: AuditmanagerAssessmentTags[]);
    resetTags(): void;
    get tagsInput(): AuditmanagerAssessmentTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
