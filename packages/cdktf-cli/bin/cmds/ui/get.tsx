import React, { Fragment } from "react";
import * as fs from 'fs-extra';
import { Text, Box, Color, useApp } from "ink";
import Spinner from "ink-spinner";
import { Language } from '../../../lib/get/base';
import { ConstructsMaker, ConstructsOptions } from '../helper/constructs-maker'

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

    const constructsOptions: ConstructsOptions = {
        codeMakerOutput: codeMakerOutput,
        language: language,
    }

    React.useEffect(() => {
        const get = async () => {
            try {
                await fs.remove(constructsOptions.codeMakerOutput);
                const constructsMaker = new ConstructsMaker();
                setCurrentStatus(Status.DOWNLOADING_PROVIDERS);
                await constructsMaker.getProviders(constructsOptions, providers);
                setCurrentStatus(Status.DOWNLOADING_MODULES);
                await constructsMaker.getModules(constructsOptions, modules);
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
