/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.myconstructs;

import software.constructs.Construct;

public class KubernetesWebAppDeploymentConfig {

    private String image;
    private int replicas;
    private String app;
    private String component;
    private String environment;

    public KubernetesWebAppDeploymentConfig(builder builder){
        this.image = builder.image;
        this. replicas = builder.replicas;
        this.app = builder.app;
        this.component = builder.components;
        this.environment = builder.environments;

    }

    public static builder builder(){
        return new builder();
    }

    public static class builder{

        private String image;
        private int replicas;
        private String app;
        private String components;
        private String environments;

        public builder image(String image){
            this.image = image;
            return this;
        }

        public  builder replicas(int replicas){
            this.replicas = replicas;
            return this;
        }

        public builder app(String app){
            this.app = app;
            return this;
        }

        public builder components(String components){
            this.components = components;
            return this;
        }

        public builder environments(String environments){
            this.environments = environments;
            return this;
        }

        public KubernetesWebAppDeploymentConfig build(){
            return new KubernetesWebAppDeploymentConfig(this);
        }
    }
}
