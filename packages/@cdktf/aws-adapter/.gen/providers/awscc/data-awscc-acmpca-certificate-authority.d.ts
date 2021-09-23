import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html#id DataAwsccAcmpcaCertificateAuthority#id}
    */
    readonly id: string;
}
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage extends cdktf.ComplexComputedList {
    get crlSign(): any;
    get dataEncipherment(): any;
    get decipherOnly(): any;
    get digitalSignature(): any;
    get encipherOnly(): any;
    get keyAgreement(): any;
    get keyCertSign(): any;
    get keyEncipherment(): any;
    get nonRepudiation(): any;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName extends cdktf.ComplexComputedList {
    get commonName(): string;
    get country(): string;
    get distinguishedNameQualifier(): string;
    get generationQualifier(): string;
    get givenName(): string;
    get initials(): string;
    get locality(): string;
    get organization(): string;
    get organizationalUnit(): string;
    get pseudonym(): string;
    get serialNumber(): string;
    get state(): string;
    get surname(): string;
    get title(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName extends cdktf.ComplexComputedList {
    get nameAssigner(): string;
    get partyName(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName extends cdktf.ComplexComputedList {
    get typeId(): string;
    get value(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation extends cdktf.ComplexComputedList {
    get directoryName(): any;
    get dnsName(): string;
    get ediPartyName(): any;
    get ipAddress(): string;
    get otherName(): any;
    get registeredId(): string;
    get rfc822Name(): string;
    get uniformResourceIdentifier(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod extends cdktf.ComplexComputedList {
    get accessMethodType(): string;
    get customObjectIdentifier(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess extends cdktf.ComplexComputedList {
    get accessLocation(): any;
    get accessMethod(): any;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any;
export declare class DataAwsccAcmpcaCertificateAuthorityCsrExtensions extends cdktf.ComplexComputedList {
    get keyUsage(): any;
    get subjectInformationAccess(): any;
}
export declare function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensions): any;
export declare class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration extends cdktf.ComplexComputedList {
    get customCname(): string;
    get enabled(): any;
    get expirationInDays(): number;
    get s3BucketName(): string;
    get s3ObjectAcl(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare class DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration extends cdktf.ComplexComputedList {
    get crlConfiguration(): any;
}
export declare function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare class DataAwsccAcmpcaCertificateAuthoritySubject extends cdktf.ComplexComputedList {
    get commonName(): string;
    get country(): string;
    get distinguishedNameQualifier(): string;
    get generationQualifier(): string;
    get givenName(): string;
    get initials(): string;
    get locality(): string;
    get organization(): string;
    get organizationalUnit(): string;
    get pseudonym(): string;
    get serialNumber(): string;
    get state(): string;
    get surname(): string;
    get title(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubject): any;
export declare class DataAwsccAcmpcaCertificateAuthorityTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAcmpcaCertificateAuthorityTagsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html awscc_acmpca_certificate_authority}
*/
export declare class DataAwsccAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority.html awscc_acmpca_certificate_authority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaCertificateAuthorityConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateAuthorityConfig);
    get arn(): string;
    get certificateSigningRequest(): string;
    get csrExtensions(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyAlgorithm(): string;
    get keyStorageSecurityStandard(): string;
    get revocationConfiguration(): any;
    get signingAlgorithm(): string;
    get subject(): any;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
