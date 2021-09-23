defaults {
  schema_cache_directory     = "../service/cloudformation/schemas"
  terraform_type_name_prefix = "awscc"
}

meta_schema {
  path = "../service/cloudformation/meta-schemas/provider.definition.schema.v1.json"
}

# 362 CloudFormation resource types schemas are available for use with the Cloud Control API.

resource_schema "aws_acmpca_certificate" {
  cloudformation_type_name               = "AWS::ACMPCA::Certificate"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_acmpca_certificate_authority" {
  cloudformation_type_name               = "AWS::ACMPCA::CertificateAuthority"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_acmpca_certificate_authority_activation" {
  cloudformation_type_name               = "AWS::ACMPCA::CertificateAuthorityActivation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_acmpca_permission" {
  cloudformation_type_name               = "AWS::ACMPCA::Permission"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_aps_workspace" {
  cloudformation_type_name = "AWS::APS::Workspace"
}

resource_schema "aws_accessanalyzer_analyzer" {
  cloudformation_type_name = "AWS::AccessAnalyzer::Analyzer"
}

resource_schema "aws_amplify_app" {
  cloudformation_type_name               = "AWS::Amplify::App"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_amplify_branch" {
  cloudformation_type_name               = "AWS::Amplify::Branch"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_amplify_domain" {
  cloudformation_type_name               = "AWS::Amplify::Domain"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_account" {
  cloudformation_type_name               = "AWS::ApiGateway::Account"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_api_key" {
  cloudformation_type_name = "AWS::ApiGateway::ApiKey"
}

resource_schema "aws_apigateway_client_certificate" {
  cloudformation_type_name = "AWS::ApiGateway::ClientCertificate"
}

resource_schema "aws_apigateway_documentation_version" {
  cloudformation_type_name               = "AWS::ApiGateway::DocumentationVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_domain_name" {
  cloudformation_type_name = "AWS::ApiGateway::DomainName"
}

resource_schema "aws_apigateway_model" {
  cloudformation_type_name               = "AWS::ApiGateway::Model"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_request_validator" {
  cloudformation_type_name               = "AWS::ApiGateway::RequestValidator"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_resource" {
  cloudformation_type_name               = "AWS::ApiGateway::Resource"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_apigateway_usage_plan" {
  cloudformation_type_name = "AWS::ApiGateway::UsagePlan"
}

resource_schema "aws_apigateway_usage_plan_key" {
  cloudformation_type_name               = "AWS::ApiGateway::UsagePlanKey"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_appflow_connector_profile" {
  cloudformation_type_name = "AWS::AppFlow::ConnectorProfile"
}

resource_schema "aws_appflow_flow" {
  cloudformation_type_name = "AWS::AppFlow::Flow"
}

resource_schema "aws_appintegrations_event_integration" {
  cloudformation_type_name = "AWS::AppIntegrations::EventIntegration"
}

resource_schema "aws_apprunner_service" {
  cloudformation_type_name = "AWS::AppRunner::Service"
}

resource_schema "aws_applicationinsights_application" {
  cloudformation_type_name = "AWS::ApplicationInsights::Application"
}

resource_schema "aws_athena_data_catalog" {
  cloudformation_type_name               = "AWS::Athena::DataCatalog"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_athena_named_query" {
  cloudformation_type_name = "AWS::Athena::NamedQuery"
}

resource_schema "aws_athena_prepared_statement" {
  cloudformation_type_name               = "AWS::Athena::PreparedStatement"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_athena_work_group" {
  cloudformation_type_name = "AWS::Athena::WorkGroup"
}

resource_schema "aws_auditmanager_assessment" {
  cloudformation_type_name               = "AWS::AuditManager::Assessment"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_autoscaling_warm_pool" {
  cloudformation_type_name               = "AWS::AutoScaling::WarmPool"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_backup_backup_plan" {
  cloudformation_type_name               = "AWS::Backup::BackupPlan"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_backup_backup_selection" {
  cloudformation_type_name               = "AWS::Backup::BackupSelection"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_backup_backup_vault" {
  cloudformation_type_name               = "AWS::Backup::BackupVault"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_budgets_budgets_action" {
  cloudformation_type_name = "AWS::Budgets::BudgetsAction"
}

resource_schema "aws_ce_cost_category" {
  cloudformation_type_name               = "AWS::CE::CostCategory"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_cassandra_keyspace" {
  cloudformation_type_name = "AWS::Cassandra::Keyspace"
}

resource_schema "aws_cassandra_table" {
  cloudformation_type_name = "AWS::Cassandra::Table"
}

resource_schema "aws_certificatemanager_account" {
  cloudformation_type_name               = "AWS::CertificateManager::Account"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_chatbot_slack_channel_configuration" {
  cloudformation_type_name = "AWS::Chatbot::SlackChannelConfiguration"
}

resource_schema "aws_cloudformation_module_default_version" {
  cloudformation_type_name               = "AWS::CloudFormation::ModuleDefaultVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_cloudformation_module_version" {
  cloudformation_type_name = "AWS::CloudFormation::ModuleVersion"
}

resource_schema "aws_cloudformation_public_type_version" {
  cloudformation_type_name = "AWS::CloudFormation::PublicTypeVersion"
}

resource_schema "aws_cloudformation_publisher" {
  cloudformation_type_name               = "AWS::CloudFormation::Publisher"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_cloudformation_resource_default_version" {
  cloudformation_type_name               = "AWS::CloudFormation::ResourceDefaultVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_cloudformation_resource_version" {
  cloudformation_type_name               = "AWS::CloudFormation::ResourceVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_cloudformation_stack_set" {
  cloudformation_type_name = "AWS::CloudFormation::StackSet"
}

resource_schema "aws_cloudformation_type_activation" {
  cloudformation_type_name = "AWS::CloudFormation::TypeActivation"
}

resource_schema "aws_cloudfront_cache_policy" {
  cloudformation_type_name = "AWS::CloudFront::CachePolicy"
}

resource_schema "aws_cloudfront_cloudfront_origin_access_identity" {
  cloudformation_type_name = "AWS::CloudFront::CloudFrontOriginAccessIdentity"
}

resource_schema "aws_cloudfront_distribution" {
  cloudformation_type_name = "AWS::CloudFront::Distribution"
}

resource_schema "aws_cloudfront_function" {
  cloudformation_type_name = "AWS::CloudFront::Function"
}

resource_schema "aws_cloudfront_key_group" {
  cloudformation_type_name = "AWS::CloudFront::KeyGroup"
}

resource_schema "aws_cloudfront_origin_request_policy" {
  cloudformation_type_name = "AWS::CloudFront::OriginRequestPolicy"
}

resource_schema "aws_cloudfront_public_key" {
  cloudformation_type_name = "AWS::CloudFront::PublicKey"
}

resource_schema "aws_cloudfront_realtime_log_config" {
  cloudformation_type_name = "AWS::CloudFront::RealtimeLogConfig"
}

resource_schema "aws_cloudtrail_trail" {
  cloudformation_type_name = "AWS::CloudTrail::Trail"
}

resource_schema "aws_cloudwatch_composite_alarm" {
  cloudformation_type_name = "AWS::CloudWatch::CompositeAlarm"
}

resource_schema "aws_cloudwatch_metric_stream" {
  cloudformation_type_name = "AWS::CloudWatch::MetricStream"
}

resource_schema "aws_codeartifact_domain" {
  cloudformation_type_name = "AWS::CodeArtifact::Domain"
}

resource_schema "aws_codeartifact_repository" {
  cloudformation_type_name = "AWS::CodeArtifact::Repository"
}

resource_schema "aws_codeguruprofiler_profiling_group" {
  cloudformation_type_name = "AWS::CodeGuruProfiler::ProfilingGroup"
}

resource_schema "aws_codegurureviewer_repository_association" {
  cloudformation_type_name               = "AWS::CodeGuruReviewer::RepositoryAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_codestarconnections_connection" {
  cloudformation_type_name = "AWS::CodeStarConnections::Connection"
}

resource_schema "aws_codestarnotifications_notification_rule" {
  cloudformation_type_name               = "AWS::CodeStarNotifications::NotificationRule"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_config_aggregation_authorization" {
  cloudformation_type_name = "AWS::Config::AggregationAuthorization"
}

resource_schema "aws_config_configuration_aggregator" {
  cloudformation_type_name = "AWS::Config::ConfigurationAggregator"
}

resource_schema "aws_config_conformance_pack" {
  cloudformation_type_name = "AWS::Config::ConformancePack"
}

resource_schema "aws_config_organization_conformance_pack" {
  cloudformation_type_name = "AWS::Config::OrganizationConformancePack"
}

resource_schema "aws_config_stored_query" {
  cloudformation_type_name = "AWS::Config::StoredQuery"
}

resource_schema "aws_connect_quick_connect" {
  cloudformation_type_name               = "AWS::Connect::QuickConnect"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_customerprofiles_domain" {
  cloudformation_type_name = "AWS::CustomerProfiles::Domain"
}

resource_schema "aws_customerprofiles_integration" {
  cloudformation_type_name               = "AWS::CustomerProfiles::Integration"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_customerprofiles_object_type" {
  cloudformation_type_name               = "AWS::CustomerProfiles::ObjectType"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_databrew_dataset" {
  cloudformation_type_name = "AWS::DataBrew::Dataset"
}

resource_schema "aws_databrew_job" {
  cloudformation_type_name = "AWS::DataBrew::Job"
}

resource_schema "aws_databrew_project" {
  cloudformation_type_name = "AWS::DataBrew::Project"
}

resource_schema "aws_databrew_recipe" {
  cloudformation_type_name = "AWS::DataBrew::Recipe"

  # Parameters property is 'anyOf', which we cannot yet handle.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_databrew_schedule" {
  cloudformation_type_name = "AWS::DataBrew::Schedule"
}

resource_schema "aws_datasync_agent" {
  cloudformation_type_name = "AWS::DataSync::Agent"
}

resource_schema "aws_datasync_location_efs" {
  cloudformation_type_name = "AWS::DataSync::LocationEFS"
}

resource_schema "aws_datasync_location_fsx_windows" {
  cloudformation_type_name = "AWS::DataSync::LocationFSxWindows"
}

resource_schema "aws_datasync_location_nfs" {
  cloudformation_type_name = "AWS::DataSync::LocationNFS"
}

resource_schema "aws_datasync_location_object_storage" {
  cloudformation_type_name = "AWS::DataSync::LocationObjectStorage"
}

resource_schema "aws_datasync_location_s3" {
  cloudformation_type_name = "AWS::DataSync::LocationS3"
}

resource_schema "aws_datasync_location_smb" {
  cloudformation_type_name = "AWS::DataSync::LocationSMB"
}

resource_schema "aws_datasync_task" {
  cloudformation_type_name = "AWS::DataSync::Task"
}

resource_schema "aws_detective_graph" {
  cloudformation_type_name = "AWS::Detective::Graph"
}

resource_schema "aws_detective_member_invitation" {
  cloudformation_type_name = "AWS::Detective::MemberInvitation"
}

resource_schema "aws_devopsguru_notification_channel" {
  cloudformation_type_name = "AWS::DevOpsGuru::NotificationChannel"
}

resource_schema "aws_devopsguru_resource_collection" {
  cloudformation_type_name               = "AWS::DevOpsGuru::ResourceCollection"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_dynamodb_global_table" {
  cloudformation_type_name = "AWS::DynamoDB::GlobalTable"
}

resource_schema "aws_ec2_carrier_gateway" {
  cloudformation_type_name = "AWS::EC2::CarrierGateway"
}

resource_schema "aws_ec2_dhcp_options" {
  cloudformation_type_name = "AWS::EC2::DHCPOptions"
}

resource_schema "aws_ec2_ec2_fleet" {
  cloudformation_type_name = "AWS::EC2::EC2Fleet"
}

resource_schema "aws_ec2_egress_only_internet_gateway" {
  cloudformation_type_name = "AWS::EC2::EgressOnlyInternetGateway"
}

resource_schema "aws_ec2_enclave_certificate_iam_role_association" {
  cloudformation_type_name               = "AWS::EC2::EnclaveCertificateIamRoleAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ec2_flow_log" {
  cloudformation_type_name = "AWS::EC2::FlowLog"
}

resource_schema "aws_ec2_gateway_route_table_association" {
  cloudformation_type_name               = "AWS::EC2::GatewayRouteTableAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ec2_local_gateway_route" {
  cloudformation_type_name = "AWS::EC2::LocalGatewayRoute"
}

resource_schema "aws_ec2_local_gateway_route_table_vpc_association" {
  cloudformation_type_name = "AWS::EC2::LocalGatewayRouteTableVPCAssociation"
}

resource_schema "aws_ec2_network_insights_analysis" {
  cloudformation_type_name = "AWS::EC2::NetworkInsightsAnalysis"
}

resource_schema "aws_ec2_network_insights_path" {
  cloudformation_type_name = "AWS::EC2::NetworkInsightsPath"
}

resource_schema "aws_ec2_prefix_list" {
  cloudformation_type_name = "AWS::EC2::PrefixList"
}

resource_schema "aws_ec2_spot_fleet" {
  cloudformation_type_name = "AWS::EC2::SpotFleet"
}

resource_schema "aws_ec2_transit_gateway" {
  cloudformation_type_name = "AWS::EC2::TransitGateway"
}

resource_schema "aws_ec2_transit_gateway_connect" {
  cloudformation_type_name = "AWS::EC2::TransitGatewayConnect"
}

resource_schema "aws_ec2_transit_gateway_multicast_domain" {
  cloudformation_type_name = "AWS::EC2::TransitGatewayMulticastDomain"
}

resource_schema "aws_ec2_transit_gateway_multicast_domain_association" {
  cloudformation_type_name               = "AWS::EC2::TransitGatewayMulticastDomainAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ec2_transit_gateway_multicast_group_member" {
  cloudformation_type_name               = "AWS::EC2::TransitGatewayMulticastGroupMember"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ec2_transit_gateway_multicast_group_source" {
  cloudformation_type_name               = "AWS::EC2::TransitGatewayMulticastGroupSource"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ec2_transit_gateway_peering_attachment" {
  cloudformation_type_name = "AWS::EC2::TransitGatewayPeeringAttachment"
}

resource_schema "aws_ec2_transit_gateway_vpc_attachment" {
  cloudformation_type_name = "AWS::EC2::TransitGatewayVpcAttachment"
}

resource_schema "aws_ecr_registry_policy" {
  cloudformation_type_name = "AWS::ECR::RegistryPolicy"
}

resource_schema "aws_ecr_replication_configuration" {
  cloudformation_type_name = "AWS::ECR::ReplicationConfiguration"
}

resource_schema "aws_ecr_repository" {
  cloudformation_type_name = "AWS::ECR::Repository"
}

resource_schema "aws_ecs_capacity_provider" {
  cloudformation_type_name = "AWS::ECS::CapacityProvider"
}

resource_schema "aws_ecs_cluster" {
  cloudformation_type_name = "AWS::ECS::Cluster"
}

resource_schema "aws_ecs_cluster_capacity_provider_associations" {
  cloudformation_type_name = "AWS::ECS::ClusterCapacityProviderAssociations"
}

resource_schema "aws_ecs_primary_task_set" {
  cloudformation_type_name               = "AWS::ECS::PrimaryTaskSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ecs_service" {
  cloudformation_type_name = "AWS::ECS::Service"
}

resource_schema "aws_ecs_task_definition" {
  cloudformation_type_name = "AWS::ECS::TaskDefinition"
}

resource_schema "aws_ecs_task_set" {
  cloudformation_type_name               = "AWS::ECS::TaskSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_efs_access_point" {
  cloudformation_type_name = "AWS::EFS::AccessPoint"
}

resource_schema "aws_efs_file_system" {
  cloudformation_type_name = "AWS::EFS::FileSystem"
}

resource_schema "aws_efs_mount_target" {
  cloudformation_type_name               = "AWS::EFS::MountTarget"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_eks_addon" {
  cloudformation_type_name               = "AWS::EKS::Addon"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_eks_fargate_profile" {
  cloudformation_type_name               = "AWS::EKS::FargateProfile"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_emr_studio" {
  cloudformation_type_name = "AWS::EMR::Studio"
}

resource_schema "aws_emr_studio_session_mapping" {
  cloudformation_type_name = "AWS::EMR::StudioSessionMapping"
}

resource_schema "aws_emrcontainers_virtual_cluster" {
  cloudformation_type_name = "AWS::EMRContainers::VirtualCluster"
}

resource_schema "aws_elasticache_global_replication_group" {
  cloudformation_type_name = "AWS::ElastiCache::GlobalReplicationGroup"
}

resource_schema "aws_elasticache_user" {
  cloudformation_type_name = "AWS::ElastiCache::User"
}

resource_schema "aws_elasticache_user_group" {
  cloudformation_type_name = "AWS::ElastiCache::UserGroup"
}

resource_schema "aws_elasticloadbalancingv2_listener" {
  cloudformation_type_name               = "AWS::ElasticLoadBalancingV2::Listener"
  suppress_plural_data_source_generation = true

  # error creating write-only attribute path (/properties/DefaultActions/*/AuthenticateOidcConfig/ClientSecret): invalid property path segment: "*"
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_elasticloadbalancingv2_listener_rule" {
  cloudformation_type_name               = "AWS::ElasticLoadBalancingV2::ListenerRule"
  suppress_plural_data_source_generation = true

  # error creating write-only attribute path (/properties/Actions/*/AuthenticateOidcConfig/ClientSecret): invalid property path segment: "*"
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_eventschemas_registry_policy" {
  cloudformation_type_name               = "AWS::EventSchemas::RegistryPolicy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_events_api_destination" {
  cloudformation_type_name = "AWS::Events::ApiDestination"
}

resource_schema "aws_events_archive" {
  cloudformation_type_name = "AWS::Events::Archive"
}

resource_schema "aws_events_connection" {
  cloudformation_type_name = "AWS::Events::Connection"

  # error creating write-only attribute path (/definitions/BasicAuthParameters/Password): expected "properties" for the second property path segment, got: "definitions"
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_fis_experiment_template" {
  cloudformation_type_name = "AWS::FIS::ExperimentTemplate"
}

resource_schema "aws_fms_notification_channel" {
  cloudformation_type_name               = "AWS::FMS::NotificationChannel"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_fms_policy" {
  cloudformation_type_name               = "AWS::FMS::Policy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_finspace_environment" {
  cloudformation_type_name = "AWS::FinSpace::Environment"
}

resource_schema "aws_frauddetector_detector" {
  cloudformation_type_name = "AWS::FraudDetector::Detector"
}

resource_schema "aws_frauddetector_entity_type" {
  cloudformation_type_name = "AWS::FraudDetector::EntityType"
}

resource_schema "aws_frauddetector_event_type" {
  cloudformation_type_name = "AWS::FraudDetector::EventType"
}

resource_schema "aws_frauddetector_label" {
  cloudformation_type_name = "AWS::FraudDetector::Label"
}

resource_schema "aws_frauddetector_outcome" {
  cloudformation_type_name = "AWS::FraudDetector::Outcome"
}

resource_schema "aws_frauddetector_variable" {
  cloudformation_type_name = "AWS::FraudDetector::Variable"
}

resource_schema "aws_gamelift_alias" {
  cloudformation_type_name = "AWS::GameLift::Alias"
}

resource_schema "aws_gamelift_fleet" {
  cloudformation_type_name = "AWS::GameLift::Fleet"
}

resource_schema "aws_gamelift_game_server_group" {
  cloudformation_type_name               = "AWS::GameLift::GameServerGroup"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_globalaccelerator_accelerator" {
  cloudformation_type_name               = "AWS::GlobalAccelerator::Accelerator"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_globalaccelerator_endpoint_group" {
  cloudformation_type_name               = "AWS::GlobalAccelerator::EndpointGroup"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_globalaccelerator_listener" {
  cloudformation_type_name               = "AWS::GlobalAccelerator::Listener"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_glue_registry" {
  cloudformation_type_name = "AWS::Glue::Registry"
}

resource_schema "aws_glue_schema" {
  cloudformation_type_name = "AWS::Glue::Schema"
}

resource_schema "aws_glue_schema_version" {
  cloudformation_type_name               = "AWS::Glue::SchemaVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_glue_schema_version_metadata" {
  cloudformation_type_name               = "AWS::Glue::SchemaVersionMetadata"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_greengrassv2_component_version" {
  cloudformation_type_name = "AWS::GreengrassV2::ComponentVersion"
}

resource_schema "aws_groundstation_config" {
  cloudformation_type_name = "AWS::GroundStation::Config"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_groundstation_dataflow_endpoint_group" {
  cloudformation_type_name = "AWS::GroundStation::DataflowEndpointGroup"
}

resource_schema "aws_groundstation_mission_profile" {
  cloudformation_type_name = "AWS::GroundStation::MissionProfile"
}

resource_schema "aws_healthlake_fhir_datastore" {
  cloudformation_type_name = "AWS::HealthLake::FHIRDatastore"
}

resource_schema "aws_iam_oidc_provider" {
  cloudformation_type_name = "AWS::IAM::OIDCProvider"
}

resource_schema "aws_iam_saml_provider" {
  cloudformation_type_name = "AWS::IAM::SAMLProvider"
}

resource_schema "aws_iam_server_certificate" {
  cloudformation_type_name = "AWS::IAM::ServerCertificate"
}

resource_schema "aws_iam_virtual_mfa_device" {
  cloudformation_type_name = "AWS::IAM::VirtualMFADevice"
}

resource_schema "aws_ivs_channel" {
  cloudformation_type_name = "AWS::IVS::Channel"
}

resource_schema "aws_ivs_playback_key_pair" {
  cloudformation_type_name = "AWS::IVS::PlaybackKeyPair"
}

resource_schema "aws_ivs_recording_configuration" {
  cloudformation_type_name = "AWS::IVS::RecordingConfiguration"
}

resource_schema "aws_ivs_stream_key" {
  cloudformation_type_name               = "AWS::IVS::StreamKey"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_imagebuilder_component" {
  cloudformation_type_name               = "AWS::ImageBuilder::Component"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_imagebuilder_container_recipe" {
  cloudformation_type_name = "AWS::ImageBuilder::ContainerRecipe"
}

resource_schema "aws_imagebuilder_distribution_configuration" {
  cloudformation_type_name = "AWS::ImageBuilder::DistributionConfiguration"
}

resource_schema "aws_imagebuilder_image" {
  cloudformation_type_name = "AWS::ImageBuilder::Image"
}

resource_schema "aws_imagebuilder_image_pipeline" {
  cloudformation_type_name = "AWS::ImageBuilder::ImagePipeline"
}

resource_schema "aws_imagebuilder_image_recipe" {
  cloudformation_type_name = "AWS::ImageBuilder::ImageRecipe"
}

resource_schema "aws_imagebuilder_infrastructure_configuration" {
  cloudformation_type_name = "AWS::ImageBuilder::InfrastructureConfiguration"
}

resource_schema "aws_iot_account_audit_configuration" {
  cloudformation_type_name = "AWS::IoT::AccountAuditConfiguration"
}

resource_schema "aws_iot_authorizer" {
  cloudformation_type_name = "AWS::IoT::Authorizer"
}

resource_schema "aws_iot_certificate" {
  cloudformation_type_name = "AWS::IoT::Certificate"
}

resource_schema "aws_iot_custom_metric" {
  cloudformation_type_name = "AWS::IoT::CustomMetric"
}

resource_schema "aws_iot_dimension" {
  cloudformation_type_name = "AWS::IoT::Dimension"
}

resource_schema "aws_iot_domain_configuration" {
  cloudformation_type_name = "AWS::IoT::DomainConfiguration"
}

resource_schema "aws_iot_fleet_metric" {
  cloudformation_type_name = "AWS::IoT::FleetMetric"
}

resource_schema "aws_iot_mitigation_action" {
  cloudformation_type_name = "AWS::IoT::MitigationAction"
}

resource_schema "aws_iot_provisioning_template" {
  cloudformation_type_name = "AWS::IoT::ProvisioningTemplate"
}

resource_schema "aws_iot_scheduled_audit" {
  cloudformation_type_name = "AWS::IoT::ScheduledAudit"
}

resource_schema "aws_iot_security_profile" {
  cloudformation_type_name = "AWS::IoT::SecurityProfile"
}

resource_schema "aws_iot_topic_rule" {
  cloudformation_type_name = "AWS::IoT::TopicRule"
}

resource_schema "aws_iot_topic_rule_destination" {
  cloudformation_type_name = "AWS::IoT::TopicRuleDestination"
}

resource_schema "aws_iotcoredeviceadvisor_suite_definition" {
  cloudformation_type_name               = "AWS::IoTCoreDeviceAdvisor::SuiteDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_iotevents_detector_model" {
  cloudformation_type_name = "AWS::IoTEvents::DetectorModel"
}

resource_schema "aws_iotevents_input" {
  cloudformation_type_name = "AWS::IoTEvents::Input"
}

resource_schema "aws_iotfleethub_application" {
  cloudformation_type_name = "AWS::IoTFleetHub::Application"
}

resource_schema "aws_iotsitewise_access_policy" {
  cloudformation_type_name               = "AWS::IoTSiteWise::AccessPolicy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_iotsitewise_asset" {
  cloudformation_type_name = "AWS::IoTSiteWise::Asset"
}

resource_schema "aws_iotsitewise_asset_model" {
  cloudformation_type_name = "AWS::IoTSiteWise::AssetModel"
}

resource_schema "aws_iotsitewise_dashboard" {
  cloudformation_type_name               = "AWS::IoTSiteWise::Dashboard"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_iotsitewise_gateway" {
  cloudformation_type_name = "AWS::IoTSiteWise::Gateway"
}

resource_schema "aws_iotsitewise_portal" {
  cloudformation_type_name = "AWS::IoTSiteWise::Portal"
}

resource_schema "aws_iotsitewise_project" {
  cloudformation_type_name               = "AWS::IoTSiteWise::Project"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_iotwireless_destination" {
  cloudformation_type_name = "AWS::IoTWireless::Destination"
}

resource_schema "aws_iotwireless_device_profile" {
  cloudformation_type_name = "AWS::IoTWireless::DeviceProfile"
}

resource_schema "aws_iotwireless_service_profile" {
  cloudformation_type_name = "AWS::IoTWireless::ServiceProfile"
}

resource_schema "aws_iotwireless_task_definition" {
  cloudformation_type_name               = "AWS::IoTWireless::TaskDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_iotwireless_wireless_device" {
  cloudformation_type_name = "AWS::IoTWireless::WirelessDevice"
}

resource_schema "aws_iotwireless_wireless_gateway" {
  cloudformation_type_name = "AWS::IoTWireless::WirelessGateway"
}

resource_schema "aws_kms_alias" {
  cloudformation_type_name = "AWS::KMS::Alias"
}

resource_schema "aws_kms_key" {
  cloudformation_type_name               = "AWS::KMS::Key"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_kms_replica_key" {
  cloudformation_type_name               = "AWS::KMS::ReplicaKey"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_kendra_data_source" {
  cloudformation_type_name               = "AWS::Kendra::DataSource"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_kendra_faq" {
  cloudformation_type_name               = "AWS::Kendra::Faq"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_kendra_index" {
  cloudformation_type_name = "AWS::Kendra::Index"
}

resource_schema "aws_kinesis_stream" {
  cloudformation_type_name = "AWS::Kinesis::Stream"
}

resource_schema "aws_kinesisfirehose_delivery_stream" {
  cloudformation_type_name = "AWS::KinesisFirehose::DeliveryStream"
}

resource_schema "aws_lambda_code_signing_config" {
  cloudformation_type_name = "AWS::Lambda::CodeSigningConfig"
}

resource_schema "aws_lambda_event_source_mapping" {
  cloudformation_type_name               = "AWS::Lambda::EventSourceMapping"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_lambda_function" {
  cloudformation_type_name = "AWS::Lambda::Function"
}

resource_schema "aws_licensemanager_grant" {
  cloudformation_type_name = "AWS::LicenseManager::Grant"
}

resource_schema "aws_licensemanager_license" {
  cloudformation_type_name = "AWS::LicenseManager::License"
}

resource_schema "aws_location_geofence_collection" {
  cloudformation_type_name = "AWS::Location::GeofenceCollection"
}

resource_schema "aws_location_map" {
  cloudformation_type_name = "AWS::Location::Map"
}

resource_schema "aws_location_place_index" {
  cloudformation_type_name = "AWS::Location::PlaceIndex"
}

resource_schema "aws_location_route_calculator" {
  cloudformation_type_name = "AWS::Location::RouteCalculator"
}

resource_schema "aws_location_tracker" {
  cloudformation_type_name = "AWS::Location::Tracker"
}

resource_schema "aws_location_tracker_consumer" {
  cloudformation_type_name               = "AWS::Location::TrackerConsumer"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_logs_log_group" {
  cloudformation_type_name = "AWS::Logs::LogGroup"
}

resource_schema "aws_logs_query_definition" {
  cloudformation_type_name = "AWS::Logs::QueryDefinition"
}

resource_schema "aws_logs_resource_policy" {
  cloudformation_type_name = "AWS::Logs::ResourcePolicy"
}

resource_schema "aws_lookoutmetrics_alert" {
  cloudformation_type_name = "AWS::LookoutMetrics::Alert"
}

resource_schema "aws_lookoutmetrics_anomaly_detector" {
  cloudformation_type_name = "AWS::LookoutMetrics::AnomalyDetector"
}

resource_schema "aws_lookoutvision_project" {
  cloudformation_type_name = "AWS::LookoutVision::Project"
}

resource_schema "aws_mwaa_environment" {
  cloudformation_type_name = "AWS::MWAA::Environment"
}

resource_schema "aws_macie_custom_data_identifier" {
  cloudformation_type_name               = "AWS::Macie::CustomDataIdentifier"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_macie_findings_filter" {
  cloudformation_type_name               = "AWS::Macie::FindingsFilter"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_macie_session" {
  cloudformation_type_name               = "AWS::Macie::Session"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediaconnect_flow" {
  cloudformation_type_name = "AWS::MediaConnect::Flow"
}

resource_schema "aws_mediaconnect_flow_entitlement" {
  cloudformation_type_name               = "AWS::MediaConnect::FlowEntitlement"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediaconnect_flow_output" {
  cloudformation_type_name               = "AWS::MediaConnect::FlowOutput"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediaconnect_flow_source" {
  cloudformation_type_name               = "AWS::MediaConnect::FlowSource"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediaconnect_flow_vpc_interface" {
  cloudformation_type_name               = "AWS::MediaConnect::FlowVpcInterface"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediapackage_asset" {
  cloudformation_type_name               = "AWS::MediaPackage::Asset"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediapackage_channel" {
  cloudformation_type_name = "AWS::MediaPackage::Channel"
}

resource_schema "aws_mediapackage_origin_endpoint" {
  cloudformation_type_name = "AWS::MediaPackage::OriginEndpoint"
}

resource_schema "aws_mediapackage_packaging_configuration" {
  cloudformation_type_name               = "AWS::MediaPackage::PackagingConfiguration"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_mediapackage_packaging_group" {
  cloudformation_type_name = "AWS::MediaPackage::PackagingGroup"
}

resource_schema "aws_networkfirewall_firewall" {
  cloudformation_type_name = "AWS::NetworkFirewall::Firewall"
}

resource_schema "aws_networkfirewall_firewall_policy" {
  cloudformation_type_name = "AWS::NetworkFirewall::FirewallPolicy"
}

resource_schema "aws_networkfirewall_logging_configuration" {
  cloudformation_type_name               = "AWS::NetworkFirewall::LoggingConfiguration"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_networkfirewall_rule_group" {
  cloudformation_type_name = "AWS::NetworkFirewall::RuleGroup"
}

resource_schema "aws_networkmanager_customer_gateway_association" {
  cloudformation_type_name               = "AWS::NetworkManager::CustomerGatewayAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_networkmanager_device" {
  cloudformation_type_name               = "AWS::NetworkManager::Device"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_networkmanager_global_network" {
  cloudformation_type_name = "AWS::NetworkManager::GlobalNetwork"
}

resource_schema "aws_networkmanager_link" {
  cloudformation_type_name = "AWS::NetworkManager::Link"

  # Top-level "Provider" property conflicts with Terraform meta-argument.
  suppress_plural_data_source_generation   = true
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_networkmanager_link_association" {
  cloudformation_type_name               = "AWS::NetworkManager::LinkAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_networkmanager_site" {
  cloudformation_type_name               = "AWS::NetworkManager::Site"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_networkmanager_transit_gateway_registration" {
  cloudformation_type_name               = "AWS::NetworkManager::TransitGatewayRegistration"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_nimblestudio_launch_profile" {
  cloudformation_type_name               = "AWS::NimbleStudio::LaunchProfile"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_nimblestudio_streaming_image" {
  cloudformation_type_name               = "AWS::NimbleStudio::StreamingImage"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_nimblestudio_studio" {
  cloudformation_type_name = "AWS::NimbleStudio::Studio"
}

resource_schema "aws_nimblestudio_studio_component" {
  cloudformation_type_name               = "AWS::NimbleStudio::StudioComponent"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_opensearchservice_domain" {
  cloudformation_type_name               = "AWS::OpenSearchService::Domain"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_opsworkscm_server" {
  cloudformation_type_name = "AWS::OpsWorksCM::Server"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_qldb_stream" {
  cloudformation_type_name               = "AWS::QLDB::Stream"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_analysis" {
  cloudformation_type_name               = "AWS::QuickSight::Analysis"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_dashboard" {
  cloudformation_type_name               = "AWS::QuickSight::Dashboard"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_data_set" {
  cloudformation_type_name               = "AWS::QuickSight::DataSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_data_source" {
  cloudformation_type_name               = "AWS::QuickSight::DataSource"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_template" {
  cloudformation_type_name               = "AWS::QuickSight::Template"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_quicksight_theme" {
  cloudformation_type_name               = "AWS::QuickSight::Theme"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_rds_db_proxy" {
  cloudformation_type_name = "AWS::RDS::DBProxy"
}

resource_schema "aws_rds_db_proxy_endpoint" {
  cloudformation_type_name = "AWS::RDS::DBProxyEndpoint"
}

resource_schema "aws_rds_db_proxy_target_group" {
  cloudformation_type_name               = "AWS::RDS::DBProxyTargetGroup"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_rds_global_cluster" {
  cloudformation_type_name = "AWS::RDS::GlobalCluster"
}

resource_schema "aws_redshift_cluster" {
  cloudformation_type_name = "AWS::Redshift::Cluster"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_resourcegroups_group" {
  cloudformation_type_name = "AWS::ResourceGroups::Group"
}

resource_schema "aws_robomaker_fleet" {
  cloudformation_type_name = "AWS::RoboMaker::Fleet"
}

resource_schema "aws_robomaker_robot" {
  cloudformation_type_name = "AWS::RoboMaker::Robot"
}

resource_schema "aws_robomaker_robot_application_version" {
  cloudformation_type_name               = "AWS::RoboMaker::RobotApplicationVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_robomaker_simulation_application" {
  cloudformation_type_name = "AWS::RoboMaker::SimulationApplication"
}

resource_schema "aws_robomaker_simulation_application_version" {
  cloudformation_type_name               = "AWS::RoboMaker::SimulationApplicationVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53_dnssec" {
  cloudformation_type_name               = "AWS::Route53::DNSSEC"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53_health_check" {
  cloudformation_type_name = "AWS::Route53::HealthCheck"
}

resource_schema "aws_route53_hosted_zone" {
  cloudformation_type_name = "AWS::Route53::HostedZone"
}

resource_schema "aws_route53_key_signing_key" {
  cloudformation_type_name               = "AWS::Route53::KeySigningKey"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53recoverycontrol_cluster" {
  cloudformation_type_name = "AWS::Route53RecoveryControl::Cluster"
}

resource_schema "aws_route53recoverycontrol_control_panel" {
  cloudformation_type_name = "AWS::Route53RecoveryControl::ControlPanel"
}

resource_schema "aws_route53recoverycontrol_routing_control" {
  cloudformation_type_name               = "AWS::Route53RecoveryControl::RoutingControl"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53recoverycontrol_safety_rule" {
  cloudformation_type_name               = "AWS::Route53RecoveryControl::SafetyRule"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53recoveryreadiness_cell" {
  cloudformation_type_name = "AWS::Route53RecoveryReadiness::Cell"
}

resource_schema "aws_route53recoveryreadiness_readiness_check" {
  cloudformation_type_name               = "AWS::Route53RecoveryReadiness::ReadinessCheck"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53recoveryreadiness_recovery_group" {
  cloudformation_type_name = "AWS::Route53RecoveryReadiness::RecoveryGroup"
}

resource_schema "aws_route53recoveryreadiness_resource_set" {
  cloudformation_type_name = "AWS::Route53RecoveryReadiness::ResourceSet"
}

resource_schema "aws_route53resolver_firewall_domain_list" {
  cloudformation_type_name               = "AWS::Route53Resolver::FirewallDomainList"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53resolver_firewall_rule_group" {
  cloudformation_type_name               = "AWS::Route53Resolver::FirewallRuleGroup"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53resolver_firewall_rule_group_association" {
  cloudformation_type_name               = "AWS::Route53Resolver::FirewallRuleGroupAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_route53resolver_resolver_dnssec_config" {
  cloudformation_type_name = "AWS::Route53Resolver::ResolverDNSSECConfig"
}

resource_schema "aws_route53resolver_resolver_query_logging_config" {
  cloudformation_type_name = "AWS::Route53Resolver::ResolverQueryLoggingConfig"
}

resource_schema "aws_route53resolver_resolver_query_logging_config_association" {
  cloudformation_type_name = "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation"
}

resource_schema "aws_s3_access_point" {
  cloudformation_type_name = "AWS::S3::AccessPoint"
}

resource_schema "aws_s3_multi_region_access_point" {
  cloudformation_type_name = "AWS::S3::MultiRegionAccessPoint"
}

resource_schema "aws_s3_multi_region_access_point_policy" {
  cloudformation_type_name               = "AWS::S3::MultiRegionAccessPointPolicy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_s3_storage_lens" {
  cloudformation_type_name = "AWS::S3::StorageLens"
}

resource_schema "aws_s3objectlambda_access_point" {
  cloudformation_type_name = "AWS::S3ObjectLambda::AccessPoint"
}

resource_schema "aws_s3objectlambda_access_point_policy" {
  cloudformation_type_name               = "AWS::S3ObjectLambda::AccessPointPolicy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_s3outposts_access_point" {
  cloudformation_type_name               = "AWS::S3Outposts::AccessPoint"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_s3outposts_bucket" {
  cloudformation_type_name               = "AWS::S3Outposts::Bucket"
  suppress_plural_data_source_generation = true

  # AndOperator property is 'oneOf', which we cannot yet handle.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_s3outposts_bucket_policy" {
  cloudformation_type_name               = "AWS::S3Outposts::BucketPolicy"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_s3outposts_endpoint" {
  cloudformation_type_name = "AWS::S3Outposts::Endpoint"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_ses_configuration_set" {
  cloudformation_type_name = "AWS::SES::ConfigurationSet"
}

resource_schema "aws_ses_contact_list" {
  cloudformation_type_name = "AWS::SES::ContactList"
}

resource_schema "aws_ssm_association" {
  cloudformation_type_name               = "AWS::SSM::Association"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ssm_document" {
  cloudformation_type_name               = "AWS::SSM::Document"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ssm_resource_data_sync" {
  cloudformation_type_name = "AWS::SSM::ResourceDataSync"
}

resource_schema "aws_ssmcontacts_contact" {
  cloudformation_type_name               = "AWS::SSMContacts::Contact"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ssmcontacts_contact_channel" {
  cloudformation_type_name               = "AWS::SSMContacts::ContactChannel"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_ssmincidents_replication_set" {
  cloudformation_type_name = "AWS::SSMIncidents::ReplicationSet"
}

resource_schema "aws_ssmincidents_response_plan" {
  cloudformation_type_name = "AWS::SSMIncidents::ResponsePlan"
}

resource_schema "aws_sso_assignment" {
  cloudformation_type_name               = "AWS::SSO::Assignment"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sso_instance_access_control_attribute_configuration" {
  cloudformation_type_name               = "AWS::SSO::InstanceAccessControlAttributeConfiguration"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sso_permission_set" {
  cloudformation_type_name               = "AWS::SSO::PermissionSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_app" {
  cloudformation_type_name = "AWS::SageMaker::App"
}

resource_schema "aws_sagemaker_app_image_config" {
  cloudformation_type_name = "AWS::SageMaker::AppImageConfig"
}

resource_schema "aws_sagemaker_data_quality_job_definition" {
  cloudformation_type_name               = "AWS::SageMaker::DataQualityJobDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_device" {
  cloudformation_type_name               = "AWS::SageMaker::Device"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_device_fleet" {
  cloudformation_type_name               = "AWS::SageMaker::DeviceFleet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_domain" {
  cloudformation_type_name = "AWS::SageMaker::Domain"
}

resource_schema "aws_sagemaker_feature_group" {
  cloudformation_type_name = "AWS::SageMaker::FeatureGroup"
}

resource_schema "aws_sagemaker_image" {
  cloudformation_type_name = "AWS::SageMaker::Image"
}

resource_schema "aws_sagemaker_image_version" {
  cloudformation_type_name               = "AWS::SageMaker::ImageVersion"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_model_bias_job_definition" {
  cloudformation_type_name               = "AWS::SageMaker::ModelBiasJobDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_model_explainability_job_definition" {
  cloudformation_type_name               = "AWS::SageMaker::ModelExplainabilityJobDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_model_package_group" {
  cloudformation_type_name = "AWS::SageMaker::ModelPackageGroup"
}

resource_schema "aws_sagemaker_model_quality_job_definition" {
  cloudformation_type_name               = "AWS::SageMaker::ModelQualityJobDefinition"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_sagemaker_monitoring_schedule" {
  cloudformation_type_name = "AWS::SageMaker::MonitoringSchedule"
}

resource_schema "aws_sagemaker_pipeline" {
  cloudformation_type_name = "AWS::SageMaker::Pipeline"
}

resource_schema "aws_sagemaker_project" {
  cloudformation_type_name = "AWS::SageMaker::Project"
}

resource_schema "aws_sagemaker_user_profile" {
  cloudformation_type_name = "AWS::SageMaker::UserProfile"
}

resource_schema "aws_servicecatalog_cloudformation_provisioned_product" {
  cloudformation_type_name               = "AWS::ServiceCatalog::CloudFormationProvisionedProduct"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_servicecatalog_service_action" {
  cloudformation_type_name = "AWS::ServiceCatalog::ServiceAction"
}

resource_schema "aws_servicecatalog_service_action_association" {
  cloudformation_type_name               = "AWS::ServiceCatalog::ServiceActionAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_servicecatalogappregistry_application" {
  cloudformation_type_name               = "AWS::ServiceCatalogAppRegistry::Application"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_servicecatalogappregistry_attribute_group" {
  cloudformation_type_name               = "AWS::ServiceCatalogAppRegistry::AttributeGroup"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_servicecatalogappregistry_attribute_group_association" {
  cloudformation_type_name               = "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_servicecatalogappregistry_resource_association" {
  cloudformation_type_name               = "AWS::ServiceCatalogAppRegistry::ResourceAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_signer_profile_permission" {
  cloudformation_type_name               = "AWS::Signer::ProfilePermission"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_signer_signing_profile" {
  cloudformation_type_name = "AWS::Signer::SigningProfile"
}

resource_schema "aws_stepfunctions_state_machine" {
  cloudformation_type_name               = "AWS::StepFunctions::StateMachine"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_synthetics_canary" {
  cloudformation_type_name = "AWS::Synthetics::Canary"

  # Top-level "Id" property is not a primary identifier.
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
  suppress_plural_data_source_generation   = true
}

resource_schema "aws_timestream_database" {
  cloudformation_type_name = "AWS::Timestream::Database"
}

resource_schema "aws_timestream_table" {
  cloudformation_type_name = "AWS::Timestream::Table"
}

resource_schema "aws_wafv2_ip_set" {
  cloudformation_type_name               = "AWS::WAFv2::IPSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_wafv2_logging_configuration" {
  cloudformation_type_name = "AWS::WAFv2::LoggingConfiguration"
}

resource_schema "aws_wafv2_regex_pattern_set" {
  cloudformation_type_name               = "AWS::WAFv2::RegexPatternSet"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_wafv2_rule_group" {
  cloudformation_type_name               = "AWS::WAFv2::RuleGroup"
  suppress_plural_data_source_generation = true

  # Goes into infinite recursion while generating code...
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_wafv2_web_acl" {
  cloudformation_type_name               = "AWS::WAFv2::WebACL"
  suppress_plural_data_source_generation = true

  # Goes into infinite recursion while generating code...
  suppress_resource_generation             = true
  suppress_singular_data_source_generation = true
}

resource_schema "aws_wafv2_web_acl_association" {
  cloudformation_type_name               = "AWS::WAFv2::WebACLAssociation"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_workspaces_connection_alias" {
  cloudformation_type_name               = "AWS::WorkSpaces::ConnectionAlias"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_xray_group" {
  cloudformation_type_name               = "AWS::XRay::Group"
  suppress_plural_data_source_generation = true
}

resource_schema "aws_xray_sampling_rule" {
  cloudformation_type_name               = "AWS::XRay::SamplingRule"
  suppress_plural_data_source_generation = true
}
