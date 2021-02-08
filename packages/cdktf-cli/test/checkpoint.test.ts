import { ReportRequest, ReportParams } from '../lib/checkpoint';
import nock from 'nock';

describe('ReportRequest', () => {
  const reportParams: ReportParams = { command: 'foo', product: 'cdktf', version: '0.1', dateTime: new Date(), payload: {}, language: 'typescript' };

  it('handles request errors', async () => {
    nock('https://checkpoint-api.hashicorp.com')
      .post(new RegExp('/v1/.*'))
      .replyWithError('some request error happened');

    await ReportRequest(reportParams)
  });
});
