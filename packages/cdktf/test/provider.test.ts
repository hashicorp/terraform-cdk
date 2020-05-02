
import { Testing, TerraformStack } from '../lib';
import { TestProvider } from './helper/provider'

test('minimal configuration', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  new TestProvider(stack, 'test', {
    accessKey: 'foo'
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('with alias', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  new TestProvider(stack, 'test', {
    accessKey: 'foo'
  });

  new TestProvider(stack, 'othertest', {
    accessKey: 'bar',
    alias: 'route53'
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});