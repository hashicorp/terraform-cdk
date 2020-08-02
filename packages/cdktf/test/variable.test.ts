import { Testing, TerraformStack, TerraformVariable, TerraformPrimitiveVariableType, TerraformCollectionVariableType, TerraformCollectionType, TerraformTupleVariableType, TerraformObjectVariableType } from '../lib';
import { TestResource } from './helper'

test('string type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: TerraformPrimitiveVariableType.STRING
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('number type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: TerraformPrimitiveVariableType.NUMBER
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('bool type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: TerraformPrimitiveVariableType.BOOL
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('any type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: TerraformPrimitiveVariableType.ANY
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('default value', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        default: 'my-val'
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('description', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        description: 'A Test Variable'
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('collection type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: new TerraformCollectionVariableType(TerraformCollectionType.LIST, TerraformPrimitiveVariableType.STRING)
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('tuple type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: new TerraformTupleVariableType([TerraformPrimitiveVariableType.BOOL, new TerraformCollectionVariableType(TerraformCollectionType.LIST, TerraformPrimitiveVariableType.NUMBER)])
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('object type', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new TerraformVariable(stack, 'test-variable', {
        type: new TerraformObjectVariableType({ internal: TerraformPrimitiveVariableType.NUMBER, protocol: TerraformPrimitiveVariableType.STRING }),
        default: { internal: 8300, protocol: 'tcp' }
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});

test('reference', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const variable = new TerraformVariable(stack, 'test-variable', {
        type: TerraformPrimitiveVariableType.STRING
    });

    new TestResource(stack, 'test-resource', {
        name: variable.stringValue
    });
    expect(Testing.synth(stack)).toMatchSnapshot();
});