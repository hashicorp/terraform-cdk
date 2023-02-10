// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

using Constructs;
using kubernetes;
using System.Collections.Generic;

namespace MyConstructs
{
    class KubernetesWebAppDeployment : Construct
    {
        public KubernetesWebAppDeployment(Construct scope, string id, Dictionary<string, object> config) : base(scope, id)
        {
            // Content is left to the readers imagination
        }
    }
}