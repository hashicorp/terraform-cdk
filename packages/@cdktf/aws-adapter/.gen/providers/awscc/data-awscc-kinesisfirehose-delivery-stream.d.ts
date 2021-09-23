import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKinesisfirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html#id DataAwsccKinesisfirehoseDeliveryStream#id}
    */
    readonly id: string;
}
export declare class DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput extends cdktf.ComplexComputedList {
    get keyArn(): string;
    get keyType(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get processors(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    get durationInSeconds(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration extends cdktf.ComplexComputedList {
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get clusterEndpoint(): string;
    get domainArn(): string;
    get indexName(): string;
    get indexRotationPeriod(): string;
    get processingConfiguration(): any;
    get retryOptions(): any;
    get roleArn(): string;
    get s3BackupMode(): string;
    get s3Configuration(): any;
    get typeName(): string;
    get vpcConfiguration(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe extends cdktf.ComplexComputedList {
    get timestampFormats(): string[];
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe extends cdktf.ComplexComputedList {
    get caseInsensitive(): any;
    get columnToJsonKeyMappings(): any;
    get convertDotsInJsonKeysToUnderscores(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer extends cdktf.ComplexComputedList {
    get hiveJsonSerDe(): any;
    get openXJsonSerDe(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration extends cdktf.ComplexComputedList {
    get deserializer(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe extends cdktf.ComplexComputedList {
    get blockSizeBytes(): number;
    get bloomFilterColumns(): string[];
    get bloomFilterFalsePositiveProbability(): number;
    get compression(): string;
    get dictionaryKeyThreshold(): number;
    get enablePadding(): any;
    get formatVersion(): string;
    get paddingTolerance(): number;
    get rowIndexStride(): number;
    get stripeSizeBytes(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe extends cdktf.ComplexComputedList {
    get blockSizeBytes(): number;
    get compression(): string;
    get enableDictionaryCompression(): any;
    get maxPaddingBytes(): number;
    get pageSizeBytes(): number;
    get writerVersion(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer extends cdktf.ComplexComputedList {
    get orcSerDe(): any;
    get parquetSerDe(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration extends cdktf.ComplexComputedList {
    get serializer(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration extends cdktf.ComplexComputedList {
    get catalogId(): string;
    get databaseName(): string;
    get region(): string;
    get roleArn(): string;
    get tableName(): string;
    get versionId(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get inputFormatConfiguration(): any;
    get outputFormatConfiguration(): any;
    get schemaConfiguration(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get processors(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get dataFormatConversionConfiguration(): any;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get processingConfiguration(): any;
    get roleArn(): string;
    get s3BackupConfiguration(): any;
    get s3BackupMode(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration extends cdktf.ComplexComputedList {
    get accessKey(): string;
    get name(): string;
    get url(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get processors(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get attributeValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration extends cdktf.ComplexComputedList {
    get commonAttributes(): any;
    get contentEncoding(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    get durationInSeconds(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration extends cdktf.ComplexComputedList {
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get endpointConfiguration(): any;
    get processingConfiguration(): any;
    get requestConfiguration(): any;
    get retryOptions(): any;
    get roleArn(): string;
    get s3BackupMode(): string;
    get s3Configuration(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration extends cdktf.ComplexComputedList {
    get kinesisStreamArn(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends cdktf.ComplexComputedList {
    get copyOptions(): string;
    get dataTableColumns(): string;
    get dataTableName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get processors(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    get durationInSeconds(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration extends cdktf.ComplexComputedList {
    get cloudwatchLoggingOptions(): any;
    get clusterJdbcurl(): string;
    get copyCommand(): any;
    get password(): string;
    get processingConfiguration(): any;
    get retryOptions(): any;
    get roleArn(): string;
    get s3BackupConfiguration(): any;
    get s3BackupMode(): string;
    get s3Configuration(): any;
    get username(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
    get processors(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    get durationInSeconds(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    get intervalInSeconds(): number;
    get sizeInMBs(): number;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get logGroupName(): string;
    get logStreamName(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get awskmsKeyArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
    get noEncryptionConfig(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    get bucketArn(): string;
    get bufferingHints(): any;
    get cloudwatchLoggingOptions(): any;
    get compressionFormat(): string;
    get encryptionConfiguration(): any;
    get errorOutputPrefix(): string;
    get prefix(): string;
    get roleArn(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration extends cdktf.ComplexComputedList {
    get cloudwatchLoggingOptions(): any;
    get hecAcknowledgmentTimeoutInSeconds(): number;
    get hecEndpoint(): string;
    get hecEndpointType(): string;
    get hecToken(): string;
    get processingConfiguration(): any;
    get retryOptions(): any;
    get s3BackupMode(): string;
    get s3Configuration(): any;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any;
export declare class DataAwsccKinesisfirehoseDeliveryStreamTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream}
*/
export declare class DataAwsccKinesisfirehoseDeliveryStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKinesisfirehoseDeliveryStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKinesisfirehoseDeliveryStreamConfig);
    get arn(): string;
    get deliveryStreamEncryptionConfigurationInput(): any;
    get deliveryStreamName(): string;
    get deliveryStreamType(): string;
    get elasticsearchDestinationConfiguration(): any;
    get extendedS3DestinationConfiguration(): any;
    get httpEndpointDestinationConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kinesisStreamSourceConfiguration(): any;
    get redshiftDestinationConfiguration(): any;
    get s3DestinationConfiguration(): any;
    get splunkDestinationConfiguration(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
