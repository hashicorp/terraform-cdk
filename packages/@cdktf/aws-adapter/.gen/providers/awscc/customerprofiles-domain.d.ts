import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * The URL of the SQS dead letter queue
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}
    */
    readonly deadLetterQueueUrl?: string;
    /**
    * The default encryption key
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#default_encryption_key CustomerprofilesDomain#default_encryption_key}
    */
    readonly defaultEncryptionKey?: string;
    /**
    * The default number of days until the data within the domain expires.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#default_expiration_days CustomerprofilesDomain#default_expiration_days}
    */
    readonly defaultExpirationDays?: number;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#domain_name CustomerprofilesDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * The tags (keys and values) associated with the domain
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#tags CustomerprofilesDomain#tags}
    */
    readonly tags?: CustomerprofilesDomainTags[];
}
export interface CustomerprofilesDomainTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#key CustomerprofilesDomain#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html#value CustomerprofilesDomain#value}
    */
    readonly value: string;
}
export declare function customerprofilesDomainTagsToTerraform(struct?: CustomerprofilesDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html awscc_customerprofiles_domain}
*/
export declare class CustomerprofilesDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_domain.html awscc_customerprofiles_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerprofilesDomainConfig
    */
    constructor(scope: Construct, id: string, config: CustomerprofilesDomainConfig);
    get createdAt(): string;
    private _deadLetterQueueUrl?;
    get deadLetterQueueUrl(): string;
    set deadLetterQueueUrl(value: string);
    resetDeadLetterQueueUrl(): void;
    get deadLetterQueueUrlInput(): string | undefined;
    private _defaultEncryptionKey?;
    get defaultEncryptionKey(): string;
    set defaultEncryptionKey(value: string);
    resetDefaultEncryptionKey(): void;
    get defaultEncryptionKeyInput(): string | undefined;
    private _defaultExpirationDays?;
    get defaultExpirationDays(): number;
    set defaultExpirationDays(value: number);
    resetDefaultExpirationDays(): void;
    get defaultExpirationDaysInput(): number | undefined;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    get lastUpdatedAt(): string;
    private _tags?;
    get tags(): CustomerprofilesDomainTags[];
    set tags(value: CustomerprofilesDomainTags[]);
    resetTags(): void;
    get tagsInput(): CustomerprofilesDomainTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
