import React, { Fragment } from "react";
import * as fs from 'fs-extra';
import { Text, Box, Color, useApp } from "ink";
import Spinner from "ink-spinner";
import { Language } from '../../../lib/get/base';
import { GetModuleProvider } from '../helper/get-module-provider'

enum Status {
    STARTING = "starting",
    DOWNLOADING_MODULES = "downloading and generating modules",
    DOWNLOADING_PROVIDERS = "downloading and generating providers",
    DONE = "done",
}

interface GetConfig {
    codeMakerOutput: string;
    language: Language;
    modules: string[];
    providers: string[];
}

export const Get = ({ codeMakerOutput, language, modules, providers }: GetConfig): React.ReactElement => {
    const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.STARTING);
    const { exit } = useApp();

    React.useEffect(() => {
        const get = async () => {
            try {
                await fs.remove(codeMakerOutput); 
                const getModulesProvider = new GetModuleProvider(codeMakerOutput, language, modules, providers)
                setCurrentStatus(Status.DOWNLOADING_PROVIDERS);
                await getModulesProvider.getProviders();
                setCurrentStatus(Status.DOWNLOADING_MODULES);
                await getModulesProvider.getModules();
                setCurrentStatus(Status.DONE);
                if (!await fs.pathExists(codeMakerOutput)) {
                    console.error(`ERROR: synthesis failed, app expected to create "${codeMakerOutput}"`);
                    process.exit(1);
                }
            } catch (e) {
                console.error(e);
                exit(e);
            }
        };
        get();
    }, []); // only once

    const isGenerating: boolean = currentStatus != Status.DONE
    const statusText = `${currentStatus}...`
    const jsonTerraformOutput = <Text>Generated <Color green>{language}</Color> constructs in the output directory: <Text bold>{codeMakerOutput}</Text></Text>

    return (
        <Box>
            {isGenerating ? (
                <Fragment>
                    <Color green>
                        <Spinner type="dots" />
                    </Color>
                    <Box paddingLeft={1}>
                        <Text>{statusText}</Text>
                    </Box>
                </Fragment>
            ) : (
                    <Fragment>
                        <Box>
                            {jsonTerraformOutput}
                        </Box>
                    </Fragment>
                )}
        </Box>
    );
};
