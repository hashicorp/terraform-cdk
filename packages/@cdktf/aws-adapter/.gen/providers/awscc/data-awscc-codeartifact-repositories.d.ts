import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeartifactRepositoriesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_repositories.html awscc_codeartifact_repositories}
*/
export declare class DataAwsccCodeartifactRepositories extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeartifact_repositories.html awscc_codeartifact_repositories} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeartifactRepositoriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCodeartifactRepositoriesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
