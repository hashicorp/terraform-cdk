import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EventsApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The arn of the connection.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#connection_arn EventsApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#description EventsApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#http_method EventsApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Url endpoint to invoke.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#invocation_endpoint EventsApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#invocation_rate_limit_per_second EventsApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Name of the apiDestination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html#name EventsApiDestination#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html awscc_events_api_destination}
*/
export declare class EventsApiDestination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/events_api_destination.html awscc_events_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EventsApiDestinationConfig
    */
    constructor(scope: Construct, id: string, config: EventsApiDestinationConfig);
    get arn(): string;
    private _connectionArn;
    get connectionArn(): string;
    set connectionArn(value: string);
    get connectionArnInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _httpMethod;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _invocationEndpoint;
    get invocationEndpoint(): string;
    set invocationEndpoint(value: string);
    get invocationEndpointInput(): string;
    private _invocationRateLimitPerSecond?;
    get invocationRateLimitPerSecond(): number;
    set invocationRateLimitPerSecond(value: number);
    resetInvocationRateLimitPerSecond(): void;
    get invocationRateLimitPerSecondInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
