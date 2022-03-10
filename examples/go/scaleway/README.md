## Scaleway example

- Reserve an IP address
- Create a Compute Instance with the reserved IP address

Don't forget to export your credentials as environment variables

| Provider Argument | Environment Variables    | Description                                                                                                           | Mandatory |
| ----------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------- |
| `access_key`      | `SCW_ACCESS_KEY`         | [Scaleway access key](https://console.scaleway.com/project/credentials)                                               | ✅        |
| `secret_key`      | `SCW_SECRET_KEY`         | [Scaleway secret key](https://console.scaleway.com/project/credentials)                                               | ✅        |
| `project_id`      | `SCW_DEFAULT_PROJECT_ID` | The [project ID](https://console.scaleway.com/project/settings) that will be used as default value for all resources. | ✅        |
