jest.mock('../lib/logging', () => (
  {
    ...(jest.requireActual('../lib/logging') as {}),
    processLogger: jest.fn()
  }
))
import { processLogger } from '../lib/logging'
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

  it('handles timeouts', async () => {
    nock('https://checkpoint-api.hashicorp.com')
      .post(new RegExp('/v1/.*'))
      .delayConnection(1001)
      .reply(201, '')


    await ReportRequest(reportParams)
    expect(processLogger).toBeCalledWith('request timeout')
  });
});
