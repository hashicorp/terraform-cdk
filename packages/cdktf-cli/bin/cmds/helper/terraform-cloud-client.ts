import https = require('https');
import { format } from 'url';

const BASE_URL = `https://app.terraform.io/api/v2/`;

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

export async function getAccountDetails(token: string) {
    return await get(`${BASE_URL}/account/details`, token) as account;
}




