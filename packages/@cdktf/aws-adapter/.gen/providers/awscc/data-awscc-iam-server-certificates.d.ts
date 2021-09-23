import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamServerCertificatesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_server_certificates.html awscc_iam_server_certificates}
*/
export declare class DataAwsccIamServerCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_server_certificates.html awscc_iam_server_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamServerCertificatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIamServerCertificatesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
