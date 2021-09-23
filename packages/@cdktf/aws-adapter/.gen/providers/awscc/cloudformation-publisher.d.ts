import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationPublisherConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html#accept_terms_and_conditions CloudformationPublisher#accept_terms_and_conditions}
    */
    readonly acceptTermsAndConditions: boolean | cdktf.IResolvable;
    /**
    * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html#connection_arn CloudformationPublisher#connection_arn}
    */
    readonly connectionArn?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html awscc_cloudformation_publisher}
*/
export declare class CloudformationPublisher extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_publisher.html awscc_cloudformation_publisher} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationPublisherConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationPublisherConfig);
    private _acceptTermsAndConditions;
    get acceptTermsAndConditions(): boolean | cdktf.IResolvable;
    set acceptTermsAndConditions(value: boolean | cdktf.IResolvable);
    get acceptTermsAndConditionsInput(): boolean | cdktf.IResolvable;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    resetConnectionArn(): void;
    get connectionArnInput(): string | undefined;
    get id(): string;
    get identityProvider(): string;
    get publisherId(): string;
    get publisherProfile(): string;
    get publisherStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
