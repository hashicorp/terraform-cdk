import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAuditmanagerAssessmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html#id DataAwsccAuditmanagerAssessment#id}
    */
    readonly id: string;
}
export declare class DataAwsccAuditmanagerAssessmentAssessmentReportsDestination extends cdktf.ComplexComputedList {
    get destination(): string;
    get destinationType(): string;
}
export declare function dataAwsccAuditmanagerAssessmentAssessmentReportsDestinationToTerraform(struct?: DataAwsccAuditmanagerAssessmentAssessmentReportsDestination): any;
export declare class DataAwsccAuditmanagerAssessmentAwsAccount extends cdktf.ComplexComputedList {
    get emailAddress(): string;
    get id(): string;
    get name(): string;
}
export declare function dataAwsccAuditmanagerAssessmentAwsAccountToTerraform(struct?: DataAwsccAuditmanagerAssessmentAwsAccount): any;
export declare class DataAwsccAuditmanagerAssessmentDelegations extends cdktf.ComplexComputedList {
    get assessmentId(): string;
    get assessmentName(): string;
    get comment(): string;
    get controlSetId(): string;
    get createdBy(): string;
    get creationTime(): number;
    get id(): string;
    get lastUpdated(): number;
    get roleArn(): string;
    get roleType(): string;
    get status(): string;
}
export declare function dataAwsccAuditmanagerAssessmentDelegationsToTerraform(struct?: DataAwsccAuditmanagerAssessmentDelegations): any;
export declare class DataAwsccAuditmanagerAssessmentRoles extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get roleType(): string;
}
export declare function dataAwsccAuditmanagerAssessmentRolesToTerraform(struct?: DataAwsccAuditmanagerAssessmentRoles): any;
export declare class DataAwsccAuditmanagerAssessmentScopeAwsAccounts extends cdktf.ComplexComputedList {
    get emailAddress(): string;
    get id(): string;
    get name(): string;
}
export declare function dataAwsccAuditmanagerAssessmentScopeAwsAccountsToTerraform(struct?: DataAwsccAuditmanagerAssessmentScopeAwsAccounts): any;
export declare class DataAwsccAuditmanagerAssessmentScopeAwsServices extends cdktf.ComplexComputedList {
    get serviceName(): string;
}
export declare function dataAwsccAuditmanagerAssessmentScopeAwsServicesToTerraform(struct?: DataAwsccAuditmanagerAssessmentScopeAwsServices): any;
export declare class DataAwsccAuditmanagerAssessmentScope extends cdktf.ComplexComputedList {
    get awsAccounts(): any;
    get awsServices(): any;
}
export declare function dataAwsccAuditmanagerAssessmentScopeToTerraform(struct?: DataAwsccAuditmanagerAssessmentScope): any;
export declare class DataAwsccAuditmanagerAssessmentTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAuditmanagerAssessmentTagsToTerraform(struct?: DataAwsccAuditmanagerAssessmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html awscc_auditmanager_assessment}
*/
export declare class DataAwsccAuditmanagerAssessment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/auditmanager_assessment.html awscc_auditmanager_assessment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAuditmanagerAssessmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAuditmanagerAssessmentConfig);
    get arn(): string;
    get assessmentId(): string;
    get assessmentReportsDestination(): any;
    get awsAccount(): any;
    get creationTime(): number;
    get delegations(): any;
    get description(): string;
    get frameworkId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get roles(): any;
    get scope(): any;
    get status(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
