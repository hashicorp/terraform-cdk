// https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html#id DataAwsccAcmpcaCertificateAuthority#id}
  */
  readonly id: string;
}
export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage extends cdktf.ComplexComputedList {

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

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any {
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

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName extends cdktf.ComplexComputedList {

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

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any {
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

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName extends cdktf.ComplexComputedList {

  // name_assigner - computed: true, optional: false, required: false
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }

  // party_name - computed: true, optional: false, required: false
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName extends cdktf.ComplexComputedList {

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {

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

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc_822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {

  // access_method_type - computed: true, optional: false, required: false
  public get accessMethodType() {
    return this.getStringAttribute('access_method_type');
  }

  // custom_object_identifier - computed: true, optional: false, required: false
  public get customObjectIdentifier() {
    return this.getStringAttribute('custom_object_identifier');
  }
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_method_type: cdktf.stringToTerraform(struct!.accessMethodType),
    custom_object_identifier: cdktf.stringToTerraform(struct!.customObjectIdentifier),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess extends cdktf.ComplexComputedList {

  // access_location - computed: true, optional: false, required: false
  public get accessLocation() {
    return this.interpolationForAttribute('access_location') as any;
  }

  // access_method - computed: true, optional: false, required: false
  public get accessMethod() {
    return this.interpolationForAttribute('access_method') as any;
  }
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_location: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct!.accessLocation),
    access_method: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct!.accessMethod),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensions extends cdktf.ComplexComputedList {

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.interpolationForAttribute('key_usage') as any;
  }

  // subject_information_access - computed: true, optional: false, required: false
  public get subjectInformationAccess() {
    return this.interpolationForAttribute('subject_information_access') as any;
  }
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_usage: dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_information_access: cdktf.listMapper(dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform)(struct!.subjectInformationAccess),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration extends cdktf.ComplexComputedList {

  // custom_cname - computed: true, optional: false, required: false
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_in_days - computed: true, optional: false, required: false
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_acl - computed: true, optional: false, required: false
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_cname: cdktf.stringToTerraform(struct!.customCname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktf.stringToTerraform(struct!.s3ObjectAcl),
  }
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration extends cdktf.ComplexComputedList {

  // crl_configuration - computed: true, optional: false, required: false
  public get crlConfiguration() {
    return this.interpolationForAttribute('crl_configuration') as any;
  }
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crl_configuration: dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct!.crlConfiguration),
  }
}

export class DataAwsccAcmpcaCertificateAuthoritySubject extends cdktf.ComplexComputedList {

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

export function dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubject): any {
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

export class DataAwsccAcmpcaCertificateAuthorityTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAcmpcaCertificateAuthorityTagsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
export class DataAwsccAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_certificate_authority";

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
  public constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateAuthorityConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // csr_extensions - computed: true, optional: false, required: false
  public get csrExtensions() {
    return this.interpolationForAttribute('csr_extensions') as any;
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

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_storage_security_standard - computed: true, optional: false, required: false
  public get keyStorageSecurityStandard() {
    return this.getStringAttribute('key_storage_security_standard');
  }

  // revocation_configuration - computed: true, optional: false, required: false
  public get revocationConfiguration() {
    return this.interpolationForAttribute('revocation_configuration') as any;
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.interpolationForAttribute('subject') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
