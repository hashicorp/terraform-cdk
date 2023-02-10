// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

using System;
using Constructs;
using HashiCorp.Cdktf;
/* {{ imports }} */

namespace MyCompany.MyApp
{
    class MainStack : TerraformStack
    {
        public MyStack(Construct scope, string id) : base(scope, id)
        {
            /* {{ code }} */
        }
    }
}