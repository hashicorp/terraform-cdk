import isValidDomain from "is-valid-domain";

// Logic from https://github.com/hashicorp/terraform/blob/e09b831f6ee35d37b11b8dcccd3a6d6f6db5e5ff/internal/addrs/module_source.go#L198
export function isRegistryModule(source: string) {
  const parts = source.split("/");
  if (
    source.startsWith(".") ||
    parts.length < 3 ||
    parts.length > 4 ||
    source.includes("github.com") ||
    source.includes("bitbucket.org")
  ) {
    return false;
  }

  if (parts.length === 4 && !isValidDomain(parts[0])) {
    return false;
  }

  return true;
}
