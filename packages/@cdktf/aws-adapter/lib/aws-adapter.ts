// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/aws-adapter.ts

import { Construct } from "constructs";
import { Stack, CfnElement, IResolvable } from "aws-cdk-lib";
import { TerraformResource, Lazy, Aspects, Fn } from "cdktf";
import { propertyAccess } from "cdktf/lib/tfExpression";
import { CloudFormationResource, CloudFormationTemplate } from "./cfn";
import { findMapping, Mapping } from "./mapping";

import {
  DataAwsCallerIdentity,
  DataAwsRegion,
  DataAwsPartition,
  DataAwsAvailabilityZones,
  AwsProvider,
} from "@cdktf/provider-aws";
import { Provider } from "aws-cdk-lib/lib/custom-resources";

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
  private awsAvailabilityZones: {
    [region: string]: DataAwsAvailabilityZones;
  } = {};
  private regionalAwsProviders: { [region: string]: AwsProvider } = {};

  // TODO: expose this via some method?
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

  private getRegionalAwsProvider(region: string): AwsProvider {
    if (!this.regionalAwsProviders[region]) {
      this.regionalAwsProviders[region] = new AwsProvider(
        this,
        `aws_${region}`,
        {
          region,
          alias: region,
        }
      );
    }
    return this.regionalAwsProviders[region];
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
    } else if (intrinsic?.startsWith("Fn:") && !intrinsic?.startsWith("Fn::")) {
      console.warn(
        'Found possible intrinsic function starting with "Fn:" instead of "Fn::". Typo?'
      );
    }

    const result: any = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = this.processIntrinsics(v);
    }

    return result;
  }

  private resolveAtt(logicalId: string, attribute: string) {
    const child = this.node.tryFindChild(logicalId) as TerraformResource;
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
    // FIXME: expose a way to add/override handling here for users facing problems
    switch (fn) {
      case "Fn::GetAtt": {
        return Lazy.stringValue({
          // FIXME: Lazy values (currently) cannot be marked as inner
          produce: () => this.resolveAtt(params[0], params[1]),
        });
      }

      case "Fn::Join": {
        const [delim, strings] = params;
        return Fn.join(
          this.processIntrinsics(delim),
          this.processIntrinsics(strings)
        );
      }

      case "Fn::Select": {
        const [index, list] = params;
        const i = this.processIntrinsics(index);
        const ll = this.processIntrinsics(list);
        return Fn.element(ll, i);
      }

      case "Fn::GetAZs": {
        // AWS::Region or undefined fall back to default region for the stack
        const [region]: [string | undefined | "AWS::Region"] = params;

        let provider: AwsProvider | undefined = undefined;
        if (typeof region === "string" && region !== "AWS::Region") {
          provider = this.getRegionalAwsProvider(region);
        }

        const zones = new DataAwsAvailabilityZones(this, "", {
          provider,
        });
        return Fn.sort(zones.names);
      }

      case "Fn::Base64": {
        const [input] = params;
        return Fn.base64encode(this.processIntrinsics(input));
      }

      case "Fn::Cidr": {
        // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
        // https://www.terraform.io/docs/language/functions/cidrsubnets.html
        const [ipBlock, count, cidrBits] = this.processIntrinsics(params);
        const prefix = ipBlock;
        // given count=4 bits=8 this will return [8, 8, 8, 8] to match the cidrsubnets interface
        const newBits = `[for x in ${Fn.range(0, count)}: ${cidrBits}]`; // FIXME: make this an IResolvable and make sure this works
        return Fn.cidrsubnets(prefix, newBits as any);
      }

      case "Fn::FindInMap": {
        const [rawMap, ...rawParams] = params;
        const map = this.processIntrinsics(rawMap);
        const processedParams = this.processIntrinsics(rawParams);
        return propertyAccess(map, processedParams);
      }

      case "Fn::Split": {
        const [separator, string] = params;
        return Fn.split(
          this.processIntrinsics(separator),
          this.processIntrinsics(string)
        );
      }

      case "Fn::Sub": {
        const [string, replacementMap]: [string, object] = params;

        let resultString: string | IResolvable = string;
        // replacementMap is an object
        Object.entries(replacementMap).map(([rawVarName, rawVarValue]) => {
          const varName = this.processIntrinsics(rawVarName);
          const varValue = this.processIntrinsics(rawVarValue);

          resultString = Fn.replace(resultString, `\${${varName}}`, varValue);
        });

        resultString = Fn.replace(resultString, "/($\\{!\\w+\\})/", "$1"); // TODO: test this regex in TF, does not seem to work yet :sweat_smile:

        // TODO: replace ${!Literal} with ${Literal} (use some regex for it)
        // To write a dollar sign and curly braces (${}) literally, add an exclamation point (!) after the open curly brace, such as ${!Literal}. CloudFormation resolves this text as ${Literal}.
        // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html

        return resultString;
      }

      case "Fn::Transform": {
        // TODO: find out if aws cdk uses some of these – probably yes
        // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html
        throw new Error(
          "Fn::Transform is not supported – Cfn Template Macros are not supported yet"
        );
      }

      case "Fn::ImportValue": {
        // TODO: support cross cfn stack references?
        throw new Error(`Fn::ImportValue is not yet supported.`);
      }

      default:
        throw new Error(
          `unsupported intrinsic function ${fn} (params: ${JSON.stringify(
            params
          )})`
        );
    }
  }
}
