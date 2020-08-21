import { ReportParams, ReportRequest } from '../../../lib/checkpoint'
import { versionNumber } from '../version-check';
import { readConfigSync } from '../../../lib/config';

const product = "cdktf"
const config = readConfigSync()

export async function Report(command: string, language: string, dateTime: Date, payload: {}): Promise<void> {
    if (language == '') {
        if (config.language) {
            language = config.language
        }
    }
    const reportParams: ReportParams = { command: command, product: product, version: versionNumber(), dateTime: dateTime, payload: payload, language: language };
    await ReportRequest(reportParams);
}