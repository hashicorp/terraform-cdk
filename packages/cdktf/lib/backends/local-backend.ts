import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class LocalBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: LocalBackendProps) {
        super(scope, "backend", "local");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface LocalBackendProps {
    readonly path?: string;
    readonly workspaceDir?: string;
}