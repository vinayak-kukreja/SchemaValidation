/**
 * @schema MysqlProps
 */
export interface MysqlProps {
  /**
   * Allowed values: `standalone` or `replication`
   *
   * @schema MysqlProps#architecture
   */
  readonly architecture?: MysqlPropsArchitecture;

  /**
   * @schema MysqlProps#auth
   */
  readonly auth?: MysqlPropsAuth;

  /**
   * @schema MysqlProps#primary
   */
  readonly primary?: MysqlPropsPrimary;

  /**
   * @schema MysqlProps#secondary
   */
  readonly secondary?: MysqlPropsSecondary;

}

/**
 * Converts an object of type 'MysqlProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlProps(obj: MysqlProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'architecture': obj.architecture,
    'auth': toJson_MysqlPropsAuth(obj.auth),
    'primary': toJson_MysqlPropsPrimary(obj.primary),
    'secondary': toJson_MysqlPropsSecondary(obj.secondary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Allowed values: `standalone` or `replication`
 *
 * @schema MysqlPropsArchitecture
 */
export enum MysqlPropsArchitecture {
  /** standalone */
  STANDALONE = "standalone",
  /** replication */
  REPLICATION = "replication",
}

/**
 * @schema MysqlPropsAuth
 */
export interface MysqlPropsAuth {
  /**
   * Defaults to a random 10-character alphanumeric string if not set
   *
   * @default a random 10-character alphanumeric string if not set
   * @schema MysqlPropsAuth#rootPassword
   */
  readonly rootPassword?: string;

  /**
   * @schema MysqlPropsAuth#database
   */
  readonly database?: string;

  /**
   * @schema MysqlPropsAuth#username
   */
  readonly username: string;

  /**
   * @schema MysqlPropsAuth#password
   */
  readonly password: string;

  /**
   * @schema MysqlPropsAuth#replicationUser
   */
  readonly replicationUser?: string;

  /**
   * @schema MysqlPropsAuth#replicationPassword
   */
  readonly replicationPassword?: string;

  /**
   * @schema MysqlPropsAuth#createDatabase
   */
  readonly createDatabase?: boolean;

}

/**
 * Converts an object of type 'MysqlPropsAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsAuth(obj: MysqlPropsAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rootPassword': obj.rootPassword,
    'database': obj.database,
    'username': obj.username,
    'password': obj.password,
    'replicationUser': obj.replicationUser,
    'replicationPassword': obj.replicationPassword,
    'createDatabase': obj.createDatabase,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsPrimary
 */
export interface MysqlPropsPrimary {
  /**
   * @schema MysqlPropsPrimary#podSecurityContext
   */
  readonly podSecurityContext?: MysqlPropsPrimaryPodSecurityContext;

  /**
   * @schema MysqlPropsPrimary#containerSecurityContext
   */
  readonly containerSecurityContext?: MysqlPropsPrimaryContainerSecurityContext;

  /**
   * @schema MysqlPropsPrimary#persistence
   */
  readonly persistence?: MysqlPropsPrimaryPersistence;

}

/**
 * Converts an object of type 'MysqlPropsPrimary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsPrimary(obj: MysqlPropsPrimary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'podSecurityContext': toJson_MysqlPropsPrimaryPodSecurityContext(obj.podSecurityContext),
    'containerSecurityContext': toJson_MysqlPropsPrimaryContainerSecurityContext(obj.containerSecurityContext),
    'persistence': toJson_MysqlPropsPrimaryPersistence(obj.persistence),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsSecondary
 */
export interface MysqlPropsSecondary {
  /**
   * @schema MysqlPropsSecondary#podSecurityContext
   */
  readonly podSecurityContext?: MysqlPropsSecondaryPodSecurityContext;

  /**
   * @schema MysqlPropsSecondary#containerSecurityContext
   */
  readonly containerSecurityContext?: MysqlPropsSecondaryContainerSecurityContext;

  /**
   * @schema MysqlPropsSecondary#persistence
   */
  readonly persistence?: MysqlPropsSecondaryPersistence;

}

/**
 * Converts an object of type 'MysqlPropsSecondary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsSecondary(obj: MysqlPropsSecondary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'podSecurityContext': toJson_MysqlPropsSecondaryPodSecurityContext(obj.podSecurityContext),
    'containerSecurityContext': toJson_MysqlPropsSecondaryContainerSecurityContext(obj.containerSecurityContext),
    'persistence': toJson_MysqlPropsSecondaryPersistence(obj.persistence),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsPrimaryPodSecurityContext
 */
export interface MysqlPropsPrimaryPodSecurityContext {
  /**
   * @schema MysqlPropsPrimaryPodSecurityContext#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsPrimaryPodSecurityContext#fsGroup
   */
  readonly fsGroup?: number;

}

/**
 * Converts an object of type 'MysqlPropsPrimaryPodSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsPrimaryPodSecurityContext(obj: MysqlPropsPrimaryPodSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'fsGroup': obj.fsGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsPrimaryContainerSecurityContext
 */
export interface MysqlPropsPrimaryContainerSecurityContext {
  /**
   * @schema MysqlPropsPrimaryContainerSecurityContext#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsPrimaryContainerSecurityContext#runAsUser
   */
  readonly runAsUser?: number;

}

/**
 * Converts an object of type 'MysqlPropsPrimaryContainerSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsPrimaryContainerSecurityContext(obj: MysqlPropsPrimaryContainerSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'runAsUser': obj.runAsUser,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsPrimaryPersistence
 */
export interface MysqlPropsPrimaryPersistence {
  /**
   * @schema MysqlPropsPrimaryPersistence#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsPrimaryPersistence#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'MysqlPropsPrimaryPersistence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsPrimaryPersistence(obj: MysqlPropsPrimaryPersistence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsSecondaryPodSecurityContext
 */
export interface MysqlPropsSecondaryPodSecurityContext {
  /**
   * @schema MysqlPropsSecondaryPodSecurityContext#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsSecondaryPodSecurityContext#fsGroup
   */
  readonly fsGroup?: number;

}

/**
 * Converts an object of type 'MysqlPropsSecondaryPodSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsSecondaryPodSecurityContext(obj: MysqlPropsSecondaryPodSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'fsGroup': obj.fsGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsSecondaryContainerSecurityContext
 */
export interface MysqlPropsSecondaryContainerSecurityContext {
  /**
   * @schema MysqlPropsSecondaryContainerSecurityContext#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsSecondaryContainerSecurityContext#runAsUser
   */
  readonly runAsUser?: number;

}

/**
 * Converts an object of type 'MysqlPropsSecondaryContainerSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsSecondaryContainerSecurityContext(obj: MysqlPropsSecondaryContainerSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'runAsUser': obj.runAsUser,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MysqlPropsSecondaryPersistence
 */
export interface MysqlPropsSecondaryPersistence {
  /**
   * @schema MysqlPropsSecondaryPersistence#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MysqlPropsSecondaryPersistence#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'MysqlPropsSecondaryPersistence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MysqlPropsSecondaryPersistence(obj: MysqlPropsSecondaryPersistence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
