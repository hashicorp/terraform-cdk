import https = require('https');
import { format } from 'url';

const BASE_URL = `https://app.terraform.io/api/v2/`;

const VALID_ERROR_CODES = [200, 201];

export interface attributes {
    username: string;
    'avatar-url': string;
}

export interface data {
    id: string;
    type: string;
    attributes: attributes;
}

export interface account {
    data: data;
}

async function get(url: string, token: string) {
    return new Promise<any>((ok, ko) => {
        const req = https.request(format(url), { headers: { 'Authorization': `Bearer ${token}`}},  res => {
            if (res.statusCode !== 200) {
                console.log('\nERROR: couldn\'t validate token.');
                return ko(new Error(res.statusMessage));
            }
            const data = new Array<Buffer>();
            res.on('data', chunk => data.push(chunk));

            res.once('error', err => ko(err));
            res.once('end', () => {
                const response = JSON.parse(Buffer.concat(data).toString('utf-8'));
                return ok(response);
            });
        });

        req.end();
    })
}

async function post(url: string, token: string, data: string) {
    return new Promise<any>((ok, ko) => {
        const req = https.request(format(url), { 
            headers: { 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/vnd.api+json',
                'Content-Length': data.length }, 
            method: 'POST' }, res => {
                if (res.statusCode) {
                    const statusCode = res.statusCode;
                    if (!VALID_ERROR_CODES.includes(statusCode)) {
                        return ko(new Error(res.statusMessage));
                    }
                }
            const data = new Array<Buffer>();
            res.on('data', chunk => data.push(chunk));

            res.once('error', err => ko(err));
            res.once('end', () => {
                const response = JSON.parse(Buffer.concat(data).toString('utf-8'));
                return ok(response);
            });
        });

        req.write(data);

        req.end();
    })
}

export async function getAccountDetails(token: string) {
    return await get(`${BASE_URL}/account/details`, token) as account;
}

export async function createWorkspace(organizationName: string, workspaceName: string, token: string) {
    await post(`${BASE_URL}/organizations/${organizationName}/workspaces`, token, JSON.stringify({
        data: {
            attributes: { 
                'name': workspaceName, 
                'operations': false 
            },
            'type': 'workspaces'
        }
    }));
}




