/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import { App, TerraformStack, TerraformIterator } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";

/**
 * To properly see the move functionality in action, the resource being moved needs to be deployed
 * First run "deploy" with the STEP_1 env flag set, then "plan" or "deploy" with the STEP_2 env flag set
 */

// UN-NESTING RESOURCE -> resource currently in nested construct, want to move it to higher layer
export class UnNestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-1", {
        bucket: "test-move-bucket-name-1",
      }).addMoveTarget("move");
      new UnNestingConstructToMoveTo(this, "construct-to-move-to");
    }
    if (process.env.STEP_1) {
      new UnNestingConstructToMoveTo(this, "construct-to-move-to");
    }
  }
}

export class UnNestingConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new UnNestingNestedConstructToMoveTo(this, "nested-construct");
  }
}

export class UnNestingNestedConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-2", {
        bucket: "test-move-bucket-name-1",
      }).moveTo("move");
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "test-bucket-2", {
        bucket: "test-move-bucket-name-1",
      });
    }
  }
}
// UN-NESTING RESOURCE

// NESTING RESOURCE -> resource currently at higher abstraction, want to move it into nested construct
export class NestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-3", {
        bucket: "test-move-bucket-name-3",
      }).moveTo("move");
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "test-bucket-3", {
        bucket: "test-move-bucket-name-3",
      });
    }

    new NestingConstructToMoveTo(this, "construct-to-move-to");
  }
}

export class NestingConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NestingNestedConstructToMoveTo(this, "nested-construct");
  }
}

export class NestingNestedConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-3", {
        bucket: "test-move-bucket-name-3",
      }).addMoveTarget("move");
    }
    if (process.env.STEP_1) {
    }
  }
}
// NESTING RESOURCE

// MOVE INTO RESOURCE USING LIST ITERATOR
export class ListIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    if (process.env.STEP_2) {
      const iterator = TerraformIterator.fromList([
        "website-static-file-list-iterator-one",
        "website-static-file-list-iterator-two",
      ]);

      new S3Bucket(this, "complex-iterator-bucket", {
        forEach: iterator,
        bucket: iterator.value,
      }).addMoveTarget("moveToResourceWithListIterator");

      new S3Bucket(this, "moved-bucket-complex-iterator", {
        bucket: "website-static-file-list-iterator-one",
      }).moveTo(
        "moveToResourceWithListIterator",
        "website-static-file-list-iterator-one"
      );
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "moved-bucket-complex-iterator", {
        bucket: "website-static-file-list-iterator-one",
      });
    }
  }
}
// MOVE INTO RESOURCE USING LIST ITERATOR

// MOVE INTO RESOURCE USING COMPLEX ITERATOR
export class ComplexIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    if (process.env.STEP_2) {
      const complexIterator = TerraformIterator.fromMap({
        "website-static-files": {
          name: "website-static-files",
          tags: { app: "website" },
        },
        images: { name: "images", tags: { app: "image-converter" } },
      });

      new S3Bucket(this, "complex-iterator-bucket", {
        forEach: complexIterator,
        bucket: complexIterator.getString("name"),
        tags: complexIterator.getStringMap("tags"),
      }).addMoveTarget("resourceWithComplexIterator");

      new S3Bucket(this, "moved-bucket", {
        bucket: "website-static-files",
        tags: { app: "website" },
      }).moveTo("resourceWithComplexIterator", "website-static-files");
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "moved-bucket", {
        bucket: "website-static-files",
        tags: { app: "website" },
      });
    }
  }
}
// MOVE INTO RESOURCE USING COMPLEX ITERATOR

export class MoveToIDStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-move-by", {
        bucket: "test-move-bucket-move-to-id",
      }).moveToId("aws_s3_bucket.test-bucket-1");

      new S3Bucket(this, "test-bucket-1", {
        bucket: "test-move-bucket-move-to-id",
      });
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "test-bucket-move-by", {
        bucket: "test-move-bucket-move-to-id",
      });
    }
  }
}

export class MoveFromIDStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    if (process.env.STEP_2) {
      new S3Bucket(this, "test-bucket-move-by", {
        bucket: "test-move-bucket-move-from-id",
      }).hasMoved();

      new S3Bucket(this, "test-bucket-1", {
        bucket: "test-move-bucket-move-from-id",
      }).moveFromId("aws_s3_bucket.test-bucket-move-by");
    }
    if (process.env.STEP_1) {
      new S3Bucket(this, "test-bucket-move-by", {
        bucket: "test-move-bucket-move-from-id",
      });
    }
  }
}

const app = new App();
new MoveToIDStack(app, "move-to-id-stack");
new MoveFromIDStack(app, "move-from-id-stack");
new UnNestingMoveStack(app, "un-nesting-move-stack");
new NestingMoveStack(app, "nesting-move-stack");
new ListIteratorMoveStack(app, "list-iterator-move-stack");
new ComplexIteratorMoveStack(app, "complex-iterator-move-stack");
app.synth();
