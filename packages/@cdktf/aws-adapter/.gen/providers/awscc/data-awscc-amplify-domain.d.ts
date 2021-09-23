import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAmplifyDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html#id DataAwsccAmplifyDomain#id}
    */
    readonly id: string;
}
export declare class DataAwsccAmplifyDomainSubDomainSettings extends cdktf.ComplexComputedList {
    get branchName(): string;
    get prefix(): string;
}
export declare function dataAwsccAmplifyDomainSubDomainSettingsToTerraform(struct?: DataAwsccAmplifyDomainSubDomainSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html awscc_amplify_domain}
*/
export declare class DataAwsccAmplifyDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_domain.html awscc_amplify_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAmplifyDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAmplifyDomainConfig);
    get appId(): string;
    get arn(): string;
    get autoSubDomainCreationPatterns(): string[];
    get autoSubDomainIamRole(): string;
    get certificateRecord(): string;
    get domainName(): string;
    get domainStatus(): string;
    get enableAutoSubDomain(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get statusReason(): string;
    get subDomainSettings(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
