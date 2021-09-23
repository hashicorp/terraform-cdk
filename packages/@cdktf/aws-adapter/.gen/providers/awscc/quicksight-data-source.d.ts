import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * <p>A set of alternate data source parameters that you want to share for the credentials
              stored with this data source. The credentials are applied in tandem with the data source
              parameters when you copy a data source by using a create or update request. The API
              operation compares the <code>DataSourceParameters</code> structure that's in the request
              with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
              structures are an exact match, the request is allowed to use the credentials from this
              existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
              the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
              are automatically allowed.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#alternate_data_source_parameters QuicksightDataSource#alternate_data_source_parameters}
    */
    readonly alternateDataSourceParameters?: QuicksightDataSourceAlternateDataSourceParameters[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aws_account_id QuicksightDataSource#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * <p>Data source credentials. This is a variant type structure. For this structure to be
              valid, only one of the attributes can be non-null.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#credentials QuicksightDataSource#credentials}
    */
    readonly credentials?: QuicksightDataSourceCredentials;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#data_source_id QuicksightDataSource#data_source_id}
    */
    readonly dataSourceId?: string;
    /**
    * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
              This is a variant type structure. For this structure to be valid, only one of the
              attributes can be non-null.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#data_source_parameters QuicksightDataSource#data_source_parameters}
    */
    readonly dataSourceParameters?: QuicksightDataSourceDataSourceParameters;
    /**
    * <p>Error information for the data source creation or update.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#error_info QuicksightDataSource#error_info}
    */
    readonly errorInfo?: QuicksightDataSourceErrorInfo;
    /**
    * <p>A display name for the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#name QuicksightDataSource#name}
    */
    readonly name?: string;
    /**
    * <p>A list of resource permissions on the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#permissions QuicksightDataSource#permissions}
    */
    readonly permissions?: QuicksightDataSourcePermissions[];
    /**
    * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
              underlying data source.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#ssl_properties QuicksightDataSource#ssl_properties}
    */
    readonly sslProperties?: QuicksightDataSourceSslProperties;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#tags QuicksightDataSource#tags}
    */
    readonly tags?: QuicksightDataSourceTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#type QuicksightDataSource#type}
    */
    readonly type?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
    */
    readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
}
export interface QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters {
    /**
    * <p>The Amazon Elasticsearch Service domain.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
}
export declare function quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersAthenaParameters {
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
}
export declare function quicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersAuroraParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersMySqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersOracleParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersPrestoParameters {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersRdsParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
}
export declare function quicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
              provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port?: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
}
export declare function quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any;
export interface QuicksightDataSourceAlternateDataSourceParametersS3Parameters {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation;
}
export declare function quicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
}
export declare function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersSparkParameters {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParametersTeradataParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any;
export interface QuicksightDataSourceAlternateDataSourceParameters {
    /**
    * <p>Amazon Elasticsearch Service parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters;
    /**
    * <p>Amazon Athena parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#athena_parameters QuicksightDataSource#athena_parameters}
    */
    readonly athenaParameters?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters;
    /**
    * <p>Amazon Aurora parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_parameters QuicksightDataSource#aurora_parameters}
    */
    readonly auroraParameters?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters;
    /**
    * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters;
    /**
    * <p>MariaDB parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#maria_db_parameters QuicksightDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters;
    /**
    * <p>MySQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#my_sql_parameters QuicksightDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#oracle_parameters QuicksightDataSource#oracle_parameters}
    */
    readonly oracleParameters?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters;
    /**
    * <p>PostgreSQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters;
    /**
    * <p>Presto parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#presto_parameters QuicksightDataSource#presto_parameters}
    */
    readonly prestoParameters?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters;
    /**
    * <p>Amazon RDS parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#rds_parameters QuicksightDataSource#rds_parameters}
    */
    readonly rdsParameters?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters;
    /**
    * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
              <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
              <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#redshift_parameters QuicksightDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters;
    /**
    * <p>S3 parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#s3_parameters QuicksightDataSource#s3_parameters}
    */
    readonly s3Parameters?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters;
    /**
    * <p>Snowflake parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#snowflake_parameters QuicksightDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters;
    /**
    * <p>Spark parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#spark_parameters QuicksightDataSource#spark_parameters}
    */
    readonly sparkParameters?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters;
    /**
    * <p>SQL Server parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#sql_server_parameters QuicksightDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters;
    /**
    * <p>Teradata parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#teradata_parameters QuicksightDataSource#teradata_parameters}
    */
    readonly teradataParameters?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters;
}
export declare function quicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters {
    /**
    * <p>The Amazon Elasticsearch Service domain.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters {
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
              provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port?: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters {
    /**
    * <p>Amazon Elasticsearch Service parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters;
    /**
    * <p>Amazon Athena parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#athena_parameters QuicksightDataSource#athena_parameters}
    */
    readonly athenaParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters;
    /**
    * <p>Amazon Aurora parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_parameters QuicksightDataSource#aurora_parameters}
    */
    readonly auroraParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters;
    /**
    * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters;
    /**
    * <p>MariaDB parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#maria_db_parameters QuicksightDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters;
    /**
    * <p>MySQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#my_sql_parameters QuicksightDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#oracle_parameters QuicksightDataSource#oracle_parameters}
    */
    readonly oracleParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters;
    /**
    * <p>PostgreSQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters;
    /**
    * <p>Presto parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#presto_parameters QuicksightDataSource#presto_parameters}
    */
    readonly prestoParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters;
    /**
    * <p>Amazon RDS parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#rds_parameters QuicksightDataSource#rds_parameters}
    */
    readonly rdsParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters;
    /**
    * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
              <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
              <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#redshift_parameters QuicksightDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters;
    /**
    * <p>S3 parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#s3_parameters QuicksightDataSource#s3_parameters}
    */
    readonly s3Parameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters;
    /**
    * <p>Snowflake parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#snowflake_parameters QuicksightDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters;
    /**
    * <p>Spark parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#spark_parameters QuicksightDataSource#spark_parameters}
    */
    readonly sparkParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters;
    /**
    * <p>SQL Server parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#sql_server_parameters QuicksightDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters;
    /**
    * <p>Teradata parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#teradata_parameters QuicksightDataSource#teradata_parameters}
    */
    readonly teradataParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters;
}
export declare function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any;
export interface QuicksightDataSourceCredentialsCredentialPair {
    /**
    * <p>A set of alternate data source parameters that you want to share for these
              credentials. The credentials are applied in tandem with the data source parameters when
              you copy a data source by using a create or update request. The API operation compares
              the <code>DataSourceParameters</code> structure that's in the request with the
              structures in the <code>AlternateDataSourceParameters</code> allow list. If the
              structures are an exact match, the request is allowed to use the new data source with
              the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
              null, the <code>DataSourceParameters</code> originally used with these
                  <code>Credentials</code> is automatically allowed.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#alternate_data_source_parameters QuicksightDataSource#alternate_data_source_parameters}
    */
    readonly alternateDataSourceParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters[];
    /**
    * <p>Password.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#password QuicksightDataSource#password}
    */
    readonly password: string;
    /**
    * <p>User name.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#username QuicksightDataSource#username}
    */
    readonly username: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPair): any;
