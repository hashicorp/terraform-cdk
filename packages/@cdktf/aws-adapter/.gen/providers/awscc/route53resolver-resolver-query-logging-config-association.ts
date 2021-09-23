// https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverResolverQueryLoggingConfigAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ResolverQueryLogConfigId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html#resolver_query_log_config_id Route53ResolverResolverQueryLoggingConfigAssociation#resolver_query_log_config_id}
  */
  readonly resolverQueryLogConfigId?: string;
  /**
  * ResourceId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html#resource_id Route53ResolverResolverQueryLoggingConfigAssociation#resource_id}
  */
  readonly resourceId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association}
*/
export class Route53ResolverResolverQueryLoggingConfigAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_resolver_query_logging_config_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverResolverQueryLoggingConfigAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverResolverQueryLoggingConfigAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_query_logging_config_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resolver_query_log_config_id - computed: true, optional: true, required: false
  private _resolverQueryLogConfigId?: string;
  public get resolverQueryLogConfigId() {
    return this.getStringAttribute('resolver_query_log_config_id');
  }
  public set resolverQueryLogConfigId(value: string) {
    this._resolverQueryLogConfigId = value;
  }
  public resetResolverQueryLogConfigId() {
    this._resolverQueryLogConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryLogConfigIdInput() {
    return this._resolverQueryLogConfigId
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_query_log_config_id: cdktf.stringToTerraform(this._resolverQueryLogConfigId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }
}
