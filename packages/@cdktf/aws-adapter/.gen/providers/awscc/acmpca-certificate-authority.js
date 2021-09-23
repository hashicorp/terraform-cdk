"use strict";
// https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmpcaCertificateAuthority = exports.acmpcaCertificateAuthorityTagsToTerraform = exports.acmpcaCertificateAuthoritySubjectToTerraform = exports.acmpcaCertificateAuthorityRevocationConfigurationToTerraform = exports.acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform = exports.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform = exports.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform = exports.acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform = void 0;
const cdktf = require("cdktf");
function acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct) {
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
exports.acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform = acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct) {
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
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_assigner: cdktf.stringToTerraform(struct.nameAssigner),
        party_name: cdktf.stringToTerraform(struct.partyName),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type_id: cdktf.stringToTerraform(struct.typeId),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform;
class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {
    get directoryName() {
        return this.interpolationForAttribute('directory_name');
    }
    set directoryName(value) {
        this._directoryName = value;
    }
    resetDirectoryName() {
        this._directoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directoryNameInput() {
        return this._directoryName;
    }
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    set dnsName(value) {
        this._dnsName = value;
    }
    resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnsNameInput() {
        return this._dnsName;
    }
    get ediPartyName() {
        return this.interpolationForAttribute('edi_party_name');
    }
    set ediPartyName(value) {
        this._ediPartyName = value;
    }
    resetEdiPartyName() {
        this._ediPartyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ediPartyNameInput() {
        return this._ediPartyName;
    }
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    set ipAddress(value) {
        this._ipAddress = value;
    }
    resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipAddressInput() {
        return this._ipAddress;
    }
    get otherName() {
        return this.interpolationForAttribute('other_name');
    }
    set otherName(value) {
        this._otherName = value;
    }
    resetOtherName() {
        this._otherName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get otherNameInput() {
        return this._otherName;
    }
    get registeredId() {
        return this.getStringAttribute('registered_id');
    }
    set registeredId(value) {
        this._registeredId = value;
    }
    resetRegisteredId() {
        this._registeredId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registeredIdInput() {
        return this._registeredId;
    }
    get rfc822Name() {
        return this.getStringAttribute('rfc_822_name');
    }
    set rfc822Name(value) {
        this._rfc822Name = value;
    }
    resetRfc822Name() {
        this._rfc822Name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rfc822NameInput() {
        return this._rfc822Name;
    }
    get uniformResourceIdentifier() {
        return this.getStringAttribute('uniform_resource_identifier');
    }
    set uniformResourceIdentifier(value) {
        this._uniformResourceIdentifier = value;
    }
    resetUniformResourceIdentifier() {
        this._uniformResourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uniformResourceIdentifierInput() {
        return this._uniformResourceIdentifier;
    }
}
exports.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct.directoryName),
        dns_name: cdktf.stringToTerraform(struct.dnsName),
        edi_party_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct.ediPartyName),
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
        other_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct.otherName),
        registered_id: cdktf.stringToTerraform(struct.registeredId),
        rfc_822_name: cdktf.stringToTerraform(struct.rfc822Name),
        uniform_resource_identifier: cdktf.stringToTerraform(struct.uniformResourceIdentifier),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform;
class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {
    get accessMethodType() {
        return this.getStringAttribute('access_method_type');
    }
    set accessMethodType(value) {
        this._accessMethodType = value;
    }
    resetAccessMethodType() {
        this._accessMethodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessMethodTypeInput() {
        return this._accessMethodType;
    }
    get customObjectIdentifier() {
        return this.getStringAttribute('custom_object_identifier');
    }
    set customObjectIdentifier(value) {
        this._customObjectIdentifier = value;
    }
    resetCustomObjectIdentifier() {
        this._customObjectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customObjectIdentifierInput() {
        return this._customObjectIdentifier;
    }
}
exports.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_method_type: cdktf.stringToTerraform(struct.accessMethodType),
        custom_object_identifier: cdktf.stringToTerraform(struct.customObjectIdentifier),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform;
function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_location: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct.accessLocation),
        access_method: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct.accessMethod),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform = acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform;
function acmpcaCertificateAuthorityCsrExtensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_usage: acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct.keyUsage),
        subject_information_access: cdktf.listMapper(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform)(struct.subjectInformationAccess),
    };
}
exports.acmpcaCertificateAuthorityCsrExtensionsToTerraform = acmpcaCertificateAuthorityCsrExtensionsToTerraform;
function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct) {
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
exports.acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform = acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform;
function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crl_configuration: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct.crlConfiguration),
    };
}
exports.acmpcaCertificateAuthorityRevocationConfigurationToTerraform = acmpcaCertificateAuthorityRevocationConfigurationToTerraform;
function acmpcaCertificateAuthoritySubjectToTerraform(struct) {
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
exports.acmpcaCertificateAuthoritySubjectToTerraform = acmpcaCertificateAuthoritySubjectToTerraform;
function acmpcaCertificateAuthorityTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.acmpcaCertificateAuthorityTagsToTerraform = acmpcaCertificateAuthorityTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
class AcmpcaCertificateAuthority extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html awscc_acmpca_certificate_authority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityConfig
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
        this._csrExtensions = config.csrExtensions;
        this._keyAlgorithm = config.keyAlgorithm;
        this._keyStorageSecurityStandard = config.keyStorageSecurityStandard;
        this._revocationConfiguration = config.revocationConfiguration;
        this._signingAlgorithm = config.signingAlgorithm;
        this._subject = config.subject;
        this._tags = config.tags;
        this._type = config.type;
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
    get csrExtensions() {
        return this.interpolationForAttribute('csr_extensions');
    }
    set csrExtensions(value) {
        this._csrExtensions = value;
    }
    resetCsrExtensions() {
        this._csrExtensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csrExtensionsInput() {
        return this._csrExtensions;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get keyAlgorithm() {
        return this.getStringAttribute('key_algorithm');
    }
    set keyAlgorithm(value) {
        this._keyAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyAlgorithmInput() {
        return this._keyAlgorithm;
    }
    get keyStorageSecurityStandard() {
        return this.getStringAttribute('key_storage_security_standard');
    }
    set keyStorageSecurityStandard(value) {
        this._keyStorageSecurityStandard = value;
    }
    resetKeyStorageSecurityStandard() {
        this._keyStorageSecurityStandard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyStorageSecurityStandardInput() {
        return this._keyStorageSecurityStandard;
    }
    get revocationConfiguration() {
        return this.interpolationForAttribute('revocation_configuration');
    }
    set revocationConfiguration(value) {
        this._revocationConfiguration = value;
    }
    resetRevocationConfiguration() {
        this._revocationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get revocationConfigurationInput() {
        return this._revocationConfiguration;
    }
    get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    set signingAlgorithm(value) {
        this._signingAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    get signingAlgorithmInput() {
        return this._signingAlgorithm;
    }
    get subject() {
        return this.interpolationForAttribute('subject');
    }
    set subject(value) {
        this._subject = value;
    }
    // Temporarily expose input value. Use with caution.
    get subjectInput() {
        return this._subject;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            csr_extensions: acmpcaCertificateAuthorityCsrExtensionsToTerraform(this._csrExtensions),
            key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
            key_storage_security_standard: cdktf.stringToTerraform(this._keyStorageSecurityStandard),
            revocation_configuration: acmpcaCertificateAuthorityRevocationConfigurationToTerraform(this._revocationConfiguration),
            signing_algorithm: cdktf.stringToTerraform(this._signingAlgorithm),
            subject: acmpcaCertificateAuthoritySubjectToTerraform(this._subject),
            tags: cdktf.listMapper(acmpcaCertificateAuthorityTagsToTerraform)(this._tags),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
exports.AcmpcaCertificateAuthority = AcmpcaCertificateAuthority;
// =================
// STATIC PROPERTIES
// =================
AcmpcaCertificateAuthority.tfResourceType = "awscc_acmpca_certificate_authority";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtcGNhLWNlcnRpZmljYXRlLWF1dGhvcml0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjbXBjYS1jZXJ0aWZpY2F0ZS1hdXRob3JpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9GQUFvRjtBQUNwRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUEyRi9CLFNBQWdCLDBEQUEwRCxDQUFDLE1BQXdEO0lBQ2pJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25ELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsYUFBYSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsYUFBYSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELGFBQWEsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDNUQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBYkQsZ0lBYUM7QUE2REQsU0FBZ0IscUdBQXFHLENBQUMsTUFBbUc7SUFDdk4sSUFB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RixhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4Rix3QkFBd0IsRUFBRSw0REFBNEQsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDckgsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxPQUFPLEVBQUUsNENBQTRDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQTdMSCxnRUE4TEM7QUE1TEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx5Q0FBYyxHQUFXLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogU3RydWN0dXJlIHRoYXQgY29udGFpbnMgQ1NSIHBhc3MgdGhvdWdoIGV4dGVuc2lvbnMgaW5mb3JtYXRpb24uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjY3NyX2V4dGVuc2lvbnMgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjY3NyX2V4dGVuc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IGNzckV4dGVuc2lvbnM/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnM7XG4gIC8qKlxuICAqIFB1YmxpYyBrZXkgYWxnb3JpdGhtIGFuZCBzaXplLCBpbiBiaXRzLCBvZiB0aGUga2V5IHBhaXIgdGhhdCB5b3VyIENBIGNyZWF0ZXMgd2hlbiBpdCBpc3N1ZXMgYSBjZXJ0aWZpY2F0ZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNrZXlfYWxnb3JpdGhtIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2tleV9hbGdvcml0aG19XG4gICovXG4gIHJlYWRvbmx5IGtleUFsZ29yaXRobTogc3RyaW5nO1xuICAvKipcbiAgKiBLZXlTdG9yYWdlU2VjdXJpdHlTdGFkYXJkIGRlZmluZXMgYSBjcnlwdG9ncmFwaGljIGtleSBtYW5hZ2VtZW50IGNvbXBsaWFuY2Ugc3RhbmRhcmQgdXNlZCBmb3IgaGFuZGxpbmcgQ0Ega2V5cy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNrZXlfc3RvcmFnZV9zZWN1cml0eV9zdGFuZGFyZCBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNrZXlfc3RvcmFnZV9zZWN1cml0eV9zdGFuZGFyZH1cbiAgKi9cbiAgcmVhZG9ubHkga2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIENlcnRpZmljYXRlIEF1dGhvcml0eSByZXZvY2F0aW9uIGluZm9ybWF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3Jldm9jYXRpb25fY29uZmlndXJhdGlvbiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNyZXZvY2F0aW9uX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHJldm9jYXRpb25Db25maWd1cmF0aW9uPzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlSZXZvY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogQWxnb3JpdGhtIHlvdXIgQ0EgdXNlcyB0byBzaWduIGNlcnRpZmljYXRlIHJlcXVlc3RzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3NpZ25pbmdfYWxnb3JpdGhtIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3NpZ25pbmdfYWxnb3JpdGhtfVxuICAqL1xuICByZWFkb25seSBzaWduaW5nQWxnb3JpdGhtOiBzdHJpbmc7XG4gIC8qKlxuICAqIFN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIFguNTAwIGRpc3Rpbmd1aXNoZWQgbmFtZSBpbmZvcm1hdGlvbiBmb3IgeW91ciBDQS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNzdWJqZWN0IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3N1YmplY3R9XG4gICovXG4gIHJlYWRvbmx5IHN1YmplY3Q6IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5U3ViamVjdDtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjdGFncyBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlUYWdzW107XG4gIC8qKlxuICAqIFRoZSB0eXBlIG9mIHRoZSBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjdHlwZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc0tleVVzYWdlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjY3JsX3NpZ24gQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjY3JsX3NpZ259XG4gICovXG4gIHJlYWRvbmx5IGNybFNpZ24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2RhdGFfZW5jaXBoZXJtZW50IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2RhdGFfZW5jaXBoZXJtZW50fVxuICAqL1xuICByZWFkb25seSBkYXRhRW5jaXBoZXJtZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNkZWNpcGhlcl9vbmx5IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2RlY2lwaGVyX29ubHl9XG4gICovXG4gIHJlYWRvbmx5IGRlY2lwaGVyT25seT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjZGlnaXRhbF9zaWduYXR1cmUgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjZGlnaXRhbF9zaWduYXR1cmV9XG4gICovXG4gIHJlYWRvbmx5IGRpZ2l0YWxTaWduYXR1cmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2VuY2lwaGVyX29ubHkgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjZW5jaXBoZXJfb25seX1cbiAgKi9cbiAgcmVhZG9ubHkgZW5jaXBoZXJPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNrZXlfYWdyZWVtZW50IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2tleV9hZ3JlZW1lbnR9XG4gICovXG4gIHJlYWRvbmx5IGtleUFncmVlbWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwja2V5X2NlcnRfc2lnbiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNrZXlfY2VydF9zaWdufVxuICAqL1xuICByZWFkb25seSBrZXlDZXJ0U2lnbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwja2V5X2VuY2lwaGVybWVudCBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNrZXlfZW5jaXBoZXJtZW50fVxuICAqL1xuICByZWFkb25seSBrZXlFbmNpcGhlcm1lbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI25vbl9yZXB1ZGlhdGlvbiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNub25fcmVwdWRpYXRpb259XG4gICovXG4gIHJlYWRvbmx5IG5vblJlcHVkaWF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zS2V5VXNhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNLZXlVc2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjcmxfc2lnbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY3JsU2lnbiksXG4gICAgZGF0YV9lbmNpcGhlcm1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFFbmNpcGhlcm1lbnQpLFxuICAgIGRlY2lwaGVyX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlY2lwaGVyT25seSksXG4gICAgZGlnaXRhbF9zaWduYXR1cmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpZ2l0YWxTaWduYXR1cmUpLFxuICAgIGVuY2lwaGVyX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY2lwaGVyT25seSksXG4gICAga2V5X2FncmVlbWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEua2V5QWdyZWVtZW50KSxcbiAgICBrZXlfY2VydF9zaWduOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlDZXJ0U2lnbiksXG4gICAga2V5X2VuY2lwaGVybWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEua2V5RW5jaXBoZXJtZW50KSxcbiAgICBub25fcmVwdWRpYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm5vblJlcHVkaWF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRGlyZWN0b3J5TmFtZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2NvbW1vbl9uYW1lIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2NvbW1vbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb21tb25OYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNjb3VudHJ5IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2NvdW50cnl9XG4gICovXG4gIHJlYWRvbmx5IGNvdW50cnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2Rpc3Rpbmd1aXNoZWRfbmFtZV9xdWFsaWZpZXIgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcn1cbiAgKi9cbiAgcmVhZG9ubHkgZGlzdGluZ3Vpc2hlZE5hbWVRdWFsaWZpZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2dlbmVyYXRpb25fcXVhbGlmaWVyIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2dlbmVyYXRpb25fcXVhbGlmaWVyfVxuICAqL1xuICByZWFkb25seSBnZW5lcmF0aW9uUXVhbGlmaWVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNnaXZlbl9uYW1lIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2dpdmVuX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGdpdmVuTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjaW5pdGlhbHMgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjaW5pdGlhbHN9XG4gICovXG4gIHJlYWRvbmx5IGluaXRpYWxzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNsb2NhbGl0eSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNsb2NhbGl0eX1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYWxpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI29yZ2FuaXphdGlvbiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNvcmdhbml6YXRpb259XG4gICovXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjb3JnYW5pemF0aW9uYWxfdW5pdCBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNvcmdhbml6YXRpb25hbF91bml0fVxuICAqL1xuICByZWFkb25seSBvcmdhbml6YXRpb25hbFVuaXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3BzZXVkb255bSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNwc2V1ZG9ueW19XG4gICovXG4gIHJlYWRvbmx5IHBzZXVkb255bT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjc2VyaWFsX251bWJlciBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNzZXJpYWxfbnVtYmVyfVxuICAqL1xuICByZWFkb25seSBzZXJpYWxOdW1iZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3N0YXRlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3N0YXRlfVxuICAqL1xuICByZWFkb25seSBzdGF0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjc3VybmFtZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNzdXJuYW1lfVxuICAqL1xuICByZWFkb25seSBzdXJuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCN0aXRsZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSN0aXRsZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbkRpcmVjdG9yeU5hbWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbkRpcmVjdG9yeU5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tbW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbW9uTmFtZSksXG4gICAgY291bnRyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3VudHJ5KSxcbiAgICBkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyKSxcbiAgICBnZW5lcmF0aW9uX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW5lcmF0aW9uUXVhbGlmaWVyKSxcbiAgICBnaXZlbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdpdmVuTmFtZSksXG4gICAgaW5pdGlhbHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbHMpLFxuICAgIGxvY2FsaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsaXR5KSxcbiAgICBvcmdhbml6YXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9uKSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbmFsVW5pdCksXG4gICAgcHNldWRvbnltOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBzZXVkb255bSksXG4gICAgc2VyaWFsX251bWJlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJpYWxOdW1iZXIpLFxuICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlKSxcbiAgICBzdXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1cm5hbWUpLFxuICAgIHRpdGxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpdGxlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRWRpUGFydHlOYW1lIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjbmFtZV9hc3NpZ25lciBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNuYW1lX2Fzc2lnbmVyfVxuICAqL1xuICByZWFkb25seSBuYW1lQXNzaWduZXI6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjcGFydHlfbmFtZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNwYXJ0eV9uYW1lfVxuICAqL1xuICByZWFkb25seSBwYXJ0eU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRWRpUGFydHlOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25FZGlQYXJ0eU5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZV9hc3NpZ25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lQXNzaWduZXIpLFxuICAgIHBhcnR5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFydHlOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lIHtcbiAgLyoqXG4gICogU3RyaW5nIHRoYXQgY29udGFpbnMgWC41MDkgT2JqZWN0SWRlbnRpZmllciBpbmZvcm1hdGlvbi5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCN0eXBlX2lkIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3R5cGVfaWR9XG4gICovXG4gIHJlYWRvbmx5IHR5cGVJZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCN2YWx1ZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25PdGhlck5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlSWQpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkaXJlY3RvcnlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpcmVjdG9yeU5hbWU/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbkRpcmVjdG9yeU5hbWU7XG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaXJlY3RvcnlfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpcmVjdG9yeU5hbWUodmFsdWU6IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRGlyZWN0b3J5TmFtZSkge1xuICAgIHRoaXMuX2RpcmVjdG9yeU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXJlY3RvcnlOYW1lKCkge1xuICAgIHRoaXMuX2RpcmVjdG9yeU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0b3J5TmFtZVxuICB9XG5cbiAgLy8gZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kbnNOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRuc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG5zTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG5zTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERuc05hbWUoKSB7XG4gICAgdGhpcy5fZG5zTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kbnNOYW1lXG4gIH1cblxuICAvLyBlZGlfcGFydHlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VkaVBhcnR5TmFtZT86IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uRWRpUGFydHlOYW1lO1xuICBwdWJsaWMgZ2V0IGVkaVBhcnR5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlZGlfcGFydHlfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVkaVBhcnR5TmFtZSh2YWx1ZTogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25FZGlQYXJ0eU5hbWUpIHtcbiAgICB0aGlzLl9lZGlQYXJ0eU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFZGlQYXJ0eU5hbWUoKSB7XG4gICAgdGhpcy5fZWRpUGFydHlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlZGlQYXJ0eU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpUGFydHlOYW1lXG4gIH1cblxuICAvLyBpcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXBBZGRyZXNzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwX2FkZHJlc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXBBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXBBZGRyZXNzKCkge1xuICAgIHRoaXMuX2lwQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwQWRkcmVzc1xuICB9XG5cbiAgLy8gb3RoZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX290aGVyTmFtZT86IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lO1xuICBwdWJsaWMgZ2V0IG90aGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvdGhlcl9uYW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3RoZXJOYW1lKHZhbHVlOiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbk90aGVyTmFtZSkge1xuICAgIHRoaXMuX290aGVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE90aGVyTmFtZSgpIHtcbiAgICB0aGlzLl9vdGhlck5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG90aGVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdGhlck5hbWVcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyZWRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdpc3RlcmVkSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVnaXN0ZXJlZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaXN0ZXJlZF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaXN0ZXJlZElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdpc3RlcmVkSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpc3RlcmVkSWQoKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJlZElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpc3RlcmVkSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJlZElkXG4gIH1cblxuICAvLyByZmNfODIyX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZmM4MjJOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJmYzgyMk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZmNfODIyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJmYzgyMk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JmYzgyMk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZmM4MjJOYW1lKCkge1xuICAgIHRoaXMuX3JmYzgyMk5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJmYzgyMk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmZjODIyTmFtZVxuICB9XG5cbiAgLy8gdW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pZm9ybVJlc291cmNlSWRlbnRpZmllcj86IHN0cmluZztcbiAgcHVibGljIGdldCB1bmlmb3JtUmVzb3VyY2VJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCB1bmlmb3JtUmVzb3VyY2VJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bmlmb3JtUmVzb3VyY2VJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5pZm9ybVJlc291cmNlSWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl91bmlmb3JtUmVzb3VyY2VJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bmlmb3JtUmVzb3VyY2VJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1SZXNvdXJjZUlkZW50aWZpZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXJlY3RvcnlfbmFtZTogYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25EaXJlY3RvcnlOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5kaXJlY3RvcnlOYW1lKSxcbiAgICBkbnNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kbnNOYW1lKSxcbiAgICBlZGlfcGFydHlfbmFtZTogYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTG9jYXRpb25FZGlQYXJ0eU5hbWVUb1RlcnJhZm9ybShzdHJ1Y3QhLmVkaVBhcnR5TmFtZSksXG4gICAgaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pcEFkZHJlc3MpLFxuICAgIG90aGVyX25hbWU6IGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uT3RoZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0IS5vdGhlck5hbWUpLFxuICAgIHJlZ2lzdGVyZWRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaXN0ZXJlZElkKSxcbiAgICByZmNfODIyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmZjODIyTmFtZSksXG4gICAgdW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaWZvcm1SZXNvdXJjZUlkZW50aWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NNZXRob2QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfbWV0aG9kX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NNZXRob2RUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc01ldGhvZFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3NfbWV0aG9kX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc01ldGhvZFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc01ldGhvZFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NNZXRob2RUeXBlKCkge1xuICAgIHRoaXMuX2FjY2Vzc01ldGhvZFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc01ldGhvZFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzTWV0aG9kVHlwZVxuICB9XG5cbiAgLy8gY3VzdG9tX29iamVjdF9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tT2JqZWN0SWRlbnRpZmllcj86IHN0cmluZztcbiAgcHVibGljIGdldCBjdXN0b21PYmplY3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX29iamVjdF9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21PYmplY3RJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21PYmplY3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tT2JqZWN0SWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9jdXN0b21PYmplY3RJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21PYmplY3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbU9iamVjdElkZW50aWZpZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTWV0aG9kVG9UZXJyYWZvcm0oc3RydWN0PzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzQWNjZXNzTWV0aG9kKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc19tZXRob2RfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NNZXRob2RUeXBlKSxcbiAgICBjdXN0b21fb2JqZWN0X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tT2JqZWN0SWRlbnRpZmllciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3Mge1xuICAvKipcbiAgKiBTdHJ1Y3R1cmUgdGhhdCBjb250YWlucyBYLjUwOSBHZW5lcmFsTmFtZSBpbmZvcm1hdGlvbi4gQXNzaWduIG9uZSBhbmQgT05MWSBvbmUgZmllbGQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjYWNjZXNzX2xvY2F0aW9uIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2FjY2Vzc19sb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzTG9jYXRpb246IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc0xvY2F0aW9uO1xuICAvKipcbiAgKiBTdHJ1Y3R1cmUgdGhhdCBjb250YWlucyBYLjUwOSBBY2Nlc3NNZXRob2QgaW5mb3JtYXRpb24uIEFzc2lnbiBvbmUgYW5kIE9OTFkgb25lIGZpZWxkLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2FjY2Vzc19tZXRob2QgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjYWNjZXNzX21ldGhvZH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzTWV0aG9kOiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NNZXRob2Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2xvY2F0aW9uOiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NBY2Nlc3NMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTG9jYXRpb24pLFxuICAgIGFjY2Vzc19tZXRob2Q6IGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1N1YmplY3RJbmZvcm1hdGlvbkFjY2Vzc0FjY2Vzc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTWV0aG9kKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9ucyB7XG4gIC8qKlxuICAqIFN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIFguNTA5IEtleVVzYWdlIGluZm9ybWF0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2tleV91c2FnZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNrZXlfdXNhZ2V9XG4gICovXG4gIHJlYWRvbmx5IGtleVVzYWdlPzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zS2V5VXNhZ2U7XG4gIC8qKlxuICAqIEFycmF5IG9mIFguNTA5IEFjY2Vzc0Rlc2NyaXB0aW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3N1YmplY3RfaW5mb3JtYXRpb25fYWNjZXNzIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3N1YmplY3RfaW5mb3JtYXRpb25fYWNjZXNzfVxuICAqL1xuICByZWFkb25seSBzdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3M/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNTdWJqZWN0SW5mb3JtYXRpb25BY2Nlc3NbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXlfdXNhZ2U6IGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9uc0tleVVzYWdlVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlVc2FnZSksXG4gICAgc3ViamVjdF9pbmZvcm1hdGlvbl9hY2Nlc3M6IGNka3RmLmxpc3RNYXBwZXIoYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDc3JFeHRlbnNpb25zU3ViamVjdEluZm9ybWF0aW9uQWNjZXNzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3ViamVjdEluZm9ybWF0aW9uQWNjZXNzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb25DcmxDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjY3VzdG9tX2NuYW1lIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2N1c3RvbV9jbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9tQ25hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2VuYWJsZWQgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjZXhwaXJhdGlvbl9pbl9kYXlzIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2V4cGlyYXRpb25faW5fZGF5c31cbiAgKi9cbiAgcmVhZG9ubHkgZXhwaXJhdGlvbkluRGF5cz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjczNfYnVja2V0X25hbWUgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjczNfYnVja2V0X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHMzQnVja2V0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjczNfb2JqZWN0X2FjbCBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNzM19vYmplY3RfYWNsfVxuICAqL1xuICByZWFkb25seSBzM09iamVjdEFjbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb25DcmxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlSZXZvY2F0aW9uQ29uZmlndXJhdGlvbkNybENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3VzdG9tX2NuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUNuYW1lKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBleHBpcmF0aW9uX2luX2RheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXhwaXJhdGlvbkluRGF5cyksXG4gICAgczNfYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCdWNrZXROYW1lKSxcbiAgICBzM19vYmplY3RfYWNsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT2JqZWN0QWNsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBZb3VyIGNlcnRpZmljYXRlIGF1dGhvcml0eSBjYW4gY3JlYXRlIGFuZCBtYWludGFpbiBhIGNlcnRpZmljYXRlIHJldm9jYXRpb24gbGlzdCAoQ1JMKS4gQSBDUkwgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgY2VydGlmaWNhdGVzIHRoYXQgaGF2ZSBiZWVuIHJldm9rZWQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjY3JsX2NvbmZpZ3VyYXRpb24gQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjY3JsX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNybENvbmZpZ3VyYXRpb24/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uQ3JsQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNybF9jb25maWd1cmF0aW9uOiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uQ3JsQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY3JsQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVN1YmplY3Qge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNjb21tb25fbmFtZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNjb21tb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29tbW9uTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjY291bnRyeSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNjb3VudHJ5fVxuICAqL1xuICByZWFkb25seSBjb3VudHJ5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNkaXN0aW5ndWlzaGVkX25hbWVfcXVhbGlmaWVyIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2Rpc3Rpbmd1aXNoZWRfbmFtZV9xdWFsaWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGRpc3Rpbmd1aXNoZWROYW1lUXVhbGlmaWVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNnZW5lcmF0aW9uX3F1YWxpZmllciBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNnZW5lcmF0aW9uX3F1YWxpZmllcn1cbiAgKi9cbiAgcmVhZG9ubHkgZ2VuZXJhdGlvblF1YWxpZmllcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjZ2l2ZW5fbmFtZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNnaXZlbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBnaXZlbk5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI2luaXRpYWxzIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I2luaXRpYWxzfVxuICAqL1xuICByZWFkb25seSBpbml0aWFscz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjbG9jYWxpdHkgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjbG9jYWxpdHl9XG4gICovXG4gIHJlYWRvbmx5IGxvY2FsaXR5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNvcmdhbml6YXRpb24gQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjb3JnYW5pemF0aW9ufVxuICAqL1xuICByZWFkb25seSBvcmdhbml6YXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI29yZ2FuaXphdGlvbmFsX3VuaXQgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjb3JnYW5pemF0aW9uYWxfdW5pdH1cbiAgKi9cbiAgcmVhZG9ubHkgb3JnYW5pemF0aW9uYWxVbml0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNwc2V1ZG9ueW0gQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjcHNldWRvbnltfVxuICAqL1xuICByZWFkb25seSBwc2V1ZG9ueW0/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3NlcmlhbF9udW1iZXIgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjc2VyaWFsX251bWJlcn1cbiAgKi9cbiAgcmVhZG9ubHkgc2VyaWFsTnVtYmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNzdGF0ZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eSNzdGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3N1cm5hbWUgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjc3VybmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3VybmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwjdGl0bGUgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkjdGl0bGV9XG4gICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlTdWJqZWN0VG9UZXJyYWZvcm0oc3RydWN0PzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlTdWJqZWN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1vbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbW1vbk5hbWUpLFxuICAgIGNvdW50cnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY291bnRyeSksXG4gICAgZGlzdGluZ3Vpc2hlZF9uYW1lX3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaXN0aW5ndWlzaGVkTmFtZVF1YWxpZmllciksXG4gICAgZ2VuZXJhdGlvbl9xdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2VuZXJhdGlvblF1YWxpZmllciksXG4gICAgZ2l2ZW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5naXZlbk5hbWUpLFxuICAgIGluaXRpYWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluaXRpYWxzKSxcbiAgICBsb2NhbGl0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbGl0eSksXG4gICAgb3JnYW5pemF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZ2FuaXphdGlvbiksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgIHBzZXVkb255bTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wc2V1ZG9ueW0pLFxuICAgIHNlcmlhbF9udW1iZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VyaWFsTnVtYmVyKSxcbiAgICBzdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZSksXG4gICAgc3VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdXJuYW1lKSxcbiAgICB0aXRsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aXRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVRhZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCNrZXkgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eS5odG1sI3ZhbHVlIEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5I3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5Lmh0bWwgYXdzY2NfYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eX1cbiovXG5leHBvcnQgY2xhc3MgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHkgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHkuaHRtbCBhd3NjY19hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYWNtcGNhX2NlcnRpZmljYXRlX2F1dGhvcml0eScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NzckV4dGVuc2lvbnMgPSBjb25maWcuY3NyRXh0ZW5zaW9ucztcbiAgICB0aGlzLl9rZXlBbGdvcml0aG0gPSBjb25maWcua2V5QWxnb3JpdGhtO1xuICAgIHRoaXMuX2tleVN0b3JhZ2VTZWN1cml0eVN0YW5kYXJkID0gY29uZmlnLmtleVN0b3JhZ2VTZWN1cml0eVN0YW5kYXJkO1xuICAgIHRoaXMuX3Jldm9jYXRpb25Db25maWd1cmF0aW9uID0gY29uZmlnLnJldm9jYXRpb25Db25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NpZ25pbmdBbGdvcml0aG0gPSBjb25maWcuc2lnbmluZ0FsZ29yaXRobTtcbiAgICB0aGlzLl9zdWJqZWN0ID0gY29uZmlnLnN1YmplY3Q7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9zaWduaW5nX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZVNpZ25pbmdSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfc2lnbmluZ19yZXF1ZXN0Jyk7XG4gIH1cblxuICAvLyBjc3JfZXh0ZW5zaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NzckV4dGVuc2lvbnM/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnM7XG4gIHB1YmxpYyBnZXQgY3NyRXh0ZW5zaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjc3JfZXh0ZW5zaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNzckV4dGVuc2lvbnModmFsdWU6IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5Q3NyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuX2NzckV4dGVuc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3JFeHRlbnNpb25zKCkge1xuICAgIHRoaXMuX2NzckV4dGVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzckV4dGVuc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3NyRXh0ZW5zaW9uc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrZXlfYWxnb3JpdGhtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleUFsZ29yaXRobTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGtleUFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9hbGdvcml0aG0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleUFsZ29yaXRobSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5QWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUFsZ29yaXRobUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlBbGdvcml0aG1cbiAgfVxuXG4gIC8vIGtleV9zdG9yYWdlX3NlY3VyaXR5X3N0YW5kYXJkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQga2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfc3RvcmFnZV9zZWN1cml0eV9zdGFuZGFyZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleVN0b3JhZ2VTZWN1cml0eVN0YW5kYXJkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQoKSB7XG4gICAgdGhpcy5fa2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleVN0b3JhZ2VTZWN1cml0eVN0YW5kYXJkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleVN0b3JhZ2VTZWN1cml0eVN0YW5kYXJkXG4gIH1cblxuICAvLyByZXZvY2F0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24/OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uO1xuICBwdWJsaWMgZ2V0IHJldm9jYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jldm9jYXRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldm9jYXRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX3Jldm9jYXRpb25Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldm9jYXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jldm9jYXRpb25Db25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBzaWduaW5nX2FsZ29yaXRobSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zaWduaW5nQWxnb3JpdGhtOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc2lnbmluZ0FsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpZ25pbmdfYWxnb3JpdGhtJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaWduaW5nQWxnb3JpdGhtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduaW5nQWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpZ25pbmdBbGdvcml0aG1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmluZ0FsZ29yaXRobVxuICB9XG5cbiAgLy8gc3ViamVjdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdWJqZWN0OiBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVN1YmplY3Q7XG4gIHB1YmxpYyBnZXQgc3ViamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJqZWN0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3ViamVjdCh2YWx1ZTogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlTdWJqZWN0KSB7XG4gICAgdGhpcy5fc3ViamVjdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5VGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5VGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNzcl9leHRlbnNpb25zOiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNzckV4dGVuc2lvbnNUb1RlcnJhZm9ybSh0aGlzLl9jc3JFeHRlbnNpb25zKSxcbiAgICAgIGtleV9hbGdvcml0aG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2tleUFsZ29yaXRobSksXG4gICAgICBrZXlfc3RvcmFnZV9zZWN1cml0eV9zdGFuZGFyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa2V5U3RvcmFnZVNlY3VyaXR5U3RhbmRhcmQpLFxuICAgICAgcmV2b2NhdGlvbl9jb25maWd1cmF0aW9uOiBhY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eVJldm9jYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fcmV2b2NhdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgICAgc2lnbmluZ19hbGdvcml0aG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NpZ25pbmdBbGdvcml0aG0pLFxuICAgICAgc3ViamVjdDogYWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlTdWJqZWN0VG9UZXJyYWZvcm0odGhpcy5fc3ViamVjdCksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKGFjbXBjYUNlcnRpZmljYXRlQXV0aG9yaXR5VGFnc1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==