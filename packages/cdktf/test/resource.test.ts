
import { Testing, TerraformStack } from '../lib';
import { TestProvider, TestResource } from './helper'

test('minimal configuration', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  new TestResource(stack, 'test', {
    name: 'foo'
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('with provider alias', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  new TestProvider(stack, 'provider', {
    accessKey: '1'
  })

  const provider = new TestProvider(stack, 'aliased-provider', {
    alias: "foo",
    accessKey: '123'
  })

  new TestResource(stack, 'test', {
    name: 'bar',
    provider
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('provider setter', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  const provider = new TestProvider(stack, 'provider', {
    accessKey: '1'
  })

  const resource = new TestResource(stack, 'test', {
    name: 'bar'
  });

  resource.provider = provider;

  expect(Testing.synth(stack)).toMatchSnapshot();
});
