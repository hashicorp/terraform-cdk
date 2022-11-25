package com.mycompany.app.myconstructs;

import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;

public class Vpc extends TerraformStack {

    public String id;

    public Vpc(Construct scope, String id){
        super(scope, id);

        this.id = id;
    }

    public String getId(){
        return this.id;
    }
}
