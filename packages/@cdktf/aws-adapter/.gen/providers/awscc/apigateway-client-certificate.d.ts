import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * A description of the client certificate.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#description ApigatewayClientCertificate#description}
    */
    readonly description?: string;
    /**
    * An array of arbitrary tags (key-value pairs) to associate with the client certificate.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#tags ApigatewayClientCertificate#tags}
    */
    readonly tags?: ApigatewayClientCertificateTags[];
}
export interface ApigatewayClientCertificateTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#key ApigatewayClientCertificate#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html#value ApigatewayClientCertificate#value}
    */
    readonly value: string;
}
export declare function apigatewayClientCertificateTagsToTerraform(struct?: ApigatewayClientCertificateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html awscc_apigateway_client_certificate}
*/
export declare class ApigatewayClientCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_client_certificate.html awscc_apigateway_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayClientCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApigatewayClientCertificateConfig);
    get clientCertificateId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _tags?;
    get tags(): ApigatewayClientCertificateTags[];
    set tags(value: ApigatewayClientCertificateTags[]);
    resetTags(): void;
    get tagsInput(): ApigatewayClientCertificateTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
