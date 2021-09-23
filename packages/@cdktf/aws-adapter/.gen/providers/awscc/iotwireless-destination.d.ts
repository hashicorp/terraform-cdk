import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotwirelessDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Destination description
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#description IotwirelessDestination#description}
    */
    readonly description?: string;
    /**
    * Destination expression
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#expression IotwirelessDestination#expression}
    */
    readonly expression: string;
    /**
    * Must be RuleName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#expression_type IotwirelessDestination#expression_type}
    */
    readonly expressionType: string;
    /**
    * Unique name of destination
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#name IotwirelessDestination#name}
    */
    readonly name: string;
    /**
    * AWS role ARN that grants access
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#role_arn IotwirelessDestination#role_arn}
    */
    readonly roleArn: string;
    /**
    * A list of key-value pairs that contain metadata for the destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#tags IotwirelessDestination#tags}
    */
    readonly tags?: IotwirelessDestinationTags[];
}
export interface IotwirelessDestinationTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#key IotwirelessDestination#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html#value IotwirelessDestination#value}
    */
    readonly value?: string;
}
export declare function iotwirelessDestinationTagsToTerraform(struct?: IotwirelessDestinationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html awscc_iotwireless_destination}
*/
export declare class IotwirelessDestination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_destination.html awscc_iotwireless_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessDestinationConfig
    */
    constructor(scope: Construct, id: string, config: IotwirelessDestinationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _expression;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
    private _expressionType;
    get expressionType(): string;
    set expressionType(value: string);
    get expressionTypeInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): IotwirelessDestinationTags[];
    set tags(value: IotwirelessDestinationTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessDestinationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
