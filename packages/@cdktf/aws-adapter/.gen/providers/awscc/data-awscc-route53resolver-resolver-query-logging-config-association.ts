// https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html#id DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association}
*/
export class DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_resolver_query_logging_config_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_resolver_query_logging_config_association.html awscc_route53resolver_resolver_query_logging_config_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationConfig) {
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
    this._id = config.id;
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

  // resolver_query_log_config_id - computed: true, optional: false, required: false
  public get resolverQueryLogConfigId() {
    return this.getStringAttribute('resolver_query_log_config_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
