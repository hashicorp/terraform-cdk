"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters = exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform = exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters = void 0;
exports.dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation = exports.dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters = exports.dataAwsccQuicksightDataSourceCredentialsToTerraform = exports.DataAwsccQuicksightDataSourceCredentials = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPair = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters = exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform = exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters = void 0;
exports.DataAwsccQuicksightDataSource = exports.dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform = exports.DataAwsccQuicksightDataSourceVpcConnectionProperties = exports.dataAwsccQuicksightDataSourceTagsToTerraform = exports.DataAwsccQuicksightDataSourceTags = exports.dataAwsccQuicksightDataSourceSslPropertiesToTerraform = exports.DataAwsccQuicksightDataSourceSslProperties = exports.dataAwsccQuicksightDataSourcePermissionsToTerraform = exports.DataAwsccQuicksightDataSourcePermissions = exports.dataAwsccQuicksightDataSourceErrorInfoToTerraform = exports.DataAwsccQuicksightDataSourceErrorInfo = exports.dataAwsccQuicksightDataSourceDataSourceParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters = exports.dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform = exports.DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    // domain - computed: true, optional: false, required: false
    get domain() {
        return this.getStringAttribute('domain');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    // work_group - computed: true, optional: false, required: false
    get workGroup() {
        return this.getStringAttribute('work_group');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        work_group: cdktf.stringToTerraform(struct.workGroup),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    // catalog - computed: true, optional: false, required: false
    get catalog() {
        return this.getStringAttribute('catalog');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    // cluster_id - computed: true, optional: false, required: false
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_id: cdktf.stringToTerraform(struct.clusterId),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation = DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    // manifest_file_location - computed: true, optional: false, required: false
    get manifestFileLocation() {
        return this.interpolationForAttribute('manifest_file_location');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_file_location: dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct.manifestFileLocation),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // warehouse - computed: true, optional: false, required: false
    get warehouse() {
        return this.getStringAttribute('warehouse');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        warehouse: cdktf.stringToTerraform(struct.warehouse),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform;
class DataAwsccQuicksightDataSourceAlternateDataSourceParameters extends cdktf.ComplexComputedList {
    // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
    get amazonElasticsearchParameters() {
        return this.interpolationForAttribute('amazon_elasticsearch_parameters');
    }
    // athena_parameters - computed: true, optional: false, required: false
    get athenaParameters() {
        return this.interpolationForAttribute('athena_parameters');
    }
    // aurora_parameters - computed: true, optional: false, required: false
    get auroraParameters() {
        return this.interpolationForAttribute('aurora_parameters');
    }
    // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
    get auroraPostgreSqlParameters() {
        return this.interpolationForAttribute('aurora_postgre_sql_parameters');
    }
    // maria_db_parameters - computed: true, optional: false, required: false
    get mariaDbParameters() {
        return this.interpolationForAttribute('maria_db_parameters');
    }
    // my_sql_parameters - computed: true, optional: false, required: false
    get mySqlParameters() {
        return this.interpolationForAttribute('my_sql_parameters');
    }
    // oracle_parameters - computed: true, optional: false, required: false
    get oracleParameters() {
        return this.interpolationForAttribute('oracle_parameters');
    }
    // postgre_sql_parameters - computed: true, optional: false, required: false
    get postgreSqlParameters() {
        return this.interpolationForAttribute('postgre_sql_parameters');
    }
    // presto_parameters - computed: true, optional: false, required: false
    get prestoParameters() {
        return this.interpolationForAttribute('presto_parameters');
    }
    // rds_parameters - computed: true, optional: false, required: false
    get rdsParameters() {
        return this.interpolationForAttribute('rds_parameters');
    }
    // redshift_parameters - computed: true, optional: false, required: false
    get redshiftParameters() {
        return this.interpolationForAttribute('redshift_parameters');
    }
    // s3_parameters - computed: true, optional: false, required: false
    get s3Parameters() {
        return this.interpolationForAttribute('s3_parameters');
    }
    // snowflake_parameters - computed: true, optional: false, required: false
    get snowflakeParameters() {
        return this.interpolationForAttribute('snowflake_parameters');
    }
    // spark_parameters - computed: true, optional: false, required: false
    get sparkParameters() {
        return this.interpolationForAttribute('spark_parameters');
    }
    // sql_server_parameters - computed: true, optional: false, required: false
    get sqlServerParameters() {
        return this.interpolationForAttribute('sql_server_parameters');
    }
    // teradata_parameters - computed: true, optional: false, required: false
    get teradataParameters() {
        return this.interpolationForAttribute('teradata_parameters');
    }
}
exports.DataAwsccQuicksightDataSourceAlternateDataSourceParameters = DataAwsccQuicksightDataSourceAlternateDataSourceParameters;
function dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct.amazonElasticsearchParameters),
        athena_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct.athenaParameters),
        aurora_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct.auroraParameters),
        aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct.auroraPostgreSqlParameters),
        maria_db_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct.mariaDbParameters),
        my_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct.mySqlParameters),
        oracle_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct.oracleParameters),
        postgre_sql_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct.postgreSqlParameters),
        presto_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct.prestoParameters),
        rds_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct.rdsParameters),
        redshift_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct.redshiftParameters),
        s3_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct.s3Parameters),
        snowflake_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct.snowflakeParameters),
        spark_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct.sparkParameters),
        sql_server_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct.sqlServerParameters),
        teradata_parameters: dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct.teradataParameters),
    };
}
exports.dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform = dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    // domain - computed: true, optional: false, required: false
    get domain() {
        return this.getStringAttribute('domain');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    // work_group - computed: true, optional: false, required: false
    get workGroup() {
        return this.getStringAttribute('work_group');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        work_group: cdktf.stringToTerraform(struct.workGroup),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    // catalog - computed: true, optional: false, required: false
    get catalog() {
        return this.getStringAttribute('catalog');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    // cluster_id - computed: true, optional: false, required: false
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_id: cdktf.stringToTerraform(struct.clusterId),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    // manifest_file_location - computed: true, optional: false, required: false
    get manifestFileLocation() {
        return this.interpolationForAttribute('manifest_file_location');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_file_location: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct.manifestFileLocation),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // warehouse - computed: true, optional: false, required: false
    get warehouse() {
        return this.getStringAttribute('warehouse');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        warehouse: cdktf.stringToTerraform(struct.warehouse),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters extends cdktf.ComplexComputedList {
    // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
    get amazonElasticsearchParameters() {
        return this.interpolationForAttribute('amazon_elasticsearch_parameters');
    }
    // athena_parameters - computed: true, optional: false, required: false
    get athenaParameters() {
        return this.interpolationForAttribute('athena_parameters');
    }
    // aurora_parameters - computed: true, optional: false, required: false
    get auroraParameters() {
        return this.interpolationForAttribute('aurora_parameters');
    }
    // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
    get auroraPostgreSqlParameters() {
        return this.interpolationForAttribute('aurora_postgre_sql_parameters');
    }
    // maria_db_parameters - computed: true, optional: false, required: false
    get mariaDbParameters() {
        return this.interpolationForAttribute('maria_db_parameters');
    }
    // my_sql_parameters - computed: true, optional: false, required: false
    get mySqlParameters() {
        return this.interpolationForAttribute('my_sql_parameters');
    }
    // oracle_parameters - computed: true, optional: false, required: false
    get oracleParameters() {
        return this.interpolationForAttribute('oracle_parameters');
    }
    // postgre_sql_parameters - computed: true, optional: false, required: false
    get postgreSqlParameters() {
        return this.interpolationForAttribute('postgre_sql_parameters');
    }
    // presto_parameters - computed: true, optional: false, required: false
    get prestoParameters() {
        return this.interpolationForAttribute('presto_parameters');
    }
    // rds_parameters - computed: true, optional: false, required: false
    get rdsParameters() {
        return this.interpolationForAttribute('rds_parameters');
    }
    // redshift_parameters - computed: true, optional: false, required: false
    get redshiftParameters() {
        return this.interpolationForAttribute('redshift_parameters');
    }
    // s3_parameters - computed: true, optional: false, required: false
    get s3Parameters() {
        return this.interpolationForAttribute('s3_parameters');
    }
    // snowflake_parameters - computed: true, optional: false, required: false
    get snowflakeParameters() {
        return this.interpolationForAttribute('snowflake_parameters');
    }
    // spark_parameters - computed: true, optional: false, required: false
    get sparkParameters() {
        return this.interpolationForAttribute('spark_parameters');
    }
    // sql_server_parameters - computed: true, optional: false, required: false
    get sqlServerParameters() {
        return this.interpolationForAttribute('sql_server_parameters');
    }
    // teradata_parameters - computed: true, optional: false, required: false
    get teradataParameters() {
        return this.interpolationForAttribute('teradata_parameters');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters = DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct.amazonElasticsearchParameters),
        athena_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct.athenaParameters),
        aurora_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct.auroraParameters),
        aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct.auroraPostgreSqlParameters),
        maria_db_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct.mariaDbParameters),
        my_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct.mySqlParameters),
        oracle_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct.oracleParameters),
        postgre_sql_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct.postgreSqlParameters),
        presto_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct.prestoParameters),
        rds_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct.rdsParameters),
        redshift_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct.redshiftParameters),
        s3_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct.s3Parameters),
        snowflake_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct.snowflakeParameters),
        spark_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct.sparkParameters),
        sql_server_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct.sqlServerParameters),
        teradata_parameters: dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct.teradataParameters),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform;
