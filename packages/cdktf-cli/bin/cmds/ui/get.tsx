import React, { Fragment } from "react";
import * as fs from 'fs-extra';
import { Text, Box, useApp } from "ink";
import { Language, ConstructsMaker, GetOptions } from '../../../lib/get/constructs-maker';
import { TerraformDependencyConstraint } from '../../../lib/config'
import {ActivityIndicator} from "./components/activity-indicator";

enum Status {
    STARTING = "starting",
    DOWNLOADING = "downloading and generating modules and providers",
    DONE = "done",
}

interface GetConfig {
    codeMakerOutput: string;
    language: Language;
    constraints: TerraformDependencyConstraint[];
}

export const Get = ({ codeMakerOutput, language, constraints }: GetConfig): React.ReactElement => {
    const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.STARTING);
    const { exit } = useApp();

    const constructsOptions: GetOptions = {
        codeMakerOutput: codeMakerOutput,
        targetLanguage: language,
    }

    React.useEffect(() => {
        const get = async () => {
            try {
                await fs.remove(constructsOptions.codeMakerOutput);
                const constructsMaker = new ConstructsMaker(constructsOptions, constraints);
                setCurrentStatus(Status.DOWNLOADING);
                await constructsMaker.generate();
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
    const jsonTerraformOutput = <Text>Generated <Text color="green">{language}</Text> constructs in the output directory: <Text bold>{codeMakerOutput}</Text></Text>

    return (
        <Box>
            {isGenerating ? (
                <Fragment>
                    <ActivityIndicator />
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
