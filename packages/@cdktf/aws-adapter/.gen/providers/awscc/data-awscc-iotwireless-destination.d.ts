import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_destination.html#id DataAwsccIotwirelessDestination#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessDestinationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessDestinationTagsToTerraform(struct?: DataAwsccIotwirelessDestinationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_destination.html awscc_iotwireless_destination}
*/
export declare class DataAwsccIotwirelessDestination extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_destination.html awscc_iotwireless_destination} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessDestinationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessDestinationConfig);
    get arn(): string;
    get description(): string;
    get expression(): string;
    get expressionType(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
