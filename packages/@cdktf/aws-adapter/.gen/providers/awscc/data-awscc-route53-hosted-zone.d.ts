import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53HostedZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html#id DataAwsccRoute53HostedZone#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53HostedZoneHostedZoneConfig extends cdktf.ComplexComputedList {
    get comment(): string;
}
export declare function dataAwsccRoute53HostedZoneHostedZoneConfigToTerraform(struct?: DataAwsccRoute53HostedZoneHostedZoneConfig): any;
export declare class DataAwsccRoute53HostedZoneHostedZoneTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRoute53HostedZoneHostedZoneTagsToTerraform(struct?: DataAwsccRoute53HostedZoneHostedZoneTags): any;
export declare class DataAwsccRoute53HostedZoneQueryLoggingConfig extends cdktf.ComplexComputedList {
    get cloudwatchLogsLogGroupArn(): string;
}
export declare function dataAwsccRoute53HostedZoneQueryLoggingConfigToTerraform(struct?: DataAwsccRoute53HostedZoneQueryLoggingConfig): any;
export declare class DataAwsccRoute53HostedZoneVpCs extends cdktf.ComplexComputedList {
    get vpcId(): string;
    get vpcRegion(): string;
}
export declare function dataAwsccRoute53HostedZoneVpCsToTerraform(struct?: DataAwsccRoute53HostedZoneVpCs): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html awscc_route53_hosted_zone}
*/
export declare class DataAwsccRoute53HostedZone extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html awscc_route53_hosted_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53HostedZoneConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53HostedZoneConfig);
    get hostedZoneConfig(): any;
    get hostedZoneTags(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get nameServers(): string[];
    get queryLoggingConfig(): any;
    get vpCs(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
