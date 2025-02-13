// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
declare module 'child_process' {
    interface SpawnOptions  {
        signal?: AbortSignal;
    }
}

// HACK: As far as I can tell the error shown for /packages/cdktf/lib/private/fs.ts regarding
// archiver import is not valid, since it _only_ shows up for this package.
// I spent quite a bit of time trying to resolve the error, but I am not sure what's
// going on.
declare module 'archiver';
