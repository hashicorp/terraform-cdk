"use strict";
// https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudformationModuleDefaultVersion = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version}
*/
class CloudformationModuleDefaultVersion extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationModuleDefaultVersionConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_module_default_version',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._moduleName = config.moduleName;
        this._versionId = config.versionId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get moduleName() {
        return this.getStringAttribute('module_name');
    }
    set moduleName(value) {
        this._moduleName = value;
    }
    resetModuleName() {
        this._moduleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get moduleNameInput() {
        return this._moduleName;
    }
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    set versionId(value) {
        this._versionId = value;
    }
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionIdInput() {
        return this._versionId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            module_name: cdktf.stringToTerraform(this._moduleName),
            version_id: cdktf.stringToTerraform(this._versionId),
        };
    }
}
exports.CloudformationModuleDefaultVersion = CloudformationModuleDefaultVersion;
// =================
// STATIC PROPERTIES
// =================
CloudformationModuleDefaultVersion.tfResourceType = "awscc_cloudformation_module_default_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmb3JtYXRpb24tbW9kdWxlLWRlZmF1bHQtdmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkZm9ybWF0aW9uLW1vZHVsZS1kZWZhdWx0LXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZGQUE2RjtBQUM3RiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFtQi9COztFQUVFO0FBQ0YsTUFBYSxrQ0FBbUMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzdFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQW1ELEVBQUU7UUFDcEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw2Q0FBNkM7WUFDcEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHdEQUF3RDtJQUN4RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDckQsQ0FBQztJQUNKLENBQUM7O0FBeEZILGdGQXlGQztBQXZGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGlEQUFjLEdBQVcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl9tb2R1bGVfZGVmYXVsdF92ZXJzaW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZvcm1hdGlvbk1vZHVsZURlZmF1bHRWZXJzaW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4aXN0aW5nIGluIHRoZSByZWdpc3RyeS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX21vZHVsZV9kZWZhdWx0X3ZlcnNpb24uaHRtbCNtb2R1bGVfbmFtZSBDbG91ZGZvcm1hdGlvbk1vZHVsZURlZmF1bHRWZXJzaW9uI21vZHVsZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBtb2R1bGVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBUaGUgSUQgb2YgYW4gZXhpc3RpbmcgdmVyc2lvbiBvZiB0aGUgbmFtZWQgbW9kdWxlIHRvIHNldCBhcyB0aGUgZGVmYXVsdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2Nsb3VkZm9ybWF0aW9uX21vZHVsZV9kZWZhdWx0X3ZlcnNpb24uaHRtbCN2ZXJzaW9uX2lkIENsb3VkZm9ybWF0aW9uTW9kdWxlRGVmYXVsdFZlcnNpb24jdmVyc2lvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdmVyc2lvbklkPzogc3RyaW5nO1xufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9jbG91ZGZvcm1hdGlvbl9tb2R1bGVfZGVmYXVsdF92ZXJzaW9uLmh0bWwgYXdzY2NfY2xvdWRmb3JtYXRpb25fbW9kdWxlX2RlZmF1bHRfdmVyc2lvbn1cbiovXG5leHBvcnQgY2xhc3MgQ2xvdWRmb3JtYXRpb25Nb2R1bGVEZWZhdWx0VmVyc2lvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2Nsb3VkZm9ybWF0aW9uX21vZHVsZV9kZWZhdWx0X3ZlcnNpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvY2xvdWRmb3JtYXRpb25fbW9kdWxlX2RlZmF1bHRfdmVyc2lvbi5odG1sIGF3c2NjX2Nsb3VkZm9ybWF0aW9uX21vZHVsZV9kZWZhdWx0X3ZlcnNpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENsb3VkZm9ybWF0aW9uTW9kdWxlRGVmYXVsdFZlcnNpb25Db25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZGZvcm1hdGlvbk1vZHVsZURlZmF1bHRWZXJzaW9uQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2Nsb3VkZm9ybWF0aW9uX21vZHVsZV9kZWZhdWx0X3ZlcnNpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9tb2R1bGVOYW1lID0gY29uZmlnLm1vZHVsZU5hbWU7XG4gICAgdGhpcy5fdmVyc2lvbklkID0gY29uZmlnLnZlcnNpb25JZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbW9kdWxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb2R1bGVOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG1vZHVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb2R1bGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kdWxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kdWxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vZHVsZU5hbWUoKSB7XG4gICAgdGhpcy5fbW9kdWxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9kdWxlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb2R1bGVOYW1lXG4gIH1cblxuICAvLyB2ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbklkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbklkKCkge1xuICAgIHRoaXMuX3ZlcnNpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25JZFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbW9kdWxlTmFtZSksXG4gICAgICB2ZXJzaW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92ZXJzaW9uSWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==