import { parse } from '../lib';
import * as fs from 'fs';
import * as path from 'path';

test('converts HCL to JSON', async () => {
  const file = fs.readFileSync(path.join(__dirname, 'vpc.tf'), 'utf-8')
  const parsed = await parse('vpc.tf', file)
  expect(JSON.stringify(parsed, null, 2)).toMatchSnapshot()
});
