import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_domain.html#id DataAwsccCodeartifactDomain#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodeartifactDomainTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCodeartifactDomainTagsToTerraform(struct?: DataAwsccCodeartifactDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_domain.html awscc_codeartifact_domain}
*/
export declare class DataAwsccCodeartifactDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_domain.html awscc_codeartifact_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeartifactDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodeartifactDomainConfig);
    get arn(): string;
    get domainName(): string;
    get encryptionKey(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get owner(): string;
    permissionsPolicyDocument(key: string): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
