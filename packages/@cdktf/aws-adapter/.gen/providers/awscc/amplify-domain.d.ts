import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#app_id AmplifyDomain#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}
    */
    readonly autoSubDomainCreationPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}
    */
    readonly autoSubDomainIamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#domain_name AmplifyDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}
    */
    readonly enableAutoSubDomain?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#sub_domain_settings AmplifyDomain#sub_domain_settings}
    */
    readonly subDomainSettings: AmplifyDomainSubDomainSettings[];
}
export interface AmplifyDomainSubDomainSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#branch_name AmplifyDomain#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html#prefix AmplifyDomain#prefix}
    */
    readonly prefix: string;
}
export declare function amplifyDomainSubDomainSettingsToTerraform(struct?: AmplifyDomainSubDomainSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain}
*/
export declare class AmplifyDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_domain.html awscc_amplify_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyDomainConfig);
    private _appId;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    private _autoSubDomainCreationPatterns?;
    get autoSubDomainCreationPatterns(): string[];
    set autoSubDomainCreationPatterns(value: string[]);
    resetAutoSubDomainCreationPatterns(): void;
    get autoSubDomainCreationPatternsInput(): string[] | undefined;
    private _autoSubDomainIamRole?;
    get autoSubDomainIamRole(): string;
    set autoSubDomainIamRole(value: string);
    resetAutoSubDomainIamRole(): void;
    get autoSubDomainIamRoleInput(): string | undefined;
    get certificateRecord(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get domainStatus(): string;
    private _enableAutoSubDomain?;
    get enableAutoSubDomain(): boolean | cdktf.IResolvable;
    set enableAutoSubDomain(value: boolean | cdktf.IResolvable);
    resetEnableAutoSubDomain(): void;
    get enableAutoSubDomainInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    get statusReason(): string;
    private _subDomainSettings;
    get subDomainSettings(): AmplifyDomainSubDomainSettings[];
    set subDomainSettings(value: AmplifyDomainSubDomainSettings[]);
    get subDomainSettingsInput(): AmplifyDomainSubDomainSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
