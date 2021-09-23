// https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Structure that contains CSR pass though extensions information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#csr_extensions AcmpcaCertificateAuthority#csr_extensions}
  */
  readonly csrExtensions?: AcmpcaCertificateAuthorityCsrExtensions;
  /**
  * Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}
  */
  readonly keyStorageSecurityStandard?: string;
  /**
  * Certificate Authority revocation information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
  /**
  * Algorithm your CA uses to sign certificate requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * Structure that contains X.500 distinguished name information for your CA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#subject AcmpcaCertificateAuthority#subject}
  */
  readonly subject: AcmpcaCertificateAuthoritySubject;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#tags AcmpcaCertificateAuthority#tags}
  */
  readonly tags?: AcmpcaCertificateAuthorityTags[];
  /**
  * The type of the certificate authority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#type AcmpcaCertificateAuthority#type}
  */
  readonly type: string;
}
export interface AcmpcaCertificateAuthorityCsrExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#crl_sign AcmpcaCertificateAuthority#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#data_encipherment AcmpcaCertificateAuthority#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#decipher_only AcmpcaCertificateAuthority#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#digital_signature AcmpcaCertificateAuthority#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#encipher_only AcmpcaCertificateAuthority#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_agreement AcmpcaCertificateAuthority#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}
  */
  readonly keyCertSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_encipherment AcmpcaCertificateAuthority#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#non_repudiation AcmpcaCertificateAuthority#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktf.IResolvable;
}

export function acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any {
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

export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#serial_number AcmpcaCertificateAuthority#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any {
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

export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#name_assigner AcmpcaCertificateAuthority#name_assigner}
  */
  readonly nameAssigner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#party_name AcmpcaCertificateAuthority#party_name}
  */
  readonly partyName: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}

export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName {
  /**
  * String that contains X.509 ObjectIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#type_id AcmpcaCertificateAuthority#type_id}
  */
  readonly typeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#value AcmpcaCertificateAuthority#value}
  */
  readonly value: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {

  // directory_name - computed: true, optional: true, required: false
  private _directoryName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
  public get directoryName() {
    return this.interpolationForAttribute('directory_name') as any;
  }
  public set directoryName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName) {
    this._directoryName = value;
  }
  public resetDirectoryName() {
    this._directoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string;
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName
  }

  // edi_party_name - computed: true, optional: true, required: false
  private _ediPartyName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
  public get ediPartyName() {
    return this.interpolationForAttribute('edi_party_name') as any;
  }
  public set ediPartyName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName) {
    this._ediPartyName = value;
  }
  public resetEdiPartyName() {
    this._ediPartyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediPartyNameInput() {
    return this._ediPartyName
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // other_name - computed: true, optional: true, required: false
  private _otherName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
  public get otherName() {
    return this.interpolationForAttribute('other_name') as any;
  }
  public set otherName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName) {
    this._otherName = value;
  }
  public resetOtherName() {
    this._otherName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameInput() {
    return this._otherName
  }

  // registered_id - computed: true, optional: true, required: false
  private _registeredId?: string;
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }
  public set registeredId(value: string) {
    this._registeredId = value;
  }
  public resetRegisteredId() {
    this._registeredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredIdInput() {
    return this._registeredId
  }

  // rfc_822_name - computed: true, optional: true, required: false
  private _rfc822Name?: string;
  public get rfc822Name() {
    return this.getStringAttribute('rfc_822_name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name
  }

  // uniform_resource_identifier - computed: true, optional: true, required: false
  private _uniformResourceIdentifier?: string;
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier
  }
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc_822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {

  // access_method_type - computed: true, optional: true, required: false
  private _accessMethodType?: string;
  public get accessMethodType() {
    return this.getStringAttribute('access_method_type');
  }
  public set accessMethodType(value: string) {
    this._accessMethodType = value;
  }
  public resetAccessMethodType() {
    this._accessMethodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodTypeInput() {
    return this._accessMethodType
  }

  // custom_object_identifier - computed: true, optional: true, required: false
  private _customObjectIdentifier?: string;
  public get customObjectIdentifier() {
    return this.getStringAttribute('custom_object_identifier');
  }
  public set customObjectIdentifier(value: string) {
    this._customObjectIdentifier = value;
  }
  public resetCustomObjectIdentifier() {
    this._customObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customObjectIdentifierInput() {
    return this._customObjectIdentifier
  }
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_method_type: cdktf.stringToTerraform(struct!.accessMethodType),
    custom_object_identifier: cdktf.stringToTerraform(struct!.customObjectIdentifier),
  }
}

export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess {
  /**
  * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#access_location AcmpcaCertificateAuthority#access_location}
  */
  readonly accessLocation: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;
  /**
  * Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#access_method AcmpcaCertificateAuthority#access_method}
  */
  readonly accessMethod: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_location: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct!.accessLocation),
    access_method: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct!.accessMethod),
  }
}

