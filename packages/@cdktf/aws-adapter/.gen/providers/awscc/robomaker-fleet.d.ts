import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RobomakerFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_fleet.html#name RobomakerFleet#name}
    */
    readonly name?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_fleet.html#tags RobomakerFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_fleet.html awscc_robomaker_fleet}
*/
export declare class RobomakerFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_fleet.html awscc_robomaker_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RobomakerFleetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: RobomakerFleetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
