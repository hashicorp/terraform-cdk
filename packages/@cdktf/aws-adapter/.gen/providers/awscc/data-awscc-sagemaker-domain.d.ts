import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html#id DataAwsccSagemakerDomain#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get sageMakerImageArn(): string;
    get sageMakerImageVersionArn(): string;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings extends cdktf.ComplexComputedList {
    get defaultResourceSpec(): any;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages extends cdktf.ComplexComputedList {
    get appImageConfigName(): string;
    get imageName(): string;
    get imageVersionNumber(): number;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {
    get instanceType(): string;
    get sageMakerImageArn(): string;
    get sageMakerImageVersionArn(): string;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings extends cdktf.ComplexComputedList {
    get customImages(): any;
    get defaultResourceSpec(): any;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings extends cdktf.ComplexComputedList {
    get notebookOutputOption(): string;
    get s3KmsKeyId(): string;
    get s3OutputPath(): string;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare class DataAwsccSagemakerDomainDefaultUserSettings extends cdktf.ComplexComputedList {
    get executionRole(): string;
    get jupyterServerAppSettings(): any;
    get kernelGatewayAppSettings(): any;
    get securityGroups(): string[];
    get sharingSettings(): any;
}
export declare function dataAwsccSagemakerDomainDefaultUserSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettings): any;
export declare class DataAwsccSagemakerDomainTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerDomainTagsToTerraform(struct?: DataAwsccSagemakerDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html awscc_sagemaker_domain}
*/
export declare class DataAwsccSagemakerDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html awscc_sagemaker_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerDomainConfig);
    get appNetworkAccessType(): string;
    get authMode(): string;
    get defaultUserSettings(): any;
    get domainArn(): string;
    get domainId(): string;
    get domainName(): string;
    get homeEfsFileSystemId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get singleSignOnManagedApplicationInstanceId(): string;
    get subnetIds(): string[];
    get tags(): any;
    get url(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
