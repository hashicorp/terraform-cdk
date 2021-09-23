// https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export interface QuicksightDataSourceAlternateDataSourceParametersAthenaParameters {
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface QuicksightDataSourceAlternateDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation;
}

export function quicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: quicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: quicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters {
  /**
  * <p>The Amazon Elasticsearch Service domain.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
  */
  readonly domain: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters {
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

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

export function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alternate_data_source_parameters: cdktf.listMapper(quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform)(struct!.alternateDataSourceParameters),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

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

export function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_source_arn: cdktf.stringToTerraform(struct!.copySourceArn),
    credential_pair: quicksightDataSourceCredentialsCredentialPairToTerraform(struct!.credentialPair),
  }
}

export interface QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters {
  /**
  * <p>The Amazon Elasticsearch Service domain.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
  */
  readonly domain: string;
}

export function quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export interface QuicksightDataSourceDataSourceParametersAthenaParameters {
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

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

export function quicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

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

export function quicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface QuicksightDataSourceDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation;
}

export function quicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

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

export function quicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

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

export function quicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

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

export function quicksightDataSourceDataSourceParametersToTerraform(struct?: QuicksightDataSourceDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: quicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: quicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: quicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: quicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

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

export function quicksightDataSourceErrorInfoToTerraform(struct?: QuicksightDataSourceErrorInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function quicksightDataSourcePermissionsToTerraform(struct?: QuicksightDataSourcePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface QuicksightDataSourceSslProperties {
  /**
  * <p>A Boolean option to control whether SSL should be disabled.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#disable_ssl QuicksightDataSource#disable_ssl}
  */
  readonly disableSsl?: boolean | cdktf.IResolvable;
}

export function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_ssl: cdktf.booleanToTerraform(struct!.disableSsl),
  }
}

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

export function quicksightDataSourceTagsToTerraform(struct?: QuicksightDataSourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface QuicksightDataSourceVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn: string;
}

export function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_connection_arn: cdktf.stringToTerraform(struct!.vpcConnectionArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html awscc_quicksight_data_source}
*/
export class QuicksightDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_source.html awscc_quicksight_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_data_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternateDataSourceParameters = config.alternateDataSourceParameters;
    this._awsAccountId = config.awsAccountId;
    this._credentials = config.credentials;
    this._dataSourceId = config.dataSourceId;
    this._dataSourceParameters = config.dataSourceParameters;
    this._errorInfo = config.errorInfo;
    this._name = config.name;
    this._permissions = config.permissions;
    this._sslProperties = config.sslProperties;
    this._tags = config.tags;
    this._type = config.type;
    this._vpcConnectionProperties = config.vpcConnectionProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_data_source_parameters - computed: false, optional: true, required: false
  private _alternateDataSourceParameters?: QuicksightDataSourceAlternateDataSourceParameters[];
  public get alternateDataSourceParameters() {
    return this.interpolationForAttribute('alternate_data_source_parameters') as any;
  }
  public set alternateDataSourceParameters(value: QuicksightDataSourceAlternateDataSourceParameters[] ) {
    this._alternateDataSourceParameters = value;
  }
  public resetAlternateDataSourceParameters() {
    this._alternateDataSourceParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateDataSourceParametersInput() {
    return this._alternateDataSourceParameters
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: QuicksightDataSourceCredentials;
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: QuicksightDataSourceCredentials ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string;
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId
  }

  // data_source_parameters - computed: false, optional: true, required: false
  private _dataSourceParameters?: QuicksightDataSourceDataSourceParameters;
  public get dataSourceParameters() {
    return this.interpolationForAttribute('data_source_parameters') as any;
  }
  public set dataSourceParameters(value: QuicksightDataSourceDataSourceParameters ) {
    this._dataSourceParameters = value;
  }
  public resetDataSourceParameters() {
    this._dataSourceParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceParametersInput() {
    return this._dataSourceParameters
  }

  // error_info - computed: false, optional: true, required: false
  private _errorInfo?: QuicksightDataSourceErrorInfo;
  public get errorInfo() {
    return this.interpolationForAttribute('error_info') as any;
  }
  public set errorInfo(value: QuicksightDataSourceErrorInfo ) {
    this._errorInfo = value;
  }
  public resetErrorInfo() {
    this._errorInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInfoInput() {
    return this._errorInfo
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: QuicksightDataSourcePermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightDataSourcePermissions[] ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // ssl_properties - computed: false, optional: true, required: false
  private _sslProperties?: QuicksightDataSourceSslProperties;
  public get sslProperties() {
    return this.interpolationForAttribute('ssl_properties') as any;
  }
  public set sslProperties(value: QuicksightDataSourceSslProperties ) {
    this._sslProperties = value;
  }
  public resetSslProperties() {
    this._sslProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPropertiesInput() {
    return this._sslProperties
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QuicksightDataSourceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightDataSourceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vpc_connection_properties - computed: false, optional: true, required: false
  private _vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
  public get vpcConnectionProperties() {
    return this.interpolationForAttribute('vpc_connection_properties') as any;
  }
  public set vpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties ) {
    this._vpcConnectionProperties = value;
  }
  public resetVpcConnectionProperties() {
    this._vpcConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionPropertiesInput() {
    return this._vpcConnectionProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_data_source_parameters: cdktf.listMapper(quicksightDataSourceAlternateDataSourceParametersToTerraform)(this._alternateDataSourceParameters),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      credentials: quicksightDataSourceCredentialsToTerraform(this._credentials),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      data_source_parameters: quicksightDataSourceDataSourceParametersToTerraform(this._dataSourceParameters),
      error_info: quicksightDataSourceErrorInfoToTerraform(this._errorInfo),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(quicksightDataSourcePermissionsToTerraform)(this._permissions),
      ssl_properties: quicksightDataSourceSslPropertiesToTerraform(this._sslProperties),
      tags: cdktf.listMapper(quicksightDataSourceTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vpc_connection_properties: quicksightDataSourceVpcConnectionPropertiesToTerraform(this._vpcConnectionProperties),
    };
  }
}