export interface QuicksightDataSourceCredentials {
    /**
    * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
              want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
              data source in the ARN is used as the credentials for the
              <code>DataSourceCredentials</code> structure.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#copy_source_arn QuicksightDataSource#copy_source_arn}
    */
    readonly copySourceArn?: string;
    /**
    * <p>The combination of user name and password that are used as credentials.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#credential_pair QuicksightDataSource#credential_pair}
    */
    readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
}
export declare function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentials): any;
export interface QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters {
    /**
    * <p>The Amazon Elasticsearch Service domain.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
}
export declare function quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any;
export interface QuicksightDataSourceDataSourceParametersAthenaParameters {
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
}
export declare function quicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParameters): any;
export interface QuicksightDataSourceDataSourceParametersAuroraParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraParameters): any;
export interface QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any;
export interface QuicksightDataSourceDataSourceParametersMariaDbParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMariaDbParameters): any;
export interface QuicksightDataSourceDataSourceParametersMySqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMySqlParameters): any;
export interface QuicksightDataSourceDataSourceParametersOracleParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersOracleParameters): any;
export interface QuicksightDataSourceDataSourceParametersPostgreSqlParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters): any;
export interface QuicksightDataSourceDataSourceParametersPrestoParameters {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPrestoParameters): any;
export interface QuicksightDataSourceDataSourceParametersRdsParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
}
export declare function quicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRdsParameters): any;
export interface QuicksightDataSourceDataSourceParametersRedshiftParameters {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
              provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port?: number;
}
export declare function quicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParameters): any;
export interface QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
}
export declare function quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any;
export interface QuicksightDataSourceDataSourceParametersS3Parameters {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation;
}
export declare function quicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3Parameters): any;
export interface QuicksightDataSourceDataSourceParametersSnowflakeParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
}
export declare function quicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParameters): any;
export interface QuicksightDataSourceDataSourceParametersSparkParameters {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSparkParameters): any;
export interface QuicksightDataSourceDataSourceParametersSqlServerParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSqlServerParameters): any;
export interface QuicksightDataSourceDataSourceParametersTeradataParameters {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersTeradataParameters): any;
export interface QuicksightDataSourceDataSourceParameters {
    /**
    * <p>Amazon Elasticsearch Service parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters;
    /**
    * <p>Amazon Athena parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#athena_parameters QuicksightDataSource#athena_parameters}
    */
    readonly athenaParameters?: QuicksightDataSourceDataSourceParametersAthenaParameters;
    /**
    * <p>Amazon Aurora parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_parameters QuicksightDataSource#aurora_parameters}
    */
    readonly auroraParameters?: QuicksightDataSourceDataSourceParametersAuroraParameters;
    /**
    * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters;
    /**
    * <p>MariaDB parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#maria_db_parameters QuicksightDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: QuicksightDataSourceDataSourceParametersMariaDbParameters;
    /**
    * <p>MySQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#my_sql_parameters QuicksightDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: QuicksightDataSourceDataSourceParametersMySqlParameters;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#oracle_parameters QuicksightDataSource#oracle_parameters}
    */
    readonly oracleParameters?: QuicksightDataSourceDataSourceParametersOracleParameters;
    /**
    * <p>PostgreSQL parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters;
    /**
    * <p>Presto parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#presto_parameters QuicksightDataSource#presto_parameters}
    */
    readonly prestoParameters?: QuicksightDataSourceDataSourceParametersPrestoParameters;
    /**
    * <p>Amazon RDS parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#rds_parameters QuicksightDataSource#rds_parameters}
    */
    readonly rdsParameters?: QuicksightDataSourceDataSourceParametersRdsParameters;
    /**
    * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
              <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
              <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#redshift_parameters QuicksightDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: QuicksightDataSourceDataSourceParametersRedshiftParameters;
    /**
    * <p>S3 parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#s3_parameters QuicksightDataSource#s3_parameters}
    */
    readonly s3Parameters?: QuicksightDataSourceDataSourceParametersS3Parameters;
    /**
    * <p>Snowflake parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#snowflake_parameters QuicksightDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: QuicksightDataSourceDataSourceParametersSnowflakeParameters;
    /**
    * <p>Spark parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#spark_parameters QuicksightDataSource#spark_parameters}
    */
    readonly sparkParameters?: QuicksightDataSourceDataSourceParametersSparkParameters;
    /**
    * <p>SQL Server parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#sql_server_parameters QuicksightDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: QuicksightDataSourceDataSourceParametersSqlServerParameters;
    /**
    * <p>Teradata parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#teradata_parameters QuicksightDataSource#teradata_parameters}
    */
    readonly teradataParameters?: QuicksightDataSourceDataSourceParametersTeradataParameters;
}
export declare function quicksightDataSourceDataSourceParametersToTerraform(struct?: QuicksightDataSourceDataSourceParameters): any;
export interface QuicksightDataSourceErrorInfo {
    /**
    * <p>Error message.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#message QuicksightDataSource#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#type QuicksightDataSource#type}
    */
    readonly type?: string;
}
export declare function quicksightDataSourceErrorInfoToTerraform(struct?: QuicksightDataSourceErrorInfo): any;
export interface QuicksightDataSourcePermissions {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#actions QuicksightDataSource#actions}
    */
    readonly actions: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
              following:</p>
          <ul>
              <li>
                  <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
              </li>
              <li>
                  <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
              </li>
              <li>
                  <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                      ARN. Use this option only to share resources (templates) across AWS accounts.
                      (This is less common.) </p>
              </li>
           </ul>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#principal QuicksightDataSource#principal}
    */
    readonly principal: string;
}
export declare function quicksightDataSourcePermissionsToTerraform(struct?: QuicksightDataSourcePermissions): any;
export interface QuicksightDataSourceSslProperties {
    /**
    * <p>A Boolean option to control whether SSL should be disabled.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#disable_ssl QuicksightDataSource#disable_ssl}
    */
    readonly disableSsl?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslProperties): any;
