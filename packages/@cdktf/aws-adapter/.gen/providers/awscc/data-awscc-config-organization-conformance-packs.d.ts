import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigOrganizationConformancePacksConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_packs.html awscc_config_organization_conformance_packs}
*/
export declare class DataAwsccConfigOrganizationConformancePacks extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_organization_conformance_packs.html awscc_config_organization_conformance_packs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigOrganizationConformancePacksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccConfigOrganizationConformancePacksConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
