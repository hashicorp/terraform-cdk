# OVHcloud example for CDKTF

## General

This example in Go allows you to:

- Create a [Managed Kubernetes Service](https://www.ovhcloud.com/fr/public-cloud/kubernetes/) (MKS) cluster
- Create a Node Pool
- Save the kubeconfig file

## Prerequisites

Export your credentials as environment variables

| Provider Argument | Environment Variables    | Description                                                                                                           | Mandatory |
| ----------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------- |
| `endpoint`      | `OVH_ENDPOINT`         | OVHcloud Endpoint. Possible value are: `ovh-eu`, `ovh-ca`, `ovh-us`, `soyoustart-eu`, `soyoustart-ca`, `kimsufi-ca`, `kimsufi-eu`, `runabove-ca`                                       | ✅        |
| `application_key`      | `OVH_APPLICATION_KEY`         | OVHcloud Access Key                                       | ✅        |
| `application_secret`      | `OVH_APPLICATION_SECRET`         | OVHcloud Secret Key                               | ✅        |
| `consumer_key`      | `OVH_CONSUMER_KEY` | OVHcloud Consumer Key | ✅        |
| `service_name`      | `OVH_CLOUD_PROJECT_SERVICE` | OVHcloud Public Cloud project ID| ✅        |

 These keys can be generated via the [OVHcloud token generation page](https://api.ovh.com/createToken/?GET=/*&POST=/*&PUT=/*&DELETE=/*).

## Deploy resources

```bash
cdktf deploy
```

The Terraform plan will be displayed and a prompt will ask if you want to `Approve`, `Dismiss` or `Stop`. Choose `Approve` to apply the resources, datasources and output you want.

## Destroy resources

```bash
cdktf destroy
```