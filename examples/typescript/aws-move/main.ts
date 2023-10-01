/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
//import { App, TerraformStack } from "cdktf";
import { App, TerraformStack, TerraformIterator } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";

// UN-NESTING RESOURCE -> resource currently in nested construct, want to move it to higher layer

// FIRST -> deploy, then comment out
/** 
export class UnNestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    new UnNestingConstructToMoveTo(this, "construct-to-move-to");
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

    new S3Bucket(this, "test-bucket-2", {
      bucket: "test-move-bucket-name-1",
    });
  }
}
*/
// SECOND -> uncomment, then plan
export class UnNestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    new S3Bucket(this, "test-bucket-1", {
      bucket: "test-move-bucket-name-1",
    }).addTag("move");
    console.log("hits tagging");
    new UnNestingConstructToMoveTo(this, "construct-to-move-to");
    /** 
    console.log("AT ROOT")
    console.log("scope", scope)
    */
  }
}

export class UnNestingConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    /** 
    console.log("AT 1st NESTED CONSTRUCT")
    console.log("scope", scope)
    console.log("scope node", scope.node)
*/
    new UnNestingNestedConstructToMoveTo(this, "nested-construct");
  }
}

export class UnNestingNestedConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    /** 
    console.log("AT  2nd NESTED CONSTRUCT")
    console.log("this", this)
    console.log("this", scope)
    console.log("scope node", scope.node)
    console.log("scope node scope node", scope.node.scope?.node)
*/

    new S3Bucket(this, "test-bucket-2", {
      bucket: "test-move-bucket-name-1",
    }).moveTo("move");
    console.log("hits move");
  }
}
// UN-NESTING RESOURCE

// NESTING RESOURCE -> resource currently at higher abstraction, want to move it into nested construct

// FIRST -> deploy, then comment out
/** 
export class NestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "test-bucket-3", {
      bucket: "test-move-bucket-name-3",
    });

    // TODO make new construct for this use case
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
  }
}
*/
// SECOND -> uncomment, then plan
export class NestingMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "test-bucket-3", {
      bucket: "test-move-bucket-name-3",
    }).moveTo("move"); //

    // TODO make new construct for this use case
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

    new S3Bucket(this, "test-bucket-3", {
      bucket: "test-move-bucket-name-3",
    }).addTag("move");
  }
}
// NESTING RESOURCE

// MOVE INTO RESOURCE USING LIST ITERATOR

// FIRST -> deploy, then comment out
/** 
export class ListIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "moved-bucket-list-iterator", {
      bucket: "website-static-file-list-iterator-one",
    })
  }
}
*/
// SECOND -> uncomment, then plan
export class ListIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    const iterator = TerraformIterator.fromList([
      "website-static-file-list-iterator-one",
      "website-static-file-list-iterator-two",
    ]);

    new S3Bucket(this, "complex-iterator-bucket", {
      forEach: iterator,
      bucket: iterator.value,
    }).addTag("moveToResourceWithListIterator");

    new S3Bucket(this, "moved-bucket-complex-iterator", {
      bucket: "website-static-file-list-iterator-one",
    }).moveTo(
      "moveToResourceWithListIterator",
      "website-static-file-list-iterator-one"
    );
  }
}
// MOVE INTO RESOURCE USING LIST ITERATOR

// MOVE INTO RESOURCE USING COMPLEX ITERATOR

// FIRST -> deploy, then comment out
/** 
export class ComplexIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "moved-bucket-complex-iterator", {
      bucket: "website-static-file-complex-iterator",
      tags: { app: "website" }
    })
  }
}
*/
// SECOND -> uncomment, then plan
export class ComplexIteratorMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    const complexIterator = TerraformIterator.fromMap({
      "website-static-file-complex-iterator": {
        name: "website-static-file-complex-iterator",
        tags: { app: "website" },
      },
      images: { name: "images", tags: { app: "image-converter" } },
    });

    new S3Bucket(this, "complex-iterator-bucket", {
      forEach: complexIterator,
      bucket: complexIterator.getString("name"),
      tags: complexIterator.getStringMap("tags"),
    }).addTag("moveToResourceWithComplexIterator");

    new S3Bucket(this, "moved-bucket-complex-iterator", {
      bucket: "website-static-file-complex-iterator",
      tags: { app: "website" },
    }).moveTo(
      "moveToResourceWithComplexIterator",
      "website-static-file-complex-iterator"
    );
  }
}
// MOVE INTO RESOURCE USING COMPLEX ITERATOR

// MOVE INTO RESOURCE USING COUNT
export class countMoveStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "test-bucket", {
      bucket: "test-move-bucket-name-1",
    }); //.addTag("move");

    // TODO make new construct for this use case
    //new ConstructToMoveTo(this, "construct-to-move-to");
  }
}
// MOVE INTO RESOURCE USING COUNT

const app = new App();
new UnNestingMoveStack(app, "un-nesting-move-stack");
new NestingMoveStack(app, "nesting-move-stack");
new ListIteratorMoveStack(app, "list-iterator-move-stack");
new ComplexIteratorMoveStack(app, "complex-iterator-move-stack");
app.synth();
