/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

import com.hashicorp.cdktf.*;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import imports.aws.s3_bucket_object.S3BucketObject;
import imports.aws.s3_bucket_object.S3BucketObjectConfig;
import software.constructs.Construct;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.acm_certificate.AcmCertificate;
import imports.aws.acm_certificate.AcmCertificateConfig;
import imports.aws.acm_certificate_validation.AcmCertificateValidation;
import imports.aws.acm_certificate_validation.AcmCertificateValidationConfig;
import imports.aws.data_aws_route53_zone.DataAwsRoute53Zone;
import imports.aws.data_aws_route53_zone.DataAwsRoute53ZoneConfig;
import imports.aws.route53_record.Route53Record;
import imports.aws.route53_record.Route53RecordConfig;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.nio.file.Paths;

public class MainIterator2 extends TerraformStack {
    public MainIterator2(Construct scope, String id) {
        super(scope, id);

        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
            .region("us-east-1")
            .build()
        );
        // DOCS_BLOCK_START:iterators-define-iterators
        TerraformVariable list = new TerraformVariable(this, "list", TerraformVariableConfig.builder()
                .type("list(string)")
                .build());

        TerraformIterator terraformIterator = TerraformIterator.fromList(list.getListValue());

        S3Bucket awsS3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(terraformIterator)
                .bucket(Token.asString(terraformIterator.getString("")))
                .build());
        // DOCS_BLOCK_END:iterators-define-iterators

        // DOCS_BLOCK_START:iterators-complex-lists
        AcmCertificate cert = new AcmCertificate(this, "cert", AcmCertificateConfig.builder()
            .domainName("example.com")
            .validationMethod("DNS")
            .build());
        
        DataAwsRoute53Zone dataAwsRoute53ZoneExample = new DataAwsRoute53Zone(this, "dns_zone", DataAwsRoute53ZoneConfig.builder()
            .name("example.com")
            .privateZone(false)
            .build());

        TerraformIterator exampleForEachIterator = TerraformIterator.fromComplexList(
            cert.getDomainValidationOptions(),
            "domain_name"
        );

        Route53Record records = new Route53Record(this, "record", Route53RecordConfig.builder()
            .forEach(exampleForEachIterator)
            .allowOverwrite(true)
            .name(exampleForEachIterator.getString("name"))
            .records(Arrays.asList(exampleForEachIterator.getString("record")))
            .ttl(60)
            .type(exampleForEachIterator.getString("type"))
            .zoneId(dataAwsRoute53ZoneExample.getZoneId())
            .build());

        TerraformIterator recordsIterator = TerraformIterator.fromResources(records);

        AcmCertificateValidation validation = new AcmCertificateValidation(this, "validation", AcmCertificateValidationConfig.builder()
            .certificateArn(cert.getArn())
            .validationRecordFqdns(Token.asList(
                recordsIterator.pluckProperty("fqdn")
            ))
            .build());
        // DOCS_BLOCK_END:iterators-complex-lists

        // DOCS_BLOCK_START:iterators-chain
        TerraformLocal myComplexLocal = new TerraformLocal(this, "my-map", new HashMap() {
            {
                put("website", new HashMap() {
                    {
                        put("name", "website-static-files");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "website");
                            }
                        });
                    }
                });
                put("images", new HashMap() {
                    {
                        put("name", "images");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "image-converter");
                            }
                        });
                    }
                });
            }
        });

        TerraformIterator s3BucketConfigurationIterator = TerraformIterator.fromMap(myComplexLocal.getAsAnyMap());
        S3Bucket s3Bucket = new S3Bucket(this, "buckets", S3BucketConfig.builder()
                .forEach(s3BucketConfigurationIterator)
                .bucket(s3BucketConfigurationIterator.getString("name"))
                .tags(s3BucketConfigurationIterator.getStringMap("tags"))
                .build());
        
        TerraformAsset asset = new TerraformAsset(this, "help", TerraformAssetConfig.builder()
                .path(Paths.get(System.getProperty("user.dir"), "help").toString())
                .build()
        );

        // This would be TerraformIterator.fromDataSources for data_sources
        TerraformIterator s3BucketIterator = TerraformIterator.fromResources(s3Bucket);
        new S3BucketObject(this, "object", S3BucketObjectConfig.builder()
                .forEach(s3BucketIterator)
                .bucket(s3BucketIterator.getString("id"))
                .key("help")
                .source(asset.getPath())
                .build()
        );
        // DOCS_BLOCK_END:iterators-chain

        // DOCS_BLOCK_START:iterators-for-expression
        TerraformLocal values = new TerraformLocal(this, "values", new HashMap() {
            {
                put("website", new HashMap() {
                    {
                        put("name", "website-static-files");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "website");
                            }
                        });
                    }
                });
                put("images", new HashMap() {
                    {
                        put("name", "images");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "image-converter");
                            }
                        });
                    }
                });
            }
        });

        TerraformIterator mapIterator = TerraformIterator.fromMap(values.getAsAnyMap());
        new TerraformLocal(this, "list-of-keys", mapIterator.keys());
        new TerraformLocal(this, "list-of-values", mapIterator.values());
        new TerraformLocal(this, "list-of-names", mapIterator.pluckProperty("name"));
        new TerraformLocal(this, "list-of-names-of-included", mapIterator.forExpressionForList("val.name if val.included"));
        new TerraformLocal(this, "map-with-names-as-key-and-tags-as-value-of-included", mapIterator.forExpressionForMap("val.name", "val.tags if val.included"));
        // DOCS_BLOCK_END:iterators-for-expression
    }
}
