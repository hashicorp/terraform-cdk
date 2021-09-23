import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_cell.html#id DataAwsccRoute53RecoveryreadinessCell#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoveryreadinessCellTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string[];
}
export declare function dataAwsccRoute53RecoveryreadinessCellTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessCellTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell}
*/
export declare class DataAwsccRoute53RecoveryreadinessCell extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessCellConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessCellConfig);
    get cellArn(): string;
    get cellName(): string;
    get cells(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get parentReadinessScopes(): string[];
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
