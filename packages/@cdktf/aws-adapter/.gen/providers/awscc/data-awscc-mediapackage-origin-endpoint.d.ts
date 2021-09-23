import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackageOriginEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html#id DataAwsccMediapackageOriginEndpoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediapackageOriginEndpointAuthorization extends cdktf.ComplexComputedList {
    get cdnIdentifierSecret(): string;
    get secretsRoleArn(): string;
}
export declare function dataAwsccMediapackageOriginEndpointAuthorizationToTerraform(struct?: DataAwsccMediapackageOriginEndpointAuthorization): any;
export declare class DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get certificateArn(): string;
    get resourceId(): string;
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackageOriginEndpointCmafPackageEncryption extends cdktf.ComplexComputedList {
    get constantInitializationVector(): string;
    get keyRotationIntervalSeconds(): number;
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackageOriginEndpointCmafPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageEncryption): any;
export declare class DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests extends cdktf.ComplexComputedList {
    get adMarkers(): string;
    get adTriggers(): string[];
    get adsOnDeliveryRestrictions(): string;
    get id(): string;
    get includeIframeOnlyStream(): any;
    get manifestName(): string;
    get playlistType(): string;
    get playlistWindowSeconds(): number;
    get programDateTimeIntervalSeconds(): number;
    get url(): string;
}
export declare function dataAwsccMediapackageOriginEndpointCmafPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageHlsManifests): any;
export declare class DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackageOriginEndpointCmafPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackageStreamSelection): any;
export declare class DataAwsccMediapackageOriginEndpointCmafPackage extends cdktf.ComplexComputedList {
    get encryption(): any;
    get hlsManifests(): any;
    get segmentDurationSeconds(): number;
    get segmentPrefix(): string;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackageOriginEndpointCmafPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointCmafPackage): any;
export declare class DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get certificateArn(): string;
    get resourceId(): string;
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackageOriginEndpointDashPackageEncryption extends cdktf.ComplexComputedList {
    get keyRotationIntervalSeconds(): number;
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackageOriginEndpointDashPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageEncryption): any;
export declare class DataAwsccMediapackageOriginEndpointDashPackageStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackageOriginEndpointDashPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackageStreamSelection): any;
export declare class DataAwsccMediapackageOriginEndpointDashPackage extends cdktf.ComplexComputedList {
    get adTriggers(): string[];
    get adsOnDeliveryRestrictions(): string;
    get encryption(): any;
    get manifestLayout(): string;
    get manifestWindowSeconds(): number;
    get minBufferTimeSeconds(): number;
    get minUpdatePeriodSeconds(): number;
    get periodTriggers(): string[];
    get profile(): string;
    get segmentDurationSeconds(): number;
    get segmentTemplateFormat(): string;
    get streamSelection(): any;
    get suggestedPresentationDelaySeconds(): number;
    get utcTiming(): string;
    get utcTimingUri(): string;
}
export declare function dataAwsccMediapackageOriginEndpointDashPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointDashPackage): any;
export declare class DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get certificateArn(): string;
    get resourceId(): string;
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackageOriginEndpointHlsPackageEncryption extends cdktf.ComplexComputedList {
    get constantInitializationVector(): string;
    get encryptionMethod(): string;
    get keyRotationIntervalSeconds(): number;
    get repeatExtXKey(): any;
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackageOriginEndpointHlsPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageEncryption): any;
export declare class DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackageOriginEndpointHlsPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackageStreamSelection): any;
export declare class DataAwsccMediapackageOriginEndpointHlsPackage extends cdktf.ComplexComputedList {
    get adMarkers(): string;
    get adTriggers(): string[];
    get adsOnDeliveryRestrictions(): string;
    get encryption(): any;
    get includeIframeOnlyStream(): any;
    get playlistType(): string;
    get playlistWindowSeconds(): number;
    get programDateTimeIntervalSeconds(): number;
    get segmentDurationSeconds(): number;
    get streamSelection(): any;
    get useAudioRenditionGroup(): any;
}
export declare function dataAwsccMediapackageOriginEndpointHlsPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointHlsPackage): any;
export declare class DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider extends cdktf.ComplexComputedList {
    get certificateArn(): string;
    get resourceId(): string;
    get roleArn(): string;
    get systemIds(): string[];
    get url(): string;
}
export declare function dataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageEncryptionSpekeKeyProvider): any;
export declare class DataAwsccMediapackageOriginEndpointMssPackageEncryption extends cdktf.ComplexComputedList {
    get spekeKeyProvider(): any;
}
export declare function dataAwsccMediapackageOriginEndpointMssPackageEncryptionToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageEncryption): any;
export declare class DataAwsccMediapackageOriginEndpointMssPackageStreamSelection extends cdktf.ComplexComputedList {
    get maxVideoBitsPerSecond(): number;
    get minVideoBitsPerSecond(): number;
    get streamOrder(): string;
}
export declare function dataAwsccMediapackageOriginEndpointMssPackageStreamSelectionToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackageStreamSelection): any;
export declare class DataAwsccMediapackageOriginEndpointMssPackage extends cdktf.ComplexComputedList {
    get encryption(): any;
    get manifestWindowSeconds(): number;
    get segmentDurationSeconds(): number;
    get streamSelection(): any;
}
export declare function dataAwsccMediapackageOriginEndpointMssPackageToTerraform(struct?: DataAwsccMediapackageOriginEndpointMssPackage): any;
export declare class DataAwsccMediapackageOriginEndpointTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccMediapackageOriginEndpointTagsToTerraform(struct?: DataAwsccMediapackageOriginEndpointTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint}
*/
export declare class DataAwsccMediapackageOriginEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_origin_endpoint.html awscc_mediapackage_origin_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackageOriginEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediapackageOriginEndpointConfig);
    get arn(): string;
    get authorization(): any;
    get channelId(): string;
    get cmafPackage(): any;
    get dashPackage(): any;
    get description(): string;
    get hlsPackage(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get manifestName(): string;
    get mssPackage(): any;
    get origination(): string;
    get startoverWindowSeconds(): number;
    get tags(): any;
    get timeDelaySeconds(): number;
    get url(): string;
    get whitelist(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
