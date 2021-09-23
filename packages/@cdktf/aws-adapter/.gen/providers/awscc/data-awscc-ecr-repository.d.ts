import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html#id DataAwsccEcrRepository#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcrRepositoryEncryptionConfiguration extends cdktf.ComplexComputedList {
    get encryptionType(): string;
    get kmsKey(): string;
}
export declare function dataAwsccEcrRepositoryEncryptionConfigurationToTerraform(struct?: DataAwsccEcrRepositoryEncryptionConfiguration): any;
export declare class DataAwsccEcrRepositoryImageScanningConfiguration extends cdktf.ComplexComputedList {
    get scanOnPush(): any;
}
export declare function dataAwsccEcrRepositoryImageScanningConfigurationToTerraform(struct?: DataAwsccEcrRepositoryImageScanningConfiguration): any;
export declare class DataAwsccEcrRepositoryLifecyclePolicy extends cdktf.ComplexComputedList {
    get lifecyclePolicyText(): string;
    get registryId(): string;
}
export declare function dataAwsccEcrRepositoryLifecyclePolicyToTerraform(struct?: DataAwsccEcrRepositoryLifecyclePolicy): any;
export declare class DataAwsccEcrRepositoryTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEcrRepositoryTagsToTerraform(struct?: DataAwsccEcrRepositoryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html awscc_ecr_repository}
*/
export declare class DataAwsccEcrRepository extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_repository.html awscc_ecr_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcrRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcrRepositoryConfig);
    get arn(): string;
    get encryptionConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageScanningConfiguration(): any;
    get imageTagMutability(): string;
    get lifecyclePolicy(): any;
    get repositoryName(): string;
    get repositoryPolicyText(): string;
    get repositoryUri(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
