using System;
using Constructs;
using HashiCorp.Cdktf;


namespace MyCompany.MyApp
{
    class MainStack : TerraformStack
    {
        public MainStack(Construct scope, string id) : base(scope, id)
        {
            // define resources here
        }
    }
}