declare module '@skorfmann/ink-confirm-input';
declare module '@npmcli/ci-detect';

declare module 'child_process' {
    interface SpawnOptions  {
        signal?: AbortSignal;
    }
}

declare module 'tunnel-agent';
