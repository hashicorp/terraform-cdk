import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of an IAM role that has write access to CloudWatch Logs in your account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html#cloudwatch_role_arn ApigatewayAccount#cloudwatch_role_arn}
    */
    readonly cloudwatchRoleArn?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html awscc_apigateway_account}
*/
export declare class ApigatewayAccount extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html awscc_apigateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApigatewayAccountConfig);
    private _cloudwatchRoleArn?;
    get cloudwatchRoleArn(): string;
    set cloudwatchRoleArn(value: string);
    resetCloudwatchRoleArn(): void;
    get cloudwatchRoleArnInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
