import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html#id DataAwsccRoute53RecoveryreadinessReadinessCheck#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoveryreadinessReadinessCheckTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string[];
}
export declare function dataAwsccRoute53RecoveryreadinessReadinessCheckTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessReadinessCheckTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check}
*/
export declare class DataAwsccRoute53RecoveryreadinessReadinessCheck extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessReadinessCheckConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessReadinessCheckConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get readinessCheckArn(): string;
    get readinessCheckName(): string;
    get resourceSetName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
