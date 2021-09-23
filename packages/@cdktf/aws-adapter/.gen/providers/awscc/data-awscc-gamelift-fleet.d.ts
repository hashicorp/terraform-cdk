import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html#id DataAwsccGameliftFleet#id}
    */
    readonly id: string;
}
export declare class DataAwsccGameliftFleetCertificateConfiguration extends cdktf.ComplexComputedList {
    get certificateType(): string;
}
export declare function dataAwsccGameliftFleetCertificateConfigurationToTerraform(struct?: DataAwsccGameliftFleetCertificateConfiguration): any;
export declare class DataAwsccGameliftFleetEc2InboundPermissions extends cdktf.ComplexComputedList {
    get fromPort(): number;
    get ipRange(): string;
    get protocol(): string;
    get toPort(): number;
}
export declare function dataAwsccGameliftFleetEc2InboundPermissionsToTerraform(struct?: DataAwsccGameliftFleetEc2InboundPermissions): any;
export declare class DataAwsccGameliftFleetLocationsLocationCapacity extends cdktf.ComplexComputedList {
    get desiredEc2Instances(): number;
    get maxSize(): number;
    get minSize(): number;
}
export declare function dataAwsccGameliftFleetLocationsLocationCapacityToTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacity): any;
export declare class DataAwsccGameliftFleetLocations extends cdktf.ComplexComputedList {
    get location(): string;
    get locationCapacity(): any;
}
export declare function dataAwsccGameliftFleetLocationsToTerraform(struct?: DataAwsccGameliftFleetLocations): any;
export declare class DataAwsccGameliftFleetResourceCreationLimitPolicy extends cdktf.ComplexComputedList {
    get newGameSessionsPerCreator(): number;
    get policyPeriodInMinutes(): number;
}
export declare function dataAwsccGameliftFleetResourceCreationLimitPolicyToTerraform(struct?: DataAwsccGameliftFleetResourceCreationLimitPolicy): any;
export declare class DataAwsccGameliftFleetRuntimeConfigurationServerProcesses extends cdktf.ComplexComputedList {
    get concurrentExecutions(): number;
    get launchPath(): string;
    get parameters(): string;
}
export declare function dataAwsccGameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfigurationServerProcesses): any;
export declare class DataAwsccGameliftFleetRuntimeConfiguration extends cdktf.ComplexComputedList {
    get gameSessionActivationTimeoutSeconds(): number;
    get maxConcurrentGameSessionActivations(): number;
    get serverProcesses(): any;
}
export declare function dataAwsccGameliftFleetRuntimeConfigurationToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html awscc_gamelift_fleet}
*/
export declare class DataAwsccGameliftFleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html awscc_gamelift_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGameliftFleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGameliftFleetConfig);
    get buildId(): string;
    get certificateConfiguration(): any;
    get description(): string;
    get desiredEc2Instances(): number;
    get ec2InboundPermissions(): any;
    get ec2InstanceType(): string;
    get fleetId(): string;
    get fleetType(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get instanceRoleArn(): string;
    get locations(): any;
    get logPaths(): string[];
    get maxSize(): number;
    get metricGroups(): string[];
    get minSize(): number;
    get name(): string;
    get newGameSessionProtectionPolicy(): string;
    get peerVpcAwsAccountId(): string;
    get peerVpcId(): string;
    get resourceCreationLimitPolicy(): any;
    get runtimeConfiguration(): any;
    get scriptId(): string;
    get serverLaunchParameters(): string;
    get serverLaunchPath(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
