package com.mycompany.app.myconstructs;

public class DockerBackendConfig {

    private String region;
    private String vpcId;
    private String dockerImage;

    public DockerBackendConfig(builder builder){
        this.region = builder.region;
        this.vpcId = builder.vpcId;
        this.dockerImage = builder.dockerImage;
    }

    public static builder builder(){
        return new builder();
    }

    public static class builder{

        private String region;
        private String vpcId;
        private String dockerImage;

        public builder region(String region){
            this.region = region;
            return this;
        }

        public  builder vpcId(String vpcId){
            this.vpcId = vpcId;
            return this;
        }

        public builder dockerImage(String dockerImage){
            this.dockerImage = dockerImage;
            return this;
        }

        public DockerBackendConfig build(){
            return new DockerBackendConfig(this);
        }
    }
}
