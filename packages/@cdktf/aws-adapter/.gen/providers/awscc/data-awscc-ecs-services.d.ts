import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsServicesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_services.html awscc_ecs_services}
*/
export declare class DataAwsccEcsServices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_services.html awscc_ecs_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsServicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcsServicesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
