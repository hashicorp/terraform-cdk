import { CONTEXT_ENV, App } from "../lib";
import { Node } from "constructs";
import { version } from '../package.json';

test('context can be passed through CDKTF_CONTEXT', () => {
    process.env[CONTEXT_ENV] = JSON.stringify({
        key1: 'val1',
        key2: 'val2',
    });
    const prog = new App();
    const node = Node.of(prog);
    expect(node.tryGetContext('key1')).toEqual('val1');
    expect(node.tryGetContext('key2')).toEqual('val2');
});

test('context can be passed through CDKTF_CONTEXT', () => {
    process.env[CONTEXT_ENV] = JSON.stringify({
        key1: 'val1',
        key2: 'val2',
    });
    const prog = new App({
        context: {
            key1: 'val3',
            key2: 'val4'
        }
    });
    const node = Node.of(prog);
    expect(node.tryGetContext('key1')).toEqual('val1');
    expect(node.tryGetContext('key2')).toEqual('val2');
});

test('ckdtfVersion is accessible in context', () => {
    const prog = new App();
    const node = Node.of(prog);
    expect(node.tryGetContext('cdktfVersion')).toEqual(version);
});