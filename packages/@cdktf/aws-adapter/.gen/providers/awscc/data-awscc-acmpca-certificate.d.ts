import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html#id DataAwsccAcmpcaCertificate#id}
    */
    readonly id: string;
}
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier extends cdktf.ComplexComputedList {
    get cpsUri(): string;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers extends cdktf.ComplexComputedList {
    get policyQualifierId(): string;
    get qualifier(): any;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies extends cdktf.ComplexComputedList {
    get certPolicyId(): string;
    get policyQualifiers(): any;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage extends cdktf.ComplexComputedList {
    get extendedKeyUsageObjectIdentifier(): string;
    get extendedKeyUsageType(): string;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage extends cdktf.ComplexComputedList {
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
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName extends cdktf.ComplexComputedList {
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
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName extends cdktf.ComplexComputedList {
    get nameAssigner(): string;
    get partyName(): string;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName extends cdktf.ComplexComputedList {
    get typeId(): string;
    get value(): string;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames extends cdktf.ComplexComputedList {
    get directoryName(): any;
    get dnsName(): string;
    get ediPartyName(): any;
    get ipAddress(): string;
    get otherName(): any;
    get registeredId(): string;
    get rfc822Name(): string;
    get uniformResourceIdentifier(): string;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughExtensions extends cdktf.ComplexComputedList {
    get certificatePolicies(): any;
    get extendedKeyUsage(): any;
    get keyUsage(): any;
    get subjectAlternativeNames(): any;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensions): any;
export declare class DataAwsccAcmpcaCertificateApiPassthroughSubject extends cdktf.ComplexComputedList {
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
export declare function dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubject): any;
export declare class DataAwsccAcmpcaCertificateApiPassthrough extends cdktf.ComplexComputedList {
    get extensions(): any;
    get subject(): any;
}
export declare function dataAwsccAcmpcaCertificateApiPassthroughToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthrough): any;
export declare class DataAwsccAcmpcaCertificateValidity extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): number;
}
export declare function dataAwsccAcmpcaCertificateValidityToTerraform(struct?: DataAwsccAcmpcaCertificateValidity): any;
export declare class DataAwsccAcmpcaCertificateValidityNotBefore extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): number;
}
export declare function dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform(struct?: DataAwsccAcmpcaCertificateValidityNotBefore): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html awscc_acmpca_certificate}
*/
export declare class DataAwsccAcmpcaCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate.html awscc_acmpca_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateConfig);
    get apiPassthrough(): any;
    get arn(): string;
    get certificate(): string;
    get certificateAuthorityArn(): string;
    get certificateSigningRequest(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get signingAlgorithm(): string;
    get templateArn(): string;
    get validity(): any;
    get validityNotBefore(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
