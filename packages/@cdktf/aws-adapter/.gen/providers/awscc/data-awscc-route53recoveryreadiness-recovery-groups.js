"use strict";
// https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_groups.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccRoute53RecoveryreadinessRecoveryGroups = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_groups.html awscc_route53recoveryreadiness_recovery_groups}
*/
class DataAwsccRoute53RecoveryreadinessRecoveryGroups extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoveryreadiness_recovery_groups.html awscc_route53recoveryreadiness_recovery_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoveryreadinessRecoveryGroupsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53recoveryreadiness_recovery_groups',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ids - computed: true, optional: false, required: false
    get ids() {
        return this.getListAttribute('ids');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {};
    }
}
exports.DataAwsccRoute53RecoveryreadinessRecoveryGroups = DataAwsccRoute53RecoveryreadinessRecoveryGroups;
// =================
// STATIC PROPERTIES
// =================
DataAwsccRoute53RecoveryreadinessRecoveryGroups.tfResourceType = "awscc_route53recoveryreadiness_recovery_groups";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1yb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3MtcmVjb3ZlcnktZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1yb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3MtcmVjb3ZlcnktZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnR0FBZ0c7QUFDaEcsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBTy9COztFQUVFO0FBQ0YsTUFBYSwrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBTzVGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQWdFLEVBQUU7UUFDakgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxnREFBZ0Q7WUFDdkUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix3REFBd0Q7SUFDeEQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU8sRUFDTixDQUFDO0lBQ0osQ0FBQzs7QUFwREgsMEdBcURDO0FBbkRDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csOERBQWMsR0FBVyxnREFBZ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3JvdXRlNTNyZWNvdmVyeXJlYWRpbmVzc19yZWNvdmVyeV9ncm91cHMuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY1JvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1JlY292ZXJ5R3JvdXBzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3JvdXRlNTNyZWNvdmVyeXJlYWRpbmVzc19yZWNvdmVyeV9ncm91cHMuaHRtbCBhd3NjY19yb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3NfcmVjb3ZlcnlfZ3JvdXBzfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZWNvdmVyeUdyb3VwcyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2Nfcm91dGU1M3JlY292ZXJ5cmVhZGluZXNzX3JlY292ZXJ5X2dyb3Vwc1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9yb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3NfcmVjb3ZlcnlfZ3JvdXBzLmh0bWwgYXdzY2Nfcm91dGU1M3JlY292ZXJ5cmVhZGluZXNzX3JlY292ZXJ5X2dyb3Vwc30gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVjb3ZlcnlHcm91cHNDb25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZWNvdmVyeUdyb3Vwc0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19yb3V0ZTUzcmVjb3ZlcnlyZWFkaW5lc3NfcmVjb3ZlcnlfZ3JvdXBzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lkcycpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgfTtcbiAgfVxufVxuIl19