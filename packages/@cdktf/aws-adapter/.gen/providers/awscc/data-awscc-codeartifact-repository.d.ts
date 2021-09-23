import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_repository.html#id DataAwsccCodeartifactRepository#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodeartifactRepositoryTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCodeartifactRepositoryTagsToTerraform(struct?: DataAwsccCodeartifactRepositoryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_repository.html awscc_codeartifact_repository}
*/
export declare class DataAwsccCodeartifactRepository extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_repository.html awscc_codeartifact_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeartifactRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodeartifactRepositoryConfig);
    get arn(): string;
    get description(): string;
    get domainName(): string;
    get domainOwner(): string;
    get externalConnections(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    permissionsPolicyDocument(key: string): string;
    get repositoryName(): string;
    get tags(): any;
    get upstreams(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
