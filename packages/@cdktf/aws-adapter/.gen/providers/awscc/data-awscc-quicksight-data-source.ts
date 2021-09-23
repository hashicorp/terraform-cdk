// https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html#id DataAwsccQuicksightDataSource#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {

  // manifest_file_location - computed: true, optional: false, required: false
  public get manifestFileLocation() {
    return this.interpolationForAttribute('manifest_file_location') as any;
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParameters extends cdktf.ComplexComputedList {

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  public get amazonElasticsearchParameters() {
    return this.interpolationForAttribute('amazon_elasticsearch_parameters') as any;
  }

  // athena_parameters - computed: true, optional: false, required: false
  public get athenaParameters() {
    return this.interpolationForAttribute('athena_parameters') as any;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  public get auroraParameters() {
    return this.interpolationForAttribute('aurora_parameters') as any;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  public get auroraPostgreSqlParameters() {
    return this.interpolationForAttribute('aurora_postgre_sql_parameters') as any;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  public get mariaDbParameters() {
    return this.interpolationForAttribute('maria_db_parameters') as any;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  public get mySqlParameters() {
    return this.interpolationForAttribute('my_sql_parameters') as any;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  public get oracleParameters() {
    return this.interpolationForAttribute('oracle_parameters') as any;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  public get postgreSqlParameters() {
    return this.interpolationForAttribute('postgre_sql_parameters') as any;
  }

  // presto_parameters - computed: true, optional: false, required: false
  public get prestoParameters() {
    return this.interpolationForAttribute('presto_parameters') as any;
  }

  // rds_parameters - computed: true, optional: false, required: false
  public get rdsParameters() {
    return this.interpolationForAttribute('rds_parameters') as any;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  public get redshiftParameters() {
    return this.interpolationForAttribute('redshift_parameters') as any;
  }

  // s3_parameters - computed: true, optional: false, required: false
  public get s3Parameters() {
    return this.interpolationForAttribute('s3_parameters') as any;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  public get snowflakeParameters() {
    return this.interpolationForAttribute('snowflake_parameters') as any;
  }

  // spark_parameters - computed: true, optional: false, required: false
  public get sparkParameters() {
    return this.interpolationForAttribute('spark_parameters') as any;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  public get sqlServerParameters() {
    return this.interpolationForAttribute('sql_server_parameters') as any;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  public get teradataParameters() {
    return this.interpolationForAttribute('teradata_parameters') as any;
  }
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {

  // manifest_file_location - computed: true, optional: false, required: false
  public get manifestFileLocation() {
    return this.interpolationForAttribute('manifest_file_location') as any;
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters extends cdktf.ComplexComputedList {

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  public get amazonElasticsearchParameters() {
    return this.interpolationForAttribute('amazon_elasticsearch_parameters') as any;
  }

  // athena_parameters - computed: true, optional: false, required: false
  public get athenaParameters() {
    return this.interpolationForAttribute('athena_parameters') as any;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  public get auroraParameters() {
    return this.interpolationForAttribute('aurora_parameters') as any;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  public get auroraPostgreSqlParameters() {
    return this.interpolationForAttribute('aurora_postgre_sql_parameters') as any;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  public get mariaDbParameters() {
    return this.interpolationForAttribute('maria_db_parameters') as any;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  public get mySqlParameters() {
    return this.interpolationForAttribute('my_sql_parameters') as any;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  public get oracleParameters() {
    return this.interpolationForAttribute('oracle_parameters') as any;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  public get postgreSqlParameters() {
    return this.interpolationForAttribute('postgre_sql_parameters') as any;
  }

  // presto_parameters - computed: true, optional: false, required: false
  public get prestoParameters() {
    return this.interpolationForAttribute('presto_parameters') as any;
  }

  // rds_parameters - computed: true, optional: false, required: false
  public get rdsParameters() {
    return this.interpolationForAttribute('rds_parameters') as any;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  public get redshiftParameters() {
    return this.interpolationForAttribute('redshift_parameters') as any;
  }

  // s3_parameters - computed: true, optional: false, required: false
  public get s3Parameters() {
    return this.interpolationForAttribute('s3_parameters') as any;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  public get snowflakeParameters() {
    return this.interpolationForAttribute('snowflake_parameters') as any;
  }

  // spark_parameters - computed: true, optional: false, required: false
  public get sparkParameters() {
    return this.interpolationForAttribute('spark_parameters') as any;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  public get sqlServerParameters() {
    return this.interpolationForAttribute('sql_server_parameters') as any;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  public get teradataParameters() {
    return this.interpolationForAttribute('teradata_parameters') as any;
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPair extends cdktf.ComplexComputedList {

  // alternate_data_source_parameters - computed: true, optional: false, required: false
  public get alternateDataSourceParameters() {
    return this.interpolationForAttribute('alternate_data_source_parameters') as any;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alternate_data_source_parameters: cdktf.listMapper(dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform)(struct!.alternateDataSourceParameters),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccQuicksightDataSourceCredentials extends cdktf.ComplexComputedList {

  // copy_source_arn - computed: true, optional: false, required: false
  public get copySourceArn() {
    return this.getStringAttribute('copy_source_arn');
  }

  // credential_pair - computed: true, optional: false, required: false
  public get credentialPair() {
    return this.interpolationForAttribute('credential_pair') as any;
  }
}

export function dataAwsccQuicksightDataSourceCredentialsToTerraform(struct?: DataAwsccQuicksightDataSourceCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_source_arn: cdktf.stringToTerraform(struct!.copySourceArn),
    credential_pair: dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct!.credentialPair),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {

  // manifest_file_location - computed: true, optional: false, required: false
  public get manifestFileLocation() {
    return this.interpolationForAttribute('manifest_file_location') as any;
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    manifest_file_location: dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccQuicksightDataSourceDataSourceParameters extends cdktf.ComplexComputedList {

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  public get amazonElasticsearchParameters() {
    return this.interpolationForAttribute('amazon_elasticsearch_parameters') as any;
  }

  // athena_parameters - computed: true, optional: false, required: false
  public get athenaParameters() {
    return this.interpolationForAttribute('athena_parameters') as any;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  public get auroraParameters() {
    return this.interpolationForAttribute('aurora_parameters') as any;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  public get auroraPostgreSqlParameters() {
    return this.interpolationForAttribute('aurora_postgre_sql_parameters') as any;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  public get mariaDbParameters() {
    return this.interpolationForAttribute('maria_db_parameters') as any;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  public get mySqlParameters() {
    return this.interpolationForAttribute('my_sql_parameters') as any;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  public get oracleParameters() {
    return this.interpolationForAttribute('oracle_parameters') as any;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  public get postgreSqlParameters() {
    return this.interpolationForAttribute('postgre_sql_parameters') as any;
  }

  // presto_parameters - computed: true, optional: false, required: false
  public get prestoParameters() {
    return this.interpolationForAttribute('presto_parameters') as any;
  }

  // rds_parameters - computed: true, optional: false, required: false
  public get rdsParameters() {
    return this.interpolationForAttribute('rds_parameters') as any;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  public get redshiftParameters() {
    return this.interpolationForAttribute('redshift_parameters') as any;
  }

  // s3_parameters - computed: true, optional: false, required: false
  public get s3Parameters() {
    return this.interpolationForAttribute('s3_parameters') as any;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  public get snowflakeParameters() {
    return this.interpolationForAttribute('snowflake_parameters') as any;
  }

  // spark_parameters - computed: true, optional: false, required: false
  public get sparkParameters() {
    return this.interpolationForAttribute('spark_parameters') as any;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  public get sqlServerParameters() {
    return this.interpolationForAttribute('sql_server_parameters') as any;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  public get teradataParameters() {
    return this.interpolationForAttribute('teradata_parameters') as any;
  }
}

export function dataAwsccQuicksightDataSourceDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    athena_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    maria_db_parameters: dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    snowflake_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    teradata_parameters: dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
  }
}

export class DataAwsccQuicksightDataSourceErrorInfo extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSourceErrorInfoToTerraform(struct?: DataAwsccQuicksightDataSourceErrorInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSourcePermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightDataSourcePermissionsToTerraform(struct?: DataAwsccQuicksightDataSourcePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightDataSourceSslProperties extends cdktf.ComplexComputedList {

  // disable_ssl - computed: true, optional: false, required: false
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
}

export function dataAwsccQuicksightDataSourceSslPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceSslProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_ssl: cdktf.booleanToTerraform(struct!.disableSsl),
  }
}

export class DataAwsccQuicksightDataSourceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightDataSourceTagsToTerraform(struct?: DataAwsccQuicksightDataSourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccQuicksightDataSourceVpcConnectionProperties extends cdktf.ComplexComputedList {

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}

export function dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_connection_arn: cdktf.stringToTerraform(struct!.vpcConnectionArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html awscc_quicksight_data_source}
*/
export class DataAwsccQuicksightDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html awscc_quicksight_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSourceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_data_source_parameters - computed: true, optional: false, required: false
  public get alternateDataSourceParameters() {
    return this.interpolationForAttribute('alternate_data_source_parameters') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // data_source_parameters - computed: true, optional: false, required: false
  public get dataSourceParameters() {
    return this.interpolationForAttribute('data_source_parameters') as any;
  }

  // error_info - computed: true, optional: false, required: false
  public get errorInfo() {
    return this.interpolationForAttribute('error_info') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }

  // ssl_properties - computed: true, optional: false, required: false
  public get sslProperties() {
    return this.interpolationForAttribute('ssl_properties') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_connection_properties - computed: true, optional: false, required: false
  public get vpcConnectionProperties() {
    return this.interpolationForAttribute('vpc_connection_properties') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
