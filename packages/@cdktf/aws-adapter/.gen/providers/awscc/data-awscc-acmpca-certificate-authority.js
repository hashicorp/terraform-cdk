"use strict";
// https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccAcmpcaCertificateAuthority = exports.dataAwsccAcmpcaCertificateAuthorityTagsToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityTags = exports.dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform = exports.DataAwsccAcmpcaCertificateAuthoritySubject = exports.dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration = exports.dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensions = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName = exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform = exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage = void 0;
const cdktf = require("cdktf");
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage extends cdktf.ComplexComputedList {
    // crl_sign - computed: true, optional: false, required: false
    get crlSign() {
        return this.getBooleanAttribute('crl_sign');
    }
    // data_encipherment - computed: true, optional: false, required: false
    get dataEncipherment() {
        return this.getBooleanAttribute('data_encipherment');
    }
    // decipher_only - computed: true, optional: false, required: false
    get decipherOnly() {
        return this.getBooleanAttribute('decipher_only');
    }
    // digital_signature - computed: true, optional: false, required: false
    get digitalSignature() {
        return this.getBooleanAttribute('digital_signature');
    }
    // encipher_only - computed: true, optional: false, required: false
    get encipherOnly() {
        return this.getBooleanAttribute('encipher_only');
    }
    // key_agreement - computed: true, optional: false, required: false
    get keyAgreement() {
        return this.getBooleanAttribute('key_agreement');
    }
    // key_cert_sign - computed: true, optional: false, required: false
    get keyCertSign() {
        return this.getBooleanAttribute('key_cert_sign');
    }
    // key_encipherment - computed: true, optional: false, required: false
    get keyEncipherment() {
        return this.getBooleanAttribute('key_encipherment');
    }
    // non_repudiation - computed: true, optional: false, required: false
    get nonRepudiation() {
        return this.getBooleanAttribute('non_repudiation');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crl_sign: cdktf.booleanToTerraform(struct.crlSign),
        data_encipherment: cdktf.booleanToTerraform(struct.dataEncipherment),
        decipher_only: cdktf.booleanToTerraform(struct.decipherOnly),
        digital_signature: cdktf.booleanToTerraform(struct.digitalSignature),
        encipher_only: cdktf.booleanToTerraform(struct.encipherOnly),
        key_agreement: cdktf.booleanToTerraform(struct.keyAgreement),
        key_cert_sign: cdktf.booleanToTerraform(struct.keyCertSign),
        key_encipherment: cdktf.booleanToTerraform(struct.keyEncipherment),
        non_repudiation: cdktf.booleanToTerraform(struct.nonRepudiation),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName extends cdktf.ComplexComputedList {
    // common_name - computed: true, optional: false, required: false
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    // country - computed: true, optional: false, required: false
    get country() {
        return this.getStringAttribute('country');
    }
    // distinguished_name_qualifier - computed: true, optional: false, required: false
    get distinguishedNameQualifier() {
        return this.getStringAttribute('distinguished_name_qualifier');
    }
    // generation_qualifier - computed: true, optional: false, required: false
    get generationQualifier() {
        return this.getStringAttribute('generation_qualifier');
    }
    // given_name - computed: true, optional: false, required: false
    get givenName() {
        return this.getStringAttribute('given_name');
    }
    // initials - computed: true, optional: false, required: false
    get initials() {
        return this.getStringAttribute('initials');
    }
    // locality - computed: true, optional: false, required: false
    get locality() {
        return this.getStringAttribute('locality');
    }
    // organization - computed: true, optional: false, required: false
    get organization() {
        return this.getStringAttribute('organization');
    }
    // organizational_unit - computed: true, optional: false, required: false
    get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    // pseudonym - computed: true, optional: false, required: false
    get pseudonym() {
        return this.getStringAttribute('pseudonym');
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // surname - computed: true, optional: false, required: false
    get surname() {
        return this.getStringAttribute('surname');
    }
    // title - computed: true, optional: false, required: false
    get title() {
        return this.getStringAttribute('title');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
        country: cdktf.stringToTerraform(struct.country),
        distinguished_name_qualifier: cdktf.stringToTerraform(struct.distinguishedNameQualifier),
        generation_qualifier: cdktf.stringToTerraform(struct.generationQualifier),
        given_name: cdktf.stringToTerraform(struct.givenName),
        initials: cdktf.stringToTerraform(struct.initials),
        locality: cdktf.stringToTerraform(struct.locality),
        organization: cdktf.stringToTerraform(struct.organization),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        pseudonym: cdktf.stringToTerraform(struct.pseudonym),
        serial_number: cdktf.stringToTerraform(struct.serialNumber),
        state: cdktf.stringToTerraform(struct.state),
        surname: cdktf.stringToTerraform(struct.surname),
        title: cdktf.stringToTerraform(struct.title),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName extends cdktf.ComplexComputedList {
    // name_assigner - computed: true, optional: false, required: false
    get nameAssigner() {
        return this.getStringAttribute('name_assigner');
    }
    // party_name - computed: true, optional: false, required: false
    get partyName() {
        return this.getStringAttribute('party_name');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_assigner: cdktf.stringToTerraform(struct.nameAssigner),
        party_name: cdktf.stringToTerraform(struct.partyName),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName extends cdktf.ComplexComputedList {
    // type_id - computed: true, optional: false, required: false
    get typeId() {
        return this.getStringAttribute('type_id');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type_id: cdktf.stringToTerraform(struct.typeId),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {
    // directory_name - computed: true, optional: false, required: false
    get directoryName() {
        return this.interpolationForAttribute('directory_name');
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // edi_party_name - computed: true, optional: false, required: false
    get ediPartyName() {
        return this.interpolationForAttribute('edi_party_name');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    // other_name - computed: true, optional: false, required: false
    get otherName() {
        return this.interpolationForAttribute('other_name');
    }
    // registered_id - computed: true, optional: false, required: false
    get registeredId() {
        return this.getStringAttribute('registered_id');
    }
    // rfc_822_name - computed: true, optional: false, required: false
    get rfc822Name() {
        return this.getStringAttribute('rfc_822_name');
    }
    // uniform_resource_identifier - computed: true, optional: false, required: false
    get uniformResourceIdentifier() {
        return this.getStringAttribute('uniform_resource_identifier');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct.directoryName),
        dns_name: cdktf.stringToTerraform(struct.dnsName),
        edi_party_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct.ediPartyName),
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
        other_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct.otherName),
        registered_id: cdktf.stringToTerraform(struct.registeredId),
        rfc_822_name: cdktf.stringToTerraform(struct.rfc822Name),
        uniform_resource_identifier: cdktf.stringToTerraform(struct.uniformResourceIdentifier),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {
    // access_method_type - computed: true, optional: false, required: false
    get accessMethodType() {
        return this.getStringAttribute('access_method_type');
    }
    // custom_object_identifier - computed: true, optional: false, required: false
    get customObjectIdentifier() {
        return this.getStringAttribute('custom_object_identifier');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_method_type: cdktf.stringToTerraform(struct.accessMethodType),
        custom_object_identifier: cdktf.stringToTerraform(struct.customObjectIdentifier),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess extends cdktf.ComplexComputedList {
    // access_location - computed: true, optional: false, required: false
    get accessLocation() {
        return this.interpolationForAttribute('access_location');
    }
    // access_method - computed: true, optional: false, required: false
    get accessMethod() {
        return this.interpolationForAttribute('access_method');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess = DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_location: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct.accessLocation),
        access_method: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct.accessMethod),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform;
class DataAwsccAcmpcaCertificateAuthorityCsrExtensions extends cdktf.ComplexComputedList {
    // key_usage - computed: true, optional: false, required: false
    get keyUsage() {
        return this.interpolationForAttribute('key_usage');
    }
    // subject_information_access - computed: true, optional: false, required: false
    get subjectInformationAccess() {
        return this.interpolationForAttribute('subject_information_access');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityCsrExtensions = DataAwsccAcmpcaCertificateAuthorityCsrExtensions;
function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_usage: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct.keyUsage),
        subject_information_access: cdktf.listMapper(dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform)(struct.subjectInformationAccess),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform = dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform;
class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration extends cdktf.ComplexComputedList {
    // custom_cname - computed: true, optional: false, required: false
    get customCname() {
        return this.getStringAttribute('custom_cname');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // expiration_in_days - computed: true, optional: false, required: false
    get expirationInDays() {
        return this.getNumberAttribute('expiration_in_days');
    }
    // s3_bucket_name - computed: true, optional: false, required: false
    get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    // s3_object_acl - computed: true, optional: false, required: false
    get s3ObjectAcl() {
        return this.getStringAttribute('s3_object_acl');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_cname: cdktf.stringToTerraform(struct.customCname),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        expiration_in_days: cdktf.numberToTerraform(struct.expirationInDays),
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_object_acl: cdktf.stringToTerraform(struct.s3ObjectAcl),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform = dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform;
class DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration extends cdktf.ComplexComputedList {
    // crl_configuration - computed: true, optional: false, required: false
    get crlConfiguration() {
        return this.interpolationForAttribute('crl_configuration');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration = DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration;
function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crl_configuration: dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct.crlConfiguration),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform = dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform;
class DataAwsccAcmpcaCertificateAuthoritySubject extends cdktf.ComplexComputedList {
    // common_name - computed: true, optional: false, required: false
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    // country - computed: true, optional: false, required: false
    get country() {
        return this.getStringAttribute('country');
    }
    // distinguished_name_qualifier - computed: true, optional: false, required: false
    get distinguishedNameQualifier() {
        return this.getStringAttribute('distinguished_name_qualifier');
    }
    // generation_qualifier - computed: true, optional: false, required: false
    get generationQualifier() {
        return this.getStringAttribute('generation_qualifier');
    }
    // given_name - computed: true, optional: false, required: false
    get givenName() {
        return this.getStringAttribute('given_name');
    }
    // initials - computed: true, optional: false, required: false
    get initials() {
        return this.getStringAttribute('initials');
    }
    // locality - computed: true, optional: false, required: false
    get locality() {
        return this.getStringAttribute('locality');
    }
    // organization - computed: true, optional: false, required: false
    get organization() {
        return this.getStringAttribute('organization');
    }
    // organizational_unit - computed: true, optional: false, required: false
    get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    // pseudonym - computed: true, optional: false, required: false
    get pseudonym() {
        return this.getStringAttribute('pseudonym');
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // surname - computed: true, optional: false, required: false
    get surname() {
        return this.getStringAttribute('surname');
    }
    // title - computed: true, optional: false, required: false
    get title() {
        return this.getStringAttribute('title');
    }
}
exports.DataAwsccAcmpcaCertificateAuthoritySubject = DataAwsccAcmpcaCertificateAuthoritySubject;
function dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
        country: cdktf.stringToTerraform(struct.country),
        distinguished_name_qualifier: cdktf.stringToTerraform(struct.distinguishedNameQualifier),
        generation_qualifier: cdktf.stringToTerraform(struct.generationQualifier),
        given_name: cdktf.stringToTerraform(struct.givenName),
        initials: cdktf.stringToTerraform(struct.initials),
        locality: cdktf.stringToTerraform(struct.locality),
        organization: cdktf.stringToTerraform(struct.organization),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        pseudonym: cdktf.stringToTerraform(struct.pseudonym),
        serial_number: cdktf.stringToTerraform(struct.serialNumber),
        state: cdktf.stringToTerraform(struct.state),
        surname: cdktf.stringToTerraform(struct.surname),
        title: cdktf.stringToTerraform(struct.title),
    };
}
exports.dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform = dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform;
class DataAwsccAcmpcaCertificateAuthorityTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccAcmpcaCertificateAuthorityTags = DataAwsccAcmpcaCertificateAuthorityTags;
function dataAwsccAcmpcaCertificateAuthorityTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccAcmpcaCertificateAuthorityTagsToTerraform = dataAwsccAcmpcaCertificateAuthorityTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
class DataAwsccAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html awscc_acmpca_certificate_authority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaCertificateAuthorityConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_acmpca_certificate_authority',
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
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // certificate_signing_request - computed: true, optional: false, required: false
    get certificateSigningRequest() {
        return this.getStringAttribute('certificate_signing_request');
    }
    // csr_extensions - computed: true, optional: false, required: false
    get csrExtensions() {
        return this.interpolationForAttribute('csr_extensions');
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
    // key_algorithm - computed: true, optional: false, required: false
    get keyAlgorithm() {
        return this.getStringAttribute('key_algorithm');
    }
    // key_storage_security_standard - computed: true, optional: false, required: false
    get keyStorageSecurityStandard() {
        return this.getStringAttribute('key_storage_security_standard');
    }
    // revocation_configuration - computed: true, optional: false, required: false
    get revocationConfiguration() {
        return this.interpolationForAttribute('revocation_configuration');
    }
    // signing_algorithm - computed: true, optional: false, required: false
    get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    // subject - computed: true, optional: false, required: false
    get subject() {
        return this.interpolationForAttribute('subject');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
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
exports.DataAwsccAcmpcaCertificateAuthority = DataAwsccAcmpcaCertificateAuthority;
// =================
// STATIC PROPERTIES
// =================
DataAwsccAcmpcaCertificateAuthority.tfResourceType = "awscc_acmpca_certificate_authority";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hY21wY2EtY2VydGlmaWNhdGUtYXV0aG9yaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1hY21wY2EtY2VydGlmaWNhdGUtYXV0aG9yaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBb0Y7QUFDcEYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsd0RBQXlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRyw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJ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LENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUEzR0gsa0ZBNEdDO0FBMUdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csa0RBQWMsR0FBVyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2lkIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc0tleVVzYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3JsX3NpZ24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmxTaWduKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NybF9zaWduJyk7XG4gIH1cblxuICAvLyBkYXRhX2VuY2lwaGVybWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFFbmNpcGhlcm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGF0YV9lbmNpcGhlcm1lbnQnKTtcbiAgfVxuXG4gIC8vIGRlY2lwaGVyX29ubHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWNpcGhlck9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVjaXBoZXJfb25seScpO1xuICB9XG5cbiAgLy8gZGlnaXRhbF9zaWduYXR1cmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaWdpdGFsU2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RpZ2l0YWxfc2lnbmF0dXJlJyk7XG4gIH1cblxuICAvLyBlbmNpcGhlcl9vbmx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jaXBoZXJPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuY2lwaGVyX29ubHknKTtcbiAgfVxuXG4gIC8vIGtleV9hZ3JlZW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlBZ3JlZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgna2V5X2FncmVlbWVudCcpO1xuICB9XG5cbiAgLy8ga2V5X2NlcnRfc2lnbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleUNlcnRTaWduKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2tleV9jZXJ0X3NpZ24nKTtcbiAgfVxuXG4gIC8vIGtleV9lbmNpcGhlcm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlFbmNpcGhlcm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgna2V5X2VuY2lwaGVybWVudCcpO1xuICB9XG5cbiAgLy8gbm9uX3JlcHVkaWF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9uUmVwdWRpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbm9uX3JlcHVkaWF0aW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc0tleVVzYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zS2V5VXNhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JsX3NpZ246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNybFNpZ24pLFxuICAgIGRhdGFfZW5jaXBoZXJtZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRW5jaXBoZXJtZW50KSxcbiAgICBkZWNpcGhlcl9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWNpcGhlck9ubHkpLFxuICAgIGRpZ2l0YWxfc2lnbmF0dXJlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaWdpdGFsU2lnbmF0dXJlKSxcbiAgICBlbmNpcGhlcl9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNpcGhlck9ubHkpLFxuICAgIGtleV9hZ3JlZW1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtleUFncmVlbWVudCksXG4gICAga2V5X2NlcnRfc2lnbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEua2V5Q2VydFNpZ24pLFxuICAgIGtleV9lbmNpcGhlcm1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtleUVuY2lwaGVybWVudCksXG4gICAgbm9uX3JlcHVkaWF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5ub25SZXB1ZGlhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRGlyZWN0b3J5TmFtZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbW1vbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tbW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbW1vbl9uYW1lJyk7XG4gIH1cblxuICAvLyBjb3VudHJ5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY291bnRyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvdW50cnknKTtcbiAgfVxuXG4gIC8vIGRpc3Rpbmd1aXNoZWRfbmFtZV9xdWFsaWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXN0aW5ndWlzaGVkTmFtZVF1YWxpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rpc3Rpbmd1aXNoZWRfbmFtZV9xdWFsaWZpZXInKTtcbiAgfVxuXG4gIC8vIGdlbmVyYXRpb25fcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGlvblF1YWxpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dlbmVyYXRpb25fcXVhbGlmaWVyJyk7XG4gIH1cblxuICAvLyBnaXZlbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2l2ZW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2l2ZW5fbmFtZScpO1xuICB9XG5cbiAgLy8gaW5pdGlhbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbml0aWFscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luaXRpYWxzJyk7XG4gIH1cblxuICAvLyBsb2NhbGl0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxpdHknKTtcbiAgfVxuXG4gIC8vIG9yZ2FuaXphdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yZ2FuaXphdGlvbicpO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uYWxfdW5pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbmFsVW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yZ2FuaXphdGlvbmFsX3VuaXQnKTtcbiAgfVxuXG4gIC8vIHBzZXVkb255bSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBzZXVkb255bSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BzZXVkb255bScpO1xuICB9XG5cbiAgLy8gc2VyaWFsX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcmlhbE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcmlhbF9udW1iZXInKTtcbiAgfVxuXG4gIC8vIHN0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZScpO1xuICB9XG5cbiAgLy8gc3VybmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdXJuYW1lJyk7XG4gIH1cblxuICAvLyB0aXRsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGl0bGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25EaXJlY3RvcnlOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25EaXJlY3RvcnlOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1vbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbW1vbk5hbWUpLFxuICAgIGNvdW50cnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY291bnRyeSksXG4gICAgZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaXN0aW5ndWlzaGVkTmFtZVF1YWxpZmllciksXG4gICAgZ2VuZXJhdGlvbl9xdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2VuZXJhdGlvblF1YWxpZmllciksXG4gICAgZ2l2ZW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5naXZlbk5hbWUpLFxuICAgIGluaXRpYWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluaXRpYWxzKSxcbiAgICBsb2NhbGl0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbGl0eSksXG4gICAgb3JnYW5pemF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbiksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgIHBzZXVkb255bTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wc2V1ZG9ueW0pLFxuICAgIHNlcmlhbF9udW1iZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VyaWFsTnVtYmVyKSxcbiAgICBzdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZSksXG4gICAgc3VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdXJuYW1lKSxcbiAgICB0aXRsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aXRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRWRpUGFydHlOYW1lIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZV9hc3NpZ25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWVBc3NpZ25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfYXNzaWduZXInKTtcbiAgfVxuXG4gIC8vIHBhcnR5X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJ0eU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJ0eV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRWRpUGFydHlOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25FZGlQYXJ0eU5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZV9hc3NpZ25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lQXNzaWduZXIpLFxuICAgIHBhcnR5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFydHlOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25PdGhlck5hbWUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0eXBlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZV9pZCcpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25PdGhlck5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlSWQpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkaXJlY3RvcnlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGlyZWN0b3J5X25hbWUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkbnNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfbmFtZScpO1xuICB9XG5cbiAgLy8gZWRpX3BhcnR5X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlZGlQYXJ0eU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWRpX3BhcnR5X25hbWUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gb3RoZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG90aGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvdGhlcl9uYW1lJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVnaXN0ZXJlZF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lzdGVyZWRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lzdGVyZWRfaWQnKTtcbiAgfVxuXG4gIC8vIHJmY184MjJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJmYzgyMk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZmNfODIyX25hbWUnKTtcbiAgfVxuXG4gIC8vIHVuaWZvcm1fcmVzb3VyY2VfaWRlbnRpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVuaWZvcm1SZXNvdXJjZUlkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bmlmb3JtX3Jlc291cmNlX2lkZW50aWZpZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXJlY3RvcnlfbmFtZTogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25EaXJlY3RvcnlOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5kaXJlY3RvcnlOYW1lKSxcbiAgICBkbnNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kbnNOYW1lKSxcbiAgICBlZGlfcGFydHlfbmFtZTogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25FZGlQYXJ0eU5hbWVUb1RlcnJhZm9ybShzdHJ1Y3QhLmVkaVBhcnR5TmFtZSksXG4gICAgaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pcEFkZHJlc3MpLFxuICAgIG90aGVyX25hbWU6IGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5vdGhlck5hbWUpLFxuICAgIHJlZ2lzdGVyZWRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaXN0ZXJlZElkKSxcbiAgICByZmNfODIyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmZjODIyTmFtZSksXG4gICAgdW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaWZvcm1SZXNvdXJjZUlkZW50aWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NNZXRob2QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfbWV0aG9kX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NNZXRob2RUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX21ldGhvZF90eXBlJyk7XG4gIH1cblxuICAvLyBjdXN0b21fb2JqZWN0X2lkZW50aWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21PYmplY3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX29iamVjdF9pZGVudGlmaWVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc01ldGhvZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbWV0aG9kX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTWV0aG9kVHlwZSksXG4gICAgY3VzdG9tX29iamVjdF9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbU9iamVjdElkZW50aWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfbG9jYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2Nlc3NfbG9jYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhY2Nlc3NfbWV0aG9kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzTWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FjY2Vzc19tZXRob2QnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbG9jYXRpb246IGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NMb2NhdGlvbiksXG4gICAgYWNjZXNzX21ldGhvZDogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTWV0aG9kVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NNZXRob2QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXlfdXNhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrZXlfdXNhZ2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdWJqZWN0X2luZm9ybWF0aW9uX2FjY2VzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1YmplY3RJbmZvcm1hdGlvbkFjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJqZWN0X2luZm9ybWF0aW9uX2FjY2VzcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleV91c2FnZTogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zS2V5VXNhZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleVVzYWdlKSxcbiAgICBzdWJqZWN0X2luZm9ybWF0aW9uX2FjY2VzczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uQ3JsQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGN1c3RvbV9jbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN1c3RvbUNuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX2NuYW1lJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBleHBpcmF0aW9uX2luX2RheXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHBpcmF0aW9uSW5EYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXhwaXJhdGlvbl9pbl9kYXlzJyk7XG4gIH1cblxuICAvLyBzM19idWNrZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzQnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2J1Y2tldF9uYW1lJyk7XG4gIH1cblxuICAvLyBzM19vYmplY3RfYWNsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNPYmplY3RBY2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19vYmplY3RfYWNsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb25DcmxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlSZXZvY2F0aW9uQ29uZmlndXJhdGlvbkNybENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3VzdG9tX2NuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUNuYW1lKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBleHBpcmF0aW9uX2luX2RheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXhwaXJhdGlvbkluRGF5cyksXG4gICAgczNfYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCdWNrZXROYW1lKSxcbiAgICBzM19vYmplY3RfYWNsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT2JqZWN0QWNsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlSZXZvY2F0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNybF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JsQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjcmxfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlSZXZvY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JsX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb25DcmxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jcmxDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlTdWJqZWN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tbW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21tb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbW9uX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvdW50cnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY291bnRyeScpO1xuICB9XG5cbiAgLy8gZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcicpO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGlvbl9xdWFsaWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnZW5lcmF0aW9uUXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2VuZXJhdGlvbl9xdWFsaWZpZXInKTtcbiAgfVxuXG4gIC8vIGdpdmVuX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnaXZlbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnaXZlbl9uYW1lJyk7XG4gIH1cblxuICAvLyBpbml0aWFscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluaXRpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5pdGlhbHMnKTtcbiAgfVxuXG4gIC8vIGxvY2FsaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhbGl0eScpO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uJyk7XG4gIH1cblxuICAvLyBvcmdhbml6YXRpb25hbF91bml0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uYWxVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uYWxfdW5pdCcpO1xuICB9XG5cbiAgLy8gcHNldWRvbnltIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHNldWRvbnltKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHNldWRvbnltJyk7XG4gIH1cblxuICAvLyBzZXJpYWxfbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VyaWFsTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VyaWFsX251bWJlcicpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cblxuICAvLyBzdXJuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1cm5hbWUnKTtcbiAgfVxuXG4gIC8vIHRpdGxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aXRsZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVN1YmplY3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVN1YmplY3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tbW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbW9uTmFtZSksXG4gICAgY291bnRyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3VudHJ5KSxcbiAgICBkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyKSxcbiAgICBnZW5lcmF0aW9uX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW5lcmF0aW9uUXVhbGlmaWVyKSxcbiAgICBnaXZlbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdpdmVuTmFtZSksXG4gICAgaW5pdGlhbHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbHMpLFxuICAgIGxvY2FsaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsaXR5KSxcbiAgICBvcmdhbml6YXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9uKSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbmFsVW5pdCksXG4gICAgcHNldWRvbnltOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBzZXVkb255bSksXG4gICAgc2VyaWFsX251bWJlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJpYWxOdW1iZXIpLFxuICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlKSxcbiAgICBzdXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1cm5hbWUpLFxuICAgIHRpdGxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpdGxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCBhd3NjY19hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5fVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwgYXdzY2NfYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eX0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHknLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9zaWduaW5nX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZVNpZ25pbmdSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfc2lnbmluZ19yZXF1ZXN0Jyk7XG4gIH1cblxuICAvLyBjc3JfZXh0ZW5zaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNzckV4dGVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3NyX2V4dGVuc2lvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8ga2V5X2FsZ29yaXRobSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleUFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9hbGdvcml0aG0nKTtcbiAgfVxuXG4gIC8vIGtleV9zdG9yYWdlX3NlY3VyaXR5X3N0YW5kYXJkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfc3RvcmFnZV9zZWN1cml0eV9zdGFuZGFyZCcpO1xuICB9XG5cbiAgLy8gcmV2b2NhdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmV2b2NhdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2lnbmluZ19hbGdvcml0aG0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaWduaW5nQWxnb3JpdGhtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2lnbmluZ19hbGdvcml0aG0nKTtcbiAgfVxuXG4gIC8vIHN1YmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1YmplY3QnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19