class DataAwsccQuicksightDataSourceCredentialsCredentialPair extends cdktf.ComplexComputedList {
    // alternate_data_source_parameters - computed: true, optional: false, required: false
    get alternateDataSourceParameters() {
        return this.interpolationForAttribute('alternate_data_source_parameters');
    }
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccQuicksightDataSourceCredentialsCredentialPair = DataAwsccQuicksightDataSourceCredentialsCredentialPair;
function dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alternate_data_source_parameters: cdktf.listMapper(dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform)(struct.alternateDataSourceParameters),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform = dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform;
class DataAwsccQuicksightDataSourceCredentials extends cdktf.ComplexComputedList {
    // copy_source_arn - computed: true, optional: false, required: false
    get copySourceArn() {
        return this.getStringAttribute('copy_source_arn');
    }
    // credential_pair - computed: true, optional: false, required: false
    get credentialPair() {
        return this.interpolationForAttribute('credential_pair');
    }
}
exports.DataAwsccQuicksightDataSourceCredentials = DataAwsccQuicksightDataSourceCredentials;
function dataAwsccQuicksightDataSourceCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        copy_source_arn: cdktf.stringToTerraform(struct.copySourceArn),
        credential_pair: dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct.credentialPair),
    };
}
exports.dataAwsccQuicksightDataSourceCredentialsToTerraform = dataAwsccQuicksightDataSourceCredentialsToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters extends cdktf.ComplexComputedList {
    // domain - computed: true, optional: false, required: false
    get domain() {
        return this.getStringAttribute('domain');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters = DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters extends cdktf.ComplexComputedList {
    // work_group - computed: true, optional: false, required: false
    get workGroup() {
        return this.getStringAttribute('work_group');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters = DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        work_group: cdktf.stringToTerraform(struct.workGroup),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters = DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters = DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters = DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters = DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters = DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters = DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters extends cdktf.ComplexComputedList {
    // catalog - computed: true, optional: false, required: false
    get catalog() {
        return this.getStringAttribute('catalog');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters = DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters = DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters extends cdktf.ComplexComputedList {
    // cluster_id - computed: true, optional: false, required: false
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters = DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_id: cdktf.stringToTerraform(struct.clusterId),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation = DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation;
function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters extends cdktf.ComplexComputedList {
    // manifest_file_location - computed: true, optional: false, required: false
    get manifestFileLocation() {
        return this.interpolationForAttribute('manifest_file_location');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters = DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters;
function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_file_location: dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct.manifestFileLocation),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // warehouse - computed: true, optional: false, required: false
    get warehouse() {
        return this.getStringAttribute('warehouse');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters = DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        warehouse: cdktf.stringToTerraform(struct.warehouse),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters extends cdktf.ComplexComputedList {
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters = DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters = DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters extends cdktf.ComplexComputedList {
    // database - computed: true, optional: false, required: false
    get database() {
        return this.getStringAttribute('database');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters = DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform;
class DataAwsccQuicksightDataSourceDataSourceParameters extends cdktf.ComplexComputedList {
    // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
    get amazonElasticsearchParameters() {
        return this.interpolationForAttribute('amazon_elasticsearch_parameters');
    }
    // athena_parameters - computed: true, optional: false, required: false
    get athenaParameters() {
        return this.interpolationForAttribute('athena_parameters');
    }
    // aurora_parameters - computed: true, optional: false, required: false
    get auroraParameters() {
        return this.interpolationForAttribute('aurora_parameters');
    }
    // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
    get auroraPostgreSqlParameters() {
        return this.interpolationForAttribute('aurora_postgre_sql_parameters');
    }
    // maria_db_parameters - computed: true, optional: false, required: false
    get mariaDbParameters() {
        return this.interpolationForAttribute('maria_db_parameters');
    }
    // my_sql_parameters - computed: true, optional: false, required: false
    get mySqlParameters() {
        return this.interpolationForAttribute('my_sql_parameters');
    }
    // oracle_parameters - computed: true, optional: false, required: false
    get oracleParameters() {
        return this.interpolationForAttribute('oracle_parameters');
    }
    // postgre_sql_parameters - computed: true, optional: false, required: false
    get postgreSqlParameters() {
        return this.interpolationForAttribute('postgre_sql_parameters');
    }
    // presto_parameters - computed: true, optional: false, required: false
    get prestoParameters() {
        return this.interpolationForAttribute('presto_parameters');
    }
    // rds_parameters - computed: true, optional: false, required: false
    get rdsParameters() {
        return this.interpolationForAttribute('rds_parameters');
    }
    // redshift_parameters - computed: true, optional: false, required: false
    get redshiftParameters() {
        return this.interpolationForAttribute('redshift_parameters');
    }
    // s3_parameters - computed: true, optional: false, required: false
    get s3Parameters() {
        return this.interpolationForAttribute('s3_parameters');
    }
    // snowflake_parameters - computed: true, optional: false, required: false
    get snowflakeParameters() {
        return this.interpolationForAttribute('snowflake_parameters');
    }
    // spark_parameters - computed: true, optional: false, required: false
    get sparkParameters() {
        return this.interpolationForAttribute('spark_parameters');
    }
    // sql_server_parameters - computed: true, optional: false, required: false
    get sqlServerParameters() {
        return this.interpolationForAttribute('sql_server_parameters');
    }
    // teradata_parameters - computed: true, optional: false, required: false
    get teradataParameters() {
        return this.interpolationForAttribute('teradata_parameters');
    }
}
exports.DataAwsccQuicksightDataSourceDataSourceParameters = DataAwsccQuicksightDataSourceDataSourceParameters;
function dataAwsccQuicksightDataSourceDataSourceParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amazon_elasticsearch_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct.amazonElasticsearchParameters),
        athena_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct.athenaParameters),
        aurora_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct.auroraParameters),
        aurora_postgre_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct.auroraPostgreSqlParameters),
        maria_db_parameters: dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct.mariaDbParameters),
        my_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct.mySqlParameters),
        oracle_parameters: dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct.oracleParameters),
        postgre_sql_parameters: dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct.postgreSqlParameters),
        presto_parameters: dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct.prestoParameters),
        rds_parameters: dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct.rdsParameters),
        redshift_parameters: dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct.redshiftParameters),
        s3_parameters: dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct.s3Parameters),
        snowflake_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct.snowflakeParameters),
        spark_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct.sparkParameters),
        sql_server_parameters: dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct.sqlServerParameters),
        teradata_parameters: dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct.teradataParameters),
    };
}
exports.dataAwsccQuicksightDataSourceDataSourceParametersToTerraform = dataAwsccQuicksightDataSourceDataSourceParametersToTerraform;
class DataAwsccQuicksightDataSourceErrorInfo extends cdktf.ComplexComputedList {
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDataSourceErrorInfo = DataAwsccQuicksightDataSourceErrorInfo;
function dataAwsccQuicksightDataSourceErrorInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSourceErrorInfoToTerraform = dataAwsccQuicksightDataSourceErrorInfoToTerraform;
class DataAwsccQuicksightDataSourcePermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightDataSourcePermissions = DataAwsccQuicksightDataSourcePermissions;
function dataAwsccQuicksightDataSourcePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightDataSourcePermissionsToTerraform = dataAwsccQuicksightDataSourcePermissionsToTerraform;
class DataAwsccQuicksightDataSourceSslProperties extends cdktf.ComplexComputedList {
    // disable_ssl - computed: true, optional: false, required: false
    get disableSsl() {
        return this.getBooleanAttribute('disable_ssl');
    }
}
exports.DataAwsccQuicksightDataSourceSslProperties = DataAwsccQuicksightDataSourceSslProperties;
function dataAwsccQuicksightDataSourceSslPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_ssl: cdktf.booleanToTerraform(struct.disableSsl),
    };
}
exports.dataAwsccQuicksightDataSourceSslPropertiesToTerraform = dataAwsccQuicksightDataSourceSslPropertiesToTerraform;
class DataAwsccQuicksightDataSourceTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightDataSourceTags = DataAwsccQuicksightDataSourceTags;
function dataAwsccQuicksightDataSourceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightDataSourceTagsToTerraform = dataAwsccQuicksightDataSourceTagsToTerraform;
class DataAwsccQuicksightDataSourceVpcConnectionProperties extends cdktf.ComplexComputedList {
    // vpc_connection_arn - computed: true, optional: false, required: false
    get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
}
exports.DataAwsccQuicksightDataSourceVpcConnectionProperties = DataAwsccQuicksightDataSourceVpcConnectionProperties;
function dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        vpc_connection_arn: cdktf.stringToTerraform(struct.vpcConnectionArn),
    };
}
exports.dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform = dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_source.html awscc_quicksight_data_source}
*/
class DataAwsccQuicksightDataSource extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get alternateDataSourceParameters() {
        return this.interpolationForAttribute('alternate_data_source_parameters');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // aws_account_id - computed: true, optional: false, required: false
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // credentials - computed: true, optional: false, required: false
    get credentials() {
        return this.interpolationForAttribute('credentials');
    }
    // data_source_id - computed: true, optional: false, required: false
    get dataSourceId() {
        return this.getStringAttribute('data_source_id');
    }
    // data_source_parameters - computed: true, optional: false, required: false
    get dataSourceParameters() {
        return this.interpolationForAttribute('data_source_parameters');
    }
    // error_info - computed: true, optional: false, required: false
    get errorInfo() {
        return this.interpolationForAttribute('error_info');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.interpolationForAttribute('permissions');
    }
    // ssl_properties - computed: true, optional: false, required: false
    get sslProperties() {
        return this.interpolationForAttribute('ssl_properties');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // vpc_connection_properties - computed: true, optional: false, required: false
    get vpcConnectionProperties() {
        return this.interpolationForAttribute('vpc_connection_properties');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccQuicksightDataSource = DataAwsccQuicksightDataSource;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightDataSource.tfResourceType = "awscc_quicksight_data_source";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWRhdGEtc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4RUFBOEU7QUFDOUUsMkNBQTJDOzs7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSx1RkFBd0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXBJLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFORCwwTEFNQztBQUVELFNBQWdCLGtHQUFrRyxDQUFDLE1BQWdHO0lBQ2pOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBTEQsZ05BS0M7QUFFRCxNQUFhLDBFQUEyRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkgsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUFORCxnS0FNQztBQUVELFNBQWdCLHFGQUFxRixDQUFDLE1BQW1GO0lBQ3ZMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3ZELENBQUE7QUFDSCxDQUFDO0FBTEQsc0xBS0M7QUFFRCxNQUFhLDBF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LENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2RhdGFfc291cmNlLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfZGF0YV9zb3VyY2UuaHRtbCNpZCBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZSNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHdvcmtfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3b3JrR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3b3JrX2dyb3VwJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd29ya19ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JrR3JvdXApLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3JlU3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhdGFsb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZycpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1ByZXN0b1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhdGFsb2cpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Jkc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Jkc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGluc3RhbmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1JlZHNoaWZ0UGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2x1c3Rlcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVySWQpLFxuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1hbmlmZXN0X2ZpbGVfbG9jYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5pZmVzdEZpbGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYW5pZmVzdF9maWxlX2xvY2F0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYW5pZmVzdF9maWxlX2xvY2F0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzTWFuaWZlc3RGaWxlTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0RmlsZUxvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gd2FyZWhvdXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2FyZWhvdXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2FyZWhvdXNlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgd2FyZWhvdXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcmVob3VzZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1NwYXJrUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbWF6b25fZWxhc3RpY3NlYXJjaF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF0aGVuYV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXRoZW5hUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdGhlbmFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1cm9yYV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXVyb3JhUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdXJvcmFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXVyb3JhX3Bvc3RncmVfc3FsX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYXJpYV9kYl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFyaWFEYlBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWFyaWFfZGJfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG15X3NxbF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbXlTcWxQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ215X3NxbF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3JhY2xlX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmFjbGVQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yYWNsZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcG9zdGdyZV9zcWxfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvc3RncmVTcWxQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Bvc3RncmVfc3FsX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcmVzdG9fcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZXN0b1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJlc3RvX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZHNfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJkc1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmRzX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWRzaGlmdF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlZHNoaWZ0X3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzbm93Zmxha2VfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNub3dmbGFrZVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc25vd2ZsYWtlX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcGFya19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BhcmtQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwYXJrX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcWxfc2VydmVyX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcWxTZXJ2ZXJQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NxbF9zZXJ2ZXJfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRlcmFkYXRhX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZXJhZGF0YVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGVyYWRhdGFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hbWF6b25FbGFzdGljc2VhcmNoUGFyYW1ldGVycyksXG4gICAgYXRoZW5hX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hdGhlbmFQYXJhbWV0ZXJzKSxcbiAgICBhdXJvcmFfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1cm9yYVBhcmFtZXRlcnMpLFxuICAgIGF1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1cm9yYVBvc3RncmVTcWxQYXJhbWV0ZXJzKSxcbiAgICBtYXJpYV9kYl9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmlhRGJQYXJhbWV0ZXJzKSxcbiAgICBteV9zcWxfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubXlTcWxQYXJhbWV0ZXJzKSxcbiAgICBvcmFjbGVfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yYWNsZVBhcmFtZXRlcnMpLFxuICAgIHBvc3RncmVfc3FsX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdGdyZVNxbFBhcmFtZXRlcnMpLFxuICAgIHByZXN0b19wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucHJlc3RvUGFyYW1ldGVycyksXG4gICAgcmRzX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5yZHNQYXJhbWV0ZXJzKSxcbiAgICByZWRzaGlmdF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdFBhcmFtZXRlcnMpLFxuICAgIHMzX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzUGFyYW1ldGVycyksXG4gICAgc25vd2ZsYWtlX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5zbm93Zmxha2VQYXJhbWV0ZXJzKSxcbiAgICBzcGFya19wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5zcGFya1BhcmFtZXRlcnMpLFxuICAgIHNxbF9zZXJ2ZXJfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1NxbFNlcnZlclBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFNlcnZlclBhcmFtZXRlcnMpLFxuICAgIHRlcmFkYXRhX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnRlcmFkYXRhUGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbWFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHdvcmtfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3b3JrR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3b3JrX2dyb3VwJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB3b3JrX2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndvcmtHcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVTcWxQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc01hcmlhRGJQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGVQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGVQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZVNxbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Bvc3RncmVTcWxQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhdGFsb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZycpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG9QYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG9QYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhdGFsb2c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZyksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Jkc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaW5zdGFuY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1JlZHNoaWZ0UGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJJZCksXG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzTWFuaWZlc3RGaWxlTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVyc01hbmlmZXN0RmlsZUxvY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1hbmlmZXN0X2ZpbGVfbG9jYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5pZmVzdEZpbGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYW5pZmVzdF9maWxlX2xvY2F0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hbmlmZXN0X2ZpbGVfbG9jYXRpb246IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzTWFuaWZlc3RGaWxlTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0RmlsZUxvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHdhcmVob3VzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdhcmVob3VzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhcmVob3VzZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgd2FyZWhvdXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcmVob3VzZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1NwYXJrUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FtYXpvbl9lbGFzdGljc2VhcmNoX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdGhlbmFfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF0aGVuYVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXRoZW5hX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdXJvcmFfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1cm9yYVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXVyb3JhX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdXJvcmFfcG9zdGdyZV9zcWxfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1cm9yYVBvc3RncmVTcWxQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWFyaWFfZGJfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmlhRGJQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hcmlhX2RiX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBteV9zcWxfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG15U3FsUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdteV9zcWxfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG9yYWNsZV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JhY2xlUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcmFjbGVfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHBvc3RncmVfc3FsX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3N0Z3JlU3FsUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlc3RvX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVzdG9QYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByZXN0b19wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmRzX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZHNQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jkc19wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVkc2hpZnRfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZHNoaWZ0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWRzaGlmdF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gczNfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc25vd2ZsYWtlX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbm93Zmxha2VQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nub3dmbGFrZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3BhcmtfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwYXJrUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGFya19wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3FsX3NlcnZlcl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3FsU2VydmVyUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcWxfc2VydmVyX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0ZXJhZGF0YV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVyYWRhdGFQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RlcmFkYXRhX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuYW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMpLFxuICAgIGF0aGVuYV9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0aGVuYVBhcmFtZXRlcnMpLFxuICAgIGF1cm9yYV9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1cm9yYVBhcmFtZXRlcnMpLFxuICAgIGF1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVTcWxQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hdXJvcmFQb3N0Z3JlU3FsUGFyYW1ldGVycyksXG4gICAgbWFyaWFfZGJfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubWFyaWFEYlBhcmFtZXRlcnMpLFxuICAgIG15X3NxbF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubXlTcWxQYXJhbWV0ZXJzKSxcbiAgICBvcmFjbGVfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGVQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5vcmFjbGVQYXJhbWV0ZXJzKSxcbiAgICBwb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1Bvc3RncmVTcWxQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5wb3N0Z3JlU3FsUGFyYW1ldGVycyksXG4gICAgcHJlc3RvX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucHJlc3RvUGFyYW1ldGVycyksXG4gICAgcmRzX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucmRzUGFyYW1ldGVycyksXG4gICAgcmVkc2hpZnRfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZHNoaWZ0UGFyYW1ldGVycyksXG4gICAgczNfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzUGFyYW1ldGVycyksXG4gICAgc25vd2ZsYWtlX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzU25vd2ZsYWtlUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuc25vd2ZsYWtlUGFyYW1ldGVycyksXG4gICAgc3BhcmtfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyQWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwYXJrUGFyYW1ldGVycyksXG4gICAgc3FsX3NlcnZlcl9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJBbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVyc1NxbFNlcnZlclBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFNlcnZlclBhcmFtZXRlcnMpLFxuICAgIHRlcmFkYXRhX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS50ZXJhZGF0YVBhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbHRlcm5hdGVfZGF0YV9zb3VyY2VfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FsdGVybmF0ZV9kYXRhX3NvdXJjZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsdGVybmF0ZV9kYXRhX3NvdXJjZV9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpckFsdGVybmF0ZURhdGFTb3VyY2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWx0ZXJuYXRlRGF0YVNvdXJjZVBhcmFtZXRlcnMpLFxuICAgIHBhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhc3N3b3JkKSxcbiAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VybmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb3B5X3NvdXJjZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb3B5U291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9zb3VyY2VfYXJuJyk7XG4gIH1cblxuICAvLyBjcmVkZW50aWFsX3BhaXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVkZW50aWFsUGFpcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjcmVkZW50aWFsX3BhaXInKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvcHlfc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3B5U291cmNlQXJuKSxcbiAgICBjcmVkZW50aWFsX3BhaXI6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpclRvVGVycmFmb3JtKHN0cnVjdCEuY3JlZGVudGlhbFBhaXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHdvcmtfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3b3JrR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3b3JrX2dyb3VwJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd29ya19ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JrR3JvdXApLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3JlU3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzTXlTcWxQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZVNxbFBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhdGFsb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZycpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1ByZXN0b1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhdGFsb2cpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1Jkc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1Jkc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGluc3RhbmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1JlZHNoaWZ0UGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2x1c3Rlcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVySWQpLFxuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNNYW5pZmVzdEZpbGVMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1hbmlmZXN0X2ZpbGVfbG9jYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5pZmVzdEZpbGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYW5pZmVzdF9maWxlX2xvY2F0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1MzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYW5pZmVzdF9maWxlX2xvY2F0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUzNQYXJhbWV0ZXJzTWFuaWZlc3RGaWxlTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmlmZXN0RmlsZUxvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gd2FyZWhvdXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2FyZWhvdXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2FyZWhvdXNlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgd2FyZWhvdXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcmVob3VzZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1NwYXJrUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXJQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbWF6b25fZWxhc3RpY3NlYXJjaF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW1hem9uRWxhc3RpY3NlYXJjaFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF0aGVuYV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXRoZW5hUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdGhlbmFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1cm9yYV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXVyb3JhUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdXJvcmFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXVyb3JhX3Bvc3RncmVfc3FsX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYXJpYV9kYl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFyaWFEYlBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWFyaWFfZGJfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG15X3NxbF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbXlTcWxQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ215X3NxbF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3JhY2xlX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmFjbGVQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yYWNsZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcG9zdGdyZV9zcWxfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvc3RncmVTcWxQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Bvc3RncmVfc3FsX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcmVzdG9fcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZXN0b1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJlc3RvX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZHNfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJkc1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmRzX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWRzaGlmdF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlZHNoaWZ0X3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzbm93Zmxha2VfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNub3dmbGFrZVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc25vd2ZsYWtlX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcGFya19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BhcmtQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwYXJrX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcWxfc2VydmVyX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcWxTZXJ2ZXJQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NxbF9zZXJ2ZXJfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRlcmFkYXRhX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZXJhZGF0YVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGVyYWRhdGFfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1hem9uX2VsYXN0aWNzZWFyY2hfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hbWF6b25FbGFzdGljc2VhcmNoUGFyYW1ldGVycyksXG4gICAgYXRoZW5hX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hdGhlbmFQYXJhbWV0ZXJzKSxcbiAgICBhdXJvcmFfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1cm9yYVBhcmFtZXRlcnMpLFxuICAgIGF1cm9yYV9wb3N0Z3JlX3NxbF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZVNxbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1cm9yYVBvc3RncmVTcWxQYXJhbWV0ZXJzKSxcbiAgICBtYXJpYV9kYl9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmlhRGJQYXJhbWV0ZXJzKSxcbiAgICBteV9zcWxfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc015U3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubXlTcWxQYXJhbWV0ZXJzKSxcbiAgICBvcmFjbGVfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yYWNsZVBhcmFtZXRlcnMpLFxuICAgIHBvc3RncmVfc3FsX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3JlU3FsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdGdyZVNxbFBhcmFtZXRlcnMpLFxuICAgIHByZXN0b19wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEucHJlc3RvUGFyYW1ldGVycyksXG4gICAgcmRzX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5yZHNQYXJhbWV0ZXJzKSxcbiAgICByZWRzaGlmdF9wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdFBhcmFtZXRlcnMpLFxuICAgIHMzX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTM1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzUGFyYW1ldGVycyksXG4gICAgc25vd2ZsYWtlX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5zbm93Zmxha2VQYXJhbWV0ZXJzKSxcbiAgICBzcGFya19wYXJhbWV0ZXJzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZURhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5zcGFya1BhcmFtZXRlcnMpLFxuICAgIHNxbF9zZXJ2ZXJfcGFyYW1ldGVyczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VEYXRhU291cmNlUGFyYW1ldGVyc1NxbFNlcnZlclBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFNlcnZlclBhcmFtZXRlcnMpLFxuICAgIHRlcmFkYXRhX3BhcmFtZXRlcnM6IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnRlcmFkYXRhUGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlRXJyb3JJbmZvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VFcnJvckluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZUVycm9ySW5mbyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlUGVybWlzc2lvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY3Rpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY3Rpb25zJyk7XG4gIH1cblxuICAvLyBwcmluY2lwYWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmluY2lwYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmluY2lwYWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlUGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VTc2xQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGlzYWJsZV9zc2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXNhYmxlU3NsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc3NsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlX3NzbDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGlzYWJsZVNzbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlVnBjQ29ubmVjdGlvblByb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB2cGNfY29ubmVjdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNDb25uZWN0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2Nvbm5lY3Rpb25fYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU291cmNlVnBjQ29ubmVjdGlvblByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHZwY19jb25uZWN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52cGNDb25uZWN0aW9uQXJuKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfZGF0YV9zb3VyY2UuaHRtbCBhd3NjY19xdWlja3NpZ2h0X2RhdGFfc291cmNlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNvdXJjZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfcXVpY2tzaWdodF9kYXRhX3NvdXJjZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2RhdGFfc291cmNlLmh0bWwgYXdzY2NfcXVpY2tzaWdodF9kYXRhX3NvdXJjZX0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTb3VyY2VDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3F1aWNrc2lnaHRfZGF0YV9zb3VyY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWx0ZXJuYXRlX2RhdGFfc291cmNlX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbHRlcm5hdGVEYXRhU291cmNlUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbHRlcm5hdGVfZGF0YV9zb3VyY2VfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3JlZGVudGlhbHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkYXRhX3NvdXJjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2lkJyk7XG4gIH1cblxuICAvLyBkYXRhX3NvdXJjZV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9zb3VyY2VfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVycm9yX2luZm8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JfaW5mbycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGVybWlzc2lvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzc2xfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNzbFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3NsX3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZwY19jb25uZWN0aW9uX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNDb25uZWN0aW9uUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfY29ubmVjdGlvbl9wcm9wZXJ0aWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==