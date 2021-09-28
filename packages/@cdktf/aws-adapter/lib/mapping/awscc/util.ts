import { toCamelCase } from "codemaker";
// TODO: expose the name conflict replacement functionality that is used from this in a better way
import { AttributeModel } from "cdktf-cli/lib/get/generator/models/attribute-model";

const propertyNameReplacements = {
  CloudFormation: "Cloudformation",
  CloudFront: "Cloudfront",
  CloudWatch: "Cloudwatch",
  FSx: "Fsx",
};

export function convertCloudFormationPropertyToCDKTFAttribute(
  cfnAttributeName: string
): string {
  const tfAttribute =
    convertCloudFormationPropertyToTFAttribute(cfnAttributeName);

  const cdktfAttribute = toCamelCase(tfAttribute);

  const tmp = new AttributeModel({
    name: cdktfAttribute,
    computed: false,
    optional: false,
    provider: false,
    required: false,
    storageName: "",
    terraformFullName: "",
    terraformName: "",
    type: null as any,
  });

  // tmp.name is getter and does more than returning the name we supplied as input
  const conflictFreeCdktfAttribute = tmp.name;

  return conflictFreeCdktfAttribute;
}

// reimplementation of naming.go from terraform-provider-awscc
// TODO: use WebAssembly to reuse naming.go
export function convertCloudFormationPropertyToTFAttribute(
  cfnAttributeName: string
): string {
  let propertyName = cfnAttributeName.trim();

  if (propertyName === "") {
    return propertyName;
  }

  for (let replacement in Object.entries(propertyNameReplacements)) {
    const [old, new_] = replacement;
    propertyName = propertyName.replace(new RegExp(old, "g"), new_);
  }

  let attributeName = "";

  for (let i = 0; i < propertyName.length; i++) {
    let ch = propertyName.charAt(i);

    const isCap = isCapitalLetter(ch);
    const isLow = isLowercaseLetter(ch);
    const isDig = isNumeric(ch);

    if (isCap) {
      ch = toLowercaseLetter(ch);
    }

    if (i < propertyName.length - 1) {
      let nextCh = propertyName[i + 1];
      let nextIsCap = isCapitalLetter(nextCh);
      let nextIsLow = isLowercaseLetter(nextCh);
      let nextIsDig = isNumeric(nextCh);

      // Append underscore if case changes.
      if (
        (isCap && nextIsLow) ||
        (isLow && (nextIsCap || nextIsDig)) ||
        (isDig && (nextIsCap || nextIsLow))
      ) {
        if (isCap && nextIsLow) {
          const prevIsCap = i > 0 && isCapitalLetter(propertyName[i - 1]);
          if (prevIsCap) {
            attributeName += "_";
          }
        }
        attributeName += ch;
        if (isLow || isDig) {
          attributeName += "_";
        }

        continue;
      }
    }

    if (isCap || isLow || isDig) {
      attributeName += ch;
    } else {
      attributeName += "_";
    }
  }

  return attributeName;
}

function isCapitalLetter(ch: string): boolean {
  return ch >= "A" && ch <= "Z";
}
function isLowercaseLetter(ch: string): boolean {
  return ch >= "a" && ch <= "z";
}
function isNumeric(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}
function toLowercaseLetter(ch: string): string {
  return ch.toLowerCase();
}
