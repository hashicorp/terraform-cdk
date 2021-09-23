import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier extends cdktf.ComplexComputedList {
    get cpsUri(): string;
}
export declare function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsKeyUsage): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any;
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
export declare function acmpcaCertificateApiPassthroughExtensionsToTerraform(struct?: AcmpcaCertificateApiPassthroughExtensions): any;
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
export declare function acmpcaCertificateApiPassthroughSubjectToTerraform(struct?: AcmpcaCertificateApiPassthroughSubject): any;
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
export declare function acmpcaCertificateApiPassthroughToTerraform(struct?: AcmpcaCertificateApiPassthrough): any;
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
export declare function acmpcaCertificateValidityToTerraform(struct?: AcmpcaCertificateValidity): any;
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
export declare function acmpcaCertificateValidityNotBeforeToTerraform(struct?: AcmpcaCertificateValidityNotBefore): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html awscc_acmpca_certificate}
*/
export declare class AcmpcaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate.html awscc_acmpca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig);
    private _apiPassthrough?;
    get apiPassthrough(): AcmpcaCertificateApiPassthrough;
    set apiPassthrough(value: AcmpcaCertificateApiPassthrough);
    resetApiPassthrough(): void;
    get apiPassthroughInput(): AcmpcaCertificateApiPassthrough | undefined;
    get arn(): string;
    get certificate(): string;
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    private _certificateSigningRequest;
    get certificateSigningRequest(): string;
    set certificateSigningRequest(value: string);
    get certificateSigningRequestInput(): string;
    get id(): string;
    private _signingAlgorithm;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string;
    private _templateArn?;
    get templateArn(): string;
    set templateArn(value: string);
    resetTemplateArn(): void;
    get templateArnInput(): string | undefined;
    private _validity;
    get validity(): AcmpcaCertificateValidity;
    set validity(value: AcmpcaCertificateValidity);
    get validityInput(): AcmpcaCertificateValidity;
    private _validityNotBefore?;
    get validityNotBefore(): AcmpcaCertificateValidityNotBefore;
    set validityNotBefore(value: AcmpcaCertificateValidityNotBefore);
    resetValidityNotBefore(): void;
    get validityNotBeforeInput(): AcmpcaCertificateValidityNotBefore | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
