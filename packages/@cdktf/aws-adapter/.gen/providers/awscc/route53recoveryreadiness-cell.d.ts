import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the cell to create.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#cell_name Route53RecoveryreadinessCell#cell_name}
    */
    readonly cellName: string;
    /**
    * A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#cells Route53RecoveryreadinessCell#cells}
    */
    readonly cells?: string[];
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#tags Route53RecoveryreadinessCell#tags}
    */
    readonly tags?: Route53RecoveryreadinessCellTags[];
}
export interface Route53RecoveryreadinessCellTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#key Route53RecoveryreadinessCell#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html#value Route53RecoveryreadinessCell#value}
    */
    readonly value: string[];
}
export declare function route53RecoveryreadinessCellTagsToTerraform(struct?: Route53RecoveryreadinessCellTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell}
*/
export declare class Route53RecoveryreadinessCell extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_cell.html awscc_route53recoveryreadiness_cell} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessCellConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig);
    get cellArn(): string;
    private _cellName;
    get cellName(): string;
    set cellName(value: string);
    get cellNameInput(): string;
    private _cells?;
    get cells(): string[];
    set cells(value: string[]);
    resetCells(): void;
    get cellsInput(): string[] | undefined;
    get id(): string;
    get parentReadinessScopes(): string[];
    private _tags?;
    get tags(): Route53RecoveryreadinessCellTags[];
    set tags(value: Route53RecoveryreadinessCellTags[]);
    resetTags(): void;
    get tagsInput(): Route53RecoveryreadinessCellTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
