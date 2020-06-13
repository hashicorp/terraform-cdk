import { GetProvider } from '../../../lib/get/providers';
import { GetModule } from '../../../lib/get/modules';
import { Language } from '../../../lib/get/base';

export class GetModuleProvider {
    constructor(public readonly codeMakerOutput: string,
        public readonly language: Language, public readonly modules: string[], 
        public readonly providers: string[]) {
    }

    public async getModules(): Promise<void> {
        if (this.providers.length > 0) {
            await new GetModule().get(Object.assign({}, { codeMakerOutput: this.codeMakerOutput, 
                targetLanguage: this.language }, { targetNames: this.modules }));
        }
    }
    
    public async getProviders(): Promise<void> {
        if (this.providers.length > 0) {
            await new GetProvider().get(Object.assign({}, { codeMakerOutput: this.codeMakerOutput, 
                targetLanguage: this.language }, { targetNames: this.providers }));
        }
    }
}
