import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccHealthlakeFhirDatastoresConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastores.html awscc_healthlake_fhir_datastores}
*/
export declare class DataAwsccHealthlakeFhirDatastores extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastores.html awscc_healthlake_fhir_datastores} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccHealthlakeFhirDatastoresConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccHealthlakeFhirDatastoresConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
