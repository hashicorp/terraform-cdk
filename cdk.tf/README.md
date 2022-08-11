# cdk.tf

This domain currently only is used for short urls linking to various docs and places and are used in e.g. error messages or across social media.

## Deployment

This service is deployed via Vercel. The Vercel Github integration will build previews for pull requests and the `main` branch will be deployed to production automatically. Refer to Vercel for deployment logs in case an error is posted via the Github integration: https://vercel.com/hashicorp/terraform-cdk-redirects
