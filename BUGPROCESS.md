# CDK for Terraform Issue Triage & Labeling

New issues are labeled with `new`. Bugs and feature requests filed by other engineers on the team can bypass this process; engineers should generally triage their own self-reports.

## [Bugs](https://github.com/hashicorp/terraform-cdk/issues?q=is%3Aissue+is%3Aopen+label%3Abug+label%3Anew)

- Try to reproduce bugs. If they can readily be reproduced, label them `confirmed`. If they can't, ask for information and label them `needs-reproduction` and `waiting-on-answer`.
- For bugs that seem serious and urgent, label them `priority/important-soon` or `priority/critical-urgent` if a key workflow is completely broken. Pull them into the current or next release. Self-assign if you plan to do them, or drop a comment in the team slack channel to coordinate who
- If it's not really a bug, try to explain to the user what to do, consider filing a documentation issue, and close the issue.
- Remove the `new` label

## [Enhancement requests](https://github.com/hashicorp/terraform-cdk/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement+label%3Anew+)

- Categorize issues, e.g. `documentation`
- Read and try to understand the request. If it's unclear what the user wants, or why, ask for clarification.
- Remove the `new` label, and try to (subjectively) prioritize using the `priority/` labels. If it's not obvious, label it `needs-priority`.

If an issue requires discussion with the user to get it out of this initial state, leave "new" on there and label it `waiting-on-answer` until this phase of triage is done.
