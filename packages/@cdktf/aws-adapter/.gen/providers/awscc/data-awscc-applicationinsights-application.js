"use strict";
// https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettings = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms = exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform = exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics = void 0;
exports.DataAwsccApplicationinsightsApplication = exports.dataAwsccApplicationinsightsApplicationTagsToTerraform = exports.DataAwsccApplicationinsightsApplicationTags = exports.dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform = exports.DataAwsccApplicationinsightsApplicationLogPatternSets = exports.dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform = exports.DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns = exports.dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform = exports.DataAwsccApplicationinsightsApplicationCustomComponents = void 0;
const cdktf = require("cdktf");
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    // alarm_metric_name - computed: true, optional: false, required: false
    get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetrics;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metric_name: cdktf.stringToTerraform(struct.alarmMetricName),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {
    // alarm_name - computed: true, optional: false, required: false
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    // severity - computed: true, optional: false, required: false
    get severity() {
        return this.getStringAttribute('severity');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarms;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        severity: cdktf.stringToTerraform(struct.severity),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {
    // host_port - computed: true, optional: false, required: false
    get hostPort() {
        return this.getStringAttribute('host_port');
    }
    // jmxurl - computed: true, optional: false, required: false
    get jmxurl() {
        return this.getStringAttribute('jmxurl');
    }
    // prometheus_port - computed: true, optional: false, required: false
    get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host_port: cdktf.stringToTerraform(struct.hostPort),
        jmxurl: cdktf.stringToTerraform(struct.jmxurl),
        prometheus_port: cdktf.stringToTerraform(struct.prometheusPort),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    // encoding - computed: true, optional: false, required: false
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_path - computed: true, optional: false, required: false
    get logPath() {
        return this.getStringAttribute('log_path');
    }
    // log_type - computed: true, optional: false, required: false
    get logType() {
        return this.getStringAttribute('log_type');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogs;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_path: cdktf.stringToTerraform(struct.logPath),
        log_type: cdktf.stringToTerraform(struct.logType),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    // event_levels - computed: true, optional: false, required: false
    get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    // event_name - computed: true, optional: false, required: false
    get eventName() {
        return this.getStringAttribute('event_name');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEvents;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct.eventLevels),
        event_name: cdktf.stringToTerraform(struct.eventName),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {
    // alarm_metrics - computed: true, optional: false, required: false
    get alarmMetrics() {
        return this.interpolationForAttribute('alarm_metrics');
    }
    // alarms - computed: true, optional: false, required: false
    get alarms() {
        return this.interpolationForAttribute('alarms');
    }
    // jmx_prometheus_exporter - computed: true, optional: false, required: false
    get jmxPrometheusExporter() {
        return this.interpolationForAttribute('jmx_prometheus_exporter');
    }
    // logs - computed: true, optional: false, required: false
    get logs() {
        return this.interpolationForAttribute('logs');
    }
    // windows_events - computed: true, optional: false, required: false
    get windowsEvents() {
        return this.interpolationForAttribute('windows_events');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetails;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct.alarmMetrics),
        alarms: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct.alarms),
        jmx_prometheus_exporter: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct.jmxPrometheusExporter),
        logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsLogsToTerraform)(struct.logs),
        windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct.windowsEvents),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    // alarm_metric_name - computed: true, optional: false, required: false
    get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metric_name: cdktf.stringToTerraform(struct.alarmMetricName),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    // encoding - computed: true, optional: false, required: false
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_path - computed: true, optional: false, required: false
    get logPath() {
        return this.getStringAttribute('log_path');
    }
    // log_type - computed: true, optional: false, required: false
    get logType() {
        return this.getStringAttribute('log_type');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_path: cdktf.stringToTerraform(struct.logPath),
        log_type: cdktf.stringToTerraform(struct.logType),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    // event_levels - computed: true, optional: false, required: false
    get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    // event_name - computed: true, optional: false, required: false
    get eventName() {
        return this.getStringAttribute('event_name');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct.eventLevels),
        event_name: cdktf.stringToTerraform(struct.eventName),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {
    // alarm_metrics - computed: true, optional: false, required: false
    get alarmMetrics() {
        return this.interpolationForAttribute('alarm_metrics');
    }
    // logs - computed: true, optional: false, required: false
    get logs() {
        return this.interpolationForAttribute('logs');
    }
    // windows_events - computed: true, optional: false, required: false
    get windowsEvents() {
        return this.interpolationForAttribute('windows_events');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct.alarmMetrics),
        logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct.logs),
        windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct.windowsEvents),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {
    // sub_component_configuration_details - computed: true, optional: false, required: false
    get subComponentConfigurationDetails() {
        return this.interpolationForAttribute('sub_component_configuration_details');
    }
    // sub_component_type - computed: true, optional: false, required: false
    get subComponentType() {
        return this.getStringAttribute('sub_component_type');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurations;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sub_component_configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct.subComponentConfigurationDetails),
        sub_component_type: cdktf.stringToTerraform(struct.subComponentType),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration extends cdktf.ComplexComputedList {
    // configuration_details - computed: true, optional: false, required: false
    get configurationDetails() {
        return this.interpolationForAttribute('configuration_details');
    }
    // sub_component_type_configurations - computed: true, optional: false, required: false
    get subComponentTypeConfigurations() {
        return this.interpolationForAttribute('sub_component_type_configurations');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfiguration;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsToTerraform(struct.configurationDetails),
        sub_component_type_configurations: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct.subComponentTypeConfigurations),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    // alarm_metric_name - computed: true, optional: false, required: false
    get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetrics;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metric_name: cdktf.stringToTerraform(struct.alarmMetricName),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms extends cdktf.ComplexComputedList {
    // alarm_name - computed: true, optional: false, required: false
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    // severity - computed: true, optional: false, required: false
    get severity() {
        return this.getStringAttribute('severity');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarms;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        severity: cdktf.stringToTerraform(struct.severity),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter extends cdktf.ComplexComputedList {
    // host_port - computed: true, optional: false, required: false
    get hostPort() {
        return this.getStringAttribute('host_port');
    }
    // jmxurl - computed: true, optional: false, required: false
    get jmxurl() {
        return this.getStringAttribute('jmxurl');
    }
    // prometheus_port - computed: true, optional: false, required: false
    get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporter;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host_port: cdktf.stringToTerraform(struct.hostPort),
        jmxurl: cdktf.stringToTerraform(struct.jmxurl),
        prometheus_port: cdktf.stringToTerraform(struct.prometheusPort),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    // encoding - computed: true, optional: false, required: false
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_path - computed: true, optional: false, required: false
    get logPath() {
        return this.getStringAttribute('log_path');
    }
    // log_type - computed: true, optional: false, required: false
    get logType() {
        return this.getStringAttribute('log_type');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogs;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_path: cdktf.stringToTerraform(struct.logPath),
        log_type: cdktf.stringToTerraform(struct.logType),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    // event_levels - computed: true, optional: false, required: false
    get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    // event_name - computed: true, optional: false, required: false
    get eventName() {
        return this.getStringAttribute('event_name');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEvents;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct.eventLevels),
        event_name: cdktf.stringToTerraform(struct.eventName),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails extends cdktf.ComplexComputedList {
    // alarm_metrics - computed: true, optional: false, required: false
    get alarmMetrics() {
        return this.interpolationForAttribute('alarm_metrics');
    }
    // alarms - computed: true, optional: false, required: false
    get alarms() {
        return this.interpolationForAttribute('alarms');
    }
    // jmx_prometheus_exporter - computed: true, optional: false, required: false
    get jmxPrometheusExporter() {
        return this.interpolationForAttribute('jmx_prometheus_exporter');
    }
    // logs - computed: true, optional: false, required: false
    get logs() {
        return this.interpolationForAttribute('logs');
    }
    // windows_events - computed: true, optional: false, required: false
    get windowsEvents() {
        return this.interpolationForAttribute('windows_events');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetails;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsToTerraform)(struct.alarmMetrics),
        alarms: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmsToTerraform)(struct.alarms),
        jmx_prometheus_exporter: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterToTerraform(struct.jmxPrometheusExporter),
        logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsToTerraform)(struct.logs),
        windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsToTerraform)(struct.windowsEvents),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics extends cdktf.ComplexComputedList {
    // alarm_metric_name - computed: true, optional: false, required: false
    get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetrics;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metric_name: cdktf.stringToTerraform(struct.alarmMetricName),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs extends cdktf.ComplexComputedList {
    // encoding - computed: true, optional: false, required: false
    get encoding() {
        return this.getStringAttribute('encoding');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_path - computed: true, optional: false, required: false
    get logPath() {
        return this.getStringAttribute('log_path');
    }
    // log_type - computed: true, optional: false, required: false
    get logType() {
        return this.getStringAttribute('log_type');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogs;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_path: cdktf.stringToTerraform(struct.logPath),
        log_type: cdktf.stringToTerraform(struct.logType),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents extends cdktf.ComplexComputedList {
    // event_levels - computed: true, optional: false, required: false
    get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    // event_name - computed: true, optional: false, required: false
    get eventName() {
        return this.getStringAttribute('event_name');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // pattern_set - computed: true, optional: false, required: false
    get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEvents;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct.eventLevels),
        event_name: cdktf.stringToTerraform(struct.eventName),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        pattern_set: cdktf.stringToTerraform(struct.patternSet),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails extends cdktf.ComplexComputedList {
    // alarm_metrics - computed: true, optional: false, required: false
    get alarmMetrics() {
        return this.interpolationForAttribute('alarm_metrics');
    }
    // logs - computed: true, optional: false, required: false
    get logs() {
        return this.interpolationForAttribute('logs');
    }
    // windows_events - computed: true, optional: false, required: false
    get windowsEvents() {
        return this.interpolationForAttribute('windows_events');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetails;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_metrics: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsToTerraform)(struct.alarmMetrics),
        logs: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsToTerraform)(struct.logs),
        windows_events: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsToTerraform)(struct.windowsEvents),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations extends cdktf.ComplexComputedList {
    // sub_component_configuration_details - computed: true, optional: false, required: false
    get subComponentConfigurationDetails() {
        return this.interpolationForAttribute('sub_component_configuration_details');
    }
    // sub_component_type - computed: true, optional: false, required: false
    get subComponentType() {
        return this.getStringAttribute('sub_component_type');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurations;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sub_component_configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsToTerraform(struct.subComponentConfigurationDetails),
        sub_component_type: cdktf.stringToTerraform(struct.subComponentType),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration extends cdktf.ComplexComputedList {
    // configuration_details - computed: true, optional: false, required: false
    get configurationDetails() {
        return this.interpolationForAttribute('configuration_details');
    }
    // sub_component_type_configurations - computed: true, optional: false, required: false
    get subComponentTypeConfigurations() {
        return this.interpolationForAttribute('sub_component_type_configurations');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration = DataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfiguration;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_details: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsToTerraform(struct.configurationDetails),
        sub_component_type_configurations: cdktf.listMapper(dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsToTerraform)(struct.subComponentTypeConfigurations),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform;
class DataAwsccApplicationinsightsApplicationComponentMonitoringSettings extends cdktf.ComplexComputedList {
    // component_arn - computed: true, optional: false, required: false
    get componentArn() {
        return this.getStringAttribute('component_arn');
    }
    // component_configuration_mode - computed: true, optional: false, required: false
    get componentConfigurationMode() {
        return this.getStringAttribute('component_configuration_mode');
    }
    // component_name - computed: true, optional: false, required: false
    get componentName() {
        return this.getStringAttribute('component_name');
    }
    // custom_component_configuration - computed: true, optional: false, required: false
    get customComponentConfiguration() {
        return this.interpolationForAttribute('custom_component_configuration');
    }
    // default_overwrite_component_configuration - computed: true, optional: false, required: false
    get defaultOverwriteComponentConfiguration() {
        return this.interpolationForAttribute('default_overwrite_component_configuration');
    }
    // tier - computed: true, optional: false, required: false
    get tier() {
        return this.getStringAttribute('tier');
    }
}
exports.DataAwsccApplicationinsightsApplicationComponentMonitoringSettings = DataAwsccApplicationinsightsApplicationComponentMonitoringSettings;
function dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_arn: cdktf.stringToTerraform(struct.componentArn),
        component_configuration_mode: cdktf.stringToTerraform(struct.componentConfigurationMode),
        component_name: cdktf.stringToTerraform(struct.componentName),
        custom_component_configuration: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsCustomComponentConfigurationToTerraform(struct.customComponentConfiguration),
        default_overwrite_component_configuration: dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationToTerraform(struct.defaultOverwriteComponentConfiguration),
        tier: cdktf.stringToTerraform(struct.tier),
    };
}
exports.dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform = dataAwsccApplicationinsightsApplicationComponentMonitoringSettingsToTerraform;
class DataAwsccApplicationinsightsApplicationCustomComponents extends cdktf.ComplexComputedList {
    // component_name - computed: true, optional: false, required: false
    get componentName() {
        return this.getStringAttribute('component_name');
    }
    // resource_list - computed: true, optional: false, required: false
    get resourceList() {
        return this.getListAttribute('resource_list');
    }
}
exports.DataAwsccApplicationinsightsApplicationCustomComponents = DataAwsccApplicationinsightsApplicationCustomComponents;
function dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_name: cdktf.stringToTerraform(struct.componentName),
        resource_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.resourceList),
    };
}
exports.dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform = dataAwsccApplicationinsightsApplicationCustomComponentsToTerraform;
class DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns extends cdktf.ComplexComputedList {
    // pattern - computed: true, optional: false, required: false
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    // pattern_name - computed: true, optional: false, required: false
    get patternName() {
        return this.getStringAttribute('pattern_name');
    }
    // rank - computed: true, optional: false, required: false
    get rank() {
        return this.getNumberAttribute('rank');
    }
}
exports.DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns = DataAwsccApplicationinsightsApplicationLogPatternSetsLogPatterns;
function dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        pattern: cdktf.stringToTerraform(struct.pattern),
        pattern_name: cdktf.stringToTerraform(struct.patternName),
        rank: cdktf.numberToTerraform(struct.rank),
    };
}
exports.dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform = dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform;
class DataAwsccApplicationinsightsApplicationLogPatternSets extends cdktf.ComplexComputedList {
    // log_patterns - computed: true, optional: false, required: false
    get logPatterns() {
        return this.interpolationForAttribute('log_patterns');
    }
    // pattern_set_name - computed: true, optional: false, required: false
    get patternSetName() {
        return this.getStringAttribute('pattern_set_name');
    }
}
exports.DataAwsccApplicationinsightsApplicationLogPatternSets = DataAwsccApplicationinsightsApplicationLogPatternSets;
function dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_patterns: cdktf.listMapper(dataAwsccApplicationinsightsApplicationLogPatternSetsLogPatternsToTerraform)(struct.logPatterns),
        pattern_set_name: cdktf.stringToTerraform(struct.patternSetName),
    };
}
exports.dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform = dataAwsccApplicationinsightsApplicationLogPatternSetsToTerraform;
class DataAwsccApplicationinsightsApplicationTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccApplicationinsightsApplicationTags = DataAwsccApplicationinsightsApplicationTags;
function dataAwsccApplicationinsightsApplicationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccApplicationinsightsApplicationTagsToTerraform = dataAwsccApplicationinsightsApplicationTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/applicationinsights_application.html awscc_applicationinsights_application}
*/
class DataAwsccApplicationinsightsApplication extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    // auto_configuration_enabled - computed: true, optional: false, required: false
    get autoConfigurationEnabled() {
        return this.getBooleanAttribute('auto_configuration_enabled');
    }
    // component_monitoring_settings - computed: true, optional: false, required: false
    get componentMonitoringSettings() {
        return this.interpolationForAttribute('component_monitoring_settings');
    }
    // custom_components - computed: true, optional: false, required: false
    get customComponents() {
        return this.interpolationForAttribute('custom_components');
    }
    // cwe_monitor_enabled - computed: true, optional: false, required: false
    get cweMonitorEnabled() {
        return this.getBooleanAttribute('cwe_monitor_enabled');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // log_pattern_sets - computed: true, optional: false, required: false
    get logPatternSets() {
        return this.interpolationForAttribute('log_pattern_sets');
    }
    // ops_center_enabled - computed: true, optional: false, required: false
    get opsCenterEnabled() {
        return this.getBooleanAttribute('ops_center_enabled');
    }
    // ops_item_sns_topic_arn - computed: true, optional: false, required: false
    get opsItemSnsTopicArn() {
        return this.getStringAttribute('ops_item_sns_topic_arn');
    }
    // resource_group_name - computed: true, optional: false, required: false
    get resourceGroupName() {
        return this.getStringAttribute('resource_group_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccApplicationinsightsApplication = DataAwsccApplicationinsightsApplication;
// =================
// STATIC PROPERTIES
// =================
DataAwsccApplicationinsightsApplication.tfResourceType = "awscc_applicationinsights_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hcHBsaWNhdGlvbmluc2lnaHRzLWFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1hcHBsaWNhdGlvbmluc2lnaHRzLWFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RkFBdUY7QUFDdkYsMkNBQTJDOzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLDhIQUErSCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0ssdUVBQXVFO0lBQ3ZFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQU5ELHdRQU1DO0FBRUQsU0FBZ0IseUlBQXlJLENBQUMsTUFBdUk7SUFDL1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNwRSxDQUFBO0FBQ0gsQ0FBQztBQUxELDhSQUtDO0FBRUQsTUFBYSx3SEFBeUgsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJLLGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBWEQsNFBBV0M7QUFFRCxTQUFnQixtSUFBbUksQ0FBQyxNQUFpSTtJQUNuUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFD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SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQTNHSCwwRkE0R0M7QUExR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxzREFBYyxHQUFXLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvbi5odG1sI2lkIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbiNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNBbGFybU1ldHJpY3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGFybV9tZXRyaWNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsYXJtTWV0cmljTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsYXJtX21ldHJpY19uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9tZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGFybU1ldHJpY05hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNBbGFybXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGFybV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWxhcm1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxhcm1fbmFtZScpO1xuICB9XG5cbiAgLy8gc2V2ZXJpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXZlcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NldmVyaXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsYXJtTmFtZSksXG4gICAgc2V2ZXJpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2V2ZXJpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNKbXhQcm9tZXRoZXVzRXhwb3J0ZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBob3N0X3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0UG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcG9ydCcpO1xuICB9XG5cbiAgLy8gam14dXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam14dXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam14dXJsJyk7XG4gIH1cblxuICAvLyBwcm9tZXRoZXVzX3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9tZXRoZXVzUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb21ldGhldXNfcG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNKbXhQcm9tZXRoZXVzRXhwb3J0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNKbXhQcm9tZXRoZXVzRXhwb3J0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaG9zdF9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQb3J0KSxcbiAgICBqbXh1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuam14dXJsKSxcbiAgICBwcm9tZXRoZXVzX3BvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvbWV0aGV1c1BvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNMb2dzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5jb2RpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNvZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY29kaW5nJyk7XG4gIH1cblxuICAvLyBsb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyBsb2dfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfcGF0aCcpO1xuICB9XG5cbiAgLy8gbG9nX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHBhdHRlcm5fc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0dGVyblNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdHRlcm5fc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY29kaW5nKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1BhdGgpLFxuICAgIGxvZ190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1R5cGUpLFxuICAgIHBhdHRlcm5fc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdHRlcm5TZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNXaW5kb3dzRXZlbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZXZlbnRfbGV2ZWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXZlbnRMZXZlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXZlbnRfbGV2ZWxzJyk7XG4gIH1cblxuICAvLyBldmVudF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXZlbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gcGF0dGVybl9zZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXR0ZXJuU2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0dGVybl9zZXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc1dpbmRvd3NFdmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRfbGV2ZWxzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV2ZW50TGV2ZWxzKSxcbiAgICBldmVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50TmFtZSksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBwYXR0ZXJuX3NldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuU2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbWV0cmljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsYXJtTWV0cmljcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbGFybV9tZXRyaWNzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYWxhcm1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWxhcm1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FsYXJtcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGpteF9wcm9tZXRoZXVzX2V4cG9ydGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam14UHJvbWV0aGV1c0V4cG9ydGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pteF9wcm9tZXRoZXVzX2V4cG9ydGVyJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHdpbmRvd3NfZXZlbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2luZG93c0V2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3aW5kb3dzX2V2ZW50cycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsYXJtX21ldHJpY3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxhcm1NZXRyaWNzKSxcbiAgICBhbGFybXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1zVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxhcm1zKSxcbiAgICBqbXhfcHJvbWV0aGV1c19leHBvcnRlcjogZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzSm14UHJvbWV0aGV1c0V4cG9ydGVyVG9UZXJyYWZvcm0oc3RydWN0IS5qbXhQcm9tZXRoZXVzRXhwb3J0ZXIpLFxuICAgIGxvZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzTG9nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxvZ3MpLFxuICAgIHdpbmRvd3NfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc1dpbmRvd3NFdmVudHNUb1RlcnJhZm9ybSkoc3RydWN0IS53aW5kb3dzRXZlbnRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbWV0cmljX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9tZXRyaWNfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNBbGFybU1ldHJpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNBbGFybU1ldHJpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxhcm1fbWV0cmljX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxhcm1NZXRyaWNOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuY29kaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNvZGluZycpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3BhdGgnKTtcbiAgfVxuXG4gIC8vIGxvZ190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ190eXBlJyk7XG4gIH1cblxuICAvLyBwYXR0ZXJuX3NldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdHRlcm5TZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXR0ZXJuX3NldCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNvZGluZyksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dQYXRoKSxcbiAgICBsb2dfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dUeXBlKSxcbiAgICBwYXR0ZXJuX3NldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuU2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X2xldmVscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TGV2ZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V2ZW50X2xldmVscycpO1xuICB9XG5cbiAgLy8gZXZlbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X25hbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhdHRlcm5fc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0dGVyblNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdHRlcm5fc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc1dpbmRvd3NFdmVudHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNXaW5kb3dzRXZlbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X2xldmVsczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ldmVudExldmVscyksXG4gICAgZXZlbnRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ldmVudE5hbWUpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgcGF0dGVybl9zZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0dGVyblNldCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlscyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsYXJtX21ldHJpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWxhcm1fbWV0cmljcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3aW5kb3dzX2V2ZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdpbmRvd3NFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2luZG93c19ldmVudHMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9tZXRyaWNzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsYXJtTWV0cmljcyksXG4gICAgbG9nczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNMb2dzVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9ncyksXG4gICAgd2luZG93c19ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50c1RvVGVycmFmb3JtKShzdHJ1Y3QhLndpbmRvd3NFdmVudHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc3ViX2NvbXBvbmVudF9jb25maWd1cmF0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJfY29tcG9uZW50X2NvbmZpZ3VyYXRpb25fZGV0YWlscycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Yl9jb21wb25lbnRfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1YkNvbXBvbmVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJfY29tcG9uZW50X3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3ViX2NvbXBvbmVudF9jb25maWd1cmF0aW9uX2RldGFpbHM6IGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdCEuc3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHMpLFxuICAgIHN1Yl9jb21wb25lbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJDb21wb25lbnRUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmZpZ3VyYXRpb25fZGV0YWlscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25EZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fZGV0YWlscycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Yl9jb21wb25lbnRfdHlwZV9jb25maWd1cmF0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJfY29tcG9uZW50X3R5cGVfY29uZmlndXJhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fZGV0YWlsczogZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzQ3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uRGV0YWlscyksXG4gICAgc3ViX2NvbXBvbmVudF90eXBlX2NvbmZpZ3VyYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0N1c3RvbUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbWV0cmljX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9tZXRyaWNfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9tZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGFybU1ldHJpY05hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsYXJtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsYXJtX25hbWUnKTtcbiAgfVxuXG4gIC8vIHNldmVyaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2V2ZXJpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXZlcml0eScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsYXJtTmFtZSksXG4gICAgc2V2ZXJpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2V2ZXJpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzSm14UHJvbWV0aGV1c0V4cG9ydGVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaG9zdF9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdFBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X3BvcnQnKTtcbiAgfVxuXG4gIC8vIGpteHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpteHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pteHVybCcpO1xuICB9XG5cbiAgLy8gcHJvbWV0aGV1c19wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvbWV0aGV1c1BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9tZXRoZXVzX3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0pteFByb21ldGhldXNFeHBvcnRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNKbXhQcm9tZXRoZXVzRXhwb3J0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaG9zdF9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQb3J0KSxcbiAgICBqbXh1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuam14dXJsKSxcbiAgICBwcm9tZXRoZXVzX3BvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvbWV0aGV1c1BvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuY29kaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNvZGluZycpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3BhdGgnKTtcbiAgfVxuXG4gIC8vIGxvZ190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ190eXBlJyk7XG4gIH1cblxuICAvLyBwYXR0ZXJuX3NldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdHRlcm5TZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXR0ZXJuX3NldCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY29kaW5nKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1BhdGgpLFxuICAgIGxvZ190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1R5cGUpLFxuICAgIHBhdHRlcm5fc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdHRlcm5TZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X2xldmVscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TGV2ZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V2ZW50X2xldmVscycpO1xuICB9XG5cbiAgLy8gZXZlbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X25hbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhdHRlcm5fc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0dGVyblNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdHRlcm5fc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNXaW5kb3dzRXZlbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc1dpbmRvd3NFdmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRfbGV2ZWxzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV2ZW50TGV2ZWxzKSxcbiAgICBldmVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50TmFtZSksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBwYXR0ZXJuX3NldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuU2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlscyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsYXJtX21ldHJpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWxhcm1fbWV0cmljcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFsYXJtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsYXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbGFybXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBqbXhfcHJvbWV0aGV1c19leHBvcnRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpteFByb21ldGhldXNFeHBvcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdqbXhfcHJvbWV0aGV1c19leHBvcnRlcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3aW5kb3dzX2V2ZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdpbmRvd3NFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2luZG93c19ldmVudHMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsYXJtX21ldHJpY3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsYXJtTWV0cmljcyksXG4gICAgYWxhcm1zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uQ29uZmlndXJhdGlvbkRldGFpbHNBbGFybXNUb1RlcnJhZm9ybSkoc3RydWN0IS5hbGFybXMpLFxuICAgIGpteF9wcm9tZXRoZXVzX2V4cG9ydGVyOiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzSm14UHJvbWV0aGV1c0V4cG9ydGVyVG9UZXJyYWZvcm0oc3RydWN0IS5qbXhQcm9tZXRoZXVzRXhwb3J0ZXIpLFxuICAgIGxvZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc0xvZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5sb2dzKSxcbiAgICB3aW5kb3dzX2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvbkNvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50c1RvVGVycmFmb3JtKShzdHJ1Y3QhLndpbmRvd3NFdmVudHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbWV0cmljX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9tZXRyaWNfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzQWxhcm1NZXRyaWNzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9tZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGFybU1ldHJpY05hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuY29kaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNvZGluZycpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3BhdGgnKTtcbiAgfVxuXG4gIC8vIGxvZ190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ190eXBlJyk7XG4gIH1cblxuICAvLyBwYXR0ZXJuX3NldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdHRlcm5TZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXR0ZXJuX3NldCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY29kaW5nKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1BhdGgpLFxuICAgIGxvZ190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1R5cGUpLFxuICAgIHBhdHRlcm5fc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdHRlcm5TZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzV2luZG93c0V2ZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X2xldmVscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TGV2ZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V2ZW50X2xldmVscycpO1xuICB9XG5cbiAgLy8gZXZlbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X25hbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhdHRlcm5fc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0dGVyblNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdHRlcm5fc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNXaW5kb3dzRXZlbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc1dpbmRvd3NFdmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRfbGV2ZWxzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV2ZW50TGV2ZWxzKSxcbiAgICBldmVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50TmFtZSksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBwYXR0ZXJuX3NldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuU2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlscyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsYXJtX21ldHJpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU1ldHJpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWxhcm1fbWV0cmljcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3aW5kb3dzX2V2ZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdpbmRvd3NFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2luZG93c19ldmVudHMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsYXJtX21ldHJpY3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc0FsYXJtTWV0cmljc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsYXJtTWV0cmljcyksXG4gICAgbG9nczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1N1YkNvbXBvbmVudENvbmZpZ3VyYXRpb25EZXRhaWxzTG9nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxvZ3MpLFxuICAgIHdpbmRvd3NfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zU3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHNXaW5kb3dzRXZlbnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEud2luZG93c0V2ZW50cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uU3ViQ29tcG9uZW50VHlwZUNvbmZpZ3VyYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc3ViX2NvbXBvbmVudF9jb25maWd1cmF0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJfY29tcG9uZW50X2NvbmZpZ3VyYXRpb25fZGV0YWlscycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Yl9jb21wb25lbnRfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1YkNvbXBvbmVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJfY29tcG9uZW50X3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdWJfY29tcG9uZW50X2NvbmZpZ3VyYXRpb25fZGV0YWlsczogZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25TdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnNTdWJDb21wb25lbnRDb25maWd1cmF0aW9uRGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdCEuc3ViQ29tcG9uZW50Q29uZmlndXJhdGlvbkRldGFpbHMpLFxuICAgIHN1Yl9jb21wb25lbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJDb21wb25lbnRUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25maWd1cmF0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25maWd1cmF0aW9uX2RldGFpbHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdWJfY29tcG9uZW50X3R5cGVfY29uZmlndXJhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJDb21wb25lbnRUeXBlQ29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3ViX2NvbXBvbmVudF90eXBlX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc0RlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fZGV0YWlsczogZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Db25maWd1cmF0aW9uRGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvbkRldGFpbHMpLFxuICAgIHN1Yl9jb21wb25lbnRfdHlwZV9jb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NEZWZhdWx0T3ZlcndyaXRlQ29tcG9uZW50Q29uZmlndXJhdGlvblN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1YkNvbXBvbmVudFR5cGVDb25maWd1cmF0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbXBvbmVudF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wb25lbnRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wb25lbnRfYXJuJyk7XG4gIH1cblxuICAvLyBjb21wb25lbnRfY29uZmlndXJhdGlvbl9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50Q29uZmlndXJhdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wb25lbnRfY29uZmlndXJhdGlvbl9tb2RlJyk7XG4gIH1cblxuICAvLyBjb21wb25lbnRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wb25lbnRfbmFtZScpO1xuICB9XG5cbiAgLy8gY3VzdG9tX2NvbXBvbmVudF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tQ29tcG9uZW50Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjdXN0b21fY29tcG9uZW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZWZhdWx0X292ZXJ3cml0ZV9jb21wb25lbnRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RlZmF1bHRfb3ZlcndyaXRlX2NvbXBvbmVudF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aWVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbXBvbmVudE1vbml0b3JpbmdTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudEFybiksXG4gICAgY29tcG9uZW50X2NvbmZpZ3VyYXRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnRDb25maWd1cmF0aW9uTW9kZSksXG4gICAgY29tcG9uZW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcG9uZW50TmFtZSksXG4gICAgY3VzdG9tX2NvbXBvbmVudF9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Db21wb25lbnRNb25pdG9yaW5nU2V0dGluZ3NDdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21Db21wb25lbnRDb25maWd1cmF0aW9uKSxcbiAgICBkZWZhdWx0X292ZXJ3cml0ZV9jb21wb25lbnRfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzRGVmYXVsdE92ZXJ3cml0ZUNvbXBvbmVudENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRPdmVyd3JpdGVDb21wb25lbnRDb25maWd1cmF0aW9uKSxcbiAgICB0aWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25DdXN0b21Db21wb25lbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcG9uZW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wb25lbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcG9uZW50X25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVzb3VyY2VfbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25DdXN0b21Db21wb25lbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ3VzdG9tQ29tcG9uZW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnROYW1lKSxcbiAgICByZXNvdXJjZV9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlTGlzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkxvZ1BhdHRlcm5TZXRzTG9nUGF0dGVybnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXR0ZXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdHRlcm4nKTtcbiAgfVxuXG4gIC8vIHBhdHRlcm5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdHRlcm5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0dGVybl9uYW1lJyk7XG4gIH1cblxuICAvLyByYW5rIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmFuaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JhbmsnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uTG9nUGF0dGVyblNldHNMb2dQYXR0ZXJuc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkxvZ1BhdHRlcm5TZXRzTG9nUGF0dGVybnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGF0dGVybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuKSxcbiAgICBwYXR0ZXJuX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0dGVybk5hbWUpLFxuICAgIHJhbms6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmFuayksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkxvZ1BhdHRlcm5TZXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbG9nX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nX3BhdHRlcm5zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGF0dGVybl9zZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdHRlcm5TZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0dGVybl9zZXRfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Mb2dQYXR0ZXJuU2V0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkxvZ1BhdHRlcm5TZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvZ19wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25Mb2dQYXR0ZXJuU2V0c0xvZ1BhdHRlcm5zVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9nUGF0dGVybnMpLFxuICAgIHBhdHRlcm5fc2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0dGVyblNldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBsaWNhdGlvbmluc2lnaHRzQXBwbGljYXRpb25UYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvblRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvbi5odG1sIGF3c2NjX2FwcGxpY2F0aW9uaW5zaWdodHNfYXBwbGljYXRpb259XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hcHBsaWNhdGlvbmluc2lnaHRzX2FwcGxpY2F0aW9uLmh0bWwgYXdzY2NfYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvbn0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjQXBwbGljYXRpb25pbnNpZ2h0c0FwcGxpY2F0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0FwcGxpY2F0aW9uaW5zaWdodHNBcHBsaWNhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYXBwbGljYXRpb25pbnNpZ2h0c19hcHBsaWNhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBsaWNhdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19jb25maWd1cmF0aW9uX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRvQ29uZmlndXJhdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19jb25maWd1cmF0aW9uX2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudF9tb25pdG9yaW5nX3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50TW9uaXRvcmluZ1NldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBvbmVudF9tb25pdG9yaW5nX3NldHRpbmdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY3VzdG9tX2NvbXBvbmVudHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21Db21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9jb21wb25lbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY3dlX21vbml0b3JfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN3ZU1vbml0b3JFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2N3ZV9tb25pdG9yX2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsb2dfcGF0dGVybl9zZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nUGF0dGVyblNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nX3BhdHRlcm5fc2V0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG9wc19jZW50ZXJfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9wc0NlbnRlckVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3BzX2NlbnRlcl9lbmFibGVkJyk7XG4gIH1cblxuICAvLyBvcHNfaXRlbV9zbnNfdG9waWNfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3BzSXRlbVNuc1RvcGljQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3BzX2l0ZW1fc25zX3RvcGljX2FybicpO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=