"use strict";
// https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2GatewayRouteTableAssociation = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association}
*/
class Ec2GatewayRouteTableAssociation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2GatewayRouteTableAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_gateway_route_table_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._gatewayId = config.gatewayId;
        this._routeTableId = config.routeTableId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // association_id - computed: true, optional: false, required: false
    get associationId() {
        return this.getStringAttribute('association_id');
    }
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get routeTableId() {
        return this.getStringAttribute('route_table_id');
    }
    set routeTableId(value) {
        this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableIdInput() {
        return this._routeTableId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
        };
    }
}
exports.Ec2GatewayRouteTableAssociation = Ec2GatewayRouteTableAssociation;
// =================
// STATIC PROPERTIES
// =================
Ec2GatewayRouteTableAssociation.tfResourceType = "awscc_ec2_gateway_route_table_association";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLWdhdGV3YXktcm91dGUtdGFibGUtYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlYzItZ2F0ZXdheS1yb3V0ZS10YWJsZS1hc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkZBQTJGO0FBQzNGLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQW1CL0I7O0VBRUU7QUFDRixNQUFhLCtCQUFnQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPMUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNkM7UUFDNUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwyQ0FBMkM7WUFDbEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzVELENBQUM7SUFDSixDQUFDOztBQWxGSCwwRUFtRkM7QUFqRkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4Q0FBYyxHQUFXLDJDQUEyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX2dhdGV3YXlfcm91dGVfdGFibGVfYXNzb2NpYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMkdhdGV3YXlSb3V0ZVRhYmxlQXNzb2NpYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVGhlIElEIG9mIHRoZSBnYXRld2F5LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX2dhdGV3YXlfcm91dGVfdGFibGVfYXNzb2NpYXRpb24uaHRtbCNnYXRld2F5X2lkIEVjMkdhdGV3YXlSb3V0ZVRhYmxlQXNzb2NpYXRpb24jZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfZ2F0ZXdheV9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbi5odG1sI3JvdXRlX3RhYmxlX2lkIEVjMkdhdGV3YXlSb3V0ZVRhYmxlQXNzb2NpYXRpb24jcm91dGVfdGFibGVfaWR9XG4gICovXG4gIHJlYWRvbmx5IHJvdXRlVGFibGVJZDogc3RyaW5nO1xufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfZ2F0ZXdheV9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbi5odG1sIGF3c2NjX2VjMl9nYXRld2F5X3JvdXRlX3RhYmxlX2Fzc29jaWF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBFYzJHYXRld2F5Um91dGVUYWJsZUFzc29jaWF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfZWMyX2dhdGV3YXlfcm91dGVfdGFibGVfYXNzb2NpYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX2dhdGV3YXlfcm91dGVfdGFibGVfYXNzb2NpYXRpb24uaHRtbCBhd3NjY19lYzJfZ2F0ZXdheV9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRWMyR2F0ZXdheVJvdXRlVGFibGVBc3NvY2lhdGlvbkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFYzJHYXRld2F5Um91dGVUYWJsZUFzc29jaWF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19lYzJfZ2F0ZXdheV9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2dhdGV3YXlJZCA9IGNvbmZpZy5nYXRld2F5SWQ7XG4gICAgdGhpcy5fcm91dGVUYWJsZUlkID0gY29uZmlnLnJvdXRlVGFibGVJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXNzb2NpYXRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NvY2lhdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzb2NpYXRpb25faWQnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByb3V0ZV90YWJsZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb3V0ZVRhYmxlSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCByb3V0ZVRhYmxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb3V0ZV90YWJsZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm91dGVUYWJsZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb3V0ZVRhYmxlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm91dGVUYWJsZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlVGFibGVJZFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBnYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5SWQpLFxuICAgICAgcm91dGVfdGFibGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvdXRlVGFibGVJZCksXG4gICAgfTtcbiAgfVxufVxuIl19