import { GetProvider } from '../../../lib/get/providers';
import { GetModule } from '../../../lib/get/modules';
import { Language } from '../../../lib/get/base';

export interface ConstructsOptions {
    codeMakerOutput: string;
    language: Language;
}

export class ConstructsMaker {

    public async getModules(constructsOptions: ConstructsOptions, modules: string[]): Promise<void> {
        if (modules.length > 0) {
            await new GetModule().get(Object.assign({}, { codeMakerOutput: constructsOptions.codeMakerOutput, 
                targetLanguage: constructsOptions.language }, { targetNames: modules }));
        }
    }
    
    public async getProviders(constructsOptions: ConstructsOptions, providers: string[]): Promise<void> {
        if (providers.length > 0) {
            await new GetProvider().get(Object.assign({}, { codeMakerOutput: constructsOptions.codeMakerOutput, 
                targetLanguage: constructsOptions.language }, { targetNames: providers }));
        }
    }
}
