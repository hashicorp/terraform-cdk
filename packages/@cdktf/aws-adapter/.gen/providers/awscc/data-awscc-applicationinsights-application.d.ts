import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html#id DataAwsccApplicationinsightsApplication#id}
    */
    readonly id: string;
}
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    get alarmMetricName(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {
    get alarmName(): string;
    get severity(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {
    get hostPort(): string;
    get jmxurl(): string;
    get prometheusPort(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    get encoding(): string;
    get logGroupName(): string;
    get logPath(): string;
    get logType(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    get eventLevels(): string[];
    get eventName(): string;
    get logGroupName(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {
    get alarmMetrics(): any;
    get alarms(): any;
    get jmxPrometheusExporter(): any;
    get logs(): any;
    get windowsEvents(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    get alarmMetricName(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    get encoding(): string;
    get logGroupName(): string;
    get logPath(): string;
    get logType(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    get eventLevels(): string[];
    get eventName(): string;
    get logGroupName(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {
    get alarmMetrics(): any;
    get logs(): any;
    get windowsEvents(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {
    get subComponentConfigurationDetails(): any;
    get subComponentType(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration extends cdktf.ComplexComputedList {
    get configurationDetails(): any;
    get subComponentTypeConfigurations(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    get alarmMetricName(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {
    get alarmName(): string;
    get severity(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {
    get hostPort(): string;
    get jmxurl(): string;
    get prometheusPort(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    get encoding(): string;
    get logGroupName(): string;
    get logPath(): string;
    get logType(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    get eventLevels(): string[];
    get eventName(): string;
    get logGroupName(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {
    get alarmMetrics(): any;
    get alarms(): any;
    get jmxPrometheusExporter(): any;
    get logs(): any;
    get windowsEvents(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    get alarmMetricName(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    get encoding(): string;
    get logGroupName(): string;
    get logPath(): string;
    get logType(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    get eventLevels(): string[];
    get eventName(): string;
    get logGroupName(): string;
    get patternSet(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {
    get alarmMetrics(): any;
    get logs(): any;
    get windowsEvents(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {
    get subComponentConfigurationDetails(): any;
    get subComponentType(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration extends cdktf.ComplexComputedList {
    get configurationDetails(): any;
    get subComponentTypeConfigurations(): any;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any;
export declare class DataAwsccApplicationinsightsApplicationComponentMonitoringSettings extends cdktf.ComplexComputedList {
    get componentArn(): string;
    get componentConfigurationMode(): string;
    get componentName(): string;
    get customComponentConfiguration(): any;
    get defaultOverwriteComponentConfiguration(): any;
    get tier(): string;
}
export declare function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettings): any;
export declare class DataAwsccApplicationinsightsApplicationCustomComponents extends cdktf.ComplexComputedList {
    get componentName(): string;
    get resourceList(): string[];
}
export declare function dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform(struct?: DataAwsccApplicationinsightsApplicationCustomComponents): any;
export declare class DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns extends cdktf.ComplexComputedList {
    get pattern(): string;
    get patternName(): string;
    get rank(): number;
}
export declare function dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns): any;
export declare class DataAwsccApplicationinsightsApplicationLogPatternSets extends cdktf.ComplexComputedList {
    get logPatterns(): any;
    get patternSetName(): string;
}
export declare function dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSets): any;
export declare class DataAwsccApplicationinsightsApplicationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApplicationinsightsApplicationTagsToTerraform(struct?: DataAwsccApplicationinsightsApplicationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html awscc_applicationinsights_application}
*/
export declare class DataAwsccApplicationinsightsApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html awscc_applicationinsights_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApplicationinsightsApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApplicationinsightsApplicationConfig);
    get applicationArn(): string;
    get autoConfigurationEnabled(): cdktf.IResolvable;
    get componentMonitoringSettings(): any;
    get customComponents(): any;
    get cweMonitorEnabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get logPatternSets(): any;
    get opsCenterEnabled(): cdktf.IResolvable;
    get opsItemSnsTopicArn(): string;
    get resourceGroupName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
