import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html#id DataAwsccRoute53RecoveryreadinessResourceSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any;
export declare class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource extends cdktf.ComplexComputedList {
    get domainName(): string;
    get recordSetId(): string;
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any;
export declare class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource extends cdktf.ComplexComputedList {
    get nlbResource(): any;
    get r53Resource(): any;
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any;
export declare class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource extends cdktf.ComplexComputedList {
    get domainName(): string;
    get hostedZoneArn(): string;
    get recordSetId(): string;
    get recordType(): string;
    get targetResource(): any;
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource): any;
export declare class DataAwsccRoute53RecoveryreadinessResourceSetResources extends cdktf.ComplexComputedList {
    get componentId(): string;
    get dnsTargetResource(): any;
    get readinessScopes(): string[];
    get resourceArn(): string;
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetResourcesToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResources): any;
export declare class DataAwsccRoute53RecoveryreadinessResourceSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string[];
}
export declare function dataAwsccRoute53RecoveryreadinessResourceSetTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set}
*/
export declare class DataAwsccRoute53RecoveryreadinessResourceSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessResourceSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessResourceSetConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resourceSetArn(): string;
    get resourceSetName(): string;
    get resourceSetType(): string;
    get resources(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
