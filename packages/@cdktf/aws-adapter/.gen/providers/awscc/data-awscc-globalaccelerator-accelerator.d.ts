import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_accelerator.html#id DataAwsccGlobalacceleratorAccelerator#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlobalacceleratorAcceleratorTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGlobalacceleratorAcceleratorTagsToTerraform(struct?: DataAwsccGlobalacceleratorAcceleratorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator}
*/
export declare class DataAwsccGlobalacceleratorAccelerator extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlobalacceleratorAcceleratorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorAcceleratorConfig);
    get acceleratorArn(): string;
    get dnsName(): string;
    get enabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ipAddressType(): string;
    get ipAddresses(): string[];
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