export interface AcmpcaCertificateAuthorityCsrExtensions {
  /**
  * Structure that contains X.509 KeyUsage information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key_usage AcmpcaCertificateAuthority#key_usage}
  */
  readonly keyUsage?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage;
  /**
  * Array of X.509 AccessDescription.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#subject_information_access AcmpcaCertificateAuthority#subject_information_access}
  */
  readonly subjectInformationAccess?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess[];
}

export function acmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_usage: acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_information_access: cdktf.listMapper(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform)(struct!.subjectInformationAccess),
  }
}

export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#custom_cname AcmpcaCertificateAuthority#custom_cname}
  */
  readonly customCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
  */
  readonly s3ObjectAcl?: string;
}

export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_cname: cdktf.stringToTerraform(struct!.customCname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktf.stringToTerraform(struct!.s3ObjectAcl),
  }
}

export interface AcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
}

export function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crl_configuration: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct!.crlConfiguration),
  }
}

export interface AcmpcaCertificateAuthoritySubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#serial_number AcmpcaCertificateAuthority#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateAuthoritySubjectToTerraform(struct?: AcmpcaCertificateAuthoritySubject): any {
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

export interface AcmpcaCertificateAuthorityTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#key AcmpcaCertificateAuthority#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#value AcmpcaCertificateAuthority#value}
  */
  readonly value?: string;
}

export function acmpcaCertificateAuthorityTagsToTerraform(struct?: AcmpcaCertificateAuthorityTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
export class AcmpcaCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_certificate_authority";

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
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // csr_extensions - computed: true, optional: true, required: false
  private _csrExtensions?: AcmpcaCertificateAuthorityCsrExtensions;
  public get csrExtensions() {
    return this.interpolationForAttribute('csr_extensions') as any;
  }
  public set csrExtensions(value: AcmpcaCertificateAuthorityCsrExtensions) {
    this._csrExtensions = value;
  }
  public resetCsrExtensions() {
    this._csrExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrExtensionsInput() {
    return this._csrExtensions
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm: string;
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm
  }

  // key_storage_security_standard - computed: true, optional: true, required: false
  private _keyStorageSecurityStandard?: string;
  public get keyStorageSecurityStandard() {
    return this.getStringAttribute('key_storage_security_standard');
  }
  public set keyStorageSecurityStandard(value: string) {
    this._keyStorageSecurityStandard = value;
  }
  public resetKeyStorageSecurityStandard() {
    this._keyStorageSecurityStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorageSecurityStandardInput() {
    return this._keyStorageSecurityStandard
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
  public get revocationConfiguration() {
    return this.interpolationForAttribute('revocation_configuration') as any;
  }
  public set revocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration ) {
    this._revocationConfiguration = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm: string;
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm
  }

  // subject - computed: false, optional: false, required: true
  private _subject: AcmpcaCertificateAuthoritySubject;
  public get subject() {
    return this.interpolationForAttribute('subject') as any;
  }
  public set subject(value: AcmpcaCertificateAuthoritySubject) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AcmpcaCertificateAuthorityTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AcmpcaCertificateAuthorityTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