export interface QuicksightDataSourceTags {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#value QuicksightDataSource#value}
    */
    readonly value: string;
}
export declare function quicksightDataSourceTagsToTerraform(struct?: QuicksightDataSourceTags): any;
export interface QuicksightDataSourceVpcConnectionProperties {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn: string;
}
export declare function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionProperties): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html awscc_quicksight_data_source}
*/
export declare class QuicksightDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html awscc_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSourceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: QuicksightDataSourceConfig);
    private _alternateDataSourceParameters?;
    get alternateDataSourceParameters(): QuicksightDataSourceAlternateDataSourceParameters[];
    set alternateDataSourceParameters(value: QuicksightDataSourceAlternateDataSourceParameters[]);
    resetAlternateDataSourceParameters(): void;
    get alternateDataSourceParametersInput(): QuicksightDataSourceAlternateDataSourceParameters[] | undefined;
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    private _credentials?;
    get credentials(): QuicksightDataSourceCredentials;
    set credentials(value: QuicksightDataSourceCredentials);
    resetCredentials(): void;
    get credentialsInput(): QuicksightDataSourceCredentials | undefined;
    private _dataSourceId?;
    get dataSourceId(): string;
    set dataSourceId(value: string);
    resetDataSourceId(): void;
    get dataSourceIdInput(): string | undefined;
    private _dataSourceParameters?;
    get dataSourceParameters(): QuicksightDataSourceDataSourceParameters;
    set dataSourceParameters(value: QuicksightDataSourceDataSourceParameters);
    resetDataSourceParameters(): void;
    get dataSourceParametersInput(): QuicksightDataSourceDataSourceParameters | undefined;
    private _errorInfo?;
    get errorInfo(): QuicksightDataSourceErrorInfo;
    set errorInfo(value: QuicksightDataSourceErrorInfo);
    resetErrorInfo(): void;
    get errorInfoInput(): QuicksightDataSourceErrorInfo | undefined;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _permissions?;
    get permissions(): QuicksightDataSourcePermissions[];
    set permissions(value: QuicksightDataSourcePermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightDataSourcePermissions[] | undefined;
    private _sslProperties?;
    get sslProperties(): QuicksightDataSourceSslProperties;
    set sslProperties(value: QuicksightDataSourceSslProperties);
    resetSslProperties(): void;
    get sslPropertiesInput(): QuicksightDataSourceSslProperties | undefined;
    get status(): string;
    private _tags?;
    get tags(): QuicksightDataSourceTags[];
    set tags(value: QuicksightDataSourceTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightDataSourceTags[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _vpcConnectionProperties?;
    get vpcConnectionProperties(): QuicksightDataSourceVpcConnectionProperties;
    set vpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties);
    resetVpcConnectionProperties(): void;
    get vpcConnectionPropertiesInput(): QuicksightDataSourceVpcConnectionProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
