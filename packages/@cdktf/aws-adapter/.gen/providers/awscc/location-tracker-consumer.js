"use strict";
// https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationTrackerConsumer = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer}
*/
class LocationTrackerConsumer extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationTrackerConsumerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_location_tracker_consumer',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._consumerArn = config.consumerArn;
        this._trackerName = config.trackerName;
    }
    get consumerArn() {
        return this.getStringAttribute('consumer_arn');
    }
    set consumerArn(value) {
        this._consumerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get consumerArnInput() {
        return this._consumerArn;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get trackerName() {
        return this.getStringAttribute('tracker_name');
    }
    set trackerName(value) {
        this._trackerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get trackerNameInput() {
        return this._trackerName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            consumer_arn: cdktf.stringToTerraform(this._consumerArn),
            tracker_name: cdktf.stringToTerraform(this._trackerName),
        };
    }
}
exports.LocationTrackerConsumer = LocationTrackerConsumer;
// =================
// STATIC PROPERTIES
// =================
LocationTrackerConsumer.tfResourceType = "awscc_location_tracker_consumer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tdHJhY2tlci1jb25zdW1lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLXRyYWNrZXItY29uc3VtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlGQUFpRjtBQUNqRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFlL0I7O0VBRUU7QUFDRixNQUFhLHVCQUF3QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPbEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBcUM7UUFDcEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQ0FBaUM7WUFDeEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQVFELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6RCxDQUFDO0lBQ0osQ0FBQzs7QUE3RUgsMERBOEVDO0FBNUVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csc0NBQWMsR0FBVyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvY2F0aW9uX3RyYWNrZXJfY29uc3VtZXIuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uVHJhY2tlckNvbnN1bWVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9jYXRpb25fdHJhY2tlcl9jb25zdW1lci5odG1sI2NvbnN1bWVyX2FybiBMb2NhdGlvblRyYWNrZXJDb25zdW1lciNjb25zdW1lcl9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNvbnN1bWVyQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9jYXRpb25fdHJhY2tlcl9jb25zdW1lci5odG1sI3RyYWNrZXJfbmFtZSBMb2NhdGlvblRyYWNrZXJDb25zdW1lciN0cmFja2VyX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHRyYWNrZXJOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2xvY2F0aW9uX3RyYWNrZXJfY29uc3VtZXIuaHRtbCBhd3NjY19sb2NhdGlvbl90cmFja2VyX2NvbnN1bWVyfVxuKi9cbmV4cG9ydCBjbGFzcyBMb2NhdGlvblRyYWNrZXJDb25zdW1lciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2xvY2F0aW9uX3RyYWNrZXJfY29uc3VtZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbG9jYXRpb25fdHJhY2tlcl9jb25zdW1lci5odG1sIGF3c2NjX2xvY2F0aW9uX3RyYWNrZXJfY29uc3VtZXJ9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIExvY2F0aW9uVHJhY2tlckNvbnN1bWVyQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExvY2F0aW9uVHJhY2tlckNvbnN1bWVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19sb2NhdGlvbl90cmFja2VyX2NvbnN1bWVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29uc3VtZXJBcm4gPSBjb25maWcuY29uc3VtZXJBcm47XG4gICAgdGhpcy5fdHJhY2tlck5hbWUgPSBjb25maWcudHJhY2tlck5hbWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbnN1bWVyX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25zdW1lckFybjogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbnN1bWVyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uc3VtZXJfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25zdW1lckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uc3VtZXJBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uc3VtZXJBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uc3VtZXJBcm5cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gdHJhY2tlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RyYWNrZXJOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHJhY2tlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFja2VyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYWNrZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFja2VyTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFja2VyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFja2VyTmFtZVxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb25zdW1lcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnN1bWVyQXJuKSxcbiAgICAgIHRyYWNrZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHJhY2tlck5hbWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==