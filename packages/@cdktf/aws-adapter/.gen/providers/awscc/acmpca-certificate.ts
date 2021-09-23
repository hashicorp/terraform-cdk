// https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Structure that specifies fields to be overridden in a certificate at the time of issuance. These requires an API Passthrough template be used or they will be ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#api_passthrough AcmpcaCertificate#api_passthrough}
  */
  readonly apiPassthrough?: AcmpcaCertificateApiPassthrough;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}
  */
  readonly certificateAuthorityArn: string;
  /**
  * The certificate signing request (CSR) for the Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#certificate_signing_request AcmpcaCertificate#certificate_signing_request}
  */
  readonly certificateSigningRequest: string;
  /**
  * The name of the algorithm that will be used to sign the Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#signing_algorithm AcmpcaCertificate#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#template_arn AcmpcaCertificate#template_arn}
  */
  readonly templateArn?: string;
  /**
  * Validity for a certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#validity AcmpcaCertificate#validity}
  */
  readonly validity: AcmpcaCertificateValidity;
  /**
  * Validity for a certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#validity_not_before AcmpcaCertificate#validity_not_before}
  */
  readonly validityNotBefore?: AcmpcaCertificateValidityNotBefore;
}
export class AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier extends cdktf.ComplexComputedList {

  // cps_uri - computed: true, optional: false, required: true
  public get cpsUri() {
    return this.getStringAttribute('cps_uri');
  }
}

export function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cps_uri: cdktf.stringToTerraform(struct!.cpsUri),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#policy_qualifier_id AcmpcaCertificate#policy_qualifier_id}
  */
  readonly policyQualifierId: string;
  /**
  * Structure that contains a X.509 policy qualifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#qualifier AcmpcaCertificate#qualifier}
  */
  readonly qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
}

export function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_qualifier_id: cdktf.stringToTerraform(struct!.policyQualifierId),
    qualifier: acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct!.qualifier),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies {
  /**
  * String that contains X.509 ObjectIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#cert_policy_id AcmpcaCertificate#cert_policy_id}
  */
  readonly certPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#policy_qualifiers AcmpcaCertificate#policy_qualifiers}
  */
  readonly policyQualifiers?: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[];
}

export function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cert_policy_id: cdktf.stringToTerraform(struct!.certPolicyId),
    policy_qualifiers: cdktf.listMapper(acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform)(struct!.policyQualifiers),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage {
  /**
  * String that contains X.509 ObjectIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#extended_key_usage_object_identifier AcmpcaCertificate#extended_key_usage_object_identifier}
  */
  readonly extendedKeyUsageObjectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#extended_key_usage_type AcmpcaCertificate#extended_key_usage_type}
  */
  readonly extendedKeyUsageType?: string;
}

export function acmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    extended_key_usage_object_identifier: cdktf.stringToTerraform(struct!.extendedKeyUsageObjectIdentifier),
    extended_key_usage_type: cdktf.stringToTerraform(struct!.extendedKeyUsageType),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#crl_sign AcmpcaCertificate#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#data_encipherment AcmpcaCertificate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#decipher_only AcmpcaCertificate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#digital_signature AcmpcaCertificate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#encipher_only AcmpcaCertificate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#key_agreement AcmpcaCertificate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#key_cert_sign AcmpcaCertificate#key_cert_sign}
  */
  readonly keyCertSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#key_encipherment AcmpcaCertificate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#non_repudiation AcmpcaCertificate#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktf.IResolvable;
}

export function acmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsKeyUsage): any {
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

export interface AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#common_name AcmpcaCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#country AcmpcaCertificate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#generation_qualifier AcmpcaCertificate#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#given_name AcmpcaCertificate#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#initials AcmpcaCertificate#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#locality AcmpcaCertificate#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#organization AcmpcaCertificate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#organizational_unit AcmpcaCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#pseudonym AcmpcaCertificate#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#serial_number AcmpcaCertificate#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#state AcmpcaCertificate#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#surname AcmpcaCertificate#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#title AcmpcaCertificate#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any {
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

export interface AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#name_assigner AcmpcaCertificate#name_assigner}
  */
  readonly nameAssigner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#party_name AcmpcaCertificate#party_name}
  */
  readonly partyName: string;
}

export function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName {
  /**
  * String that contains X.509 ObjectIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#type_id AcmpcaCertificate#type_id}
  */
  readonly typeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#value AcmpcaCertificate#value}
  */
  readonly value: string;
}

export function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames {
  /**
  * Structure that contains X.500 distinguished name information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#directory_name AcmpcaCertificate#directory_name}
  */
  readonly directoryName?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
  /**
  * String that contains X.509 DnsName information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#dns_name AcmpcaCertificate#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Structure that contains X.509 EdiPartyName information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#edi_party_name AcmpcaCertificate#edi_party_name}
  */
  readonly ediPartyName?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
  /**
  * String that contains X.509 IpAddress information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#ip_address AcmpcaCertificate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Structure that contains X.509 OtherName information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#other_name AcmpcaCertificate#other_name}
  */
  readonly otherName?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
  /**
  * String that contains X.509 ObjectIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#registered_id AcmpcaCertificate#registered_id}
  */
  readonly registeredId?: string;
  /**
  * String that contains X.509 Rfc822Name information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#rfc_822_name AcmpcaCertificate#rfc_822_name}
  */
  readonly rfc822Name?: string;
  /**
  * String that contains X.509 UniformResourceIdentifier information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#uniform_resource_identifier AcmpcaCertificate#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc_822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}

export interface AcmpcaCertificateApiPassthroughExtensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#certificate_policies AcmpcaCertificate#certificate_policies}
  */
  readonly certificatePolicies?: AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#extended_key_usage AcmpcaCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage?: AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage[];
  /**
  * Structure that contains X.509 KeyUsage information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#key_usage AcmpcaCertificate#key_usage}
  */
  readonly keyUsage?: AcmpcaCertificateApiPassthroughExtensionsKeyUsage;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#subject_alternative_names AcmpcaCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames[];
}

