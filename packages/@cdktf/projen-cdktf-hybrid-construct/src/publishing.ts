import { pascalCase } from "change-case";
import { ConstructLibraryOptions } from "projen/lib/cdk";

export type Registry = "npm" | "maven" | "nuget" | "pypi";

export type PublishOptions = {
  name: string;
  namespace: string;
  registries: Registry[];
};

type AtomicObject =
  | Function
  | Promise<any>
  | Date
  | RegExp
  | Boolean
  | Number
  | String;

type Mutable<T> = T extends AtomicObject
  ? T
  : T extends ReadonlyMap<infer K, infer V> // Map extends ReadonlyMap
  ? Map<Mutable<K>, Mutable<V>>
  : T extends ReadonlySet<infer V> // Set extends ReadonlySet
  ? Set<Mutable<V>>
  : T extends object
  ? { -readonly [K in keyof T]: Mutable<T[K]> }
  : T;

type PublishingConfig = Mutable<
  Pick<
    ConstructLibraryOptions,
    | "publishToPypi"
    | "publishToMaven"
    | "publishToNuget"
    | "releaseToNpm"
    | "npmRegistryUrl"
  >
>;

export function publishToRegistries(options: PublishOptions): PublishingConfig {
  const { name, namespace, registries } = options;
  const sanitizedNamespace = namespace.replace(/-/gi, "_");
  const sanitizedName = name.replace(/-/gi, "_");
  const config: PublishingConfig = {
    releaseToNpm: registries.includes("npm"),
  };

  if (registries.includes("pypi")) {
    config.publishToPypi = {
      distName: `${sanitizedNamespace}-${sanitizedName}`,
      module: `${sanitizedNamespace}_${sanitizedName}`,
    };
  }

  if (registries.includes("maven")) {
    config.publishToMaven = {
      javaPackage: `com.${sanitizedNamespace}.${sanitizedName}`,
      mavenGroupId: `com.${sanitizedNamespace}`,
      mavenArtifactId: sanitizedName,
    };
  }

  if (registries.includes("nuget")) {
    const nugetName = `${pascalCase(namespace)}.${pascalCase(name)}`;
    config.publishToNuget = {
      dotNetNamespace: nugetName,
      packageId: nugetName,
    };
  }
  return config;
}

export type GithubRegistry = "npm" | "maven" | "nuget";
type GitHubPublishOptions = {
  /**
   * The GitHub repository of this project.
   */
  repositoryName: string;

  /**
   * The GitHub owner of this project.
   */
  repositoryOwner: string;

  /**
   * Registries to publish to
   */
  registries: GithubRegistry[];
};

export type GitHubPublishConfig = {
  name: string;
  repositoryUrl: string;
} & PublishingConfig;

export function publishToGithubPackages(
  options: GitHubPublishOptions
): GitHubPublishConfig {
  const { registries, repositoryName, repositoryOwner } = options;
  const config = publishToRegistries({
    name: repositoryName,
    namespace: repositoryOwner,
    registries,
  });

  if (registries.includes("npm")) {
    config.npmRegistryUrl = "https://npm.pkg.github.com";
  }

  if (registries.includes("maven")) {
    config.publishToMaven!.mavenRepositoryUrl = `https://maven.pkg.github.com/${repositoryOwner}/${repositoryName}`;
  }

  if (registries.includes("nuget")) {
    config.publishToNuget!.nugetServer = `https://nuget.pkg.github.com/${repositoryOwner}`;
  }

  return {
    ...config,
    repositoryUrl: `https://github.com/${repositoryOwner}/${repositoryName}.git`,
    name: `@${repositoryOwner}/${repositoryName}`,
  };
}

export type ArtifactoryPublishOptions = PublishOptions & {
  // The artifactory url to publish to, e.g. "https://artifactory.example.com/artifactory/api"
  artifactoryApiUrl: string;

  // Name of the artifactory repository to publish to, defaults to the namespace
  artifactoryRepository?: string;
};

export function publishToArtifactory(
  options: ArtifactoryPublishOptions
): PublishingConfig {
  const {
    registries,
    artifactoryApiUrl,
    artifactoryRepository = options.namespace,
  } = options;
  const config = publishToRegistries(options);

  if (registries.includes("npm")) {
    config.npmRegistryUrl = `${artifactoryApiUrl}/npm/${artifactoryRepository}/`;
  }

  if (registries.includes("pypi")) {
    config.publishToPypi!.twineRegistryUrl = `${artifactoryApiUrl}/pypi/${artifactoryRepository}/`;
  }

  if (registries.includes("maven")) {
    throw new Error(
      "Artifactory does support maven packages, but this library does not yet support it"
    );
    // With no chance to test it the docs dont tell me enough to implement it
    // https://www.jfrog.com/confluence/display/JFROG/Maven+Repository#MavenRepository-ResolvingArtifactsThroughArtifactory
    // config.publishToMaven!.mavenRepositoryUrl = `${artifactoryApiUrl}/`;
  }

  if (registries.includes("nuget")) {
    config.publishToNuget!.nugetServer = `${artifactoryApiUrl}/nuget/${artifactoryRepository}/`;
  }

  return config;
}
