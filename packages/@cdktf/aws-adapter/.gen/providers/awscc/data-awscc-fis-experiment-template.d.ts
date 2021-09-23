import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html#id DataAwsccFisExperimentTemplate#id}
    */
    readonly id: string;
}
export declare class DataAwsccFisExperimentTemplateActions extends cdktf.ComplexComputedList {
    get actionId(): string;
    get description(): string;
    get parameters(): any;
    get startAfter(): string[];
    get targets(): any;
}
export declare function dataAwsccFisExperimentTemplateActionsToTerraform(struct?: DataAwsccFisExperimentTemplateActions): any;
export declare class DataAwsccFisExperimentTemplateStopConditions extends cdktf.ComplexComputedList {
    get source(): string;
    get value(): string;
}
export declare function dataAwsccFisExperimentTemplateStopConditionsToTerraform(struct?: DataAwsccFisExperimentTemplateStopConditions): any;
export declare class DataAwsccFisExperimentTemplateTargetsFilters extends cdktf.ComplexComputedList {
    get path(): string;
    get values(): string[];
}
export declare function dataAwsccFisExperimentTemplateTargetsFiltersToTerraform(struct?: DataAwsccFisExperimentTemplateTargetsFilters): any;
export declare class DataAwsccFisExperimentTemplateTargets extends cdktf.ComplexComputedList {
    get filters(): any;
    get resourceArns(): string[];
    get resourceTags(): any;
    get resourceType(): string;
    get selectionMode(): string;
}
export declare function dataAwsccFisExperimentTemplateTargetsToTerraform(struct?: DataAwsccFisExperimentTemplateTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html awscc_fis_experiment_template}
*/
export declare class DataAwsccFisExperimentTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html awscc_fis_experiment_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFisExperimentTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFisExperimentTemplateConfig);
    get actions(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get roleArn(): string;
    get stopConditions(): any;
    tags(key: string): string;
    get targets(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
