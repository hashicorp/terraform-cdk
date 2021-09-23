import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html#id DataAwsccRoute53HealthCheck#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier extends cdktf.ComplexComputedList {
    get name(): string;
    get region(): string;
}
export declare function dataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier): any;
export declare class DataAwsccRoute53HealthCheckHealthCheckConfig extends cdktf.ComplexComputedList {
    get alarmIdentifier(): any;
    get childHealthChecks(): string[];
    get enableSni(): any;
    get failureThreshold(): number;
    get fullyQualifiedDomainName(): string;
    get healthThreshold(): number;
    get insufficientDataHealthStatus(): string;
    get inverted(): any;
    get ipAddress(): string;
    get measureLatency(): any;
    get port(): number;
    get regions(): string[];
    get requestInterval(): number;
    get resourcePath(): string;
    get routingControlArn(): string;
    get searchString(): string;
    get type(): string;
}
export declare function dataAwsccRoute53HealthCheckHealthCheckConfigToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckConfig): any;
export declare class DataAwsccRoute53HealthCheckHealthCheckTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRoute53HealthCheckHealthCheckTagsToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html awscc_route53_health_check}
*/
export declare class DataAwsccRoute53HealthCheck extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html awscc_route53_health_check} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53HealthCheckConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53HealthCheckConfig);
    get healthCheckConfig(): any;
    get healthCheckId(): string;
    get healthCheckTags(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
