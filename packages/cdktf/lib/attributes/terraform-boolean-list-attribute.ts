import { TerraformListAttribute } from "./terraform-list-attribute";
import { TerraformAttributeOptions } from "./terraform-attribute";
import { listMapper, booleanToTerraform } from "../runtime";
import { TerraformBoolean, TerraformBooleanAttribute } from "./terraform-boolean-attribute";
import { ITerraformAddressable } from "../terraform-addressable";

export class TerraformBooleanListAttribute extends TerraformListAttribute {
    public constructor(parent: ITerraformAddressable, terraformAttribute: string, value?: TerraformBoolean[], options?: TerraformAttributeOptions) {
        super(parent, terraformAttribute, value, options);
    }

    public get internalValue(): TerraformBoolean[] | undefined {
        return this.realValue;
    }

    public get(index: number): TerraformBooleanAttribute {
        return new TerraformBooleanAttribute(this, index.toString());
    }

    public static construct(parent: ITerraformAddressable, terraformAttribute: string, value: TerraformBooleanList | undefined) {
        if (!(value instanceof TerraformBooleanListAttribute)) {
            return new TerraformBooleanListAttribute(parent, terraformAttribute, value);
        }
        else if (value.terraformParent === parent) {
            return value;
        }
        else {
            return new TerraformBooleanListAttribute(parent, terraformAttribute, value.internalValue, { nested: value });
        }
    }

    protected valueToTerraform() {
        return listMapper(booleanToTerraform)(this.internalValue);
    }
}

export type TerraformBooleanList = TerraformBoolean[] | TerraformBooleanListAttribute;