"use strict";
// https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccAcmpcaCertificate = exports.dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform = exports.DataAwsccAcmpcaCertificateValidityNotBefore = exports.dataAwsccAcmpcaCertificateValidityToTerraform = exports.DataAwsccAcmpcaCertificateValidity = exports.dataAwsccAcmpcaCertificateApiPassthroughToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthrough = exports.dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughSubject = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensions = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers = exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform = exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier = void 0;
const cdktf = require("cdktf");
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier extends cdktf.ComplexComputedList {
    // cps_uri - computed: true, optional: false, required: false
    get cpsUri() {
        return this.getStringAttribute('cps_uri');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier = DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cps_uri: cdktf.stringToTerraform(struct.cpsUri),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers extends cdktf.ComplexComputedList {
    // policy_qualifier_id - computed: true, optional: false, required: false
    get policyQualifierId() {
        return this.getStringAttribute('policy_qualifier_id');
    }
    // qualifier - computed: true, optional: false, required: false
    get qualifier() {
        return this.interpolationForAttribute('qualifier');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers = DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        policy_qualifier_id: cdktf.stringToTerraform(struct.policyQualifierId),
        qualifier: dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct.qualifier),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies extends cdktf.ComplexComputedList {
    // cert_policy_id - computed: true, optional: false, required: false
    get certPolicyId() {
        return this.getStringAttribute('cert_policy_id');
    }
    // policy_qualifiers - computed: true, optional: false, required: false
    get policyQualifiers() {
        return this.interpolationForAttribute('policy_qualifiers');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies = DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cert_policy_id: cdktf.stringToTerraform(struct.certPolicyId),
        policy_qualifiers: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform)(struct.policyQualifiers),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage extends cdktf.ComplexComputedList {
    // extended_key_usage_object_identifier - computed: true, optional: false, required: false
    get extendedKeyUsageObjectIdentifier() {
        return this.getStringAttribute('extended_key_usage_object_identifier');
    }
    // extended_key_usage_type - computed: true, optional: false, required: false
    get extendedKeyUsageType() {
        return this.getStringAttribute('extended_key_usage_type');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage = DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        extended_key_usage_object_identifier: cdktf.stringToTerraform(struct.extendedKeyUsageObjectIdentifier),
        extended_key_usage_type: cdktf.stringToTerraform(struct.extendedKeyUsageType),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage extends cdktf.ComplexComputedList {
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
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage = DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct) {
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
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName extends cdktf.ComplexComputedList {
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
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName = DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct) {
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
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName extends cdktf.ComplexComputedList {
    // name_assigner - computed: true, optional: false, required: false
    get nameAssigner() {
        return this.getStringAttribute('name_assigner');
    }
    // party_name - computed: true, optional: false, required: false
    get partyName() {
        return this.getStringAttribute('party_name');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName = DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_assigner: cdktf.stringToTerraform(struct.nameAssigner),
        party_name: cdktf.stringToTerraform(struct.partyName),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName extends cdktf.ComplexComputedList {
    // type_id - computed: true, optional: false, required: false
    get typeId() {
        return this.getStringAttribute('type_id');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName = DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type_id: cdktf.stringToTerraform(struct.typeId),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames extends cdktf.ComplexComputedList {
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
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames = DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct.directoryName),
        dns_name: cdktf.stringToTerraform(struct.dnsName),
        edi_party_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct.ediPartyName),
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
        other_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct.otherName),
        registered_id: cdktf.stringToTerraform(struct.registeredId),
        rfc_822_name: cdktf.stringToTerraform(struct.rfc822Name),
        uniform_resource_identifier: cdktf.stringToTerraform(struct.uniformResourceIdentifier),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughExtensions extends cdktf.ComplexComputedList {
    // certificate_policies - computed: true, optional: false, required: false
    get certificatePolicies() {
        return this.interpolationForAttribute('certificate_policies');
    }
    // extended_key_usage - computed: true, optional: false, required: false
    get extendedKeyUsage() {
        return this.interpolationForAttribute('extended_key_usage');
    }
    // key_usage - computed: true, optional: false, required: false
    get keyUsage() {
        return this.interpolationForAttribute('key_usage');
    }
    // subject_alternative_names - computed: true, optional: false, required: false
    get subjectAlternativeNames() {
        return this.interpolationForAttribute('subject_alternative_names');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthroughExtensions = DataAwsccAcmpcaCertificateApiPassthroughExtensions;
function dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_policies: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform)(struct.certificatePolicies),
        extended_key_usage: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform)(struct.extendedKeyUsage),
        key_usage: dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct.keyUsage),
        subject_alternative_names: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform = dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform;
class DataAwsccAcmpcaCertificateApiPassthroughSubject extends cdktf.ComplexComputedList {
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
exports.DataAwsccAcmpcaCertificateApiPassthroughSubject = DataAwsccAcmpcaCertificateApiPassthroughSubject;
function dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct) {
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
exports.dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform = dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform;
class DataAwsccAcmpcaCertificateApiPassthrough extends cdktf.ComplexComputedList {
    // extensions - computed: true, optional: false, required: false
    get extensions() {
        return this.interpolationForAttribute('extensions');
    }
    // subject - computed: true, optional: false, required: false
    get subject() {
        return this.interpolationForAttribute('subject');
    }
}
exports.DataAwsccAcmpcaCertificateApiPassthrough = DataAwsccAcmpcaCertificateApiPassthrough;
function dataAwsccAcmpcaCertificateApiPassthroughToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        extensions: dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct.extensions),
        subject: dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct.subject),
    };
}
exports.dataAwsccAcmpcaCertificateApiPassthroughToTerraform = dataAwsccAcmpcaCertificateApiPassthroughToTerraform;
class DataAwsccAcmpcaCertificateValidity extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
}
exports.DataAwsccAcmpcaCertificateValidity = DataAwsccAcmpcaCertificateValidity;
function dataAwsccAcmpcaCertificateValidityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.dataAwsccAcmpcaCertificateValidityToTerraform = dataAwsccAcmpcaCertificateValidityToTerraform;
class DataAwsccAcmpcaCertificateValidityNotBefore extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
}
exports.DataAwsccAcmpcaCertificateValidityNotBefore = DataAwsccAcmpcaCertificateValidityNotBefore;
function dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform = dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html awscc_acmpca_certificate}
*/
class DataAwsccAcmpcaCertificate extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html awscc_acmpca_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_acmpca_certificate',
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
    // api_passthrough - computed: true, optional: false, required: false
    get apiPassthrough() {
        return this.interpolationForAttribute('api_passthrough');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // certificate_authority_arn - computed: true, optional: false, required: false
    get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    // certificate_signing_request - computed: true, optional: false, required: false
    get certificateSigningRequest() {
        return this.getStringAttribute('certificate_signing_request');
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
    // signing_algorithm - computed: true, optional: false, required: false
    get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    // template_arn - computed: true, optional: false, required: false
    get templateArn() {
        return this.getStringAttribute('template_arn');
    }
    // validity - computed: true, optional: false, required: false
    get validity() {
        return this.interpolationForAttribute('validity');
    }
    // validity_not_before - computed: true, optional: false, required: false
    get validityNotBefore() {
        return this.interpolationForAttribute('validity_not_before');
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
exports.DataAwsccAcmpcaCertificate = DataAwsccAcmpcaCertificate;
// =================
// STATIC PROPERTIES
// =================
DataAwsccAcmpcaCertificate.tfResourceType = "awscc_acmpca_certificate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hY21wY2EtY2VydGlmaWNhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWFjbXBjYS1jZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQTBFO0FBQzFFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLDhGQUErRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0ksNkRBQTZEO0lBQzdELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQU5ELHdNQU1DO0FBRUQsU0FBZ0IseUdBQXlHLENBQUMsTUFBdUc7SUFDL04sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDakQsQ0FBQTtBQUNILENBQUM7QUFMRCw4TkFLQztBQUVELE1BQWEscUZBQXNGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsSSx5RUFBeUU7SUFDekUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7QUFYRCxzTEFXQztBQUVELFNBQWdCLGdHQUFnRyxDQUFDLE1BQThGO0lBQzdNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FB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QWMsR0FBVywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FjbXBjYV9jZXJ0aWZpY2F0ZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hY21wY2FfY2VydGlmaWNhdGUuaHRtbCNpZCBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZSNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0NlcnRpZmljYXRlUG9saWNpZXNQb2xpY3lRdWFsaWZpZXJzUXVhbGlmaWVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3BzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNwc1VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nwc191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNDZXJ0aWZpY2F0ZVBvbGljaWVzUG9saWN5UXVhbGlmaWVyc1F1YWxpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zQ2VydGlmaWNhdGVQb2xpY2llc1BvbGljeVF1YWxpZmllcnNRdWFsaWZpZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3BzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcHNVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0NlcnRpZmljYXRlUG9saWNpZXNQb2xpY3lRdWFsaWZpZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcG9saWN5X3F1YWxpZmllcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvbGljeVF1YWxpZmllcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5X3F1YWxpZmllcl9pZCcpO1xuICB9XG5cbiAgLy8gcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3F1YWxpZmllcicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNDZXJ0aWZpY2F0ZVBvbGljaWVzUG9saWN5UXVhbGlmaWVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zQ2VydGlmaWNhdGVQb2xpY2llc1BvbGljeVF1YWxpZmllcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcG9saWN5X3F1YWxpZmllcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb2xpY3lRdWFsaWZpZXJJZCksXG4gICAgcXVhbGlmaWVyOiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0NlcnRpZmljYXRlUG9saWNpZXNQb2xpY3lRdWFsaWZpZXJzUXVhbGlmaWVyVG9UZXJyYWZvcm0oc3RydWN0IS5xdWFsaWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0NlcnRpZmljYXRlUG9saWNpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjZXJ0X3BvbGljeV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRQb2xpY3lJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRfcG9saWN5X2lkJyk7XG4gIH1cblxuICAvLyBwb2xpY3lfcXVhbGlmaWVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvbGljeVF1YWxpZmllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncG9saWN5X3F1YWxpZmllcnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zQ2VydGlmaWNhdGVQb2xpY2llc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zQ2VydGlmaWNhdGVQb2xpY2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0X3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0UG9saWN5SWQpLFxuICAgIHBvbGljeV9xdWFsaWZpZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zQ2VydGlmaWNhdGVQb2xpY2llc1BvbGljeVF1YWxpZmllcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wb2xpY3lRdWFsaWZpZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNFeHRlbmRlZEtleVVzYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZXh0ZW5kZWRfa2V5X3VzYWdlX29iamVjdF9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXh0ZW5kZWRLZXlVc2FnZU9iamVjdElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRlbmRlZF9rZXlfdXNhZ2Vfb2JqZWN0X2lkZW50aWZpZXInKTtcbiAgfVxuXG4gIC8vIGV4dGVuZGVkX2tleV91c2FnZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXh0ZW5kZWRLZXlVc2FnZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRlbmRlZF9rZXlfdXNhZ2VfdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0V4dGVuZGVkS2V5VXNhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc0V4dGVuZGVkS2V5VXNhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXh0ZW5kZWRfa2V5X3VzYWdlX29iamVjdF9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dGVuZGVkS2V5VXNhZ2VPYmplY3RJZGVudGlmaWVyKSxcbiAgICBleHRlbmRlZF9rZXlfdXNhZ2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHRlbmRlZEtleVVzYWdlVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zS2V5VXNhZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmxfc2lnbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNybFNpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3JsX3NpZ24nKTtcbiAgfVxuXG4gIC8vIGRhdGFfZW5jaXBoZXJtZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YUVuY2lwaGVybWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkYXRhX2VuY2lwaGVybWVudCcpO1xuICB9XG5cbiAgLy8gZGVjaXBoZXJfb25seSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlY2lwaGVyT25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkZWNpcGhlcl9vbmx5Jyk7XG4gIH1cblxuICAvLyBkaWdpdGFsX3NpZ25hdHVyZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpZ2l0YWxTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGlnaXRhbF9zaWduYXR1cmUnKTtcbiAgfVxuXG4gIC8vIGVuY2lwaGVyX29ubHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNpcGhlck9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jaXBoZXJfb25seScpO1xuICB9XG5cbiAgLy8ga2V5X2FncmVlbWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleUFncmVlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdrZXlfYWdyZWVtZW50Jyk7XG4gIH1cblxuICAvLyBrZXlfY2VydF9zaWduIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5Q2VydFNpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgna2V5X2NlcnRfc2lnbicpO1xuICB9XG5cbiAgLy8ga2V5X2VuY2lwaGVybWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleUVuY2lwaGVybWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdrZXlfZW5jaXBoZXJtZW50Jyk7XG4gIH1cblxuICAvLyBub25fcmVwdWRpYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBub25SZXB1ZGlhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdub25fcmVwdWRpYXRpb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNLZXlVc2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zS2V5VXNhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JsX3NpZ246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNybFNpZ24pLFxuICAgIGRhdGFfZW5jaXBoZXJtZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRW5jaXBoZXJtZW50KSxcbiAgICBkZWNpcGhlcl9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWNpcGhlck9ubHkpLFxuICAgIGRpZ2l0YWxfc2lnbmF0dXJlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaWdpdGFsU2lnbmF0dXJlKSxcbiAgICBlbmNpcGhlcl9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNpcGhlck9ubHkpLFxuICAgIGtleV9hZ3JlZW1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtleUFncmVlbWVudCksXG4gICAga2V5X2NlcnRfc2lnbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEua2V5Q2VydFNpZ24pLFxuICAgIGtleV9lbmNpcGhlcm1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtleUVuY2lwaGVybWVudCksXG4gICAgbm9uX3JlcHVkaWF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5ub25SZXB1ZGlhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zU3ViamVjdEFsdGVybmF0aXZlTmFtZXNEaXJlY3RvcnlOYW1lIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tbW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21tb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbW9uX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvdW50cnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY291bnRyeScpO1xuICB9XG5cbiAgLy8gZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcicpO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGlvbl9xdWFsaWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnZW5lcmF0aW9uUXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2VuZXJhdGlvbl9xdWFsaWZpZXInKTtcbiAgfVxuXG4gIC8vIGdpdmVuX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnaXZlbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnaXZlbl9uYW1lJyk7XG4gIH1cblxuICAvLyBpbml0aWFscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluaXRpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5pdGlhbHMnKTtcbiAgfVxuXG4gIC8vIGxvY2FsaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhbGl0eScpO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uJyk7XG4gIH1cblxuICAvLyBvcmdhbml6YXRpb25hbF91bml0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uYWxVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uYWxfdW5pdCcpO1xuICB9XG5cbiAgLy8gcHNldWRvbnltIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHNldWRvbnltKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHNldWRvbnltJyk7XG4gIH1cblxuICAvLyBzZXJpYWxfbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VyaWFsTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VyaWFsX251bWJlcicpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cblxuICAvLyBzdXJuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1cm5hbWUnKTtcbiAgfVxuXG4gIC8vIHRpdGxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aXRsZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc1N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzRGlyZWN0b3J5TmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zU3ViamVjdEFsdGVybmF0aXZlTmFtZXNEaXJlY3RvcnlOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1vbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbW1vbk5hbWUpLFxuICAgIGNvdW50cnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY291bnRyeSksXG4gICAgZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaXN0aW5ndWlzaGVkTmFtZVF1YWxpZmllciksXG4gICAgZ2VuZXJhdGlvbl9xdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2VuZXJhdGlvblF1YWxpZmllciksXG4gICAgZ2l2ZW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5naXZlbk5hbWUpLFxuICAgIGluaXRpYWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluaXRpYWxzKSxcbiAgICBsb2NhbGl0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbGl0eSksXG4gICAgb3JnYW5pemF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbiksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgIHBzZXVkb255bTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wc2V1ZG9ueW0pLFxuICAgIHNlcmlhbF9udW1iZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VyaWFsTnVtYmVyKSxcbiAgICBzdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZSksXG4gICAgc3VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdXJuYW1lKSxcbiAgICB0aXRsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aXRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zU3ViamVjdEFsdGVybmF0aXZlTmFtZXNFZGlQYXJ0eU5hbWUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lX2Fzc2lnbmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZUFzc2lnbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZV9hc3NpZ25lcicpO1xuICB9XG5cbiAgLy8gcGFydHlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnR5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnR5X25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0VkaVBhcnR5TmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zU3ViamVjdEFsdGVybmF0aXZlTmFtZXNFZGlQYXJ0eU5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZV9hc3NpZ25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lQXNzaWduZXIpLFxuICAgIHBhcnR5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFydHlOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc090aGVyTmFtZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHR5cGVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlX2lkJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc090aGVyTmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdGhlck5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlSWQpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRpcmVjdG9yeV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaXJlY3RvcnlfbmFtZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRuc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Ruc19uYW1lJyk7XG4gIH1cblxuICAvLyBlZGlfcGFydHlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVkaVBhcnR5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlZGlfcGFydHlfbmFtZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcF9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBvdGhlcl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3RoZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ290aGVyX25hbWUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWdpc3RlcmVkX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaXN0ZXJlZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaXN0ZXJlZF9pZCcpO1xuICB9XG5cbiAgLy8gcmZjXzgyMl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmZjODIyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JmY184MjJfbmFtZScpO1xuICB9XG5cbiAgLy8gdW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdW5pZm9ybVJlc291cmNlSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaWZvcm1fcmVzb3VyY2VfaWRlbnRpZmllcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc1N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXJlY3RvcnlfbmFtZTogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0RpcmVjdG9yeU5hbWVUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdG9yeU5hbWUpLFxuICAgIGRuc19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRuc05hbWUpLFxuICAgIGVkaV9wYXJ0eV9uYW1lOiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc1N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzRWRpUGFydHlOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5lZGlQYXJ0eU5hbWUpLFxuICAgIGlwX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXBBZGRyZXNzKSxcbiAgICBvdGhlcl9uYW1lOiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc1N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3RoZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5vdGhlck5hbWUpLFxuICAgIHJlZ2lzdGVyZWRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaXN0ZXJlZElkKSxcbiAgICByZmNfODIyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmZjODIyTmFtZSksXG4gICAgdW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaWZvcm1SZXNvdXJjZUlkZW50aWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNlcnRpZmljYXRlX3BvbGljaWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVQb2xpY2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9wb2xpY2llcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGV4dGVuZGVkX2tleV91c2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4dGVuZGVkS2V5VXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXh0ZW5kZWRfa2V5X3VzYWdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8ga2V5X3VzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5VXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2V5X3VzYWdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfcG9saWNpZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNDZXJ0aWZpY2F0ZVBvbGljaWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2VydGlmaWNhdGVQb2xpY2llcyksXG4gICAgZXh0ZW5kZWRfa2V5X3VzYWdlOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hFeHRlbnNpb25zRXh0ZW5kZWRLZXlVc2FnZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmV4dGVuZGVkS2V5VXNhZ2UpLFxuICAgIGtleV91c2FnZTogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNLZXlVc2FnZVRvVGVycmFmb3JtKHN0cnVjdCEua2V5VXNhZ2UpLFxuICAgIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaEV4dGVuc2lvbnNTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaFN1YmplY3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb21tb25fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbW1vbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tb25fbmFtZScpO1xuICB9XG5cbiAgLy8gY291bnRyeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvdW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3VudHJ5Jyk7XG4gIH1cblxuICAvLyBkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzdGluZ3Vpc2hlZE5hbWVRdWFsaWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyJyk7XG4gIH1cblxuICAvLyBnZW5lcmF0aW9uX3F1YWxpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdlbmVyYXRpb25RdWFsaWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnZW5lcmF0aW9uX3F1YWxpZmllcicpO1xuICB9XG5cbiAgLy8gZ2l2ZW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdpdmVuTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dpdmVuX25hbWUnKTtcbiAgfVxuXG4gIC8vIGluaXRpYWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5pdGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbml0aWFscycpO1xuICB9XG5cbiAgLy8gbG9jYWxpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2NhbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsaXR5Jyk7XG4gIH1cblxuICAvLyBvcmdhbml6YXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmdhbml6YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmdhbml6YXRpb24nKTtcbiAgfVxuXG4gIC8vIG9yZ2FuaXphdGlvbmFsX3VuaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmdhbml6YXRpb25hbFVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmdhbml6YXRpb25hbF91bml0Jyk7XG4gIH1cblxuICAvLyBwc2V1ZG9ueW0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwc2V1ZG9ueW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwc2V1ZG9ueW0nKTtcbiAgfVxuXG4gIC8vIHNlcmlhbF9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJpYWxOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJpYWxfbnVtYmVyJyk7XG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxuXG4gIC8vIHN1cm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VybmFtZScpO1xuICB9XG5cbiAgLy8gdGl0bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQXBpUGFzc3Rocm91Z2hTdWJqZWN0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaFN1YmplY3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tbW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbW9uTmFtZSksXG4gICAgY291bnRyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3VudHJ5KSxcbiAgICBkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyKSxcbiAgICBnZW5lcmF0aW9uX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW5lcmF0aW9uUXVhbGlmaWVyKSxcbiAgICBnaXZlbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdpdmVuTmFtZSksXG4gICAgaW5pdGlhbHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbHMpLFxuICAgIGxvY2FsaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsaXR5KSxcbiAgICBvcmdhbml6YXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9uKSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbmFsVW5pdCksXG4gICAgcHNldWRvbnltOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBzZXVkb255bSksXG4gICAgc2VyaWFsX251bWJlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJpYWxOdW1iZXIpLFxuICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlKSxcbiAgICBzdXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1cm5hbWUpLFxuICAgIHRpdGxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpdGxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4dGVuc2lvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHRlbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2V4dGVuc2lvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdWJqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3ViamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJqZWN0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHRlbnNpb25zOiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZUFwaVBhc3N0aHJvdWdoRXh0ZW5zaW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuZXh0ZW5zaW9ucyksXG4gICAgc3ViamVjdDogZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVBcGlQYXNzdGhyb3VnaFN1YmplY3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1YmplY3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZVZhbGlkaXR5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVWYWxpZGl0eVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlVmFsaWRpdHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlVmFsaWRpdHlOb3RCZWZvcmUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBY21wY2FDZXJ0aWZpY2F0ZVZhbGlkaXR5Tm90QmVmb3JlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGVWYWxpZGl0eU5vdEJlZm9yZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FjbXBjYV9jZXJ0aWZpY2F0ZS5odG1sIGF3c2NjX2FjbXBjYV9jZXJ0aWZpY2F0ZX1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQWNtcGNhQ2VydGlmaWNhdGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2FjbXBjYV9jZXJ0aWZpY2F0ZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hY21wY2FfY2VydGlmaWNhdGUuaHRtbCBhd3NjY19hY21wY2FfY2VydGlmaWNhdGV9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0FjbXBjYUNlcnRpZmljYXRlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19hY21wY2FfY2VydGlmaWNhdGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBpX3Bhc3N0aHJvdWdoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXBpUGFzc3Rocm91Z2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXBpX3Bhc3N0aHJvdWdoJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGUnKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2F1dGhvcml0eV9hcm4nKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX3NpZ25pbmdfcmVxdWVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlU2lnbmluZ1JlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9zaWduaW5nX3JlcXVlc3QnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBzaWduaW5nX2FsZ29yaXRobSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpZ25pbmdBbGdvcml0aG0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaWduaW5nX2FsZ29yaXRobScpO1xuICB9XG5cbiAgLy8gdGVtcGxhdGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVtcGxhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZW1wbGF0ZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHZhbGlkaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsaWRpdHknKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2YWxpZGl0eV9ub3RfYmVmb3JlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRpdHlOb3RCZWZvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsaWRpdHlfbm90X2JlZm9yZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=