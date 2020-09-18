import { Construct } from "constructs";
import { TerraformModuleOptions, TerraformModule } from "./terraform-module";
import { TerraformProvider } from "./terraform-provider";

export interface TerraformHclModuleOptions extends TerraformModuleOptions {
    readonly providers?: (TerraformProvider | TerraformModuleProvider)[];
    readonly variables?: {[key: string]: any};
}

export interface TerraformModuleProvider {
    readonly provider: TerraformProvider;
    readonly moduleAlias: string;
}

export class TerraformHclModule extends TerraformModule {
    private _providers?: (TerraformProvider | TerraformModuleProvider)[];
    private _variables?: {[key: string]: any};

    constructor(scope: Construct, id: string, options: TerraformHclModuleOptions) {
        super(scope, id, options);

        this._providers = options.providers;
        this._variables = options.variables;
    }

    public get variables() {
        return this._variables;
    }

    public set(variable: string, value: any) {
        if (!this._variables) {
            this._variables = {};
        }
        this._variables[variable] = value;
    }

    public get providers() {
        return this._providers;
    }

    public addProvider(provider: TerraformProvider | TerraformModuleProvider) {
        if (!this._providers) {
            this._providers = [];
        }
        this._providers.push(provider);
    }

    public get(output: string): any {
        return this.interpolationForOutput(output);
    }

    public getString(output: string): string {
        return this.get(output);
    }

    public getNumber(output: string): number {
        return this.get(output);
    }

    public getBoolean(output: string): boolean {
        return this.get(output);
    }

    public getList(output: string): string[] {
        return this.get(output);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            providers: this.providers?.map(p => {
                if (p instanceof TerraformProvider) {
                    return { [p.terraformResourceType]: p.fqn };
                }
                else {
                    return { [`${p.provider.terraformResourceType}.${p.moduleAlias}`]: p.provider.fqn };
                }
            }),
            ...this.variables
        };
    }
}