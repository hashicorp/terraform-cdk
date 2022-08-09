# Terraform Documentation

This directory contains the portions of [the Terraform website][terraform.io] that pertain to the Terraform CDK.

The files in this directory are intended to be used in conjunction with
[the `terraform-website` repository](https://github.com/hashicorp/terraform-website), which brings all of the
different documentation sources together and contains the scripts for testing and building the site as
a whole.

## Updating Sidebar Navigation

You must update the sidebar navigation for the CDKTF documentation any time that you add or delete a documentation page. The website builds the sidebar navigation menu from the [nav-data] JSON file. For more details about how to update this file, refer to https://github.com/hashicorp/terraform-website#editing-navigation-sidebars.

## Adding Redirects

You must add a redirect when you move, rename, or delete documentation pages. Refer to https://github.com/hashicorp/terraform-website#redirects for details.

## Previewing Changes

You should preview your changes locally to ensure that the content is rendering properly before you create a pull request. The build includes content from this repository and the [`terraform-website`](https://github.com/hashicorp/terraform-website/) repository, allowing you to preview the entire Terraform documentation site.

To preview your content, complete the following steps:

**Set Up Local Environment**

1. [Install Docker](https://docs.docker.com/get-docker/).
1. Restart your terminal or command line session.

**Launch Site Locally**

1. Navigate into your local `terraform-cdk` top-level directory and run `make website`.
1. Open `http://localhost:3000` in your web browser. While the preview is running, you can edit pages and Next.js will automatically rebuild them.
1. When you're done with the preview, press `ctrl-C` in your terminal to stop the server.

## Deployment

The website reads content from release tags to generate documentation for previous versions of CDK for Terraform. Changes merged into `main` will be included in the documentation for the next product release.

The website reads the latest version of documentation from the `stable-website` branch. To immediately update the latest version of the documentation, [cherry-pick](https://git-scm.com/docs/git-cherry-pick) your changes to `stable-website`. Changes pushed to `stable-website` will be reflected on [terraform.io] within an hour.

You cannot edit documentation for past versions of CDK for Terraform. Documentation is an artifact of a product release. We push docs fixes forward for the next release, rather than retroactively fixing older versions.

[nav-data]: https://github.com/hashicorp/terraform-cdk/blob/main/website/data/cdktf-nav-data.json
[terraform.io]: https://www.terraform.io/

## Code samples

When adding new configuration code samples, use `CodeTabs` to provide them for all supported languages. If you don't intend to support more languages than Typescript you should use the `typescript` tag, if you use it within a `CodeTabs` component you should use `ts` instead. This is a convention to help us separately find these cases in the search. To translate a code sample across all languages you can use the [jsii-workbench](https://github.com/DanielMSchmidt/jsii-workbench) as a helper.
