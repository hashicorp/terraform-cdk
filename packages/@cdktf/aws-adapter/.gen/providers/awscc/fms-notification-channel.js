"use strict";
// https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.FmsNotificationChannel = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel}
*/
class FmsNotificationChannel extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsNotificationChannelConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_fms_notification_channel',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._snsRoleName = config.snsRoleName;
        this._snsTopicArn = config.snsTopicArn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get snsRoleName() {
        return this.getStringAttribute('sns_role_name');
    }
    set snsRoleName(value) {
        this._snsRoleName = value;
    }
    // Temporarily expose input value. Use with caution.
    get snsRoleNameInput() {
        return this._snsRoleName;
    }
    get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    set snsTopicArn(value) {
        this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get snsTopicArnInput() {
        return this._snsTopicArn;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            sns_role_name: cdktf.stringToTerraform(this._snsRoleName),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        };
    }
}
exports.FmsNotificationChannel = FmsNotificationChannel;
// =================
// STATIC PROPERTIES
// =================
FmsNotificationChannel.tfResourceType = "awscc_fms_notification_channel";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm1zLW5vdGlmaWNhdGlvbi1jaGFubmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm1zLW5vdGlmaWNhdGlvbi1jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnRkFBZ0Y7QUFDaEYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBbUIvQjs7RUFFRTtBQUNGLE1BQWEsc0JBQXVCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9qRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFvQztRQUNuRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGdDQUFnQztZQUN2RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLE9BQU87YUFDdEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDekQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFELENBQUM7SUFDSixDQUFDOztBQTdFSCx3REE4RUM7QUE1RUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxxQ0FBYyxHQUFXLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZm1zX25vdGlmaWNhdGlvbl9jaGFubmVsLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBGbXNOb3RpZmljYXRpb25DaGFubmVsQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIEEgcmVzb3VyY2UgQVJOLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZm1zX25vdGlmaWNhdGlvbl9jaGFubmVsLmh0bWwjc25zX3JvbGVfbmFtZSBGbXNOb3RpZmljYXRpb25DaGFubmVsI3Nuc19yb2xlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNuc1JvbGVOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgcmVzb3VyY2UgQVJOLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZm1zX25vdGlmaWNhdGlvbl9jaGFubmVsLmh0bWwjc25zX3RvcGljX2FybiBGbXNOb3RpZmljYXRpb25DaGFubmVsI3Nuc190b3BpY19hcm59XG4gICovXG4gIHJlYWRvbmx5IHNuc1RvcGljQXJuOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Ztc19ub3RpZmljYXRpb25fY2hhbm5lbC5odG1sIGF3c2NjX2Ztc19ub3RpZmljYXRpb25fY2hhbm5lbH1cbiovXG5leHBvcnQgY2xhc3MgRm1zTm90aWZpY2F0aW9uQ2hhbm5lbCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2Ztc19ub3RpZmljYXRpb25fY2hhbm5lbFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9mbXNfbm90aWZpY2F0aW9uX2NoYW5uZWwuaHRtbCBhd3NjY19mbXNfbm90aWZpY2F0aW9uX2NoYW5uZWx9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEZtc05vdGlmaWNhdGlvbkNoYW5uZWxDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRm1zTm90aWZpY2F0aW9uQ2hhbm5lbENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZm1zX25vdGlmaWNhdGlvbl9jaGFubmVsJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fc25zUm9sZU5hbWUgPSBjb25maWcuc25zUm9sZU5hbWU7XG4gICAgdGhpcy5fc25zVG9waWNBcm4gPSBjb25maWcuc25zVG9waWNBcm47XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc25zX3JvbGVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zbnNSb2xlTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNuc1JvbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25zX3JvbGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc25zUm9sZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nuc1JvbGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuc1JvbGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nuc1JvbGVOYW1lXG4gIH1cblxuICAvLyBzbnNfdG9waWNfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Nuc1RvcGljQXJuOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc25zVG9waWNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbnNfdG9waWNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbnNUb3BpY0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25zVG9waWNBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25zVG9waWNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25zVG9waWNBcm5cbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgc25zX3JvbGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc25zUm9sZU5hbWUpLFxuICAgICAgc25zX3RvcGljX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc25zVG9waWNBcm4pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==