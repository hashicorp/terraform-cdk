import * as z from "zod";

/* eslint-disable @typescript-eslint/camelcase */
// Schemas from https://www.terraform.io/docs/internals/machine-readable-ui.html#change_summary
const resource = z.object({
  addr: z.string(),
  module: z.string(),
  resource: z.string(),
  implied_provider: z.string(),
  resource_type: z.string(),
  resource_name: z.string(),
  resource_key: z.string().optional().nullable()
});
const baseMessage = z
  .object({
    "@level": z.enum(["info", "error", "warn"]),
    "@message": z.string(),
    "@module": z.string(),
    "@timestamp": z.string()
  })
  .nonstrict();

const action = z.enum(["noop", "create", "read", "update", "delete"]);
const change = z.object({
  resource,
  action
});
const replaceChange = change.extend({
  action: z.literal("replace"),
  reason: z.enum(["tainted", "requested", "cannot_update"])
});
const plannedChange = baseMessage.extend({
  type: z.literal("planned_change"),
  change: z.union([replaceChange, change])
});

const version = baseMessage.extend({
  type: z.literal("version")
});

const changeSummary = baseMessage.extend({
  type: z.literal("change_summary"),
  changes: z.object({
    add: z.number(),
    change: z.number(),
    remove: z.number(),
    operation: z.enum(["plan", "apply", "deploy"])
  })
});

const outputs = baseMessage.extend({
  type: z.literal("outputs"),
  outputs: z.record(
    z.object({
      sensitive: z.boolean(),
      type: z.string(),
      value: z.string()
    })
  )
});

const applyStart = baseMessage.extend({
  type: z.literal("apply_start"),
  hook: z.object({
    resource,
    action,
    id_key: z.string().optional(),
    id_value: z.string().optional()
  })
});

const applyProgress = baseMessage.extend({
  type: z.literal("apply_progress"),
  hook: z.object({
    resource,
    action,
    elapsed_seconds: z.number()
  })
});

const applyComplete = baseMessage.extend({
  type: z.literal("apply_complete"),
  hook: z.object({
    resource,
    action,
    id_key: z.string().optional(),
    id_value: z.string().optional(),
    elapsed_seconds: z.number()
  })
});

const applyError = baseMessage.extend({
  type: z.literal("apply_errored"),
  hook: z.object({
    resource,
    action,
    elapsed_seconds: z.number()
  })
});

const provisionStart = baseMessage.extend({
  type: z.literal("provision_start"),
  hook: z.object({
    resource,
    provisioner: z.string()
  })
});

const provisionProgress = baseMessage.extend({
  type: z.literal("provision_progress"),
  hook: z.object({
    resource,
    provisioner: z.string(),
    output: z.string()
  })
});

const provisionComplete = baseMessage.extend({
  type: z.literal("provision_complete"),
  hook: z.object({
    resource,
    provisioner: z.string()
  })
});

const provisionErrored = baseMessage.extend({
  type: z.literal("provision_errored"),
  hook: z.object({
    resource,
    provisioner: z.string()
  })
});

const refreshStart = baseMessage.extend({
  type: z.literal("refresh_start"),
  hook: z.object({
    resource,
    id_key: z.string().optional(),
    id_value: z.string().optional()
  })
});

const refreshComplete = baseMessage.extend({
  type: z.literal("refresh_complete"),
  hook: z.object({
    resource,
    id_key: z.string().optional(),
    id_value: z.string().optional()
  })
});

export const schema = z.union([
  version,
  plannedChange,
  changeSummary,
  outputs,
  applyStart,
  applyProgress,
  applyComplete,
  applyError,
  provisionStart,
  provisionProgress,
  provisionComplete,
  provisionErrored,
  refreshStart,
  refreshComplete
]);

export type ActionTypes = z.infer<typeof action>;
