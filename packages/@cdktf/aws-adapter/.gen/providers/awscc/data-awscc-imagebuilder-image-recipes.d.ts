import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderImageRecipesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipes.html awscc_imagebuilder_image_recipes}
*/
export declare class DataAwsccImagebuilderImageRecipes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipes.html awscc_imagebuilder_image_recipes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderImageRecipesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccImagebuilderImageRecipesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
