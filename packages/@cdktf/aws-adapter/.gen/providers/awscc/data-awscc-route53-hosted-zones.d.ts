import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53HostedZonesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zones.html awscc_route53_hosted_zones}
*/
export declare class DataAwsccRoute53HostedZones extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zones.html awscc_route53_hosted_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53HostedZonesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53HostedZonesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
