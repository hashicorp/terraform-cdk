// Copyright IBM Corp. 2019, 2025
// Licensed under the Mozilla Public License 2.0

declare module 'child_process' {
    interface SpawnOptions  {
        signal?: AbortSignal;
    }
}

declare module "archiver";
