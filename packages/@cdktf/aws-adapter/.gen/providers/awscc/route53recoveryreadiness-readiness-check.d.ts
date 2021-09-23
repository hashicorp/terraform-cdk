import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of the ReadinessCheck to create.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
    */
    readonly readinessCheckName: string;
    /**
    * The name of the resource set to check.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
    */
    readonly resourceSetName?: string;
    /**
    * A collection of tags associated with a resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#tags Route53RecoveryreadinessReadinessCheck#tags}
    */
    readonly tags?: Route53RecoveryreadinessReadinessCheckTags[];
}
export interface Route53RecoveryreadinessReadinessCheckTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#key Route53RecoveryreadinessReadinessCheck#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html#value Route53RecoveryreadinessReadinessCheck#value}
    */
    readonly value: string[];
}
export declare function route53RecoveryreadinessReadinessCheckTagsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check}
*/
export declare class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_readiness_check.html awscc_route53recoveryreadiness_readiness_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessReadinessCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig);
    get id(): string;
    get readinessCheckArn(): string;
    private _readinessCheckName;
    get readinessCheckName(): string;
    set readinessCheckName(value: string);
    get readinessCheckNameInput(): string;
    private _resourceSetName?;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    resetResourceSetName(): void;
    get resourceSetNameInput(): string | undefined;
    private _tags?;
    get tags(): Route53RecoveryreadinessReadinessCheckTags[];
    set tags(value: Route53RecoveryreadinessReadinessCheckTags[]);
    resetTags(): void;
    get tagsInput(): Route53RecoveryreadinessReadinessCheckTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
