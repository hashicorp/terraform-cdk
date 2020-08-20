import https = require('https');
import { format } from 'url';
import { v4 as uuidv4 } from 'uuid';
import * as os from 'os';
import { processLogger } from './logging';

const BASE_URL = `https://checkpoint-api.hashicorp.com/v1/`;

const VALID_STATUS_CODES = [200, 201];

export interface ReportParams {
    dateTime?: Date;
    arch?: string;
    os?: string;
    payload: {};
    product: string;
    runID?: string;
    version?: string;
    command?: string;
    language?: string;
}

async function post(url: string, data: string) {
    return new Promise<any>((ok, ko) => {
        const req = https.request(format(url), {
            headers: {
                'Accept': 'application/json',
                'Content-Length': data.length,
                'User-Agent': 'HashiCorp/cdktf-cli'
            },
            method: 'POST'
        }, res => {
            if (res.statusCode) {
                const statusCode = res.statusCode;
                if (!VALID_STATUS_CODES.includes(statusCode)) {
                    return ko(new Error(res.statusMessage));
                }
            }
            const data = new Array<Buffer>();
            res.on('data', chunk => data.push(chunk));

            res.once('error', err => ko(err));
            res.once('end', () => {
                return ok();
            });
        });

        req.write(data);

        req.end();
    })
}

export async function ReportRequest(reportParams: ReportParams): Promise<void> {
    // we won't report when checkpoint is disabled.
    if (process.env.CHECKPOINT_DISABLE) {
        return
    }

    if (!reportParams.runID) {
        reportParams.runID = uuidv4();
    }

    if (!reportParams.dateTime) {
        reportParams.dateTime = new Date();
    }

    if (!reportParams.arch) {
        reportParams.arch = os.arch();
    }

    if (!reportParams.os) {
        reportParams.os = os.platform();
    }

    const postData = JSON.stringify(reportParams);

    try {
        await post(`${BASE_URL}telemetry/${reportParams.product}`, postData)
    } catch (e) {
        // Log errors writing to checkpoint
        processLogger(e.message)
    }

} 



