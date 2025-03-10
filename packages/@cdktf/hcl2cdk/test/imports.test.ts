// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, Snapshot, binding } from "./helpers/convert";

describe("imports", () => {
  testCase.test(
    "single import",
    `
    provider "aws" {
      region = "us-east-1"
    }
      import {
          to = aws_instance.example
          id = "i-abcd1234"
        }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "single import with provider",
    `
  provider "aws" {
      alias = "europe"
      region = "eu-west-1"
    }
      import {
          to = aws_instance.example
          id = "i-abcd1234"
  provider = aws.europe
        }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "multiple imports",
    `
    provider "aws" {
      region = "us-east-1"
    }
      import {
          to = aws_instance.example
          id = "i-abcd1234"
        }
        import {
          to = aws_instance.to_be_imported
          id = "i-abcd1234567"
        }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "import with config",
    `
    provider "aws" {
        region = "us-east-1"
    }
    import {
        to = aws_instance.example
        id = "i-abcd1234"
    }
      
    resource "aws_instance" "example" {
        ami           = "some-ami"
        instance_type = "t3.micro"
    }  
    `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "import with config and provider",
    `
     provider "aws" {
       region = "us-east-1"
       alias = "us"
     }
      import {
          to = aws_instance.example
          id = "i-abcd1234"
          provider = aws.us
      }

      resource "aws_instance" "example" {
        ami           = "some-ami"
        instance_type = "t3.micro"
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
  );

  describe("Not supported", () => {
    testCase.test(
      "import into module",
      `
    provider "aws" {
      region = "us-east-1"
    }
      import {
          to = module.instances.aws_instance.example
          id = "i-abcd1234"
        }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.never,
    );

    testCase.test(
      "import into expansion (for_each or count)",
      `
        provider "aws" {
        region = "us-east-1"
        }
        import {
          to = aws_instance.example[0]
          id = "i-abcd123457"
        }
        import {
          to = aws_instance.example["foo"]
          id = "i-abcd1234"
        }
      `,
      [binding.aws],
      Snapshot.yes,
      Synth.never,
    );
  });
});
