package com.mycompany.app.aspects;

import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.Annotations;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.s3_bucket.S3BucketConfig;
import org.jetbrains.annotations.NotNull;
import software.constructs.Construct;
import software.constructs.IConstruct;
import com.hashicorp.cdktf.Aspects;
import com.hashicorp.cdktf.IAspect;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import imports.aws.s3_bucket.S3Bucket;

public class MainAspects extends TerraformStack {

    // DOCS_BLOCK_START:aspects-validation
    public class ValidateS3IsPrefixed implements IAspect {

        private final String prefix;

        public ValidateS3IsPrefixed(String prefix) {
            this.prefix = prefix;
        }

        // This method is called on every Construct within the defined scope (resource,
        // data sources, etc.).
        public void visit(IConstruct node) {
            if (node instanceof S3Bucket) {
                if (((S3Bucket) node).getBucketInput() != null && !((S3Bucket) node).getBucketInput().startsWith(this.prefix)) {
                    // You can include `addInfo`, `addWarning`, and `addError`.
                    // CDKTF prints these messages when the user runs `synth`, `plan`, or `deploy`.
                    Annotations.of(node).addError(
                            "Each S3 Bucket name needs to start with " + this.prefix);
                }
            }
        }
    }
    // DOCS_BLOCK_END:aspects-validation

    // DOCS_BLOCK_START:define-aspects
    public class TagsAddingAspect implements IAspect {
        private final Map<String, String> tags;

        public TagsAddingAspect(Map<String, String> tags) {
            this.tags = tags;
        }

        public Method getInputTags(IConstruct node) {
            Method getTagsInput;
            try {
                getTagsInput = node.getClass().getDeclaredMethod("getTagsInput");
            } catch (NoSuchMethodException e) {
                // Not all constructs are taggable, so we need to filter it
                throw new RuntimeException("Resource " + node.getClass() + " is un-taggable");
            }
            getTagsInput.setAccessible(true);
            return getTagsInput;
        }

        public Method getTagsSet(IConstruct node) {
            Method setTags;
            try {
                setTags = node.getClass().getDeclaredMethod("setTags", Map.class);
            } catch (NoSuchMethodException e) {
                // Not all constructs are taggable, so we need to filter it
                throw new RuntimeException("Resource " + node.getClass() + " is un-taggable");
            }
            setTags.setAccessible(true);
            return setTags;
        }

        // This method is called on every Construct within the defined scope (resource,
        // data sources, etc.).
        public void visit(IConstruct node) {
            Method getTagsInput = getInputTags(node);
            Method setTags = getTagsSet(node);
            Map<String, String> currentTags;
            try {
                // We need to take the input value to not create a circular reference
                currentTags = (Map<String, String>) getTagsInput.invoke(node);
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            } catch (InvocationTargetException e) {
                throw new RuntimeException(e);
            }
            try {
                HashMap<String, String> newTags = new HashMap<>();
                newTags.putAll(this.tags);
                if (currentTags != null) {
                    newTags.putAll(currentTags);
                }
                setTags.invoke(node, newTags);
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            } catch (InvocationTargetException e) {
                throw new RuntimeException(e);
            }
        }
    }
    // DOCS_BLOCK_END:define-aspects

    public MainAspects(Construct scope, String id) {
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build());

        S3Bucket bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .tags(new HashMap<String, String>() {
                    {
                        put("owner", "cdktf");
                    }
                })
                .build());
        // DOCS_BLOCK_START:define-aspects
        
        // Add tags to every resource defined within `myStack`.
        Aspects.of(bucket).add(new TagsAddingAspect(new HashMap<String, String>() {
            {
                put("createdBy", "cdktf");
            }
        }));
        // DOCS_BLOCK_END:define-aspects

        // DOCS_BLOCK_START:aspects-validation

        // Check the prefix for every resource within `myStack`.
        Aspects.of(bucket).add(new ValidateS3IsPrefixed("myPrefix"));
        // DOCS_BLOCK_END:aspects-validation
    }

}
