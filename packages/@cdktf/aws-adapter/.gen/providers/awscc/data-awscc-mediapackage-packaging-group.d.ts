import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackagePackagingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html#id DataAwsccMediapackagePackagingGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediapackagePackagingGroupAuthorization extends cdktf.ComplexComputedList {
    get cdnIdentifierSecret(): string;
    get secretsRoleArn(): string;
}
export declare function dataAwsccMediapackagePackagingGroupAuthorizationToTerraform(struct?: DataAwsccMediapackagePackagingGroupAuthorization): any;
export declare class DataAwsccMediapackagePackagingGroupEgressAccessLogs extends cdktf.ComplexComputedList {
    get logGroupName(): string;
}
export declare function dataAwsccMediapackagePackagingGroupEgressAccessLogsToTerraform(struct?: DataAwsccMediapackagePackagingGroupEgressAccessLogs): any;
export declare class DataAwsccMediapackagePackagingGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccMediapackagePackagingGroupTagsToTerraform(struct?: DataAwsccMediapackagePackagingGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html awscc_mediapackage_packaging_group}
*/
export declare class DataAwsccMediapackagePackagingGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_packaging_group.html awscc_mediapackage_packaging_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackagePackagingGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingGroupConfig);
    get arn(): string;
    get authorization(): any;
    get domainName(): string;
    get egressAccessLogs(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
