import { GetProvider } from '../../../lib/get/providers';
import { GetModule } from '../../../lib/get/modules';
import { Language } from '../../../lib/get/base';
import { ReportParams, ReportRequest } from '../../../lib/checkpoint'
import { versionNumber } from '../version-check';

export interface ConstructsOptions {
    codeMakerOutput: string;
    language: Language;
}

const product = "cdktf"

export class ConstructsMaker {

    public async getModules(constructsOptions: ConstructsOptions, modules: string[]): Promise<void> {
        if (modules.length > 0) {
            await new GetModule().get(Object.assign({}, { codeMakerOutput: constructsOptions.codeMakerOutput,
                targetLanguage: constructsOptions.language, isModule: true }, { targetNames: modules }));
            await moduleTelemetry(constructsOptions.language, modules);
        }
    }

    public async getProviders(constructsOptions: ConstructsOptions, providers: string[]): Promise<void> {
        if (providers.length > 0) {
            await new GetProvider().get(Object.assign({}, { codeMakerOutput: constructsOptions.codeMakerOutput,
                targetLanguage: constructsOptions.language }, { targetNames: providers }));
            await providerTelemetry(constructsOptions.language, providers);
        }
    }
}

async function providerTelemetry(language: string, providers: string[]): Promise<void> {
    for (const p of providers) {
        const [fqname, version] = p.split('@');
        const name = fqname.split('/').pop()
        if (!name) { throw new Error(`Provider name should be properly set in ${p}`) }

        const payload = { language: language, name: name, fullName: fqname, version: version, type: 'provider' };

        const reportParams: ReportParams = { product: product, version: versionNumber(), payload: payload };

        await ReportRequest(reportParams);
    }
}

async function moduleTelemetry(language: string, modules: string[]): Promise<void> {
    for (const module of modules) {
        const [source, version] = module.split('@');

        const payload = { language: language, source: source, version: version, type: 'module' };

        const reportParams: ReportParams = { product: product, version: versionNumber(), payload: payload };

        await ReportRequest(reportParams);
    }
}
