import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any;
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
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any;
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
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any;
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
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any;
export declare class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {
    private _directoryName?;
    get directoryName(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
    set directoryName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName);
    resetDirectoryName(): void;
    get directoryNameInput(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | undefined;
    private _dnsName?;
    get dnsName(): string;
    set dnsName(value: string);
    resetDnsName(): void;
    get dnsNameInput(): string | undefined;
    private _ediPartyName?;
    get ediPartyName(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
    set ediPartyName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName);
    resetEdiPartyName(): void;
    get ediPartyNameInput(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | undefined;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _otherName?;
    get otherName(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
    set otherName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName);
    resetOtherName(): void;
    get otherNameInput(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | undefined;
    private _registeredId?;
    get registeredId(): string;
    set registeredId(value: string);
    resetRegisteredId(): void;
    get registeredIdInput(): string | undefined;
    private _rfc822Name?;
    get rfc822Name(): string;
    set rfc822Name(value: string);
    resetRfc822Name(): void;
    get rfc822NameInput(): string | undefined;
    private _uniformResourceIdentifier?;
    get uniformResourceIdentifier(): string;
    set uniformResourceIdentifier(value: string);
    resetUniformResourceIdentifier(): void;
    get uniformResourceIdentifierInput(): string | undefined;
}
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any;
export declare class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {
    private _accessMethodType?;
    get accessMethodType(): string;
    set accessMethodType(value: string);
    resetAccessMethodType(): void;
    get accessMethodTypeInput(): string | undefined;
    private _customObjectIdentifier?;
    get customObjectIdentifier(): string;
    set customObjectIdentifier(value: string);
    resetCustomObjectIdentifier(): void;
    get customObjectIdentifierInput(): string | undefined;
}
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any;
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
export declare function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any;
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
export declare function acmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensions): any;
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
export declare function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
    /**
    * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
    */
    readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfiguration): any;
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
export declare function acmpcaCertificateAuthoritySubjectToTerraform(struct?: AcmpcaCertificateAuthoritySubject): any;
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
export declare function acmpcaCertificateAuthorityTagsToTerraform(struct?: AcmpcaCertificateAuthorityTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
export declare class AcmpcaCertificateAuthority extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority.html awscc_acmpca_certificate_authority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig);
    get arn(): string;
    get certificateSigningRequest(): string;
    private _csrExtensions?;
    get csrExtensions(): AcmpcaCertificateAuthorityCsrExtensions;
    set csrExtensions(value: AcmpcaCertificateAuthorityCsrExtensions);
    resetCsrExtensions(): void;
    get csrExtensionsInput(): AcmpcaCertificateAuthorityCsrExtensions | undefined;
    get id(): string;
    private _keyAlgorithm;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    get keyAlgorithmInput(): string;
    private _keyStorageSecurityStandard?;
    get keyStorageSecurityStandard(): string;
    set keyStorageSecurityStandard(value: string);
    resetKeyStorageSecurityStandard(): void;
    get keyStorageSecurityStandardInput(): string | undefined;
    private _revocationConfiguration?;
    get revocationConfiguration(): AcmpcaCertificateAuthorityRevocationConfiguration;
    set revocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration);
    resetRevocationConfiguration(): void;
    get revocationConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfiguration | undefined;
    private _signingAlgorithm;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string;
    private _subject;
    get subject(): AcmpcaCertificateAuthoritySubject;
    set subject(value: AcmpcaCertificateAuthoritySubject);
    get subjectInput(): AcmpcaCertificateAuthoritySubject;
    private _tags?;
    get tags(): AcmpcaCertificateAuthorityTags[];
    set tags(value: AcmpcaCertificateAuthorityTags[]);
    resetTags(): void;
    get tagsInput(): AcmpcaCertificateAuthorityTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
