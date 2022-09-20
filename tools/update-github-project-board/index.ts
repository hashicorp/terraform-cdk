// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Octokit } from "@octokit/rest";
import { graphql } from "@octokit/graphql";

const ORG = process.env.ORGANIZATION || "hashicorp";
const PROJECT_ID = parseInt(process.env.PROJECT_NUMBER || "125", 10);
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type Issue = Awaited<ReturnType<typeof octokit.issues.list>>["data"][0];

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const gql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

async function getAllRepos() {
  const repos: string[] = [];
  const allHashicorpRepos = await octokit.paginate(octokit.repos.listForOrg, {
    org: "hashicorp",
  });

  allHashicorpRepos.forEach((repo) => {
    if (
      repo.name.indexOf("cdktf") !== -1 ||
      repo.name.indexOf("terraform-cdk") !== -1
    ) {
      repos.push(repo.name);
    }
  });

  return repos;
}

async function getCurrentProjectItemIds(): Promise<string[]> {
  const {
    organization: {
      projectNext: {
        items: { nodes },
      },
    },
  } = (await gql(
    `
  query($org: String!, $number: Int!) {
    organization(login: $org) {
      projectNext(number: $number) {
        items(first: 100) {
          nodes {
            id
          }
        }
      }
    }
  }
  `,
    { org: ORG, number: PROJECT_ID }
  )) as any;

  return nodes.map((node: { id: string }) => node.id);
}

async function addToProject(
  projectId: string,
  issue: Issue,
  statusColumnId: string,
  statusValue: string
) {
  // Add to project
  const {
    addProjectNextItem: {
      projectNextItem: { id: cardId },
    },
  } = (await gql(
    `
  mutation($project:ID!, $issue:ID!) {
    addProjectNextItem(input: {projectId: $project, contentId: $issue}) {
      projectNextItem {
        id
      }
    }
  }
  `,
    { project: projectId, issue: issue.node_id }
  )) as any;

  // Set status
  await gql(
    `
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
  ) {
    set_status: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: $status_value
    }) {
      projectNextItem {
        id
      }
    }
}
  `,
    {
      project: projectId,
      item: cardId,
      status_field: statusColumnId,
      status_value: statusValue,
    }
  );
}

async function removeItemFromProject(projectId: string, itemId: string) {
  await gql(
    `
  mutation(
    $project: ID!
    $item: ID!
  ) {
    deleteProjectNextItem(input: {projectId: $project, itemId: $item}) {
      clientMutationId
    }
  }
  `,
    { project: projectId, item: itemId }
  );
}

async function findAllItems(repos: string[]): Promise<{
  openIssues: Issue[];
  openPRs: Issue[];
}> {
  let allCdktfItems = [] as Issue[];
  await Promise.all(
    repos.map(async (repo) => {
      const issues = await octokit.paginate(octokit.issues.listForRepo, {
        owner: "hashicorp",
        repo,
        state: "open",
      });

      allCdktfItems = [...allCdktfItems, ...issues];
    })
  );

  const allIssues = allCdktfItems.filter((item) => !item.pull_request);
  const openIssues = allIssues.filter((issue) => issue.state === "open");

  const allPRs = allCdktfItems.filter((item) => item.pull_request);
  const openPRs = allPRs.filter((item) => item.state === "open");

  return {
    openIssues,
    openPRs,
  };
}

async function run() {
  console.log("Fetching Repos...");
  const repos = await getAllRepos();

  console.log("Fetching Project...");
  const {
    organization: { projectNext: project },
  } = (await gql(
    `query($org: String!, $number: Int!) {
    organization(login: $org) {
      projectNext(number: $number) {
        id
        fields(first:20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }`,
    { org: ORG, number: PROJECT_ID }
  )) as any;

  const projectId = project.id;
  const statusColumn = project.fields.nodes.find(
    (node: { name: string }) => node.name === "Status"
  );
  const statusSettings = JSON.parse(statusColumn.settings);
  const statusIdByName = statusSettings.options.reduce(
    (acc: Record<string, string>, column: { id: string; name: string }) => ({
      ...acc,
      [column.name]: column.id,
    }),
    {} as Record<string, string>
  );

  console.log("Fetching Open Issues...");
  const { openIssues, openPRs } = await findAllItems(repos);
  const unlabeledIssues = openIssues.filter(
    (issue) => issue.labels.length === 0
  );
  const newIssues = openIssues.filter((issue) =>
    issue.labels.some((label) =>
      typeof label === "string" ? label === "new" : label.name === "new"
    )
  );
  const needsPriorityIssues = openIssues.filter((issue) =>
    issue.labels.some((label) =>
      typeof label === "string"
        ? label === "needs-priority"
        : label.name === "needs-priority"
    )
  );

  const openPrsInProviderRepos = openPRs.filter((issue: Issue) =>
    issue.repository_url.includes("hashicorp/cdktf-provider-")
  );

  const openCommunityPRs = openPRs.filter((issue: Issue) =>
    [
      "hashicorp/cdktf-repository-manager",
      "hashicorp/cdktf-aws-cdk",
      "hashicorp/docker-on-aws-ecs-with-terraform-cdk-using-typescript",
      "hashicorp/cdktf-integration-serverless-example",
    ].some((url) => issue.repository_url.includes(url))
  );

  console.log("Fetching Project Items...");
  const allIssueIdsPresent = await getCurrentProjectItemIds();

  console.log("Updating Project...");
  const allIssuesToBeAdded = [
    ...unlabeledIssues,
    ...newIssues,
    ...needsPriorityIssues,
    ...openPrsInProviderRepos,
    ...openCommunityPRs,
  ].map((issue) => issue.node_id);

  const issuesToRemove = allIssueIdsPresent.filter(
    (issueId) => !allIssuesToBeAdded.includes(issueId)
  );

  console.log("Removing issues...");
  for (const issueId of issuesToRemove) {
    await removeItemFromProject(projectId, issueId);
  }

  console.log(`Adding ${unlabeledIssues.length} unlabeled issues...`);
  for (const issue of unlabeledIssues) {
    await addToProject(
      projectId,
      issue,
      statusColumn.id,
      statusIdByName.Unlabeled
    );
  }

  console.log(`Adding ${newIssues.length} new issues...`);
  for (const issue of newIssues) {
    await addToProject(projectId, issue, statusColumn.id, statusIdByName.New);
  }

  console.log(`Adding ${needsPriorityIssues.length} needs-priority issues...`);
  for (const issue of needsPriorityIssues) {
    await addToProject(
      projectId,
      issue,
      statusColumn.id,
      statusIdByName["Needs Priority"]
    );
  }

  console.log(
    `Adding ${openPrsInProviderRepos.length} open PRs in Provider Repos...`
  );
  for (const pr of openPrsInProviderRepos) {
    await addToProject(
      projectId,
      pr,
      statusColumn.id,
      statusIdByName["Unmerged Provider PRs"]
    );
  }

  console.log(`Adding ${openCommunityPRs.length} open community PRs...`);
  for (const pr of openCommunityPRs) {
    await addToProject(
      projectId,
      pr,
      statusColumn.id,
      statusIdByName["Community PRs"]
    );
  }
}

run();
