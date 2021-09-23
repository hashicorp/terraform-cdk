import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * A complex type that contains information about the health check.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_check_config Route53HealthCheck#health_check_config}
    */
    readonly healthCheckConfig: Route53HealthCheckHealthCheckConfig;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_check_tags Route53HealthCheck#health_check_tags}
    */
    readonly healthCheckTags?: Route53HealthCheckHealthCheckTags[];
}
export interface Route53HealthCheckHealthCheckConfigAlarmIdentifier {
    /**
    * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#name Route53HealthCheck#name}
    */
    readonly name: string;
    /**
    * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#region Route53HealthCheck#region}
    */
    readonly region: string;
}
export declare function route53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct?: Route53HealthCheckHealthCheckConfigAlarmIdentifier): any;
export interface Route53HealthCheckHealthCheckConfig {
    /**
    * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#alarm_identifier Route53HealthCheck#alarm_identifier}
    */
    readonly alarmIdentifier?: Route53HealthCheckHealthCheckConfigAlarmIdentifier;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#child_health_checks Route53HealthCheck#child_health_checks}
    */
    readonly childHealthChecks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#enable_sni Route53HealthCheck#enable_sni}
    */
    readonly enableSni?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#failure_threshold Route53HealthCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}
    */
    readonly fullyQualifiedDomainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_threshold Route53HealthCheck#health_threshold}
    */
    readonly healthThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
    */
    readonly insufficientDataHealthStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#inverted Route53HealthCheck#inverted}
    */
    readonly inverted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#ip_address Route53HealthCheck#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#measure_latency Route53HealthCheck#measure_latency}
    */
    readonly measureLatency?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#port Route53HealthCheck#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#regions Route53HealthCheck#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#request_interval Route53HealthCheck#request_interval}
    */
    readonly requestInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#resource_path Route53HealthCheck#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#routing_control_arn Route53HealthCheck#routing_control_arn}
    */
    readonly routingControlArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#search_string Route53HealthCheck#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#type Route53HealthCheck#type}
    */
    readonly type: string;
}
export declare function route53HealthCheckHealthCheckConfigToTerraform(struct?: Route53HealthCheckHealthCheckConfig): any;
export interface Route53HealthCheckHealthCheckTags {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#key Route53HealthCheck#key}
    */
    readonly key: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#value Route53HealthCheck#value}
    */
    readonly value: string;
}
export declare function route53HealthCheckHealthCheckTagsToTerraform(struct?: Route53HealthCheckHealthCheckTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html awscc_route53_health_check}
*/
export declare class Route53HealthCheck extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html awscc_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53HealthCheckConfig);
    private _healthCheckConfig;
    get healthCheckConfig(): Route53HealthCheckHealthCheckConfig;
    set healthCheckConfig(value: Route53HealthCheckHealthCheckConfig);
    get healthCheckConfigInput(): Route53HealthCheckHealthCheckConfig;
    get healthCheckId(): string;
    private _healthCheckTags?;
    get healthCheckTags(): Route53HealthCheckHealthCheckTags[];
    set healthCheckTags(value: Route53HealthCheckHealthCheckTags[]);
    resetHealthCheckTags(): void;
    get healthCheckTagsInput(): Route53HealthCheckHealthCheckTags[] | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
