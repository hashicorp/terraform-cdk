import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * If set to true, application will be configured with recommended monitoring configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#auto_configuration_enabled ApplicationinsightsApplication#auto_configuration_enabled}
    */
    readonly autoConfigurationEnabled?: boolean | cdktf.IResolvable;
    /**
    * The monitoring settings of the components.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#component_monitoring_settings ApplicationinsightsApplication#component_monitoring_settings}
    */
    readonly componentMonitoringSettings?: ApplicationinsightsApplicationComponentMonitoringSettings[];
    /**
    * The custom grouped components.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#custom_components ApplicationinsightsApplication#custom_components}
    */
    readonly customComponents?: ApplicationinsightsApplicationCustomComponents[];
    /**
    * Indicates whether Application Insights can listen to CloudWatch events for the application resources.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}
    */
    readonly cweMonitorEnabled?: boolean | cdktf.IResolvable;
    /**
    * The log pattern sets.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_pattern_sets ApplicationinsightsApplication#log_pattern_sets}
    */
    readonly logPatternSets?: ApplicationinsightsApplicationLogPatternSets[];
    /**
    * When set to true, creates opsItems for any problems detected on an application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}
    */
    readonly opsCenterEnabled?: boolean | cdktf.IResolvable;
    /**
    * The SNS topic provided to Application Insights that is associated to the created opsItem.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}
    */
    readonly opsItemSnsTopicArn?: string;
    /**
    * The name of the resource group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#resource_group_name ApplicationinsightsApplication#resource_group_name}
    */
    readonly resourceGroupName: string;
    /**
    * The tags of Application Insights application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#tags ApplicationinsightsApplication#tags}
    */
    readonly tags?: ApplicationinsightsApplicationTags[];
}
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
    */
    readonly alarmMetricName: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms {
    /**
    * The name of the CloudWatch alarm to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_name ApplicationinsightsApplication#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Indicates the degree of outage when the alarm goes off.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#severity ApplicationinsightsApplication#severity}
    */
    readonly severity?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
    /**
    * Java agent host port
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#host_port ApplicationinsightsApplication#host_port}
    */
    readonly hostPort?: string;
    /**
    * JMX service URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#jmxurl ApplicationinsightsApplication#jmxurl}
    */
    readonly jmxurl?: string;
    /**
    * Prometheus exporter port
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#prometheus_port ApplicationinsightsApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#encoding ApplicationinsightsApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_path ApplicationinsightsApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_type ApplicationinsightsApplication#log_type}
    */
    readonly logType: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents {
    /**
    * The levels of event to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_levels ApplicationinsightsApplication#event_levels}
    */
    readonly eventLevels: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_name ApplicationinsightsApplication#event_name}
    */
    readonly eventName: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics[];
    /**
    * A list of alarms to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarms ApplicationinsightsApplication#alarms}
    */
    readonly alarms?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms[];
    /**
    * The JMX Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#jmx_prometheus_exporter ApplicationinsightsApplication#jmx_prometheus_exporter}
    */
    readonly jmxPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#logs ApplicationinsightsApplication#logs}
    */
    readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs[];
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#windows_events ApplicationinsightsApplication#windows_events}
    */
    readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
    */
    readonly alarmMetricName: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#encoding ApplicationinsightsApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_path ApplicationinsightsApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_type ApplicationinsightsApplication#log_type}
    */
    readonly logType: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
    /**
    * The levels of event to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_levels ApplicationinsightsApplication#event_levels}
    */
    readonly eventLevels: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_name ApplicationinsightsApplication#event_name}
    */
    readonly eventName: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[];
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#logs ApplicationinsightsApplication#logs}
    */
    readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[];
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#windows_events ApplicationinsightsApplication#windows_events}
    */
    readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations {
    /**
    * The configuration settings of sub components.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_configuration_details ApplicationinsightsApplication#sub_component_configuration_details}
    */
    readonly subComponentConfigurationDetails: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
    /**
    * The sub component type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_type ApplicationinsightsApplication#sub_component_type}
    */
    readonly subComponentType: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration {
    /**
    * The configuration settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#configuration_details ApplicationinsightsApplication#configuration_details}
    */
    readonly configurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails;
    /**
    * Sub component configurations of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_type_configurations ApplicationinsightsApplication#sub_component_type_configurations}
    */
    readonly subComponentTypeConfigurations?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
    */
    readonly alarmMetricName: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms {
    /**
    * The name of the CloudWatch alarm to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_name ApplicationinsightsApplication#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Indicates the degree of outage when the alarm goes off.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#severity ApplicationinsightsApplication#severity}
    */
    readonly severity?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter {
    /**
    * Java agent host port
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#host_port ApplicationinsightsApplication#host_port}
    */
    readonly hostPort?: string;
    /**
    * JMX service URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#jmxurl ApplicationinsightsApplication#jmxurl}
    */
    readonly jmxurl?: string;
    /**
    * Prometheus exporter port
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#prometheus_port ApplicationinsightsApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#encoding ApplicationinsightsApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_path ApplicationinsightsApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_type ApplicationinsightsApplication#log_type}
    */
    readonly logType: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents {
    /**
    * The levels of event to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_levels ApplicationinsightsApplication#event_levels}
    */
    readonly eventLevels: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_name ApplicationinsightsApplication#event_name}
    */
    readonly eventName: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics[];
    /**
    * A list of alarms to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarms ApplicationinsightsApplication#alarms}
    */
    readonly alarms?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms[];
    /**
    * The JMX Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#jmx_prometheus_exporter ApplicationinsightsApplication#jmx_prometheus_exporter}
    */
    readonly jmxPrometheusExporter?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#logs ApplicationinsightsApplication#logs}
    */
    readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs[];
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#windows_events ApplicationinsightsApplication#windows_events}
    */
    readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
    */
    readonly alarmMetricName: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#encoding ApplicationinsightsApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_path ApplicationinsightsApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_type ApplicationinsightsApplication#log_type}
    */
    readonly logType: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents {
    /**
    * The levels of event to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_levels ApplicationinsightsApplication#event_levels}
    */
    readonly eventLevels: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#event_name ApplicationinsightsApplication#event_name}
    */
    readonly eventName: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_group_name ApplicationinsightsApplication#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set ApplicationinsightsApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metrics ApplicationinsightsApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics[];
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#logs ApplicationinsightsApplication#logs}
    */
    readonly logs?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs[];
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#windows_events ApplicationinsightsApplication#windows_events}
    */
    readonly windowsEvents?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations {
    /**
    * The configuration settings of sub components.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_configuration_details ApplicationinsightsApplication#sub_component_configuration_details}
    */
    readonly subComponentConfigurationDetails: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
    /**
    * The sub component type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_type ApplicationinsightsApplication#sub_component_type}
    */
    readonly subComponentType: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration {
    /**
    * The configuration settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#configuration_details ApplicationinsightsApplication#configuration_details}
    */
    readonly configurationDetails?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails;
    /**
    * Sub component configurations of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#sub_component_type_configurations ApplicationinsightsApplication#sub_component_type_configurations}
    */
    readonly subComponentTypeConfigurations?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations[];
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any;
export interface ApplicationinsightsApplicationComponentMonitoringSettings {
    /**
    * The ARN of the compnonent.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#component_arn ApplicationinsightsApplication#component_arn}
    */
    readonly componentArn?: string;
    /**
    * The component monitoring configuration mode.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#component_configuration_mode ApplicationinsightsApplication#component_configuration_mode}
    */
    readonly componentConfigurationMode: string;
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#component_name ApplicationinsightsApplication#component_name}
    */
    readonly componentName?: string;
    /**
    * The configuration settings of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#custom_component_configuration ApplicationinsightsApplication#custom_component_configuration}
    */
    readonly customComponentConfiguration?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration;
    /**
    * The configuration settings of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#default_overwrite_component_configuration ApplicationinsightsApplication#default_overwrite_component_configuration}
    */
    readonly defaultOverwriteComponentConfiguration?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration;
    /**
    * The tier of the application component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#tier ApplicationinsightsApplication#tier}
    */
    readonly tier: string;
}
export declare function applicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettings): any;
export interface ApplicationinsightsApplicationCustomComponents {
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#component_name ApplicationinsightsApplication#component_name}
    */
    readonly componentName: string;
    /**
    * The list of resource ARNs that belong to the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#resource_list ApplicationinsightsApplication#resource_list}
    */
    readonly resourceList: string[];
}
export declare function applicationinsightsApplicationCustomComponentsToTerraform(struct?: ApplicationinsightsApplicationCustomComponents): any;
export interface ApplicationinsightsApplicationLogPatternSetsLogPatterns {
    /**
    * The log pattern.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern ApplicationinsightsApplication#pattern}
    */
    readonly pattern: string;
    /**
    * The name of the log pattern.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_name ApplicationinsightsApplication#pattern_name}
    */
    readonly patternName: string;
    /**
    * Rank of the log pattern.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#rank ApplicationinsightsApplication#rank}
    */
    readonly rank: number;
}
export declare function applicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSetsLogPatterns): any;
export interface ApplicationinsightsApplicationLogPatternSets {
    /**
    * The log patterns of a set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#log_patterns ApplicationinsightsApplication#log_patterns}
    */
    readonly logPatterns: ApplicationinsightsApplicationLogPatternSetsLogPatterns[];
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#pattern_set_name ApplicationinsightsApplication#pattern_set_name}
    */
    readonly patternSetName: string;
}
export declare function applicationinsightsApplicationLogPatternSetsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSets): any;
export interface ApplicationinsightsApplicationTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#key ApplicationinsightsApplication#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#value ApplicationinsightsApplication#value}
    */
    readonly value: string;
}
export declare function applicationinsightsApplicationTagsToTerraform(struct?: ApplicationinsightsApplicationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html awscc_applicationinsights_application}
*/
export declare class ApplicationinsightsApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html awscc_applicationinsights_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApplicationinsightsApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig);
    get applicationArn(): string;
    private _autoConfigurationEnabled?;
    get autoConfigurationEnabled(): boolean | cdktf.IResolvable;
    set autoConfigurationEnabled(value: boolean | cdktf.IResolvable);
    resetAutoConfigurationEnabled(): void;
    get autoConfigurationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _componentMonitoringSettings?;
    get componentMonitoringSettings(): ApplicationinsightsApplicationComponentMonitoringSettings[];
    set componentMonitoringSettings(value: ApplicationinsightsApplicationComponentMonitoringSettings[]);
    resetComponentMonitoringSettings(): void;
    get componentMonitoringSettingsInput(): ApplicationinsightsApplicationComponentMonitoringSettings[] | undefined;
    private _customComponents?;
    get customComponents(): ApplicationinsightsApplicationCustomComponents[];
    set customComponents(value: ApplicationinsightsApplicationCustomComponents[]);
    resetCustomComponents(): void;
    get customComponentsInput(): ApplicationinsightsApplicationCustomComponents[] | undefined;
    private _cweMonitorEnabled?;
    get cweMonitorEnabled(): boolean | cdktf.IResolvable;
    set cweMonitorEnabled(value: boolean | cdktf.IResolvable);
    resetCweMonitorEnabled(): void;
    get cweMonitorEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _logPatternSets?;
    get logPatternSets(): ApplicationinsightsApplicationLogPatternSets[];
    set logPatternSets(value: ApplicationinsightsApplicationLogPatternSets[]);
    resetLogPatternSets(): void;
    get logPatternSetsInput(): ApplicationinsightsApplicationLogPatternSets[] | undefined;
    private _opsCenterEnabled?;
    get opsCenterEnabled(): boolean | cdktf.IResolvable;
    set opsCenterEnabled(value: boolean | cdktf.IResolvable);
    resetOpsCenterEnabled(): void;
    get opsCenterEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _opsItemSnsTopicArn?;
    get opsItemSnsTopicArn(): string;
    set opsItemSnsTopicArn(value: string);
    resetOpsItemSnsTopicArn(): void;
    get opsItemSnsTopicArnInput(): string | undefined;
    private _resourceGroupName;
    get resourceGroupName(): string;
    set resourceGroupName(value: string);
    get resourceGroupNameInput(): string;
    private _tags?;
    get tags(): ApplicationinsightsApplicationTags[];
    set tags(value: ApplicationinsightsApplicationTags[]);
    resetTags(): void;
    get tagsInput(): ApplicationinsightsApplicationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
