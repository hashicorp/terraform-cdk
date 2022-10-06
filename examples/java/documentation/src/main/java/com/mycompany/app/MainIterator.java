package com.mycompany.app;

import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformIterator;
import software.constructs.Construct;
import imports.aws.s3.S3Bucket;
import imports.aws.s3.S3BucketConfig;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class MainIterator extends TerraformStack {

    public MainIterator(Construct scope, String id){
        super(scope, id);

        TerraformIterator iterator = TerraformIterator.fromList(Arrays.asList(1,2,3));

        // Issue with iterator- returns type Map<String, Object> and type Map<String, Object> is needed
        S3Bucket s3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(iterator)
                .tags(iterator.getMap("tags"))
                .build()
        );


    }
}
