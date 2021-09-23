import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackagePackagingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html#id DataAwsccMediapackagePackagingConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption extends cdktf.ComplexComputedList {
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption): any;
export declare class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any;
export declare class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests extends cdktf.ComplexComputedList {
    get adMarkers(): string;
    get includeIframeOnlyStream(): any;
    get manifestName(): string;
    get programDateTimeIntervalSeconds(): number;
    get repeatExtXKey(): any;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests): any;
export declare class DataAwsccMediapackagePackagingConfigurationCmafPackage extends cdktf.ComplexComputedList {
    get encryption(): any;
    get hlsManifests(): any;
    get includeEncoderConfigurationInSegments(): any;
    get segmentDurationSeconds(): number;
}
export declare function dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackage): any;
export declare class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any;
export declare class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests extends cdktf.ComplexComputedList {
    get manifestLayout(): string;
    get manifestName(): string;
    get minBufferTimeSeconds(): number;
    get profile(): string;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests): any;
export declare class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackagePackagingConfigurationDashPackageEncryption extends cdktf.ComplexComputedList {
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption): any;
export declare class DataAwsccMediapackagePackagingConfigurationDashPackage extends cdktf.ComplexComputedList {
    get dashManifests(): any;
    get encryption(): any;
    get includeEncoderConfigurationInSegments(): any;
    get periodTriggers(): string[];
    get segmentDurationSeconds(): number;
    get segmentTemplateFormat(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackage): any;
export declare class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption extends cdktf.ComplexComputedList {
    get constantInitializationVector(): string;
    get encryptionMethod(): string;
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption): any;
export declare class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any;
export declare class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests extends cdktf.ComplexComputedList {
    get adMarkers(): string;
    get includeIframeOnlyStream(): any;
    get manifestName(): string;
    get programDateTimeIntervalSeconds(): number;
    get repeatExtXKey(): any;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests): any;
export declare class DataAwsccMediapackagePackagingConfigurationHlsPackage extends cdktf.ComplexComputedList {
    get encryption(): any;
    get hlsManifests(): any;
    get segmentDurationSeconds(): number;
    get useAudioRenditionGroup(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackage): any;
export declare class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackagePackagingConfigurationMssPackageEncryption extends cdktf.ComplexComputedList {
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption): any;
export declare class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any;
export declare class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests extends cdktf.ComplexComputedList {
    get manifestName(): string;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests): any;
export declare class DataAwsccMediapackagePackagingConfigurationMssPackage extends cdktf.ComplexComputedList {
    get encryption(): any;
    get mssManifests(): any;
    get segmentDurationSeconds(): number;
}
export declare function dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackage): any;
export declare class DataAwsccMediapackagePackagingConfigurationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccMediapackagePackagingConfigurationTagsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration}
*/
export declare class DataAwsccMediapackagePackagingConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_configuration.html awscc_mediapackage_packaging_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackagePackagingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingConfigurationConfig);
    get arn(): string;
    get cmafPackage(): any;
    get dashPackage(): any;
    get hlsPackage(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get mssPackage(): any;
    get packagingGroupId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
