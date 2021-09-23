import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination Ec2NetworkInsightsPath#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination_ip Ec2NetworkInsightsPath#destination_ip}
    */
    readonly destinationIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#destination_port Ec2NetworkInsightsPath#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#protocol Ec2NetworkInsightsPath#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#source Ec2NetworkInsightsPath#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#source_ip Ec2NetworkInsightsPath#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#tags Ec2NetworkInsightsPath#tags}
    */
    readonly tags?: Ec2NetworkInsightsPathTags[];
}
export interface Ec2NetworkInsightsPathTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#key Ec2NetworkInsightsPath#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html#value Ec2NetworkInsightsPath#value}
    */
    readonly value?: string;
}
export declare function ec2NetworkInsightsPathTagsToTerraform(struct?: Ec2NetworkInsightsPathTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html awscc_ec2_network_insights_path}
*/
export declare class Ec2NetworkInsightsPath extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_path.html awscc_ec2_network_insights_path} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsPathConfig
    */
    constructor(scope: Construct, id: string, config: Ec2NetworkInsightsPathConfig);
    get createdDate(): string;
    private _destination;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
    private _destinationIp?;
    get destinationIp(): string;
    set destinationIp(value: string);
    resetDestinationIp(): void;
    get destinationIpInput(): string | undefined;
    private _destinationPort?;
    get destinationPort(): number;
    set destinationPort(value: number);
    resetDestinationPort(): void;
    get destinationPortInput(): number | undefined;
    get id(): string;
    get networkInsightsPathArn(): string;
    get networkInsightsPathId(): string;
    private _protocol;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _source;
    get source(): string;
    set source(value: string);
    get sourceInput(): string;
    private _sourceIp?;
    get sourceIp(): string;
    set sourceIp(value: string);
    resetSourceIp(): void;
    get sourceIpInput(): string | undefined;
    private _tags?;
    get tags(): Ec2NetworkInsightsPathTags[];
    set tags(value: Ec2NetworkInsightsPathTags[]);
    resetTags(): void;
    get tagsInput(): Ec2NetworkInsightsPathTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
