/**
 * 
 *     io.k8s.api.extensions.v1beta1.Deployment
 *     |--------- ^ -------|  ^  ^ ^ |---^----|
 *                |           |  | |     |
 *  - namespace --+           |  | |     |
 *  - version ----------------+  | |     |
 *  - level ---------------------+ |     |
 *  - subversion ------------------+     |
 *  - basename --------------------------+
 */
export interface ApiObjectName extends ApiObjectVersion {
  basename: string;
  namespace: string;
  fullname: string;
}

interface ApiObjectVersion {
  level: ApiLevel;
  version: number;
  subversion: number;
}

enum ApiLevel {
  ALPHA = 'alpha',
  BETA = 'beta',
  STABLE = 'stable',
}



/**
 * Compares two API versions using the following strategy:
 * 
 *  - Latest stable version
 *  - If there isn't a stable version, 
 * 
 * 
 * @param lhs 
 * @param rhs 
 */
export function compareApiVersions(lhs: ApiObjectVersion, rhs: ApiObjectVersion): number {

  // stable > beta > alpha
  // this means that: v1 > v2beta1

  const lhsLevel = levelOrder(lhs.level);
  const rhsLevel = levelOrder(rhs.level);
  if (lhsLevel > rhsLevel) {
    return 1;
  } else if (lhsLevel < rhsLevel) {
    return -1;
  }

  // latest version

  if (lhs.version > rhs.version) {
    return 1;
  } else if (lhs.version < rhs.version) {
    return -1;
  }

  // sub-version withinn the same level

  if (lhs.subversion > rhs.subversion) {
    return 1;
  } else if (lhs.subversion < rhs.subversion) {
    return -1;
  }

  return 0;
}

function levelOrder(level: ApiLevel): number {
  switch (level) {
    case ApiLevel.ALPHA: return 0;
    case ApiLevel.BETA: return 1;
    case ApiLevel.STABLE: return 100;
  }
}

/**
 * Parses a fully qualified type name such as to it's components.
 */
export function parseApiTypeName(fullname: string): ApiObjectName {
  const parts = fullname.split('.');
  const type = parts[parts.length - 1];

  const namespace = parts.slice(0, parts.length - 2).join('.');

  const v = parts[parts.length - 2];
  const match = /^v([0-9]+)(([a-z]+)([0-9]+))?$/.exec(v);
  if (!match) {
    throw new Error(`unable to parse version ${v}`);
  }
  const version = match[1];
  if (!version) {
    throw new Error(`unable to parse version ${v}. missing version number ("vN")`);
  }

  const level = match[3] as ApiLevel ?? ApiLevel.STABLE;
  const subversion = parseInt(match[4] ?? '0');
  return {
    fullname: fullname,
    namespace,
    basename: type,
    version: parseInt(version), 
    level, 
    subversion
  };
}