export function acmpcaCertificateApiPassthroughExtensionsToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_policies: cdktf.listMapper(acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform)(struct!.certificatePolicies),
    extended_key_usage: cdktf.listMapper(acmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform)(struct!.extendedKeyUsage),
    key_usage: acmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_alternative_names: cdktf.listMapper(acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
  }
}

export interface AcmpcaCertificateApiPassthroughSubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#common_name AcmpcaCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#country AcmpcaCertificate#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#generation_qualifier AcmpcaCertificate#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#given_name AcmpcaCertificate#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#initials AcmpcaCertificate#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#locality AcmpcaCertificate#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#organization AcmpcaCertificate#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#organizational_unit AcmpcaCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#pseudonym AcmpcaCertificate#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#serial_number AcmpcaCertificate#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#state AcmpcaCertificate#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#surname AcmpcaCertificate#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#title AcmpcaCertificate#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateApiPassthroughSubjectToTerraform(struct?: AcmpcaCertificateApiPassthroughSubject): any {
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

export interface AcmpcaCertificateApiPassthrough {
  /**
  * Structure that contains X.500 extensions for a Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#extensions AcmpcaCertificate#extensions}
  */
  readonly extensions?: AcmpcaCertificateApiPassthroughExtensions;
  /**
  * Structure that contains X.500 distinguished name information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#subject AcmpcaCertificate#subject}
  */
  readonly subject?: AcmpcaCertificateApiPassthroughSubject;
}

export function acmpcaCertificateApiPassthroughToTerraform(struct?: AcmpcaCertificateApiPassthrough): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    extensions: acmpcaCertificateApiPassthroughExtensionsToTerraform(struct!.extensions),
    subject: acmpcaCertificateApiPassthroughSubjectToTerraform(struct!.subject),
  }
}

export interface AcmpcaCertificateValidity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#type AcmpcaCertificate#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#value AcmpcaCertificate#value}
  */
  readonly value: number;
}

export function acmpcaCertificateValidityToTerraform(struct?: AcmpcaCertificateValidity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AcmpcaCertificateValidityNotBefore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#type AcmpcaCertificate#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html#value AcmpcaCertificate#value}
  */
  readonly value: number;
}

export function acmpcaCertificateValidityNotBeforeToTerraform(struct?: AcmpcaCertificateValidityNotBefore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html awscc_acmpca_certificate}
*/
export class AcmpcaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html awscc_acmpca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig) {
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
    this._apiPassthrough = config.apiPassthrough;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateSigningRequest = config.certificateSigningRequest;
    this._signingAlgorithm = config.signingAlgorithm;
    this._templateArn = config.templateArn;
    this._validity = config.validity;
    this._validityNotBefore = config.validityNotBefore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_passthrough - computed: true, optional: true, required: false
  private _apiPassthrough?: AcmpcaCertificateApiPassthrough;
  public get apiPassthrough() {
    return this.interpolationForAttribute('api_passthrough') as any;
  }
  public set apiPassthrough(value: AcmpcaCertificateApiPassthrough) {
    this._apiPassthrough = value;
  }
  public resetApiPassthrough() {
    this._apiPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPassthroughInput() {
    return this._apiPassthrough
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // certificate_signing_request - computed: false, optional: false, required: true
  private _certificateSigningRequest: string;
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // template_arn - computed: true, optional: true, required: false
  private _templateArn?: string;
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }
  public set templateArn(value: string) {
    this._templateArn = value;
  }
  public resetTemplateArn() {
    this._templateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateArnInput() {
    return this._templateArn
  }

  // validity - computed: false, optional: false, required: true
  private _validity: AcmpcaCertificateValidity;
  public get validity() {
    return this.interpolationForAttribute('validity') as any;
  }
  public set validity(value: AcmpcaCertificateValidity) {
    this._validity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity
  }

  // validity_not_before - computed: true, optional: true, required: false
  private _validityNotBefore?: AcmpcaCertificateValidityNotBefore;
  public get validityNotBefore() {
    return this.interpolationForAttribute('validity_not_before') as any;
  }
  public set validityNotBefore(value: AcmpcaCertificateValidityNotBefore) {
    this._validityNotBefore = value;
  }
  public resetValidityNotBefore() {
    this._validityNotBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityNotBeforeInput() {
    return this._validityNotBefore
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_passthrough: acmpcaCertificateApiPassthroughToTerraform(this._apiPassthrough),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_signing_request: cdktf.stringToTerraform(this._certificateSigningRequest),
      signing_algorithm: cdktf.stringToTerraform(this._signingAlgorithm),
      template_arn: cdktf.stringToTerraform(this._templateArn),
      validity: acmpcaCertificateValidityToTerraform(this._validity),
      validity_not_before: acmpcaCertificateValidityNotBeforeToTerraform(this._validityNotBefore),
    };
  }
}
