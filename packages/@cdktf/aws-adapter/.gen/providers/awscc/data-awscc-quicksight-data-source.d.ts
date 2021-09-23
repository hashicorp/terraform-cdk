import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html#id DataAwsccQuicksightDataSource#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    get domain(): string;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    get workGroup(): string;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    get catalog(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get instanceId(): string;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    get clusterId(): string;
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    get manifestFileLocation(): any;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get warehouse(): string;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any;
export declare class DataAwsccQuicksightDataSourceAlternateDataSourceParameters extends cdktf.ComplexComputedList {
    get amazonElasticsearchParameters(): any;
    get athenaParameters(): any;
    get auroraParameters(): any;
    get auroraPostgreSqlParameters(): any;
    get mariaDbParameters(): any;
    get mySqlParameters(): any;
    get oracleParameters(): any;
    get postgreSqlParameters(): any;
    get prestoParameters(): any;
    get rdsParameters(): any;
    get redshiftParameters(): any;
    get s3Parameters(): any;
    get snowflakeParameters(): any;
    get sparkParameters(): any;
    get sqlServerParameters(): any;
    get teradataParameters(): any;
}
export declare function dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    get domain(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    get workGroup(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    get catalog(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get instanceId(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    get clusterId(): string;
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    get manifestFileLocation(): any;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get warehouse(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters extends cdktf.ComplexComputedList {
    get amazonElasticsearchParameters(): any;
    get athenaParameters(): any;
    get auroraParameters(): any;
    get auroraPostgreSqlParameters(): any;
    get mariaDbParameters(): any;
    get mySqlParameters(): any;
    get oracleParameters(): any;
    get postgreSqlParameters(): any;
    get prestoParameters(): any;
    get rdsParameters(): any;
    get redshiftParameters(): any;
    get s3Parameters(): any;
    get snowflakeParameters(): any;
    get sparkParameters(): any;
    get sqlServerParameters(): any;
    get teradataParameters(): any;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any;
export declare class DataAwsccQuicksightDataSourceCredentialsCredentialPair extends cdktf.ComplexComputedList {
    get alternateDataSourceParameters(): any;
    get password(): string;
    get username(): string;
}
export declare function dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPair): any;
export declare class DataAwsccQuicksightDataSourceCredentials extends cdktf.ComplexComputedList {
    get copySourceArn(): string;
    get credentialPair(): any;
}
export declare function dataAwsccQuicksightDataSourceCredentialsToTerraform(struct?: DataAwsccQuicksightDataSourceCredentials): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    get domain(): string;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    get workGroup(): string;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    get catalog(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get instanceId(): string;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    get clusterId(): string;
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    get manifestFileLocation(): any;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get warehouse(): string;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    get database(): string;
    get host(): string;
    get port(): number;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters): any;
export declare class DataAwsccQuicksightDataSourceDataSourceParameters extends cdktf.ComplexComputedList {
    get amazonElasticsearchParameters(): any;
    get athenaParameters(): any;
    get auroraParameters(): any;
    get auroraPostgreSqlParameters(): any;
    get mariaDbParameters(): any;
    get mySqlParameters(): any;
    get oracleParameters(): any;
    get postgreSqlParameters(): any;
    get prestoParameters(): any;
    get rdsParameters(): any;
    get redshiftParameters(): any;
    get s3Parameters(): any;
    get snowflakeParameters(): any;
    get sparkParameters(): any;
    get sqlServerParameters(): any;
    get teradataParameters(): any;
}
export declare function dataAwsccQuicksightDataSourceDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParameters): any;
export declare class DataAwsccQuicksightDataSourceErrorInfo extends cdktf.ComplexComputedList {
    get message(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSourceErrorInfoToTerraform(struct?: DataAwsccQuicksightDataSourceErrorInfo): any;
export declare class DataAwsccQuicksightDataSourcePermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightDataSourcePermissionsToTerraform(struct?: DataAwsccQuicksightDataSourcePermissions): any;
export declare class DataAwsccQuicksightDataSourceSslProperties extends cdktf.ComplexComputedList {
    get disableSsl(): any;
}
export declare function dataAwsccQuicksightDataSourceSslPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceSslProperties): any;
export declare class DataAwsccQuicksightDataSourceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightDataSourceTagsToTerraform(struct?: DataAwsccQuicksightDataSourceTags): any;
export declare class DataAwsccQuicksightDataSourceVpcConnectionProperties extends cdktf.ComplexComputedList {
    get vpcConnectionArn(): string;
}
export declare function dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceVpcConnectionProperties): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html awscc_quicksight_data_source}
*/
export declare class DataAwsccQuicksightDataSource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html awscc_quicksight_data_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSourceConfig);
    get alternateDataSourceParameters(): any;
    get arn(): string;
    get awsAccountId(): string;
    get createdTime(): string;
    get credentials(): any;
    get dataSourceId(): string;
    get dataSourceParameters(): any;
    get errorInfo(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get permissions(): any;
    get sslProperties(): any;
    get status(): string;
    get tags(): any;
    get type(): string;
    get vpcConnectionProperties(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
