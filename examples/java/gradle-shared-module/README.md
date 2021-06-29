# Shared Common Module CDKTF Example

This project serves as an example of how to build and share cdktf modules using gradle.

## Setup Github Credentials

Add the following to `./gradle.properties` or `~/.gradle/gradle.properties`

```properties
githubUsername=myusername
githubToken=******************
```

The token used must have read permissions granted for Github registries.

## Generate Constructs For All Projects

From the root directory of the project, execute the following command

```bash
./gradlew get
```
