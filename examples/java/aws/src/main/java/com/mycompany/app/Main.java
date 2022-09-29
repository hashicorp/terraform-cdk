package com.mycompany.app;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformStack;

import imports.aws.provider.AwsProvider;
import imports.aws.data_aws_region.DataAwsRegion;
import imports.aws.dynamodb_table.DynamodbTable;
import imports.aws.dynamodb_table.DynamodbTableAttribute;
import imports.aws.sns_topic.SnsTopic;
import software.constructs.Construct;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) {
        super(scope, id);

        AwsProvider.Builder.create(this, "aws").region("eu-central-1").build();

        DataAwsRegion region = new DataAwsRegion(this, "region");

        DynamodbTable table = DynamodbTable.Builder.create(this, "Hello").name("my-first-table-" + region.getName())
                .hashKey("temp").attribute(Arrays.asList(DynamodbTableAttribute.builder().name("id").type("S").build()))
                .billingMode("PAY_PER_REQUEST").build();

        table.addOverride("hash_key", "id");
        table.addOverride("lifecycle", Collections.singletonMap("create_before_destroy", true));

        final int topicCount = 1;
        List<SnsTopic> topics = IntStream.range(0, topicCount)
                .<SnsTopic>mapToObj(
                        i -> SnsTopic.Builder.create(this, "Topic" + i).displayName("my-first-sns-topic" + i).build())
                .collect(Collectors.toList());

        TerraformOutput.Builder.create(this, "table_name").value(table.getName()).build();

        for (int i = 0; i < topics.size(); i++) {
            TerraformOutput.Builder.create(this, "sns_topic" + i).value(topics.get(i).getName()).build();
        }
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "aws");
        app.synth();
    }
}