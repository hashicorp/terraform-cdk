export interface ITerraformBackend {
    readonly name: string;

    readonly [key: string]: any;
}