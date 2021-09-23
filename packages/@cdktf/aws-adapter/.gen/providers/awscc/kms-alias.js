"use strict";
// https://www.terraform.io/docs/providers/awscc/r/kms_alias.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.KmsAlias = void 0;
const cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias}
*/
class KmsAlias extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsAliasConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_kms_alias',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._aliasName = config.aliasName;
        this._targetKeyId = config.targetKeyId;
    }
    get aliasName() {
        return this.getStringAttribute('alias_name');
    }
    set aliasName(value) {
        this._aliasName = value;
    }
    // Temporarily expose input value. Use with caution.
    get aliasNameInput() {
        return this._aliasName;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get targetKeyId() {
        return this.getStringAttribute('target_key_id');
    }
    set targetKeyId(value) {
        this._targetKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetKeyIdInput() {
        return this._targetKeyId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias_name: cdktf.stringToTerraform(this._aliasName),
            target_key_id: cdktf.stringToTerraform(this._targetKeyId),
        };
    }
}
exports.KmsAlias = KmsAlias;
// =================
// STATIC PROPERTIES
// =================
KmsAlias.tfResourceType = "awscc_kms_alias";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21zLWFsaWFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia21zLWFsaWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRUFBaUU7QUFDakUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBbUIvQjs7RUFFRTtBQUNGLE1BQWEsUUFBUyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPbkQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBc0I7UUFDckUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQkFBaUI7WUFDeEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQVFELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUQsQ0FBQztJQUNKLENBQUM7O0FBN0VILDRCQThFQztBQTVFQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVCQUFjLEdBQVcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9rbXNfYWxpYXMuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEttc0FsaWFzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFNwZWNpZmllcyB0aGUgYWxpYXMgbmFtZS4gVGhpcyB2YWx1ZSBtdXN0IGJlZ2luIHdpdGggYWxpYXMvIGZvbGxvd2VkIGJ5IGEgbmFtZSwgc3VjaCBhcyBhbGlhcy9FeGFtcGxlQWxpYXMuIFRoZSBhbGlhcyBuYW1lIGNhbm5vdCBiZWdpbiB3aXRoIGFsaWFzL2F3cy8uIFRoZSBhbGlhcy9hd3MvIHByZWZpeCBpcyByZXNlcnZlZCBmb3IgQVdTIG1hbmFnZWQgQ01Lcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ttc19hbGlhcy5odG1sI2FsaWFzX25hbWUgS21zQWxpYXMjYWxpYXNfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYWxpYXNOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIElkZW50aWZpZXMgdGhlIENNSyB0byB3aGljaCB0aGUgYWxpYXMgcmVmZXJzLiBTcGVjaWZ5IHRoZSBrZXkgSUQgb3IgdGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBDTUsuIFlvdSBjYW5ub3Qgc3BlY2lmeSBhbm90aGVyIGFsaWFzLiBGb3IgaGVscCBmaW5kaW5nIHRoZSBrZXkgSUQgYW5kIEFSTiwgc2VlIEZpbmRpbmcgdGhlIEtleSBJRCBhbmQgQVJOIGluIHRoZSBBV1MgS2V5IE1hbmFnZW1lbnQgU2VydmljZSBEZXZlbG9wZXIgR3VpZGUuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9rbXNfYWxpYXMuaHRtbCN0YXJnZXRfa2V5X2lkIEttc0FsaWFzI3RhcmdldF9rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldEtleUlkOiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2ttc19hbGlhcy5odG1sIGF3c2NjX2ttc19hbGlhc31cbiovXG5leHBvcnQgY2xhc3MgS21zQWxpYXMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19rbXNfYWxpYXNcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3Iva21zX2FsaWFzLmh0bWwgYXdzY2Nfa21zX2FsaWFzfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBLbXNBbGlhc0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBLbXNBbGlhc0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfa21zX2FsaWFzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWxpYXNOYW1lID0gY29uZmlnLmFsaWFzTmFtZTtcbiAgICB0aGlzLl90YXJnZXRLZXlJZCA9IGNvbmZpZy50YXJnZXRLZXlJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXNfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hbGlhc05hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBhbGlhc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGlhc19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGlhc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsaWFzTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXNOYW1lXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHRhcmdldF9rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0S2V5SWQ6IHN0cmluZztcbiAgcHVibGljIGdldCB0YXJnZXRLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldEtleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXRLZXlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRLZXlJZFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlhc19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbGlhc05hbWUpLFxuICAgICAgdGFyZ2V0X2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFyZ2V0S2V5SWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==