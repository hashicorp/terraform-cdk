import { TerraformStack, Testing } from '../lib';
import { TestResource } from './helper';
import { TestDataSource } from './helper/data-source';

test('minimal configuration', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test');

  new TestDataSource(stack, 'test', {
    name: 'foo'
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test('with complex computed list', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'test-data-source');

  const dataSource = new TestDataSource(stack, 'test', {
    name: 'foo'
  });
  new TestResource(stack, 'test-resource', {
    name: dataSource.complexComputedList('0').id,
  })

  expect(Testing.synth(stack)).toMatchSnapshot();
});

