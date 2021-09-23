// https://www.terraform.io/docs/providers/awscc/r/events_archive.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventsArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#description EventsArchive#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#event_pattern EventsArchive#event_pattern}
  */
  readonly eventPattern?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#retention_days EventsArchive#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#source_arn EventsArchive#source_arn}
  */
  readonly sourceArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html awscc_events_archive}
*/
export class EventsArchive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_events_archive";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html awscc_events_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: EventsArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_events_archive',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eventPattern = config.eventPattern;
    this._retentionDays = config.retentionDays;
    this._sourceArn = config.sourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_name - computed: true, optional: false, required: false
  public get archiveName() {
    return this.getStringAttribute('archive_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // event_pattern - computed: false, optional: true, required: false
  private _eventPattern?: { [key: string]: string } | cdktf.IResolvable;
  public get eventPattern() {
    return this.interpolationForAttribute('event_pattern') as any;
  }
  public set eventPattern(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number;
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number ) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn: string;
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_pattern: cdktf.hashMapper(cdktf.anyToTerraform)(this._eventPattern),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
    };
  }
}
