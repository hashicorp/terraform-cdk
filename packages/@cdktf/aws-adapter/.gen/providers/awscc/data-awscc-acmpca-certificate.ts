// https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html#id DataAwsccAcmpcaCertificate#id}
  */
  readonly id: string;
}
export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier extends cdktf.ComplexComputedList {

  // cps_uri - computed: true, optional: false, required: false
  public get cpsUri() {
    return this.getStringAttribute('cps_uri');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cps_uri: cdktf.stringToTerraform(struct!.cpsUri),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers extends cdktf.ComplexComputedList {

  // policy_qualifier_id - computed: true, optional: false, required: false
  public get policyQualifierId() {
    return this.getStringAttribute('policy_qualifier_id');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.interpolationForAttribute('qualifier') as any;
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_qualifier_id: cdktf.stringToTerraform(struct!.policyQualifierId),
    qualifier: dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct!.qualifier),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies extends cdktf.ComplexComputedList {

  // cert_policy_id - computed: true, optional: false, required: false
  public get certPolicyId() {
    return this.getStringAttribute('cert_policy_id');
  }

  // policy_qualifiers - computed: true, optional: false, required: false
  public get policyQualifiers() {
    return this.interpolationForAttribute('policy_qualifiers') as any;
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cert_policy_id: cdktf.stringToTerraform(struct!.certPolicyId),
    policy_qualifiers: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform)(struct!.policyQualifiers),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage extends cdktf.ComplexComputedList {

  // extended_key_usage_object_identifier - computed: true, optional: false, required: false
  public get extendedKeyUsageObjectIdentifier() {
    return this.getStringAttribute('extended_key_usage_object_identifier');
  }

  // extended_key_usage_type - computed: true, optional: false, required: false
  public get extendedKeyUsageType() {
    return this.getStringAttribute('extended_key_usage_type');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    extended_key_usage_object_identifier: cdktf.stringToTerraform(struct!.extendedKeyUsageObjectIdentifier),
    extended_key_usage_type: cdktf.stringToTerraform(struct!.extendedKeyUsageType),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage extends cdktf.ComplexComputedList {

  // crl_sign - computed: true, optional: false, required: false
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // decipher_only - computed: true, optional: false, required: false
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // encipher_only - computed: true, optional: false, required: false
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_cert_sign - computed: true, optional: false, required: false
  public get keyCertSign() {
    return this.getBooleanAttribute('key_cert_sign');
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }

  // non_repudiation - computed: true, optional: false, required: false
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_cert_sign: cdktf.booleanToTerraform(struct!.keyCertSign),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktf.booleanToTerraform(struct!.nonRepudiation),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName extends cdktf.ComplexComputedList {

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // distinguished_name_qualifier - computed: true, optional: false, required: false
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }

  // generation_qualifier - computed: true, optional: false, required: false
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName extends cdktf.ComplexComputedList {

  // name_assigner - computed: true, optional: false, required: false
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }

  // party_name - computed: true, optional: false, required: false
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName extends cdktf.ComplexComputedList {

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames extends cdktf.ComplexComputedList {

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.interpolationForAttribute('directory_name') as any;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // edi_party_name - computed: true, optional: false, required: false
  public get ediPartyName() {
    return this.interpolationForAttribute('edi_party_name') as any;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // other_name - computed: true, optional: false, required: false
  public get otherName() {
    return this.interpolationForAttribute('other_name') as any;
  }

  // registered_id - computed: true, optional: false, required: false
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }

  // rfc_822_name - computed: true, optional: false, required: false
  public get rfc822Name() {
    return this.getStringAttribute('rfc_822_name');
  }

  // uniform_resource_identifier - computed: true, optional: false, required: false
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc_822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensions extends cdktf.ComplexComputedList {

  // certificate_policies - computed: true, optional: false, required: false
  public get certificatePolicies() {
    return this.interpolationForAttribute('certificate_policies') as any;
  }

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    return this.interpolationForAttribute('extended_key_usage') as any;
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.interpolationForAttribute('key_usage') as any;
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.interpolationForAttribute('subject_alternative_names') as any;
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_policies: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform)(struct!.certificatePolicies),
    extended_key_usage: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform)(struct!.extendedKeyUsage),
    key_usage: dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_alternative_names: cdktf.listMapper(dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughSubject extends cdktf.ComplexComputedList {

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // distinguished_name_qualifier - computed: true, optional: false, required: false
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }

  // generation_qualifier - computed: true, optional: false, required: false
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class DataAwsccAcmpcaCertificateApiPassthrough extends cdktf.ComplexComputedList {

  // extensions - computed: true, optional: false, required: false
  public get extensions() {
    return this.interpolationForAttribute('extensions') as any;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.interpolationForAttribute('subject') as any;
  }
}

export function dataAwsccAcmpcaCertificateApiPassthroughToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthrough): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    extensions: dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct!.extensions),
    subject: dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct!.subject),
  }
}

export class DataAwsccAcmpcaCertificateValidity extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export function dataAwsccAcmpcaCertificateValidityToTerraform(struct?: DataAwsccAcmpcaCertificateValidity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DataAwsccAcmpcaCertificateValidityNotBefore extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export function dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform(struct?: DataAwsccAcmpcaCertificateValidityNotBefore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html awscc_acmpca_certificate}
*/
export class DataAwsccAcmpcaCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_certificate";

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
  public constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateConfig) {
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
  public get apiPassthrough() {
    return this.interpolationForAttribute('api_passthrough') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority_arn - computed: true, optional: false, required: false
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
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

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // validity - computed: true, optional: false, required: false
  public get validity() {
    return this.interpolationForAttribute('validity') as any;
  }

  // validity_not_before - computed: true, optional: false, required: false
  public get validityNotBefore() {
    return this.interpolationForAttribute('validity_not_before') as any;
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
