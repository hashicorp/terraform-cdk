import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html#id DataAwsccConfigOrganizationConformancePack#id}
    */
    readonly id: string;
}
export declare class DataAwsccConfigOrganizationConformancePackConformancePackInputParameters extends cdktf.ComplexComputedList {
    get parameterName(): string;
    get parameterValue(): string;
}
export declare function dataAwsccConfigOrganizationConformancePackConformancePackInputParametersToTerraform(struct?: DataAwsccConfigOrganizationConformancePackConformancePackInputParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html awscc_config_organization_conformance_pack}
*/
export declare class DataAwsccConfigOrganizationConformancePack extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_pack.html awscc_config_organization_conformance_pack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigOrganizationConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConfigOrganizationConformancePackConfig);
    get conformancePackInputParameters(): any;
    get deliveryS3Bucket(): string;
    get deliveryS3KeyPrefix(): string;
    get excludedAccounts(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get organizationConformancePackName(): string;
    get templateBody(): string;
    get templateS3Uri(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
