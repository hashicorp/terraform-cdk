import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The actions for the experiment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#actions FisExperimentTemplate#actions}
    */
    readonly actions?: {
        [key: string]: FisExperimentTemplateActions;
    } | cdktf.IResolvable;
    /**
    * A description for the experiment template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#description FisExperimentTemplate#description}
    */
    readonly description: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#role_arn FisExperimentTemplate#role_arn}
    */
    readonly roleArn: string;
    /**
    * One or more stop conditions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#stop_conditions FisExperimentTemplate#stop_conditions}
    */
    readonly stopConditions: FisExperimentTemplateStopConditions[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#tags FisExperimentTemplate#tags}
    */
    readonly tags: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The targets for the experiment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#targets FisExperimentTemplate#targets}
    */
    readonly targets: {
        [key: string]: FisExperimentTemplateTargets;
    } | cdktf.IResolvable;
}
export interface FisExperimentTemplateActions {
    /**
    * The ID of the action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#action_id FisExperimentTemplate#action_id}
    */
    readonly actionId?: string;
    /**
    * A description for the action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#description FisExperimentTemplate#description}
    */
    readonly description?: string;
    /**
    * The parameters for the action, if applicable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#parameters FisExperimentTemplate#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The names of the actions that must be completed before the current action starts.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#start_after FisExperimentTemplate#start_after}
    */
    readonly startAfter?: string[];
    /**
    * One or more targets for the action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#targets FisExperimentTemplate#targets}
    */
    readonly targets?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function fisExperimentTemplateActionsToTerraform(struct?: FisExperimentTemplateActions): any;
export interface FisExperimentTemplateStopConditions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#source FisExperimentTemplate#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#value FisExperimentTemplate#value}
    */
    readonly value?: string;
}
export declare function fisExperimentTemplateStopConditionsToTerraform(struct?: FisExperimentTemplateStopConditions): any;
export interface FisExperimentTemplateTargetsFilters {
    /**
    * The attribute path for the filter.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#path FisExperimentTemplate#path}
    */
    readonly path: string;
    /**
    * The attribute values for the filter.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#values FisExperimentTemplate#values}
    */
    readonly values: string[];
}
export declare function fisExperimentTemplateTargetsFiltersToTerraform(struct?: FisExperimentTemplateTargetsFilters): any;
export interface FisExperimentTemplateTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#filters FisExperimentTemplate#filters}
    */
    readonly filters?: FisExperimentTemplateTargetsFilters[];
    /**
    * The Amazon Resource Names (ARNs) of the target resources.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_arns FisExperimentTemplate#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_tags FisExperimentTemplate#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The AWS resource type. The resource type must be supported for the specified action.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_type FisExperimentTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#selection_mode FisExperimentTemplate#selection_mode}
    */
    readonly selectionMode?: string;
}
export declare function fisExperimentTemplateTargetsToTerraform(struct?: FisExperimentTemplateTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html awscc_fis_experiment_template}
*/
export declare class FisExperimentTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html awscc_fis_experiment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FisExperimentTemplateConfig
    */
    constructor(scope: Construct, id: string, config: FisExperimentTemplateConfig);
    private _actions?;
    get actions(): {
        [key: string]: FisExperimentTemplateActions;
    } | cdktf.IResolvable;
    set actions(value: {
        [key: string]: FisExperimentTemplateActions;
    } | cdktf.IResolvable);
    resetActions(): void;
    get actionsInput(): cdktf.IResolvable | {
        [key: string]: FisExperimentTemplateActions;
    } | undefined;
    private _description;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stopConditions;
    get stopConditions(): FisExperimentTemplateStopConditions[];
    set stopConditions(value: FisExperimentTemplateStopConditions[]);
    get stopConditionsInput(): FisExperimentTemplateStopConditions[];
    private _tags;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _targets;
    get targets(): {
        [key: string]: FisExperimentTemplateTargets;
    } | cdktf.IResolvable;
    set targets(value: {
        [key: string]: FisExperimentTemplateTargets;
    } | cdktf.IResolvable);
    get targetsInput(): cdktf.IResolvable | {
        [key: string]: FisExperimentTemplateTargets;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
