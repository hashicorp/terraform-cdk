// https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html#id DataAwsccApplicationinsightsApplication#id}
  */
  readonly id: string;
}
export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // jmxurl - computed: true, optional: false, required: false
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    jmxurl: cdktf.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktf.stringToTerraform(struct!.prometheusPort),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {

  // alarm_metrics - computed: true, optional: false, required: false
  public get alarmMetrics() {
    return this.interpolationForAttribute('alarm_metrics') as any;
  }

  // alarms - computed: true, optional: false, required: false
  public get alarms() {
    return this.interpolationForAttribute('alarms') as any;
  }

  // jmx_prometheus_exporter - computed: true, optional: false, required: false
  public get jmxPrometheusExporter() {
    return this.interpolationForAttribute('jmx_prometheus_exporter') as any;
  }

  // logs - computed: true, optional: false, required: false
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }

  // windows_events - computed: true, optional: false, required: false
  public get windowsEvents() {
    return this.interpolationForAttribute('windows_events') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    alarms: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct!.alarms),
    jmx_prometheus_exporter: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {

  // alarm_metrics - computed: true, optional: false, required: false
  public get alarmMetrics() {
    return this.interpolationForAttribute('alarm_metrics') as any;
  }

  // logs - computed: true, optional: false, required: false
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }

  // windows_events - computed: true, optional: false, required: false
  public get windowsEvents() {
    return this.interpolationForAttribute('windows_events') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {

  // sub_component_configuration_details - computed: true, optional: false, required: false
  public get subComponentConfigurationDetails() {
    return this.interpolationForAttribute('sub_component_configuration_details') as any;
  }

  // sub_component_type - computed: true, optional: false, required: false
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sub_component_configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktf.stringToTerraform(struct!.subComponentType),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration extends cdktf.ComplexComputedList {

  // configuration_details - computed: true, optional: false, required: false
  public get configurationDetails() {
    return this.interpolationForAttribute('configuration_details') as any;
  }

  // sub_component_type_configurations - computed: true, optional: false, required: false
  public get subComponentTypeConfigurations() {
    return this.interpolationForAttribute('sub_component_type_configurations') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct!.subComponentTypeConfigurations),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // jmxurl - computed: true, optional: false, required: false
  public get jmxurl() {
    return this.getStringAttribute('jmxurl');
  }

  // prometheus_port - computed: true, optional: false, required: false
  public get prometheusPort() {
    return this.getStringAttribute('prometheus_port');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    jmxurl: cdktf.stringToTerraform(struct!.jmxurl),
    prometheus_port: cdktf.stringToTerraform(struct!.prometheusPort),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {

  // alarm_metrics - computed: true, optional: false, required: false
  public get alarmMetrics() {
    return this.interpolationForAttribute('alarm_metrics') as any;
  }

  // alarms - computed: true, optional: false, required: false
  public get alarms() {
    return this.interpolationForAttribute('alarms') as any;
  }

  // jmx_prometheus_exporter - computed: true, optional: false, required: false
  public get jmxPrometheusExporter() {
    return this.interpolationForAttribute('jmx_prometheus_exporter') as any;
  }

  // logs - computed: true, optional: false, required: false
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }

  // windows_events - computed: true, optional: false, required: false
  public get windowsEvents() {
    return this.interpolationForAttribute('windows_events') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    alarms: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct!.alarms),
    jmx_prometheus_exporter: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct!.jmxPrometheusExporter),
    logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {

  // alarm_metric_name - computed: true, optional: false, required: false
  public get alarmMetricName() {
    return this.getStringAttribute('alarm_metric_name');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metric_name: cdktf.stringToTerraform(struct!.alarmMetricName),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_path - computed: true, optional: false, required: false
  public get logPath() {
    return this.getStringAttribute('log_path');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    log_type: cdktf.stringToTerraform(struct!.logType),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {

  // event_levels - computed: true, optional: false, required: false
  public get eventLevels() {
    return this.getListAttribute('event_levels');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // pattern_set - computed: true, optional: false, required: false
  public get patternSet() {
    return this.getStringAttribute('pattern_set');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventLevels),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    pattern_set: cdktf.stringToTerraform(struct!.patternSet),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {

  // alarm_metrics - computed: true, optional: false, required: false
  public get alarmMetrics() {
    return this.interpolationForAttribute('alarm_metrics') as any;
  }

  // logs - computed: true, optional: false, required: false
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }

  // windows_events - computed: true, optional: false, required: false
  public get windowsEvents() {
    return this.interpolationForAttribute('windows_events') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct!.alarmMetrics),
    logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct!.logs),
    windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct!.windowsEvents),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {

  // sub_component_configuration_details - computed: true, optional: false, required: false
  public get subComponentConfigurationDetails() {
    return this.interpolationForAttribute('sub_component_configuration_details') as any;
  }

  // sub_component_type - computed: true, optional: false, required: false
  public get subComponentType() {
    return this.getStringAttribute('sub_component_type');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sub_component_configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct!.subComponentConfigurationDetails),
    sub_component_type: cdktf.stringToTerraform(struct!.subComponentType),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration extends cdktf.ComplexComputedList {

  // configuration_details - computed: true, optional: false, required: false
  public get configurationDetails() {
    return this.interpolationForAttribute('configuration_details') as any;
  }

  // sub_component_type_configurations - computed: true, optional: false, required: false
  public get subComponentTypeConfigurations() {
    return this.interpolationForAttribute('sub_component_type_configurations') as any;
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct!.configurationDetails),
    sub_component_type_configurations: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct!.subComponentTypeConfigurations),
  }
}

export class DataAwsccApplicationinsightsApplicationComponentMonitoringSettings extends cdktf.ComplexComputedList {

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // component_configuration_mode - computed: true, optional: false, required: false
  public get componentConfigurationMode() {
    return this.getStringAttribute('component_configuration_mode');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // custom_component_configuration - computed: true, optional: false, required: false
  public get customComponentConfiguration() {
    return this.interpolationForAttribute('custom_component_configuration') as any;
  }

  // default_overwrite_component_configuration - computed: true, optional: false, required: false
  public get defaultOverwriteComponentConfiguration() {
    return this.interpolationForAttribute('default_overwrite_component_configuration') as any;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}

export function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct?: DataAwsccApplicationinsightsApplicationComponentMonitoringSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    component_configuration_mode: cdktf.stringToTerraform(struct!.componentConfigurationMode),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    custom_component_configuration: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct!.customComponentConfiguration),
    default_overwrite_component_configuration: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct!.defaultOverwriteComponentConfiguration),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export class DataAwsccApplicationinsightsApplicationCustomComponents extends cdktf.ComplexComputedList {

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // resource_list - computed: true, optional: false, required: false
  public get resourceList() {
    return this.getListAttribute('resource_list');
  }
}

export function dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform(struct?: DataAwsccApplicationinsightsApplicationCustomComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    resource_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceList),
  }
}

export class DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns extends cdktf.ComplexComputedList {

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // pattern_name - computed: true, optional: false, required: false
  public get patternName() {
    return this.getStringAttribute('pattern_name');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }
}

export function dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_name: cdktf.stringToTerraform(struct!.patternName),
    rank: cdktf.numberToTerraform(struct!.rank),
  }
}

export class DataAwsccApplicationinsightsApplicationLogPatternSets extends cdktf.ComplexComputedList {

  // log_patterns - computed: true, optional: false, required: false
  public get logPatterns() {
    return this.interpolationForAttribute('log_patterns') as any;
  }

  // pattern_set_name - computed: true, optional: false, required: false
  public get patternSetName() {
    return this.getStringAttribute('pattern_set_name');
  }
}

export function dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform(struct?: DataAwsccApplicationinsightsApplicationLogPatternSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_patterns: cdktf.listMapper(dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform)(struct!.logPatterns),
    pattern_set_name: cdktf.stringToTerraform(struct!.patternSetName),
  }
}

export class DataAwsccApplicationinsightsApplicationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApplicationinsightsApplicationTagsToTerraform(struct?: DataAwsccApplicationinsightsApplicationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html awscc_applicationinsights_application}
*/
export class DataAwsccApplicationinsightsApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_applicationinsights_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html awscc_applicationinsights_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApplicationinsightsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApplicationinsightsApplicationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // auto_configuration_enabled - computed: true, optional: false, required: false
  public get autoConfigurationEnabled() {
    return this.getBooleanAttribute('auto_configuration_enabled');
  }

  // component_monitoring_settings - computed: true, optional: false, required: false
  public get componentMonitoringSettings() {
    return this.interpolationForAttribute('component_monitoring_settings') as any;
  }

  // custom_components - computed: true, optional: false, required: false
  public get customComponents() {
    return this.interpolationForAttribute('custom_components') as any;
  }

  // cwe_monitor_enabled - computed: true, optional: false, required: false
  public get cweMonitorEnabled() {
    return this.getBooleanAttribute('cwe_monitor_enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // log_pattern_sets - computed: true, optional: false, required: false
  public get logPatternSets() {
    return this.interpolationForAttribute('log_pattern_sets') as any;
  }

  // ops_center_enabled - computed: true, optional: false, required: false
  public get opsCenterEnabled() {
    return this.getBooleanAttribute('ops_center_enabled');
  }

  // ops_item_sns_topic_arn - computed: true, optional: false, required: false
  public get opsItemSnsTopicArn() {
    return this.getStringAttribute('ops_item_sns_topic_arn');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
