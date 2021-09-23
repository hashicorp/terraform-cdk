import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewiseProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the portal in which to create the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#portal_id IotsitewiseProject#portal_id}
    */
    readonly portalId: string;
    /**
    * A description for the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#project_description IotsitewiseProject#project_description}
    */
    readonly projectDescription?: string;
    /**
    * A friendly name for the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#project_name IotsitewiseProject#project_name}
    */
    readonly projectName: string;
    /**
    * A list of key-value pairs that contain metadata for the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#tags IotsitewiseProject#tags}
    */
    readonly tags?: IotsitewiseProjectTags[];
}
export interface IotsitewiseProjectTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#key IotsitewiseProject#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html#value IotsitewiseProject#value}
    */
    readonly value: string;
}
export declare function iotsitewiseProjectTagsToTerraform(struct?: IotsitewiseProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html awscc_iotsitewise_project}
*/
export declare class IotsitewiseProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_project.html awscc_iotsitewise_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseProjectConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseProjectConfig);
    get id(): string;
    private _portalId;
    get portalId(): string;
    set portalId(value: string);
    get portalIdInput(): string;
    get projectArn(): string;
    private _projectDescription?;
    get projectDescription(): string;
    set projectDescription(value: string);
    resetProjectDescription(): void;
    get projectDescriptionInput(): string | undefined;
    get projectId(): string;
    private _projectName;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    private _tags?;
    get tags(): IotsitewiseProjectTags[];
    set tags(value: IotsitewiseProjectTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewiseProjectTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
