import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3OutpostsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#bucket S3OutpostsAccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * A name for the AccessPoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#name S3OutpostsAccessPoint#name}
    */
    readonly name: string;
    /**
    * The access point policy associated with this access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#policy S3OutpostsAccessPoint#policy}
    */
    readonly policy?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#vpc_configuration S3OutpostsAccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
}
export interface S3OutpostsAccessPointVpcConfiguration {
    /**
    * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html#vpc_id S3OutpostsAccessPoint#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function s3OutpostsAccessPointVpcConfigurationToTerraform(struct?: S3OutpostsAccessPointVpcConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html awscc_s3outposts_access_point}
*/
export declare class S3OutpostsAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_access_point.html awscc_s3outposts_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3OutpostsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3OutpostsAccessPointConfig);
    get arn(): string;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policy?;
    get policy(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policy(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetPolicy(): void;
    get policyInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): S3OutpostsAccessPointVpcConfiguration;
    set vpcConfiguration(value: S3OutpostsAccessPointVpcConfiguration);
    get vpcConfigurationInput(): S3OutpostsAccessPointVpcConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
