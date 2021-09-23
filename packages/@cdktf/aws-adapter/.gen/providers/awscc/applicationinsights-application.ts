// https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    jmxurl: cdktf.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktf.stringToTerraform(struct!.prometheusPort),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    alarms: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct!.alarms),
    jmx_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export interface ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    logs: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sub_component_configuration_details: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktf.stringToTerraform(struct!.subComponentType),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_details: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct!.subComponentTypeConfigurations),
  }
}

export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    jmxurl: cdktf.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktf.stringToTerraform(struct!.prometheusPort),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    alarms: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct!.alarms),
    jmx_prometheus_exporter: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export interface ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics {
  /**
  * The name of the metric to be monitored for the component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html#alarm_metric_name ApplicationinsightsApplication#alarm_metric_name}
  */
  readonly alarmMetricName: string;
}

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    logs: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sub_component_configuration_details: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktf.stringToTerraform(struct!.subComponentType),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_details: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct!.subComponentTypeConfigurations),
  }
}

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

export function applicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: ApplicationinsightsApplicationComponentMonitoringSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    component_configuration_mode: cdktf.stringToTerraform(struct!.componentConfigurationMode),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    custom_component_configuration: applicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct!.customComponentConfiguration),
    default_overwrite_component_configuration: applicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct!.defaultOverwriteComponentConfiguration),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

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

export function applicationinsightsApplicationCustomComponentsToTerraform(struct?: ApplicationinsightsApplicationCustomComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    resource_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceList),
  }
}

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

export function applicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSetsLogPatterns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_name: cdktf.stringToTerraform(struct!.patternName),
    rank: cdktf.numberToTerraform(struct!.rank),
  }
}

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

export function applicationinsightsApplicationLogPatternSetsToTerraform(struct?: ApplicationinsightsApplicationLogPatternSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_patterns: cdktf.listMapper(applicationinsightsApplicationLogPatternSetsLogPatternsToTerraform)(struct!.logPatterns),
    pattern_set_name: cdktf.stringToTerraform(struct!.patternSetName),
  }
}

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

export function applicationinsightsApplicationTagsToTerraform(struct?: ApplicationinsightsApplicationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html awscc_applicationinsights_application}
*/
export class ApplicationinsightsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_applicationinsights_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/applicationinsights_application.html awscc_applicationinsights_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationinsightsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_applicationinsights_application',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoConfigurationEnabled = config.autoConfigurationEnabled;
    this._componentMonitoringSettings = config.componentMonitoringSettings;
    this._customComponents = config.customComponents;
    this._cweMonitorEnabled = config.cweMonitorEnabled;
    this._logPatternSets = config.logPatternSets;
    this._opsCenterEnabled = config.opsCenterEnabled;
    this._opsItemSnsTopicArn = config.opsItemSnsTopicArn;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // auto_configuration_enabled - computed: false, optional: true, required: false
  private _autoConfigurationEnabled?: boolean | cdktf.IResolvable;
  public get autoConfigurationEnabled() {
    return this.getBooleanAttribute('auto_configuration_enabled');
  }
  public set autoConfigurationEnabled(value: boolean | cdktf.IResolvable ) {
    this._autoConfigurationEnabled = value;
  }
  public resetAutoConfigurationEnabled() {
    this._autoConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationEnabledInput() {
    return this._autoConfigurationEnabled
  }

  // component_monitoring_settings - computed: false, optional: true, required: false
  private _componentMonitoringSettings?: ApplicationinsightsApplicationComponentMonitoringSettings[];
  public get componentMonitoringSettings() {
    return this.interpolationForAttribute('component_monitoring_settings') as any;
  }
  public set componentMonitoringSettings(value: ApplicationinsightsApplicationComponentMonitoringSettings[] ) {
    this._componentMonitoringSettings = value;
  }
  public resetComponentMonitoringSettings() {
    this._componentMonitoringSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentMonitoringSettingsInput() {
    return this._componentMonitoringSettings
  }

  // custom_components - computed: false, optional: true, required: false
  private _customComponents?: ApplicationinsightsApplicationCustomComponents[];
  public get customComponents() {
    return this.interpolationForAttribute('custom_components') as any;
  }
  public set customComponents(value: ApplicationinsightsApplicationCustomComponents[] ) {
    this._customComponents = value;
  }
  public resetCustomComponents() {
    this._customComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customComponentsInput() {
    return this._customComponents
  }

  // cwe_monitor_enabled - computed: false, optional: true, required: false
  private _cweMonitorEnabled?: boolean | cdktf.IResolvable;
  public get cweMonitorEnabled() {
    return this.getBooleanAttribute('cwe_monitor_enabled');
  }
  public set cweMonitorEnabled(value: boolean | cdktf.IResolvable ) {
    this._cweMonitorEnabled = value;
  }
  public resetCweMonitorEnabled() {
    this._cweMonitorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cweMonitorEnabledInput() {
    return this._cweMonitorEnabled
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_pattern_sets - computed: false, optional: true, required: false
  private _logPatternSets?: ApplicationinsightsApplicationLogPatternSets[];
  public get logPatternSets() {
    return this.interpolationForAttribute('log_pattern_sets') as any;
  }
  public set logPatternSets(value: ApplicationinsightsApplicationLogPatternSets[] ) {
    this._logPatternSets = value;
  }
  public resetLogPatternSets() {
    this._logPatternSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPatternSetsInput() {
    return this._logPatternSets
  }

  // ops_center_enabled - computed: false, optional: true, required: false
  private _opsCenterEnabled?: boolean | cdktf.IResolvable;
  public get opsCenterEnabled() {
    return this.getBooleanAttribute('ops_center_enabled');
  }
  public set opsCenterEnabled(value: boolean | cdktf.IResolvable ) {
    this._opsCenterEnabled = value;
  }
  public resetOpsCenterEnabled() {
    this._opsCenterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsCenterEnabledInput() {
    return this._opsCenterEnabled
  }

  // ops_item_sns_topic_arn - computed: false, optional: true, required: false
  private _opsItemSnsTopicArn?: string;
  public get opsItemSnsTopicArn() {
    return this.getStringAttribute('ops_item_sns_topic_arn');
  }
  public set opsItemSnsTopicArn(value: string ) {
    this._opsItemSnsTopicArn = value;
  }
  public resetOpsItemSnsTopicArn() {
    this._opsItemSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsItemSnsTopicArnInput() {
    return this._opsItemSnsTopicArn
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ApplicationinsightsApplicationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApplicationinsightsApplicationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_configuration_enabled: cdktf.booleanToTerraform(this._autoConfigurationEnabled),
      component_monitoring_settings: cdktf.listMapper(applicationinsightsApplicationComponentMonitoringSettingsToTerraform)(this._componentMonitoringSettings),
      custom_components: cdktf.listMapper(applicationinsightsApplicationCustomComponentsToTerraform)(this._customComponents),
      cwe_monitor_enabled: cdktf.booleanToTerraform(this._cweMonitorEnabled),
      log_pattern_sets: cdktf.listMapper(applicationinsightsApplicationLogPatternSetsToTerraform)(this._logPatternSets),
      ops_center_enabled: cdktf.booleanToTerraform(this._opsCenterEnabled),
      ops_item_sns_topic_arn: cdktf.stringToTerraform(this._opsItemSnsTopicArn),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.listMapper(applicationinsightsApplicationTagsToTerraform)(this._tags),
    };
  }
}
