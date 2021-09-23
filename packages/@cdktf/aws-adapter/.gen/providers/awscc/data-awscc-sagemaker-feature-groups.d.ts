import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerFeatureGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_groups.html awscc_sagemaker_feature_groups}
*/
export declare class DataAwsccSagemakerFeatureGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_groups.html awscc_sagemaker_feature_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerFeatureGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccSagemakerFeatureGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
