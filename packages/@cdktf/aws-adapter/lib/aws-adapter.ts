// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/aws-adapter.ts

import { Construct, Node } from "constructs";
import { Stack, CfnElement } from "aws-cdk-lib";
import { TerraformResource, Lazy, Aspects } from "cdktf";
import { CloudFormationResource, CloudFormationTemplate } from "./cfn";
import { findMapping, Mapping } from "./mapping";

import {
  DataAwsCallerIdentity,
  DataAwsRegion,
  DataAwsPartition,
} from "@cdktf/provider-aws";

export class AwsTerraformAdapter extends Stack {
  constructor(scope: Construct, id: string) {
    super(undefined, id);

    const host = new TerraformHost(scope, id, this);

    Aspects.of(scope).add({
      visit: (node) => {
        if (node === scope) {
          // TODO: invokeAWSAspects(this);
          host.convert();
        }
      },
    });
  }
}

class TerraformHost extends Construct {
  private awsPartition?: DataAwsPartition;
  private awsRegion?: DataAwsRegion;
  private awsCallerIdentity?: DataAwsCallerIdentity;

  private readonly mappingForLogicalId: {
    [logicalId: string]: {
      resourceType: string;
      mapping: Mapping<TerraformResource>;
    };
  } = {};

  constructor(
    scope: Construct,
    id: string,
    private readonly host: AwsTerraformAdapter
  ) {
    super(scope, id);
  }

  convert() {
    for (const r of this.host.node.findAll()) {
      if (r instanceof CfnElement) {
        const cfn = this.host.resolve(
          (r as any)._toCloudFormation()
        ) as CloudFormationTemplate;
        for (const [logical, value] of Object.entries(cfn.Resources)) {
          this.newTerraformResource(this, logical, value);
        }
      }
    }
  }

  private newTerraformResource(
    scope: Construct,
    logicalId: string,
    resource: CloudFormationResource
  ): TerraformResource {
    // TODO: add debug log console.log(JSON.stringify(resource, null, 2));
    const m = findMapping(resource.Type);
    if (!m) {
      throw new Error(`no mapping for ${resource.Type}`);
    }

    const props = this.processIntrinsics(resource.Properties ?? {});

    this.mappingForLogicalId[logicalId] = {
      resourceType: resource.Type,
      mapping: m,
    };

    const res = m.resource(scope, logicalId, props);

    const keys = Object.keys(props).filter((k) => props[k] !== undefined);
    if (keys.length > 0) {
      throw new Error(
        `cannot map some properties of ${resource.Type}: ${JSON.stringify(
          props,
          undefined,
          2
        )}`
      );
    }

    return res;
  }

  private processIntrinsics(obj: any): any {
    if (typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((x) => this.processIntrinsics(x));
    }

    const ref = obj.Ref;
    if (ref) {
      return this.resolveRef(ref);
    }

    const intrinsic = Object.keys(obj)[0];
    if (intrinsic?.startsWith("Fn::") && Object.keys(obj).length === 1) {
      return this.resolveIntrinsic(intrinsic, obj[intrinsic]);
    }

    const result: any = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = this.processIntrinsics(v);
    }

    return result;
  }

  private resolveAtt(logicalId: string, attribute: string) {
    const child = Node.of(this).tryFindChild(logicalId) as TerraformResource;
    if (!child) {
      throw new Error(
        `unable to resolve a "Ref" to a resource with the logical ID ${logicalId}`
      );
    }

    const mapping = this.mappingForLogicalId[logicalId];
    const att = mapping.mapping.attributes[attribute];
    if (!att) {
      throw new Error(
        `no "${attribute}" attribute mapping for resource of type ${mapping.resourceType}`
      );
    }

    return att(child);
  }

  private resolvePseudo(ref: string) {
    switch (ref) {
      case "AWS::Partition": {
        this.awsPartition =
          this.awsPartition ?? new DataAwsPartition(this, "aws-partition");
        return this.awsPartition.partition;
      }

      case "AWS::Region": {
        this.awsRegion =
          this.awsRegion ?? new DataAwsRegion(this, "aws-region");
        return this.awsRegion.name;
      }

      case "AWS::AccountId": {
        this.awsCallerIdentity =
          this.awsCallerIdentity ??
          new DataAwsCallerIdentity(this, "aws-caller-identity");
        return this.awsCallerIdentity.accountId;
      }

      default:
        throw new Error(`unable to resolve pseudo reference ${ref}`);
    }
  }

  private resolveRef(ref: string) {
    if (ref?.startsWith("AWS::")) {
      return this.resolvePseudo(ref);
    }

    return Lazy.stringValue({ produce: () => this.resolveAtt(ref, "Ref") });
  }

  private resolveIntrinsic(fn: string, params: any) {
    switch (fn) {
      case "Fn::GetAtt": {
        return Lazy.stringValue({
          produce: () => this.resolveAtt(params[0], params[1]),
        });
      }

      case "Fn::Join": {
        const [delim, strings] = params;
        return (strings as string[])
          .map((x) => this.processIntrinsics(x))
          .join(delim);
      }

      default:
        throw new Error(`unsupported intrinsic function ${fn}`);
    }
  }
}
