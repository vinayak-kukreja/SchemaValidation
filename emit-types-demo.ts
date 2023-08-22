/**
 * @schema K10Props
 */
export interface K10Props {
  /**
   * Create RBAC seetings
   *
   * @schema K10Props#rbac
   */
  readonly rbac?: K10PropsRbac;

  /**
   * Configure ServiceAccount
   *
   * @schema K10Props#serviceAccount
   */
  readonly serviceAccount?: K10PropsServiceAccount;

  /**
   * Configure Security Context Constraints
   *
   * @schema K10Props#scc
   */
  readonly scc?: K10PropsScc;

  /**
   * Configure NetworkPolicy
   *
   * @schema K10Props#networkPolicy
   */
  readonly networkPolicy?: K10PropsNetworkPolicy;

  /**
   * @schema K10Props#global
   */
  readonly global?: K10PropsGlobal;

  /**
   * Configure OpenShift Route
   *
   * @schema K10Props#route
   */
  readonly route?: K10PropsRoute;

  /**
   * Set tools image settings
   *
   * @schema K10Props#toolsImage
   */
  readonly toolsImage?: K10PropsToolsImage;

  /**
   * Specify Dex image config
   *
   * @schema K10Props#dexImage
   */
  readonly dexImage?: K10PropsDexImage;

  /**
   * Set kanister tools image config
   *
   * @schema K10Props#kanisterToolsImage
   */
  readonly kanisterToolsImage?: K10PropsKanisterToolsImage;

  /**
   * Add ingress resource configuration
   *
   * @schema K10Props#ingress
   */
  readonly ingress?: K10PropsIngress;

  /**
   * @schema K10Props#eula
   */
  readonly eula?: K10PropsEula;

  /**
   * Add license string obtained from Kasten
   *
   * @schema K10Props#license
   */
  readonly license?: string;

  /**
   * Set cluster configuration
   *
   * @schema K10Props#cluster
   */
  readonly cluster?: K10PropsCluster;

  /**
   * Configure internal Prometheus
   *
   * @schema K10Props#prometheus
   */
  readonly prometheus?: K10PropsPrometheus;

  /**
   * Jaeger tracing settings
   *
   * @schema K10Props#jaeger
   */
  readonly jaeger?: K10PropsJaeger;

  /**
   * @schema K10Props#service
   */
  readonly service?: K10PropsService;

  /**
   * K10 secrets configuration
   *
   * @schema K10Props#secrets
   */
  readonly secrets?: K10PropsSecrets;

  /**
   * Metering service settings
   *
   * @schema K10Props#metering
   */
  readonly metering?: K10PropsMetering;

  /**
   * Cluster name for better logs visibility
   *
   * @schema K10Props#clusterName
   */
  readonly clusterName?: string;

  /**
   * Set number of executor service pod replicas for better performance
   *
   * @schema K10Props#executorReplicas
   */
  readonly executorReplicas?: number;

  /**
   * Change default log level
   *
   * @schema K10Props#logLevel
   */
  readonly logLevel?: string;

  /**
   * Configure external gateway for K10 API services
   *
   * @schema K10Props#externalGateway
   */
  readonly externalGateway?: K10PropsExternalGateway;

  /**
   * Configure K10 dashboard authentication
   *
   * @schema K10Props#auth
   */
  readonly auth?: K10PropsAuth;

  /**
   * Settings to enable optional colocated services
   *
   * @schema K10Props#optionalColocatedServices
   */
  readonly optionalColocatedServices?: K10PropsOptionalColocatedServices;

  /**
   * ConfigMap containing a certificate for a trusted root certificate authority
   *
   * @schema K10Props#cacertconfigmap
   */
  readonly cacertconfigmap?: K10PropsCacertconfigmap;

  /**
   * @schema K10Props#apiservices
   */
  readonly apiservices?: K10PropsApiservices;

  /**
   * Configure Kanister sidecar injection for workload pods
   *
   * @schema K10Props#injectKanisterSidecar
   */
  readonly injectKanisterSidecar?: K10PropsInjectKanisterSidecar;

  /**
   * Custom labels for pods managed by Kanister
   *
   * @schema K10Props#kanisterPodCustomLabels
   */
  readonly kanisterPodCustomLabels?: string;

  /**
   * Custom annotations added to pods managed by Kanister
   *
   * @schema K10Props#kanisterPodCustomAnnotations
   */
  readonly kanisterPodCustomAnnotations?: string;

  /**
   * Sidecar container for gathering metrics from ephemeral pods
   *
   * @schema K10Props#kanisterPodMetricSidecar
   */
  readonly kanisterPodMetricSidecar?: K10PropsKanisterPodMetricSidecar;

  /**
   * Resource configuration for Generic Volume Snapshot restore pods
   *
   * @schema K10Props#genericVolumeSnapshot
   */
  readonly genericVolumeSnapshot?: K10PropsGenericVolumeSnapshot;

  /**
   * Configure garbage collection settings
   *
   * @schema K10Props#garbagecollector
   */
  readonly garbagecollector?: K10PropsGarbagecollector;

  /**
   * Resource management for K10 pods
   *
   * @schema K10Props#resources
   */
  readonly resources?: any;

  /**
   * Settings for K10 services
   *
   * @schema K10Props#services
   */
  readonly services?: K10PropsServices;

  /**
   * APIGateway settings
   *
   * @schema K10Props#apigateway
   */
  readonly apigateway?: K10PropsApigateway;

  /**
   * Limits set on several operations
   *
   * @schema K10Props#limiter
   */
  readonly limiter?: K10PropsLimiter;

  /**
   * Configure Gateway service
   *
   * @schema K10Props#gateway
   */
  readonly gateway?: K10PropsGateway;

  /**
   * Configuration for Kanister service
   *
   * @schema K10Props#kanister
   */
  readonly kanister?: K10PropsKanister;

  /**
   * AWS config
   *
   * @schema K10Props#awsConfig
   */
  readonly awsConfig?: K10PropsAwsConfig;

  /**
   * Azure config
   *
   * @schema K10Props#azure
   */
  readonly azure?: K10PropsAzure;

  /**
   * Settings for Grafana service
   *
   * @schema K10Props#grafana
   */
  readonly grafana?: K10PropsGrafana;

  /**
   * Encryption config
   *
   * @schema K10Props#encryption
   */
  readonly encryption?: K10PropsEncryption;

  /**
   * @schema K10Props#vmWare
   */
  readonly vmWare?: K10PropsVmWare;

  /**
   * Vault integration configuration
   *
   * @schema K10Props#vault
   */
  readonly vault?: K10PropsVault;

  /**
   * @schema K10Props#kubeVirtVMs
   */
  readonly kubeVirtVMs?: K10PropsKubeVirtVMs;

  /**
   * List of applications to be excluded from the dashboard & compliance considerations
   *
   * @schema K10Props#excludedApps
   */
  readonly excludedApps?: string[];

  /**
   * @schema K10Props#reporting
   */
  readonly reporting?: K10PropsReporting;

  /**
   * Set a maximum duration of waiting for child jobs. If the execution of the subordinate jobs exceeds this value, the parent job will be canceled. If no value is set, a default of 10 hours will be used
   *
   * @schema K10Props#maxJobWaitDuration
   */
  readonly maxJobWaitDuration?: string;

}

/**
 * Converts an object of type 'K10Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10Props(obj: K10Props | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rbac': toJson_K10PropsRbac(obj.rbac),
    'serviceAccount': toJson_K10PropsServiceAccount(obj.serviceAccount),
    'scc': toJson_K10PropsScc(obj.scc),
    'networkPolicy': toJson_K10PropsNetworkPolicy(obj.networkPolicy),
    'global': toJson_K10PropsGlobal(obj.global),
    'route': toJson_K10PropsRoute(obj.route),
    'toolsImage': toJson_K10PropsToolsImage(obj.toolsImage),
    'dexImage': toJson_K10PropsDexImage(obj.dexImage),
    'kanisterToolsImage': toJson_K10PropsKanisterToolsImage(obj.kanisterToolsImage),
    'ingress': toJson_K10PropsIngress(obj.ingress),
    'eula': toJson_K10PropsEula(obj.eula),
    'license': obj.license,
    'cluster': toJson_K10PropsCluster(obj.cluster),
    'prometheus': toJson_K10PropsPrometheus(obj.prometheus),
    'jaeger': toJson_K10PropsJaeger(obj.jaeger),
    'service': toJson_K10PropsService(obj.service),
    'secrets': toJson_K10PropsSecrets(obj.secrets),
    'metering': toJson_K10PropsMetering(obj.metering),
    'clusterName': obj.clusterName,
    'executorReplicas': obj.executorReplicas,
    'logLevel': obj.logLevel,
    'externalGateway': toJson_K10PropsExternalGateway(obj.externalGateway),
    'auth': toJson_K10PropsAuth(obj.auth),
    'optionalColocatedServices': toJson_K10PropsOptionalColocatedServices(obj.optionalColocatedServices),
    'cacertconfigmap': toJson_K10PropsCacertconfigmap(obj.cacertconfigmap),
    'apiservices': toJson_K10PropsApiservices(obj.apiservices),
    'injectKanisterSidecar': toJson_K10PropsInjectKanisterSidecar(obj.injectKanisterSidecar),
    'kanisterPodCustomLabels': obj.kanisterPodCustomLabels,
    'kanisterPodCustomAnnotations': obj.kanisterPodCustomAnnotations,
    'kanisterPodMetricSidecar': toJson_K10PropsKanisterPodMetricSidecar(obj.kanisterPodMetricSidecar),
    'genericVolumeSnapshot': toJson_K10PropsGenericVolumeSnapshot(obj.genericVolumeSnapshot),
    'garbagecollector': toJson_K10PropsGarbagecollector(obj.garbagecollector),
    'resources': obj.resources,
    'services': toJson_K10PropsServices(obj.services),
    'apigateway': toJson_K10PropsApigateway(obj.apigateway),
    'limiter': toJson_K10PropsLimiter(obj.limiter),
    'gateway': toJson_K10PropsGateway(obj.gateway),
    'kanister': toJson_K10PropsKanister(obj.kanister),
    'awsConfig': toJson_K10PropsAwsConfig(obj.awsConfig),
    'azure': toJson_K10PropsAzure(obj.azure),
    'grafana': toJson_K10PropsGrafana(obj.grafana),
    'encryption': toJson_K10PropsEncryption(obj.encryption),
    'vmWare': toJson_K10PropsVmWare(obj.vmWare),
    'vault': toJson_K10PropsVault(obj.vault),
    'kubeVirtVMs': toJson_K10PropsKubeVirtVMs(obj.kubeVirtVMs),
    'excludedApps': obj.excludedApps?.map(y => y),
    'reporting': toJson_K10PropsReporting(obj.reporting),
    'maxJobWaitDuration': obj.maxJobWaitDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Create RBAC seetings
 *
 * @schema K10PropsRbac
 */
export interface K10PropsRbac {
  /**
   * Toggle RBAC resource creation
   *
   * @schema K10PropsRbac#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsRbac' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsRbac(obj: K10PropsRbac | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure ServiceAccount
 *
 * @schema K10PropsServiceAccount
 */
export interface K10PropsServiceAccount {
  /**
   * Specifies whether a ServiceAccount should be created
   *
   * @schema K10PropsServiceAccount#create
   */
  readonly create?: boolean;

  /**
   * The name of the ServiceAccount to use. If not set and create is true, a name is derived using the release and chart names
   *
   * @schema K10PropsServiceAccount#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'K10PropsServiceAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServiceAccount(obj: K10PropsServiceAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Security Context Constraints
 *
 * @schema K10PropsScc
 */
export interface K10PropsScc {
  /**
   * Whether to create a SecurityContextConstraints for K10 ServiceAccounts
   *
   * @schema K10PropsScc#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsScc' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsScc(obj: K10PropsScc | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure NetworkPolicy
 *
 * @schema K10PropsNetworkPolicy
 */
export interface K10PropsNetworkPolicy {
  /**
   * Whether to create NetworkPolicies for the K10 services
   *
   * @schema K10PropsNetworkPolicy#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsNetworkPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsNetworkPolicy(obj: K10PropsNetworkPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsGlobal
 */
export interface K10PropsGlobal {
  /**
   * Change K10 image settings
   *
   * @schema K10PropsGlobal#image
   */
  readonly image?: K10PropsGlobalImage;

  /**
   * Configure Airgapped offline installation
   *
   * @schema K10PropsGlobal#airgapped
   */
  readonly airgapped?: K10PropsGlobalAirgapped;

  /**
   * Configure global settings for Persistent Volume
   *
   * @schema K10PropsGlobal#persistence
   */
  readonly persistence?: K10PropsGlobalPersistence;

  /**
   * Set it to true while generating helm operator
   *
   * @schema K10PropsGlobal#rhMarketPlace
   */
  readonly rhMarketPlace?: boolean;

  /**
   * @schema K10PropsGlobal#images
   */
  readonly images?: K10PropsGlobalImages;

  /**
   * Secret which contains docker config for private repository. Use `k10-ecr` when secrets.dockerConfigPath is used.
   *
   * @schema K10PropsGlobal#imagePullSecret
   */
  readonly imagePullSecret?: string;

  /**
   * @schema K10PropsGlobal#ingress
   */
  readonly ingress?: K10PropsGlobalIngress;

  /**
   * @schema K10PropsGlobal#route
   */
  readonly route?: K10PropsGlobalRoute;

  /**
   * Global prometheus settings
   *
   * @schema K10PropsGlobal#prometheus
   */
  readonly prometheus?: K10PropsGlobalPrometheus;

  /**
   * Global network settings
   *
   * @schema K10PropsGlobal#network
   */
  readonly network?: K10PropsGlobalNetwork;

}

/**
 * Converts an object of type 'K10PropsGlobal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobal(obj: K10PropsGlobal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': toJson_K10PropsGlobalImage(obj.image),
    'airgapped': toJson_K10PropsGlobalAirgapped(obj.airgapped),
    'persistence': toJson_K10PropsGlobalPersistence(obj.persistence),
    'rhMarketPlace': obj.rhMarketPlace,
    'images': toJson_K10PropsGlobalImages(obj.images),
    'imagePullSecret': obj.imagePullSecret,
    'ingress': toJson_K10PropsGlobalIngress(obj.ingress),
    'route': toJson_K10PropsGlobalRoute(obj.route),
    'prometheus': toJson_K10PropsGlobalPrometheus(obj.prometheus),
    'network': toJson_K10PropsGlobalNetwork(obj.network),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure OpenShift Route
 *
 * @schema K10PropsRoute
 */
export interface K10PropsRoute {
  /**
   * Whether the K10 dashboard should be exposed via route
   *
   * @schema K10PropsRoute#enabled
   */
  readonly enabled?: boolean;

  /**
   * Set Host name for the route
   *
   * @schema K10PropsRoute#host
   */
  readonly host?: string;

  /**
   * Set Path for the route
   *
   * @schema K10PropsRoute#path
   */
  readonly path?: string;

  /**
   * Set annotations for the route
   *
   * @schema K10PropsRoute#annotations
   */
  readonly annotations?: any;

  /**
   * Set Labels for the route resource
   *
   * @schema K10PropsRoute#labels
   */
  readonly labels?: any;

  /**
   * Set TLS configuration for the route
   *
   * @schema K10PropsRoute#tls
   */
  readonly tls?: K10PropsRouteTls;

}

/**
 * Converts an object of type 'K10PropsRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsRoute(obj: K10PropsRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'host': obj.host,
    'path': obj.path,
    'annotations': obj.annotations,
    'labels': obj.labels,
    'tls': toJson_K10PropsRouteTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set tools image settings
 *
 * @schema K10PropsToolsImage
 */
export interface K10PropsToolsImage {
  /**
   * Whether to enable tools image
   *
   * @schema K10PropsToolsImage#enabled
   */
  readonly enabled?: boolean;

  /**
   * Change tools image pullPolicy
   *
   * @schema K10PropsToolsImage#pullPolicy
   */
  readonly pullPolicy?: K10PropsToolsImagePullPolicy;

}

/**
 * Converts an object of type 'K10PropsToolsImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsToolsImage(obj: K10PropsToolsImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'pullPolicy': obj.pullPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Specify Dex image config
 *
 * @schema K10PropsDexImage
 */
export interface K10PropsDexImage {
  /**
   * Change default image registry for Dex images
   *
   * @schema K10PropsDexImage#registry
   */
  readonly registry?: string;

  /**
   * Change default image repository for Dex images
   *
   * @schema K10PropsDexImage#repository
   */
  readonly repository?: string;

  /**
   * Change default image name for Dex images
   *
   * @schema K10PropsDexImage#image
   */
  readonly image?: string;

}

/**
 * Converts an object of type 'K10PropsDexImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsDexImage(obj: K10PropsDexImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registry': obj.registry,
    'repository': obj.repository,
    'image': obj.image,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set kanister tools image config
 *
 * @schema K10PropsKanisterToolsImage
 */
export interface K10PropsKanisterToolsImage {
  /**
   * Change default image registry for kanister-tools images
   *
   * @schema K10PropsKanisterToolsImage#registry
   */
  readonly registry?: string;

  /**
   * Change default image repository for kanister-tools images
   *
   * @schema K10PropsKanisterToolsImage#repository
   */
  readonly repository?: string;

  /**
   * Change default image name for kanister-tools images
   *
   * @schema K10PropsKanisterToolsImage#image
   */
  readonly image?: string;

  /**
   * Change kanister-tools image pullPolicy
   *
   * @schema K10PropsKanisterToolsImage#pullPolicy
   */
  readonly pullPolicy?: K10PropsKanisterToolsImagePullPolicy;

}

/**
 * Converts an object of type 'K10PropsKanisterToolsImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsKanisterToolsImage(obj: K10PropsKanisterToolsImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registry': obj.registry,
    'repository': obj.repository,
    'image': obj.image,
    'pullPolicy': obj.pullPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Add ingress resource configuration
 *
 * @schema K10PropsIngress
 */
export interface K10PropsIngress {
  /**
   * whether the K10 dashboard should be exposed via ingress
   *
   * @schema K10PropsIngress#create
   */
  readonly create?: boolean;

  /**
   * Set TLS configuration for ingress
   *
   * @schema K10PropsIngress#tls
   */
  readonly tls?: K10PropsIngressTls;

  /**
   * Cluster ingress controller class: nginx, GCE
   *
   * @schema K10PropsIngress#class
   */
  readonly class?: string;

  /**
   * FQDN for name-based virtual host
   *
   * @schema K10PropsIngress#host
   */
  readonly host?: string;

  /**
   * URL path for K10 Dashboard
   *
   * @schema K10PropsIngress#urlPath
   */
  readonly urlPath?: string;

  /**
   * Set the path type for the ingress resource
   *
   * @schema K10PropsIngress#pathType
   */
  readonly pathType?: K10PropsIngressPathType;

}

/**
 * Converts an object of type 'K10PropsIngress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsIngress(obj: K10PropsIngress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
    'tls': toJson_K10PropsIngressTls(obj.tls),
    'class': obj.class,
    'host': obj.host,
    'urlPath': obj.urlPath,
    'pathType': obj.pathType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsEula
 */
export interface K10PropsEula {
  /**
   * An End-user license agreement (EULA) is a legal agreement granting a user a license to use an application or software. It must be consented to before a user buys, installs, or downloads an application or software owned by the service provider.
   *
   * @schema K10PropsEula#accept
   */
  readonly accept?: boolean;

}

/**
 * Converts an object of type 'K10PropsEula' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsEula(obj: K10PropsEula | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accept': obj.accept,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set cluster configuration
 *
 * @schema K10PropsCluster
 */
export interface K10PropsCluster {
  /**
   * Change default domain name of the cluster
   *
   * @schema K10PropsCluster#domainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'K10PropsCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsCluster(obj: K10PropsCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure internal Prometheus
 *
 * @schema K10PropsPrometheus
 */
export interface K10PropsPrometheus {
  /**
   * Prometheus init container configuration
   *
   * @schema K10PropsPrometheus#initChownData
   */
  readonly initChownData?: K10PropsPrometheusInitChownData;

  /**
   * Configure Prometheus rbac resources
   *
   * @schema K10PropsPrometheus#rbac
   */
  readonly rbac?: K10PropsPrometheusRbac;

  /**
   * Enable Prometheus alertmanager service
   *
   * @schema K10PropsPrometheus#alertmanager
   */
  readonly alertmanager?: K10PropsPrometheusAlertmanager;

  /**
   * Configure Prometheus kubeStateMetrics service
   *
   * @schema K10PropsPrometheus#kubeStateMetrics
   */
  readonly kubeStateMetrics?: K10PropsPrometheusKubeStateMetrics;

  /**
   * Configure Prometheus NetworkPolicy
   *
   * @schema K10PropsPrometheus#networkPolicy
   */
  readonly networkPolicy?: K10PropsPrometheusNetworkPolicy;

  /**
   * Configure Prometheus NodeExporter
   *
   * @schema K10PropsPrometheus#nodeExporter
   */
  readonly nodeExporter?: K10PropsPrometheusNodeExporter;

  /**
   * Configure Prometheus PushGateway service
   *
   * @schema K10PropsPrometheus#pushgateway
   */
  readonly pushgateway?: K10PropsPrometheusPushgateway;

  /**
   * Create Prometheus ScrapeCAdvisor service
   *
   * @schema K10PropsPrometheus#scrapeCAdvisor
   */
  readonly scrapeCAdvisor?: boolean;

  /**
   * Configure Prometheus Server
   *
   * @schema K10PropsPrometheus#server
   */
  readonly server?: K10PropsPrometheusServer;

  /**
   * Whether to create ServiceAccounts for Prometheus services
   *
   * @schema K10PropsPrometheus#serviceAccounts
   */
  readonly serviceAccounts?: K10PropsPrometheusServiceAccounts;

}

/**
 * Converts an object of type 'K10PropsPrometheus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheus(obj: K10PropsPrometheus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'initChownData': toJson_K10PropsPrometheusInitChownData(obj.initChownData),
    'rbac': toJson_K10PropsPrometheusRbac(obj.rbac),
    'alertmanager': toJson_K10PropsPrometheusAlertmanager(obj.alertmanager),
    'kubeStateMetrics': toJson_K10PropsPrometheusKubeStateMetrics(obj.kubeStateMetrics),
    'networkPolicy': toJson_K10PropsPrometheusNetworkPolicy(obj.networkPolicy),
    'nodeExporter': toJson_K10PropsPrometheusNodeExporter(obj.nodeExporter),
    'pushgateway': toJson_K10PropsPrometheusPushgateway(obj.pushgateway),
    'scrapeCAdvisor': obj.scrapeCAdvisor,
    'server': toJson_K10PropsPrometheusServer(obj.server),
    'serviceAccounts': toJson_K10PropsPrometheusServiceAccounts(obj.serviceAccounts),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Jaeger tracing settings
 *
 * @schema K10PropsJaeger
 */
export interface K10PropsJaeger {
  /**
   * Set true to enable Jaeger tracing
   *
   * @schema K10PropsJaeger#enabled
   */
  readonly enabled?: boolean;

  /**
   * Set agentDNS for Jaeger tracing
   *
   * @schema K10PropsJaeger#agentDNS
   */
  readonly agentDns?: string;

}

/**
 * Converts an object of type 'K10PropsJaeger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsJaeger(obj: K10PropsJaeger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'agentDNS': obj.agentDns,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsService
 */
export interface K10PropsService {
  /**
   * Override default 8000 externalPort for K10 services
   *
   * @schema K10PropsService#externalPort
   */
  readonly externalPort?: number;

  /**
   * Override default 8000 internalPort for K10 services
   *
   * @schema K10PropsService#internalPort
   */
  readonly internalPort?: number;

  /**
   * Override default 10250 port for aggapi service
   *
   * @schema K10PropsService#aggregatedApiPort
   */
  readonly aggregatedApiPort?: number;

  /**
   * Override default 8877 gateway admin port
   *
   * @schema K10PropsService#gatewayAdminPort
   */
  readonly gatewayAdminPort?: number;

}

/**
 * Converts an object of type 'K10PropsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsService(obj: K10PropsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalPort': obj.externalPort,
    'internalPort': obj.internalPort,
    'aggregatedApiPort': obj.aggregatedApiPort,
    'gatewayAdminPort': obj.gatewayAdminPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * K10 secrets configuration
 *
 * @schema K10PropsSecrets
 */
export interface K10PropsSecrets {
  /**
   * Set AWS access key ID required for AWS deployment
   *
   * @schema K10PropsSecrets#awsAccessKeyId
   */
  readonly awsAccessKeyId?: string;

  /**
   * Set AWS access key secret
   *
   * @schema K10PropsSecrets#awsSecretAccessKey
   */
  readonly awsSecretAccessKey?: string;

  /**
   * ARN of the AWS IAM role assumed by K10 to perform any AWS operation
   *
   * @schema K10PropsSecrets#awsIamRole
   */
  readonly awsIamRole?: string;

  /**
   * Non-default base64 encoded GCP Service Account key
   *
   * @schema K10PropsSecrets#googleApiKey
   */
  readonly googleApiKey?: string;

  /**
   * Set Google Project ID other than the one in the GCP Service Account
   *
   * @schema K10PropsSecrets#googleProjectId
   */
  readonly googleProjectId?: string;

  /**
   * API key for accessing Classic Infrastructure (AKA SoftLayer) services, requires ibmSoftLayerApiUsername
   *
   * @schema K10PropsSecrets#ibmSoftLayerApiKey
   */
  readonly ibmSoftLayerApiKey?: string;

  /**
   * Username for accessing Classic Infrastructure (AKA SoftLayer) services, requires ibmSoftLayerApiKey
   *
   * @schema K10PropsSecrets#ibmSoftLayerApiUsername
   */
  readonly ibmSoftLayerApiUsername?: string;

  /**
   * Specify a Secret directly instead of having to provide both the cert and key. This reduces the security risk a bit by not caching the certs and keys in the bash history.
   *
   * @schema K10PropsSecrets#tlsSecret
   */
  readonly tlsSecret?: string;

  /**
   * base64 representation of your Docker credentials to pull docker images from a private registry
   *
   * @schema K10PropsSecrets#dockerConfig
   */
  readonly dockerConfig?: string;

  /**
   * Path to Docker config file to create secret from
   *
   * @schema K10PropsSecrets#dockerConfigPath
   */
  readonly dockerConfigPath?: string;

  /**
   * Azure tenant ID required for Azure deployment
   *
   * @schema K10PropsSecrets#azureTenantId
   */
  readonly azureTenantId?: string;

  /**
   * Azure Service App ID
   *
   * @schema K10PropsSecrets#azureClientId
   */
  readonly azureClientId?: string;

  /**
   * Azure Service APP secret
   *
   * @schema K10PropsSecrets#azureClientSecret
   */
  readonly azureClientSecret?: string;

  /**
   * Resource Group name that was created for the Kubernetes cluster
   *
   * @schema K10PropsSecrets#azureResourceGroup
   */
  readonly azureResourceGroup?: string;

  /**
   * Subscription ID in your Azure tenant
   *
   * @schema K10PropsSecrets#azureSubscriptionID
   */
  readonly azureSubscriptionId?: string;

  /**
   * Resource management endpoint for the Azure Stack instance
   *
   * @schema K10PropsSecrets#azureResourceMgrEndpoint
   */
  readonly azureResourceMgrEndpoint?: string;

  /**
   * Azure Active Directory login endpoint
   *
   * @schema K10PropsSecrets#azureADEndpoint
   */
  readonly azureAdEndpoint?: string;

  /**
   * Azure Active Directory resource ID to obtain AD tokens
   *
   * @schema K10PropsSecrets#azureADResourceID
   */
  readonly azureAdResourceId?: string;

  /**
   * Azure Cloud Environment ID
   *
   * @schema K10PropsSecrets#azureCloudEnvID
   */
  readonly azureCloudEnvId?: string;

  /**
   * K8s API server TLS certificate
   *
   * @schema K10PropsSecrets#apiTlsCrt
   */
  readonly apiTlsCrt?: string;

  /**
   * K8s API server TLS key
   *
   * @schema K10PropsSecrets#apiTlsKey
   */
  readonly apiTlsKey?: string;

  /**
   * vSphere endpoint for login
   *
   * @schema K10PropsSecrets#vsphereEndpoint
   */
  readonly vsphereEndpoint?: string;

  /**
   * @schema K10PropsSecrets#vsphereUsername
   */
  readonly vsphereUsername?: string;

  /**
   * vSphere password for login
   *
   * @schema K10PropsSecrets#vspherePassword
   */
  readonly vspherePassword?: string;

}

/**
 * Converts an object of type 'K10PropsSecrets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsSecrets(obj: K10PropsSecrets | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccessKeyId': obj.awsAccessKeyId,
    'awsSecretAccessKey': obj.awsSecretAccessKey,
    'awsIamRole': obj.awsIamRole,
    'googleApiKey': obj.googleApiKey,
    'googleProjectId': obj.googleProjectId,
    'ibmSoftLayerApiKey': obj.ibmSoftLayerApiKey,
    'ibmSoftLayerApiUsername': obj.ibmSoftLayerApiUsername,
    'tlsSecret': obj.tlsSecret,
    'dockerConfig': obj.dockerConfig,
    'dockerConfigPath': obj.dockerConfigPath,
    'azureTenantId': obj.azureTenantId,
    'azureClientId': obj.azureClientId,
    'azureClientSecret': obj.azureClientSecret,
    'azureResourceGroup': obj.azureResourceGroup,
    'azureSubscriptionID': obj.azureSubscriptionId,
    'azureResourceMgrEndpoint': obj.azureResourceMgrEndpoint,
    'azureADEndpoint': obj.azureAdEndpoint,
    'azureADResourceID': obj.azureAdResourceId,
    'azureCloudEnvID': obj.azureCloudEnvId,
    'apiTlsCrt': obj.apiTlsCrt,
    'apiTlsKey': obj.apiTlsKey,
    'vsphereEndpoint': obj.vsphereEndpoint,
    'vsphereUsername': obj.vsphereUsername,
    'vspherePassword': obj.vspherePassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Metering service settings
 *
 * @schema K10PropsMetering
 */
export interface K10PropsMetering {
  /**
   * Base64 encoded reporting key
   *
   * @schema K10PropsMetering#reportingKey
   */
  readonly reportingKey?: string;

  /**
   * Consumer ID in the format project:<project_id>
   *
   * @schema K10PropsMetering#consumerId
   */
  readonly consumerId?: string;

  /**
   * Set AWS_REGION for metering service
   *
   * @schema K10PropsMetering#awsRegion
   */
  readonly awsRegion?: string;

  /**
   * Set AWS marketplace IAM Role
   *
   * @schema K10PropsMetering#awsMarketPlaceIamRole
   */
  readonly awsMarketPlaceIamRole?: string;

  /**
   * Set AWS cloud metering license mode
   *
   * @schema K10PropsMetering#awsMarketplace
   */
  readonly awsMarketplace?: boolean;

  /**
   * Set AWS managed license mode
   *
   * @schema K10PropsMetering#awsManagedLicense
   */
  readonly awsManagedLicense?: boolean;

  /**
   * AWS managed license config secret
   *
   * @schema K10PropsMetering#licenseConfigSecretName
   */
  readonly licenseConfigSecretName?: string;

  /**
   * Configuration for metering service serviceAccount
   *
   * @schema K10PropsMetering#serviceAccount
   */
  readonly serviceAccount?: K10PropsMeteringServiceAccount;

  /**
   * Set to `airgap` for private-network installs
   *
   * @schema K10PropsMetering#mode
   */
  readonly mode?: string;

  /**
   * Set Red Hat cloud metering license mode
   *
   * @schema K10PropsMetering#redhatMarketplacePayg
   */
  readonly redhatMarketplacePayg?: boolean;

  /**
   * Metric report collection period (in seconds)
   *
   * @schema K10PropsMetering#reportCollectionPeriod
   */
  readonly reportCollectionPeriod?: number;

  /**
   * Metric report push period (in seconds)
   *
   * @schema K10PropsMetering#reportPushPeriod
   */
  readonly reportPushPeriod?: number;

  /**
   * K10 promotion ID from marketing campaigns
   *
   * @schema K10PropsMetering#promoID
   */
  readonly promoId?: string;

}

/**
 * Converts an object of type 'K10PropsMetering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsMetering(obj: K10PropsMetering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportingKey': obj.reportingKey,
    'consumerId': obj.consumerId,
    'awsRegion': obj.awsRegion,
    'awsMarketPlaceIamRole': obj.awsMarketPlaceIamRole,
    'awsMarketplace': obj.awsMarketplace,
    'awsManagedLicense': obj.awsManagedLicense,
    'licenseConfigSecretName': obj.licenseConfigSecretName,
    'serviceAccount': toJson_K10PropsMeteringServiceAccount(obj.serviceAccount),
    'mode': obj.mode,
    'redhatMarketplacePayg': obj.redhatMarketplacePayg,
    'reportCollectionPeriod': obj.reportCollectionPeriod,
    'reportPushPeriod': obj.reportPushPeriod,
    'promoID': obj.promoId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure external gateway for K10 API services
 *
 * @schema K10PropsExternalGateway
 */
export interface K10PropsExternalGateway {
  /**
   * Create external gateway service
   *
   * @schema K10PropsExternalGateway#create
   */
  readonly create?: boolean;

  /**
   * Standard annotations for the services
   *
   * @schema K10PropsExternalGateway#annotations
   */
  readonly annotations?: any;

  /**
   * Configure host and domain name for the K10 API services
   *
   * @schema K10PropsExternalGateway#fqdn
   */
  readonly fqdn?: K10PropsExternalGatewayFqdn;

  /**
   * ARN for the AWS ACM SSL certificate used in the K10 API server
   *
   * @schema K10PropsExternalGateway#awsSSLCertARN
   */
  readonly awsSslCertArn?: string;

}

/**
 * Converts an object of type 'K10PropsExternalGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsExternalGateway(obj: K10PropsExternalGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
    'annotations': obj.annotations,
    'fqdn': toJson_K10PropsExternalGatewayFqdn(obj.fqdn),
    'awsSSLCertARN': obj.awsSslCertArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure K10 dashboard authentication
 *
 * @schema K10PropsAuth
 */
export interface K10PropsAuth {
  /**
   * A list of groups whose members are allowed access to K10's dashboard
   *
   * @schema K10PropsAuth#groupAllowList
   */
  readonly groupAllowList?: string[];

  /**
   * Configure basic authentication for the K10 dashboard
   *
   * @schema K10PropsAuth#basicAuth
   */
  readonly basicAuth?: K10PropsAuthBasicAuth;

  /**
   * Configuration for Token based authentication for the K10 dashboard
   *
   * @schema K10PropsAuth#tokenAuth
   */
  readonly tokenAuth?: K10PropsAuthTokenAuth;

  /**
   * Configuration for Open ID Connect based authentication for the K10 dashboard
   *
   * @schema K10PropsAuth#oidcAuth
   */
  readonly oidcAuth?: K10PropsAuthOidcAuth;

  /**
   * Configure Dex based authentication to access K10 dashboard
   *
   * @schema K10PropsAuth#dex
   */
  readonly dex?: K10PropsAuthDex;

  /**
   * OpenShift OAuth server based authentication for K10 dashboard
   *
   * @schema K10PropsAuth#openshift
   */
  readonly openshift?: K10PropsAuthOpenshift;

  /**
   * Active Directory/LDAP based authentication for the K10 dashboard
   *
   * @schema K10PropsAuth#ldap
   */
  readonly ldap?: K10PropsAuthLdap;

  /**
   * A list of users who are granted admin level access to K10's dashboard
   *
   * @schema K10PropsAuth#k10AdminUsers
   */
  readonly k10AdminUsers?: string[];

  /**
   * A list of groups whose members are granted admin level access to K10's dashboard
   *
   * @schema K10PropsAuth#k10AdminGroups
   */
  readonly k10AdminGroups?: string[];

}

/**
 * Converts an object of type 'K10PropsAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuth(obj: K10PropsAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupAllowList': obj.groupAllowList?.map(y => y),
    'basicAuth': toJson_K10PropsAuthBasicAuth(obj.basicAuth),
    'tokenAuth': toJson_K10PropsAuthTokenAuth(obj.tokenAuth),
    'oidcAuth': toJson_K10PropsAuthOidcAuth(obj.oidcAuth),
    'dex': toJson_K10PropsAuthDex(obj.dex),
    'openshift': toJson_K10PropsAuthOpenshift(obj.openshift),
    'ldap': toJson_K10PropsAuthLdap(obj.ldap),
    'k10AdminUsers': obj.k10AdminUsers?.map(y => y),
    'k10AdminGroups': obj.k10AdminGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings to enable optional colocated services
 *
 * @schema K10PropsOptionalColocatedServices
 */
export interface K10PropsOptionalColocatedServices {
  /**
   * Settings for VBRIntegratipnAPI service
   *
   * @schema K10PropsOptionalColocatedServices#vbrintegrationapi
   */
  readonly vbrintegrationapi?: K10PropsOptionalColocatedServicesVbrintegrationapi;

}

/**
 * Converts an object of type 'K10PropsOptionalColocatedServices' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsOptionalColocatedServices(obj: K10PropsOptionalColocatedServices | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vbrintegrationapi': toJson_K10PropsOptionalColocatedServicesVbrintegrationapi(obj.vbrintegrationapi),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * ConfigMap containing a certificate for a trusted root certificate authority
 *
 * @schema K10PropsCacertconfigmap
 */
export interface K10PropsCacertconfigmap {
  /**
   * Name of the K8s ConfigMap containing a certificate for a trusted root certificate authority
   *
   * @schema K10PropsCacertconfigmap#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'K10PropsCacertconfigmap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsCacertconfigmap(obj: K10PropsCacertconfigmap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsApiservices
 */
export interface K10PropsApiservices {
  /**
   * Set true if APIService objects exists. Setting false will recreate the objects
   *
   * @schema K10PropsApiservices#deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'K10PropsApiservices' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsApiservices(obj: K10PropsApiservices | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Kanister sidecar injection for workload pods
 *
 * @schema K10PropsInjectKanisterSidecar
 */
export interface K10PropsInjectKanisterSidecar {
  /**
   * Set true to enable Kanister sidecar injection for workload pods
   *
   * @schema K10PropsInjectKanisterSidecar#enabled
   */
  readonly enabled?: boolean;

  /**
   * Configure namespaceSelector for namespace containing the workloads to inject Kansiter Sidecar
   *
   * @schema K10PropsInjectKanisterSidecar#namespaceSelector
   */
  readonly namespaceSelector?: K10PropsInjectKanisterSidecarNamespaceSelector;

  /**
   * Configure objectSelector for the workloads to inject Kansiter Sidecar
   *
   * @schema K10PropsInjectKanisterSidecar#objectSelector
   */
  readonly objectSelector?: K10PropsInjectKanisterSidecarObjectSelector;

  /**
   * Configure sidecar injector webhook server
   *
   * @schema K10PropsInjectKanisterSidecar#webhookServer
   */
  readonly webhookServer?: K10PropsInjectKanisterSidecarWebhookServer;

}

/**
 * Converts an object of type 'K10PropsInjectKanisterSidecar' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsInjectKanisterSidecar(obj: K10PropsInjectKanisterSidecar | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'namespaceSelector': toJson_K10PropsInjectKanisterSidecarNamespaceSelector(obj.namespaceSelector),
    'objectSelector': toJson_K10PropsInjectKanisterSidecarObjectSelector(obj.objectSelector),
    'webhookServer': toJson_K10PropsInjectKanisterSidecarWebhookServer(obj.webhookServer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Sidecar container for gathering metrics from ephemeral pods
 *
 * @schema K10PropsKanisterPodMetricSidecar
 */
export interface K10PropsKanisterPodMetricSidecar {
  /**
   * Enable sidecar container for gathering metrics from ephemeral pods
   *
   * @schema K10PropsKanisterPodMetricSidecar#enabled
   */
  readonly enabled?: boolean;

  /**
   * The period we check if there are metrics which should be removed
   *
   * @schema K10PropsKanisterPodMetricSidecar#metricLifetime
   */
  readonly metricLifetime?: string;

  /**
   * The interval of sending metrics into the Pushgateway
   *
   * @schema K10PropsKanisterPodMetricSidecar#pushGatewayInterval
   */
  readonly pushGatewayInterval?: string;

}

/**
 * Converts an object of type 'K10PropsKanisterPodMetricSidecar' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsKanisterPodMetricSidecar(obj: K10PropsKanisterPodMetricSidecar | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'metricLifetime': obj.metricLifetime,
    'pushGatewayInterval': obj.pushGatewayInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Resource configuration for Generic Volume Snapshot restore pods
 *
 * @schema K10PropsGenericVolumeSnapshot
 */
export interface K10PropsGenericVolumeSnapshot {
  /**
   * Configure resource request and limits by Generic Volume Snapshot restore pods
   *
   * @schema K10PropsGenericVolumeSnapshot#resources
   */
  readonly resources?: K10PropsGenericVolumeSnapshotResources;

}

/**
 * Converts an object of type 'K10PropsGenericVolumeSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGenericVolumeSnapshot(obj: K10PropsGenericVolumeSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': toJson_K10PropsGenericVolumeSnapshotResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure garbage collection settings
 *
 * @schema K10PropsGarbagecollector
 */
export interface K10PropsGarbagecollector {
  /**
   * Set garbage collection period (in seconds)
   *
   * @schema K10PropsGarbagecollector#daemonPeriod
   */
  readonly daemonPeriod?: number;

  /**
   * Sets maximum actions to keep
   *
   * @schema K10PropsGarbagecollector#keepMaxActions
   */
  readonly keepMaxActions?: number;

  /**
   * Configure importRunActions garbage collector
   *
   * @schema K10PropsGarbagecollector#importRunActions
   */
  readonly importRunActions?: K10PropsGarbagecollectorImportRunActions;

  /**
   * Configure retireActions garbage collector
   *
   * @schema K10PropsGarbagecollector#retireActions
   */
  readonly retireActions?: K10PropsGarbagecollectorRetireActions;

}

/**
 * Converts an object of type 'K10PropsGarbagecollector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGarbagecollector(obj: K10PropsGarbagecollector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'daemonPeriod': obj.daemonPeriod,
    'keepMaxActions': obj.keepMaxActions,
    'importRunActions': toJson_K10PropsGarbagecollectorImportRunActions(obj.importRunActions),
    'retireActions': toJson_K10PropsGarbagecollectorRetireActions(obj.retireActions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for K10 services
 *
 * @schema K10PropsServices
 */
export interface K10PropsServices {
  /**
   * Configuration for K10 executor service
   *
   * @schema K10PropsServices#executor
   */
  readonly executor?: K10PropsServicesExecutor;

  /**
   * @schema K10PropsServices#dashboardbff
   */
  readonly dashboardbff?: K10PropsServicesDashboardbff;

  /**
   * Custom securityContext for K10 service containers
   *
   * @schema K10PropsServices#securityContext
   */
  readonly securityContext?: K10PropsServicesSecurityContext;

  /**
   * @schema K10PropsServices#aggregatedapis
   */
  readonly aggregatedapis?: K10PropsServicesAggregatedapis;

}

/**
 * Converts an object of type 'K10PropsServices' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServices(obj: K10PropsServices | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executor': toJson_K10PropsServicesExecutor(obj.executor),
    'dashboardbff': toJson_K10PropsServicesDashboardbff(obj.dashboardbff),
    'securityContext': toJson_K10PropsServicesSecurityContext(obj.securityContext),
    'aggregatedapis': toJson_K10PropsServicesAggregatedapis(obj.aggregatedapis),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * APIGateway settings
 *
 * @schema K10PropsApigateway
 */
export interface K10PropsApigateway {
  /**
   * The resolver used for service discovery in the API gateway
   *
   * @schema K10PropsApigateway#serviceResolver
   */
  readonly serviceResolver?: K10PropsApigatewayServiceResolver;

}

/**
 * Converts an object of type 'K10PropsApigateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsApigateway(obj: K10PropsApigateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceResolver': obj.serviceResolver,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Limits set on several operations
 *
 * @schema K10PropsLimiter
 */
export interface K10PropsLimiter {
  /**
   * Limit of concurrent generic volume snapshot create operations
   *
   * @schema K10PropsLimiter#genericVolumeSnapshots
   */
  readonly genericVolumeSnapshots?: number;

  /**
   * Limit of concurrent generic volume snapshot copy operations
   *
   * @schema K10PropsLimiter#genericVolumeCopies
   */
  readonly genericVolumeCopies?: number;

  /**
   * Limit of concurrent generic volume snapshot restore operations
   *
   * @schema K10PropsLimiter#genericVolumeRestores
   */
  readonly genericVolumeRestores?: number;

  /**
   * Limit of concurrent CSI snapshot create operations
   *
   * @schema K10PropsLimiter#csiSnapshots
   */
  readonly csiSnapshots?: number;

  /**
   * Limit of concurrent cloud provider create operations
   *
   * @schema K10PropsLimiter#providerSnapshots
   */
  readonly providerSnapshots?: number;

}

/**
 * Converts an object of type 'K10PropsLimiter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsLimiter(obj: K10PropsLimiter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'genericVolumeSnapshots': obj.genericVolumeSnapshots,
    'genericVolumeCopies': obj.genericVolumeCopies,
    'genericVolumeRestores': obj.genericVolumeRestores,
    'csiSnapshots': obj.csiSnapshots,
    'providerSnapshots': obj.providerSnapshots,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Gateway service
 *
 * @schema K10PropsGateway
 */
export interface K10PropsGateway {
  /**
   * Whether to disable SSL verification for gateway pods
   *
   * @schema K10PropsGateway#insecureDisableSSLVerify
   */
  readonly insecureDisableSslVerify?: boolean;

  /**
   * Whether to expose Admin port for gateway service
   *
   * @schema K10PropsGateway#exposeAdminPort
   */
  readonly exposeAdminPort?: boolean;

  /**
   * Configure resource request and limits by Gateway pod
   *
   * @schema K10PropsGateway#resources
   */
  readonly resources?: K10PropsGatewayResources;

}

/**
 * Converts an object of type 'K10PropsGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGateway(obj: K10PropsGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'insecureDisableSSLVerify': obj.insecureDisableSslVerify,
    'exposeAdminPort': obj.exposeAdminPort,
    'resources': toJson_K10PropsGatewayResources(obj.resources),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration for Kanister service
 *
 * @schema K10PropsKanister
 */
export interface K10PropsKanister {
  /**
   * Timeout on Kanister backup operations in mins
   *
   * @schema K10PropsKanister#backupTimeout
   */
  readonly backupTimeout?: number;

  /**
   * Timeout for Kanister restore operations in mins
   *
   * @schema K10PropsKanister#restoreTimeout
   */
  readonly restoreTimeout?: number;

  /**
   * Timeout for Kanister delete operations in mins
   *
   * @schema K10PropsKanister#deleteTimeout
   */
  readonly deleteTimeout?: number;

  /**
   * Timeout for Kanister pre-hook and post-hook operations in minutes
   *
   * @schema K10PropsKanister#hookTimeout
   */
  readonly hookTimeout?: number;

  /**
   * Specify timeout to set on Kanister checkRepo operations in minutes
   *
   * @schema K10PropsKanister#checkRepoTimeout
   */
  readonly checkRepoTimeout?: number;

  /**
   * Timeout for Kanister stats operations in minutes
   *
   * @schema K10PropsKanister#statsTimeout
   */
  readonly statsTimeout?: number;

  /**
   * Timeout for Kanister efsPostRestore operations in minutes
   *
   * @schema K10PropsKanister#efsPostRestoreTimeout
   */
  readonly efsPostRestoreTimeout?: number;

  /**
   * Timeout for Kanister tooling pods to be ready during operations in minutes
   *
   * @schema K10PropsKanister#podReadyWaitTimeout
   */
  readonly podReadyWaitTimeout?: number;

}

/**
 * Converts an object of type 'K10PropsKanister' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsKanister(obj: K10PropsKanister | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backupTimeout': obj.backupTimeout,
    'restoreTimeout': obj.restoreTimeout,
    'deleteTimeout': obj.deleteTimeout,
    'hookTimeout': obj.hookTimeout,
    'checkRepoTimeout': obj.checkRepoTimeout,
    'statsTimeout': obj.statsTimeout,
    'efsPostRestoreTimeout': obj.efsPostRestoreTimeout,
    'podReadyWaitTimeout': obj.podReadyWaitTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * AWS config
 *
 * @schema K10PropsAwsConfig
 */
export interface K10PropsAwsConfig {
  /**
   * The minimum value is 15 minutes and the maximum value is the maximum duration setting for that IAM role. For documentation about how to view and edit the maximum session duration for an IAM role see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session. The value accepts a number along with a single character 'm'(for minutes) or 'h' (for hours)  Examples: 60m or 2h
   *
   * @schema K10PropsAwsConfig#assumeRoleDuration
   */
  readonly assumeRoleDuration?: string;

  /**
   * Set the AWS EFS backup vault name
   *
   * @schema K10PropsAwsConfig#efsBackupVaultName
   */
  readonly efsBackupVaultName?: string;

}

/**
 * Converts an object of type 'K10PropsAwsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAwsConfig(obj: K10PropsAwsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assumeRoleDuration': obj.assumeRoleDuration,
    'efsBackupVaultName': obj.efsBackupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Azure config
 *
 * @schema K10PropsAzure
 */
export interface K10PropsAzure {
  /**
   * Set to true - profile does not need a secret, Default Managed Identity will be used
   *
   * @schema K10PropsAzure#useDefaultMSI
   */
  readonly useDefaultMsi?: boolean;

}

/**
 * Converts an object of type 'K10PropsAzure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAzure(obj: K10PropsAzure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'useDefaultMSI': obj.useDefaultMsi,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for Grafana service
 *
 * @schema K10PropsGrafana
 */
export interface K10PropsGrafana {
  /**
   * Deploy Grafana service. If false Grafana will not be available
   *
   * @schema K10PropsGrafana#enabled
   */
  readonly enabled?: boolean;

  /**
   * Prometheus server name required by Grafana to query
   *
   * @schema K10PropsGrafana#prometheusName
   */
  readonly prometheusName?: string;

  /**
   * URL for Prometheus datasource in Grafana (must match `prometheus.server.prefixURL`)
   *
   * @schema K10PropsGrafana#prometheusPrefixURL
   */
  readonly prometheusPrefixUrl?: string;

  /**
   * Custom labels for all manifests
   *
   * @schema K10PropsGrafana#extraLabels
   */
  readonly extraLabels?: K10PropsGrafanaExtraLabels;

  /**
   * Pod labels
   *
   * @schema K10PropsGrafana#podLabels
   */
  readonly podLabels?: K10PropsGrafanaPodLabels;

  /**
   * Configure Grafana rbac resources
   *
   * @schema K10PropsGrafana#rbac
   */
  readonly rbac?: K10PropsGrafanaRbac;

}

/**
 * Converts an object of type 'K10PropsGrafana' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGrafana(obj: K10PropsGrafana | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'prometheusName': obj.prometheusName,
    'prometheusPrefixURL': obj.prometheusPrefixUrl,
    'extraLabels': toJson_K10PropsGrafanaExtraLabels(obj.extraLabels),
    'podLabels': toJson_K10PropsGrafanaPodLabels(obj.podLabels),
    'rbac': toJson_K10PropsGrafanaRbac(obj.rbac),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Encryption config
 *
 * @schema K10PropsEncryption
 */
export interface K10PropsEncryption {
  /**
   * primaryKey is used for enabling encryption of K10 primary key
   *
   * @schema K10PropsEncryption#primaryKey
   */
  readonly primaryKey?: K10PropsEncryptionPrimaryKey;

}

/**
 * Converts an object of type 'K10PropsEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsEncryption(obj: K10PropsEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'primaryKey': toJson_K10PropsEncryptionPrimaryKey(obj.primaryKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsVmWare
 */
export interface K10PropsVmWare {
  /**
   * the timeout for VMWare operations in minutes
   *
   * @schema K10PropsVmWare#taskTimeoutMin
   */
  readonly taskTimeoutMin?: number;

}

/**
 * Converts an object of type 'K10PropsVmWare' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsVmWare(obj: K10PropsVmWare | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskTimeoutMin': obj.taskTimeoutMin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Vault integration configuration
 *
 * @schema K10PropsVault
 */
export interface K10PropsVault {
  /**
   * Vault secret name
   *
   * @schema K10PropsVault#secretName
   */
  readonly secretName?: string;

  /**
   * Specify Vault endpoint
   *
   * @schema K10PropsVault#address
   */
  readonly address?: string;

  /**
   * Role that was bound to the service account name and namespace from cluster
   *
   * @schema K10PropsVault#role
   */
  readonly role?: string;

  /**
   * Default: '/var/run/secrets/kubernetes.io/serviceaccount/token'
   *
   * @schema K10PropsVault#serviceAccountTokenPath
   */
  readonly serviceAccountTokenPath?: string;

}

/**
 * Converts an object of type 'K10PropsVault' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsVault(obj: K10PropsVault | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretName': obj.secretName,
    'address': obj.address,
    'role': obj.role,
    'serviceAccountTokenPath': obj.serviceAccountTokenPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsKubeVirtVMs
 */
export interface K10PropsKubeVirtVMs {
  /**
   * @schema K10PropsKubeVirtVMs#snapshot
   */
  readonly snapshot?: K10PropsKubeVirtVMsSnapshot;

}

/**
 * Converts an object of type 'K10PropsKubeVirtVMs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsKubeVirtVMs(obj: K10PropsKubeVirtVMs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snapshot': toJson_K10PropsKubeVirtVMsSnapshot(obj.snapshot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsReporting
 */
export interface K10PropsReporting {
  /**
   * Enable download of PDF reports in the Dashboard
   *
   * @schema K10PropsReporting#pdfReports
   */
  readonly pdfReports?: boolean;

}

/**
 * Converts an object of type 'K10PropsReporting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsReporting(obj: K10PropsReporting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pdfReports': obj.pdfReports,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Change K10 image settings
 *
 * @schema K10PropsGlobalImage
 */
export interface K10PropsGlobalImage {
  /**
   * Change default K10 image registry
   *
   * @schema K10PropsGlobalImage#registry
   */
  readonly registry?: string;

  /**
   * Change default K10 tag
   *
   * @schema K10PropsGlobalImage#tag
   */
  readonly tag?: string;

  /**
   * Change default pullPolicy for all the images
   *
   * @schema K10PropsGlobalImage#pullPolicy
   */
  readonly pullPolicy?: K10PropsGlobalImagePullPolicy;

}

/**
 * Converts an object of type 'K10PropsGlobalImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalImage(obj: K10PropsGlobalImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registry': obj.registry,
    'tag': obj.tag,
    'pullPolicy': obj.pullPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Airgapped offline installation
 *
 * @schema K10PropsGlobalAirgapped
 */
export interface K10PropsGlobalAirgapped {
  /**
   * The helm repository for offline (airgapped) installation
   *
   * @schema K10PropsGlobalAirgapped#repository
   */
  readonly repository?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalAirgapped' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalAirgapped(obj: K10PropsGlobalAirgapped | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure global settings for Persistent Volume
 *
 * @schema K10PropsGlobalPersistence
 */
export interface K10PropsGlobalPersistence {
  /**
   * Change default path for Persistent Volume mount
   *
   * @schema K10PropsGlobalPersistence#mountPath
   */
  readonly mountPath?: string;

  /**
   * Create Persistent Volumes
   *
   * @schema K10PropsGlobalPersistence#enabled
   */
  readonly enabled?: boolean;

  /**
   * If set to '-', dynamic provisioning is disabled. If undefined (the default) or set to null, the default provisioner is used. (e.g gp2 on AWS, standard on GKE, AWS & OpenStack)
   *
   * @schema K10PropsGlobalPersistence#storageClass
   */
  readonly storageClass?: string;

  /**
   * Change default AccessMode for Persistent Volumes
   *
   * @schema K10PropsGlobalPersistence#accessMode
   */
  readonly accessMode?: K10PropsGlobalPersistenceAccessMode;

  /**
   * Change default size for Persistent Volumes
   *
   * @schema K10PropsGlobalPersistence#size
   */
  readonly size?: string;

  /**
   * Configure Persistence Volume for metering service
   *
   * @schema K10PropsGlobalPersistence#metering
   */
  readonly metering?: K10PropsGlobalPersistenceMetering;

  /**
   * Configure Persistence Volume for catalog service
   *
   * @schema K10PropsGlobalPersistence#catalog
   */
  readonly catalog?: K10PropsGlobalPersistenceCatalog;

  /**
   * Configure Persistence Volume for jobs service
   *
   * @schema K10PropsGlobalPersistence#jobs
   */
  readonly jobs?: K10PropsGlobalPersistenceJobs;

  /**
   * Configure Persistence Volume for logging service
   *
   * @schema K10PropsGlobalPersistence#logging
   */
  readonly logging?: K10PropsGlobalPersistenceLogging;

  /**
   * Configure Persistence Volume for grafana service
   *
   * @schema K10PropsGlobalPersistence#grafana
   */
  readonly grafana?: K10PropsGlobalPersistenceGrafana;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistence(obj: K10PropsGlobalPersistence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mountPath': obj.mountPath,
    'enabled': obj.enabled,
    'storageClass': obj.storageClass,
    'accessMode': obj.accessMode,
    'size': obj.size,
    'metering': toJson_K10PropsGlobalPersistenceMetering(obj.metering),
    'catalog': toJson_K10PropsGlobalPersistenceCatalog(obj.catalog),
    'jobs': toJson_K10PropsGlobalPersistenceJobs(obj.jobs),
    'logging': toJson_K10PropsGlobalPersistenceLogging(obj.logging),
    'grafana': toJson_K10PropsGlobalPersistenceGrafana(obj.grafana),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsGlobalImages
 */
export interface K10PropsGlobalImages {
  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#admin
   */
  readonly admin?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#aggregatedapis
   */
  readonly aggregatedapis?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#ambassador
   */
  readonly ambassador?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#auth
   */
  readonly auth?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#bloblifecyclemanager
   */
  readonly bloblifecyclemanager?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#catalog
   */
  readonly catalog?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#cephtool
   */
  readonly cephtool?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#configmap-reload
   */
  readonly configmapReload?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#controllermanager
   */
  readonly controllermanager?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#crypto
   */
  readonly crypto?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#dashboardbff
   */
  readonly dashboardbff?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#datamover
   */
  readonly datamover?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#dex
   */
  readonly dex?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#emissary
   */
  readonly emissary?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#events
   */
  readonly events?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#executor
   */
  readonly executor?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#frontend
   */
  readonly frontend?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#grafana
   */
  readonly grafana?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#init
   */
  readonly init?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#jobs
   */
  readonly jobs?: string;

  /**
   * Kanister-tools service container image contains set of tools, required for all kanister related operations. It is used for debug, troubleshooting, primer purposes as well
   *
   * @schema K10PropsGlobalImages#kanister-tools
   */
  readonly kanisterTools?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#kanister
   */
  readonly kanister?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#logging
   */
  readonly logging?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#metering
   */
  readonly metering?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#paygo_daemonset
   */
  readonly paygoDaemonset?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#prometheus
   */
  readonly prometheus?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#state
   */
  readonly state?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes. If not set, the image name is formed with '(global.airgapped.repository)|(global.image.registry)/<service-name>:(Chart.AppVersion)|(image.tag)'
   *
   * @schema K10PropsGlobalImages#upgrade
   */
  readonly upgrade?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#vbrintegrationapi
   */
  readonly vbrintegrationapi?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#garbagecollector
   */
  readonly garbagecollector?: string;

  /**
   * Used for packaging RedHat Operator. Setting this flag along with global.rhMarketPlace=true overrides the default image name. This flag is only for internal purposes.
   *
   * @schema K10PropsGlobalImages#metric-sidecar
   */
  readonly metricSidecar?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalImages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalImages(obj: K10PropsGlobalImages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'admin': obj.admin,
    'aggregatedapis': obj.aggregatedapis,
    'ambassador': obj.ambassador,
    'auth': obj.auth,
    'bloblifecyclemanager': obj.bloblifecyclemanager,
    'catalog': obj.catalog,
    'cephtool': obj.cephtool,
    'configmap-reload': obj.configmapReload,
    'controllermanager': obj.controllermanager,
    'crypto': obj.crypto,
    'dashboardbff': obj.dashboardbff,
    'datamover': obj.datamover,
    'dex': obj.dex,
    'emissary': obj.emissary,
    'events': obj.events,
    'executor': obj.executor,
    'frontend': obj.frontend,
    'grafana': obj.grafana,
    'init': obj.init,
    'jobs': obj.jobs,
    'kanister-tools': obj.kanisterTools,
    'kanister': obj.kanister,
    'logging': obj.logging,
    'metering': obj.metering,
    'paygo_daemonset': obj.paygoDaemonset,
    'prometheus': obj.prometheus,
    'state': obj.state,
    'upgrade': obj.upgrade,
    'vbrintegrationapi': obj.vbrintegrationapi,
    'garbagecollector': obj.garbagecollector,
    'metric-sidecar': obj.metricSidecar,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsGlobalIngress
 */
export interface K10PropsGlobalIngress {
  /**
   * Whether the K10 dashboard should be exposed via ingress
   *
   * @schema K10PropsGlobalIngress#create
   */
  readonly create?: boolean;

  /**
   * Set URL path for ingress
   *
   * @schema K10PropsGlobalIngress#urlPath
   */
  readonly urlPath?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalIngress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalIngress(obj: K10PropsGlobalIngress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
    'urlPath': obj.urlPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsGlobalRoute
 */
export interface K10PropsGlobalRoute {
  /**
   * Whether the K10 dashboard should be exposed via route
   *
   * @schema K10PropsGlobalRoute#enabled
   */
  readonly enabled?: boolean;

  /**
   * Set path for Route
   *
   * @schema K10PropsGlobalRoute#path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalRoute(obj: K10PropsGlobalRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Global prometheus settings
 *
 * @schema K10PropsGlobalPrometheus
 */
export interface K10PropsGlobalPrometheus {
  /**
   * Configure prometheus
   *
   * @schema K10PropsGlobalPrometheus#external
   */
  readonly external?: K10PropsGlobalPrometheusExternal;

}

/**
 * Converts an object of type 'K10PropsGlobalPrometheus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPrometheus(obj: K10PropsGlobalPrometheus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': toJson_K10PropsGlobalPrometheusExternal(obj.external),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Global network settings
 *
 * @schema K10PropsGlobalNetwork
 */
export interface K10PropsGlobalNetwork {
  /**
   * Set true to enable ipv6
   *
   * @schema K10PropsGlobalNetwork#enable_ipv6
   */
  readonly enableIpv6?: boolean;

}

/**
 * Converts an object of type 'K10PropsGlobalNetwork' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalNetwork(obj: K10PropsGlobalNetwork | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enable_ipv6': obj.enableIpv6,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set TLS configuration for the route
 *
 * @schema K10PropsRouteTls
 */
export interface K10PropsRouteTls {
  /**
   * Whether to enable TLS
   *
   * @schema K10PropsRouteTls#enabled
   */
  readonly enabled?: boolean;

  /**
   * What to do in case of an insecure traffic edge termination
   *
   * @schema K10PropsRouteTls#insecureEdgeTerminationPolicy
   */
  readonly insecureEdgeTerminationPolicy?: K10PropsRouteTlsInsecureEdgeTerminationPolicy;

  /**
   * Set termination Schema
   *
   * @schema K10PropsRouteTls#termination
   */
  readonly termination?: K10PropsRouteTlsTermination;

}

/**
 * Converts an object of type 'K10PropsRouteTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsRouteTls(obj: K10PropsRouteTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'insecureEdgeTerminationPolicy': obj.insecureEdgeTerminationPolicy,
    'termination': obj.termination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Change tools image pullPolicy
 *
 * @schema K10PropsToolsImagePullPolicy
 */
export enum K10PropsToolsImagePullPolicy {
  /** IfNotPresent */
  IF_NOT_PRESENT = "IfNotPresent",
  /** Always */
  ALWAYS = "Always",
  /** Never */
  NEVER = "Never",
}

/**
 * Change kanister-tools image pullPolicy
 *
 * @schema K10PropsKanisterToolsImagePullPolicy
 */
export enum K10PropsKanisterToolsImagePullPolicy {
  /** IfNotPresent */
  IF_NOT_PRESENT = "IfNotPresent",
  /** Always */
  ALWAYS = "Always",
  /** Never */
  NEVER = "Never",
}

/**
 * Set TLS configuration for ingress
 *
 * @schema K10PropsIngressTls
 */
export interface K10PropsIngressTls {
  /**
   * Configures a TLS use for ingress.host
   *
   * @schema K10PropsIngressTls#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsIngressTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsIngressTls(obj: K10PropsIngressTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Set the path type for the ingress resource
 *
 * @schema K10PropsIngressPathType
 */
export enum K10PropsIngressPathType {
  /** Exact */
  EXACT = "Exact",
  /** Prefix */
  PREFIX = "Prefix",
  /** ImplementationSpecific */
  IMPLEMENTATION_SPECIFIC = "ImplementationSpecific",
}

/**
 * Prometheus init container configuration
 *
 * @schema K10PropsPrometheusInitChownData
 */
export interface K10PropsPrometheusInitChownData {
  /**
   * Run initChownData init container
   *
   * @schema K10PropsPrometheusInitChownData#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusInitChownData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusInitChownData(obj: K10PropsPrometheusInitChownData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus rbac resources
 *
 * @schema K10PropsPrometheusRbac
 */
export interface K10PropsPrometheusRbac {
  /**
   * Whether to create Prometheus rbac configuration. Warning - this action will allow prometheus to scrape pods in all k8s namespaces.
   *
   * @schema K10PropsPrometheusRbac#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusRbac' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusRbac(obj: K10PropsPrometheusRbac | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Enable Prometheus alertmanager service
 *
 * @schema K10PropsPrometheusAlertmanager
 */
export interface K10PropsPrometheusAlertmanager {
  /**
   * Create Prometheus alertmanager service
   *
   * @schema K10PropsPrometheusAlertmanager#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusAlertmanager' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusAlertmanager(obj: K10PropsPrometheusAlertmanager | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus kubeStateMetrics service
 *
 * @schema K10PropsPrometheusKubeStateMetrics
 */
export interface K10PropsPrometheusKubeStateMetrics {
  /**
   * Create Prometheus KubeStateMetrics service
   *
   * @schema K10PropsPrometheusKubeStateMetrics#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusKubeStateMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusKubeStateMetrics(obj: K10PropsPrometheusKubeStateMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus NetworkPolicy
 *
 * @schema K10PropsPrometheusNetworkPolicy
 */
export interface K10PropsPrometheusNetworkPolicy {
  /**
   * Create Prometheus NetworkPolicy
   *
   * @schema K10PropsPrometheusNetworkPolicy#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusNetworkPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusNetworkPolicy(obj: K10PropsPrometheusNetworkPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus NodeExporter
 *
 * @schema K10PropsPrometheusNodeExporter
 */
export interface K10PropsPrometheusNodeExporter {
  /**
   * Create Prometheus NodeExporter service
   *
   * @schema K10PropsPrometheusNodeExporter#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusNodeExporter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusNodeExporter(obj: K10PropsPrometheusNodeExporter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus PushGateway service
 *
 * @schema K10PropsPrometheusPushgateway
 */
export interface K10PropsPrometheusPushgateway {
  /**
   * Create Prometheus PushGateway service
   *
   * @schema K10PropsPrometheusPushgateway#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusPushgateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusPushgateway(obj: K10PropsPrometheusPushgateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus Server
 *
 * @schema K10PropsPrometheusServer
 */
export interface K10PropsPrometheusServer {
  /**
   * Create Prometheus server
   *
   * @schema K10PropsPrometheusServer#enabled
   */
  readonly enabled?: boolean;

  /**
   * Configure Prometheus server securityContext
   *
   * @schema K10PropsPrometheusServer#securityContext
   */
  readonly securityContext?: K10PropsPrometheusServerSecurityContext;

  /**
   * Set retention period for Prometheus
   *
   * @schema K10PropsPrometheusServer#retention
   */
  readonly retention?: string;

  /**
   * Configure Prometheus deployment strategy
   *
   * @schema K10PropsPrometheusServer#strategy
   */
  readonly strategy?: K10PropsPrometheusServerStrategy;

  /**
   * Configure Prometheus persistent volume
   *
   * @schema K10PropsPrometheusServer#persistentVolume
   */
  readonly persistentVolume?: K10PropsPrometheusServerPersistentVolume;

  /**
   * Prometheus configmap name to override default generated name
   *
   * @schema K10PropsPrometheusServer#configMapOverrideName
   */
  readonly configMapOverrideName?: string;

  /**
   * Override default Prometheus server deployment name
   *
   * @schema K10PropsPrometheusServer#fullnameOverride
   */
  readonly fullnameOverride?: string;

  /**
   * Prometheus external url path at which the server can be accessed
   *
   * @schema K10PropsPrometheusServer#baseURL
   */
  readonly baseUrl?: string;

  /**
   * Prometheus prefix slug at which the server can be accessed
   *
   * @schema K10PropsPrometheusServer#prefixURL
   */
  readonly prefixUrl?: string;

}

/**
 * Converts an object of type 'K10PropsPrometheusServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServer(obj: K10PropsPrometheusServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'securityContext': toJson_K10PropsPrometheusServerSecurityContext(obj.securityContext),
    'retention': obj.retention,
    'strategy': toJson_K10PropsPrometheusServerStrategy(obj.strategy),
    'persistentVolume': toJson_K10PropsPrometheusServerPersistentVolume(obj.persistentVolume),
    'configMapOverrideName': obj.configMapOverrideName,
    'fullnameOverride': obj.fullnameOverride,
    'baseURL': obj.baseUrl,
    'prefixURL': obj.prefixUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create ServiceAccounts for Prometheus services
 *
 * @schema K10PropsPrometheusServiceAccounts
 */
export interface K10PropsPrometheusServiceAccounts {
  /**
   * Whether to create service account for Prometheus Alertmanager service
   *
   * @schema K10PropsPrometheusServiceAccounts#alertmanager
   */
  readonly alertmanager?: K10PropsPrometheusServiceAccountsAlertmanager;

  /**
   * Whether to create service account for Prometheus KubeStateMetrics service
   *
   * @schema K10PropsPrometheusServiceAccounts#kubeStateMetrics
   */
  readonly kubeStateMetrics?: K10PropsPrometheusServiceAccountsKubeStateMetrics;

  /**
   * Whether to create service account for Prometheus NodeExporter service
   *
   * @schema K10PropsPrometheusServiceAccounts#nodeExporter
   */
  readonly nodeExporter?: K10PropsPrometheusServiceAccountsNodeExporter;

  /**
   * Whether to create service account for Prometheus PushGateway service
   *
   * @schema K10PropsPrometheusServiceAccounts#pushgateway
   */
  readonly pushgateway?: K10PropsPrometheusServiceAccountsPushgateway;

  /**
   * Whether to create service account for Prometheus Server
   *
   * @schema K10PropsPrometheusServiceAccounts#server
   */
  readonly server?: K10PropsPrometheusServiceAccountsServer;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccounts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccounts(obj: K10PropsPrometheusServiceAccounts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alertmanager': toJson_K10PropsPrometheusServiceAccountsAlertmanager(obj.alertmanager),
    'kubeStateMetrics': toJson_K10PropsPrometheusServiceAccountsKubeStateMetrics(obj.kubeStateMetrics),
    'nodeExporter': toJson_K10PropsPrometheusServiceAccountsNodeExporter(obj.nodeExporter),
    'pushgateway': toJson_K10PropsPrometheusServiceAccountsPushgateway(obj.pushgateway),
    'server': toJson_K10PropsPrometheusServiceAccountsServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration for metering service serviceAccount
 *
 * @schema K10PropsMeteringServiceAccount
 */
export interface K10PropsMeteringServiceAccount {
  /**
   * Create metering service serviceAccount
   *
   * @schema K10PropsMeteringServiceAccount#create
   */
  readonly create?: boolean;

  /**
   * Set name for metering ServiceAccount
   *
   * @schema K10PropsMeteringServiceAccount#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'K10PropsMeteringServiceAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsMeteringServiceAccount(obj: K10PropsMeteringServiceAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure host and domain name for the K10 API services
 *
 * @schema K10PropsExternalGatewayFqdn
 */
export interface K10PropsExternalGatewayFqdn {
  /**
   * Domain name for the K10 API services
   *
   * @schema K10PropsExternalGatewayFqdn#name
   */
  readonly name?: string;

  /**
   * Supported gateway type: route53-mapper or external-dns
   *
   * @schema K10PropsExternalGatewayFqdn#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'K10PropsExternalGatewayFqdn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsExternalGatewayFqdn(obj: K10PropsExternalGatewayFqdn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure basic authentication for the K10 dashboard
 *
 * @schema K10PropsAuthBasicAuth
 */
export interface K10PropsAuthBasicAuth {
  /**
   * Enables basic authentication to the K10 dashboard that allows users to login with username and password
   *
   * @schema K10PropsAuthBasicAuth#enabled
   */
  readonly enabled?: boolean;

  /**
   * Name of an existing Secret that contains a file generated with htpasswd
   *
   * @schema K10PropsAuthBasicAuth#secretName
   */
  readonly secretName?: string;

  /**
   * A username and password pair separated by a colon character
   *
   * @schema K10PropsAuthBasicAuth#htpasswd
   */
  readonly htpasswd?: string;

}

/**
 * Converts an object of type 'K10PropsAuthBasicAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthBasicAuth(obj: K10PropsAuthBasicAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'secretName': obj.secretName,
    'htpasswd': obj.htpasswd,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration for Token based authentication for the K10 dashboard
 *
 * @schema K10PropsAuthTokenAuth
 */
export interface K10PropsAuthTokenAuth {
  /**
   * Enable token based authentication to access K10 dashboard
   *
   * @schema K10PropsAuthTokenAuth#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsAuthTokenAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthTokenAuth(obj: K10PropsAuthTokenAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration for Open ID Connect based authentication for the K10 dashboard
 *
 * @schema K10PropsAuthOidcAuth
 */
export interface K10PropsAuthOidcAuth {
  /**
   * Enable Open ID Connect based authentication to access K10 dashboard
   *
   * @schema K10PropsAuthOidcAuth#enabled
   */
  readonly enabled?: boolean;

  /**
   * URL for the OIDC Provider
   *
   * @schema K10PropsAuthOidcAuth#providerURL
   */
  readonly providerUrl?: string;

  /**
   * URL to the K10 gateway service
   *
   * @schema K10PropsAuthOidcAuth#redirectURL
   */
  readonly redirectUrl?: string;

  /**
   * Space separated OIDC scopes required for userinfo
   *
   * @schema K10PropsAuthOidcAuth#scopes
   */
  readonly scopes?: string;

  /**
   * The type of prompt to be used during authentication
   *
   * @schema K10PropsAuthOidcAuth#prompt
   */
  readonly prompt?: K10PropsAuthOidcAuthPrompt;

  /**
   * Client ID given by the OIDC provider
   *
   * @schema K10PropsAuthOidcAuth#clientID
   */
  readonly clientId?: string;

  /**
   * Client secret given by the OIDC provider
   *
   * @schema K10PropsAuthOidcAuth#clientSecret
   */
  readonly clientSecret?: string;

  /**
   * The claim to be used as the username
   *
   * @schema K10PropsAuthOidcAuth#usernameClaim
   */
  readonly usernameClaim?: string;

  /**
   * Prefix that has to be used with the username obtained from the username claim
   *
   * @schema K10PropsAuthOidcAuth#usernamePrefix
   */
  readonly usernamePrefix?: string;

  /**
   * Name of a custom OpenID Connect claim for specifying user groups
   *
   * @schema K10PropsAuthOidcAuth#groupClaim
   */
  readonly groupClaim?: string;

  /**
   * All groups will be prefixed with this value to prevent conflicts
   *
   * @schema K10PropsAuthOidcAuth#groupPrefix
   */
  readonly groupPrefix?: string;

  /**
   * URL to your OIDC provider's logout endpoint
   *
   * @schema K10PropsAuthOidcAuth#logoutURL
   */
  readonly logoutUrl?: string;

  /**
   * Must include providerURL, redirectURL, scopes, clientID/secret and logoutURL
   *
   * @schema K10PropsAuthOidcAuth#secretName
   */
  readonly secretName?: string;

}

/**
 * Converts an object of type 'K10PropsAuthOidcAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthOidcAuth(obj: K10PropsAuthOidcAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'providerURL': obj.providerUrl,
    'redirectURL': obj.redirectUrl,
    'scopes': obj.scopes,
    'prompt': obj.prompt,
    'clientID': obj.clientId,
    'clientSecret': obj.clientSecret,
    'usernameClaim': obj.usernameClaim,
    'usernamePrefix': obj.usernamePrefix,
    'groupClaim': obj.groupClaim,
    'groupPrefix': obj.groupPrefix,
    'logoutURL': obj.logoutUrl,
    'secretName': obj.secretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Dex based authentication to access K10 dashboard
 *
 * @schema K10PropsAuthDex
 */
export interface K10PropsAuthDex {
  /**
   * Enable Dex based authentication to access K10 dashboard
   *
   * @schema K10PropsAuthDex#enabled
   */
  readonly enabled?: boolean;

  /**
   * Set Dex provider URL
   *
   * @schema K10PropsAuthDex#providerURL
   */
  readonly providerUrl?: string;

  /**
   * URL to the K10 gateway service
   *
   * @schema K10PropsAuthDex#redirectURL
   */
  readonly redirectUrl?: string;

}

/**
 * Converts an object of type 'K10PropsAuthDex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthDex(obj: K10PropsAuthDex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'providerURL': obj.providerUrl,
    'redirectURL': obj.redirectUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * OpenShift OAuth server based authentication for K10 dashboard
 *
 * @schema K10PropsAuthOpenshift
 */
export interface K10PropsAuthOpenshift {
  /**
   * Enable OpenShift OAuth server based authentication to access K10 dashboard
   *
   * @schema K10PropsAuthOpenshift#enabled
   */
  readonly enabled?: boolean;

  /**
   * Name of the service account that represents an OAuth client
   *
   * @schema K10PropsAuthOpenshift#serviceAccount
   */
  readonly serviceAccount?: string;

  /**
   * The token corresponding to the service account
   *
   * @schema K10PropsAuthOpenshift#clientSecret
   */
  readonly clientSecret?: string;

  /**
   * The URL used for accessing K10's dashboard
   *
   * @schema K10PropsAuthOpenshift#dashboardURL
   */
  readonly dashboardUrl?: string;

  /**
   * The URL for accessing OpenShift's API server
   *
   * @schema K10PropsAuthOpenshift#openshiftURL
   */
  readonly openshiftUrl?: string;

  /**
   * Set true to turn off SSL verification of connections to OpenShift
   *
   * @schema K10PropsAuthOpenshift#insecureCA
   */
  readonly insecureCa?: boolean;

  /**
   * Usually found at ``/var/run/secrets/kubernetes.io/serviceaccount/ca.crt``
   *
   * @schema K10PropsAuthOpenshift#useServiceAccountCA
   */
  readonly useServiceAccountCa?: boolean;

  /**
   * Specify Kubernetes Secret that contains OIDC settings
   *
   * @schema K10PropsAuthOpenshift#secretName
   */
  readonly secretName?: string;

  /**
   * The claim to be used as the username
   *
   * @schema K10PropsAuthOpenshift#usernameClaim
   */
  readonly usernameClaim?: string;

  /**
   * Prefix that has to be used with the username obtained from the username claim
   *
   * @schema K10PropsAuthOpenshift#usernamePrefix
   */
  readonly usernamePrefix?: string;

  /**
   * Name of a custom OpenID Connect claim for specifying user groups
   *
   * @schema K10PropsAuthOpenshift#groupnameClaim
   */
  readonly groupnameClaim?: string;

  /**
   * Prefix for user group name
   *
   * @schema K10PropsAuthOpenshift#groupnamePrefix
   */
  readonly groupnamePrefix?: string;

}

/**
 * Converts an object of type 'K10PropsAuthOpenshift' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthOpenshift(obj: K10PropsAuthOpenshift | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'serviceAccount': obj.serviceAccount,
    'clientSecret': obj.clientSecret,
    'dashboardURL': obj.dashboardUrl,
    'openshiftURL': obj.openshiftUrl,
    'insecureCA': obj.insecureCa,
    'useServiceAccountCA': obj.useServiceAccountCa,
    'secretName': obj.secretName,
    'usernameClaim': obj.usernameClaim,
    'usernamePrefix': obj.usernamePrefix,
    'groupnameClaim': obj.groupnameClaim,
    'groupnamePrefix': obj.groupnamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Active Directory/LDAP based authentication for the K10 dashboard
 *
 * @schema K10PropsAuthLdap
 */
export interface K10PropsAuthLdap {
  /**
   * Enable Active Directory/LDAP based authentication to access K10 dashboard
   *
   * @schema K10PropsAuthLdap#enabled
   */
  readonly enabled?: boolean;

  /**
   * force a restart of the authentication service pod (useful when updating authentication config)
   *
   * @schema K10PropsAuthLdap#restartPod
   */
  readonly restartPod?: boolean;

  /**
   * The URL used for accessing K10's dashboard
   *
   * @schema K10PropsAuthLdap#dashboardURL
   */
  readonly dashboardUrl?: string;

  /**
   * Host and optional port of the AD/LDAP server in the form `host:port`
   *
   * @schema K10PropsAuthLdap#host
   */
  readonly host?: string;

  /**
   * Set if the AD/LDAP host is not using TLS
   *
   * @schema K10PropsAuthLdap#insecureNoSSL
   */
  readonly insecureNoSsl?: boolean;

  /**
   * Turn off SSL verification of connections to the AD/LDAP host
   *
   * @schema K10PropsAuthLdap#insecureSkipVerifySSL
   */
  readonly insecureSkipVerifySsl?: boolean;

  /**
   * When set to true, ldap:// is used to connect to the server followed by creation of a TLS session. When set to false, ldaps:// is used.
   *
   * @schema K10PropsAuthLdap#startTLS
   */
  readonly startTls?: boolean;

  /**
   * The Distinguished Name(username) used for connecting to the AD/LDAP host
   *
   * @schema K10PropsAuthLdap#bindDN
   */
  readonly bindDn?: string;

  /**
   * The password corresponding to the `bindDN` for connecting to the AD/LDAP host
   *
   * @schema K10PropsAuthLdap#bindPW
   */
  readonly bindPw?: string;

  /**
   * Secret name containing the password corresponding to the `bindDN` for connecting to the AD/LDAP host
   *
   * @schema K10PropsAuthLdap#bindPWSecretName
   */
  readonly bindPwSecretName?: string;

  /**
   * AD/LDAP user search config
   *
   * @schema K10PropsAuthLdap#userSearch
   */
  readonly userSearch?: K10PropsAuthLdapUserSearch;

  /**
   * AD/LDAP group search config
   *
   * @schema K10PropsAuthLdap#groupSearch
   */
  readonly groupSearch?: K10PropsAuthLdapGroupSearch;

  /**
   * The Kubernetes Secret that contains OIDC settings
   *
   * @schema K10PropsAuthLdap#secretName
   */
  readonly secretName?: string;

  /**
   * The claim to be used as the username
   *
   * @schema K10PropsAuthLdap#usernameClaim
   */
  readonly usernameClaim?: string;

  /**
   * Prefix that has to be used with the username obtained from the username claim
   *
   * @schema K10PropsAuthLdap#usernamePrefix
   */
  readonly usernamePrefix?: string;

  /**
   * Name of a custom OpenID Connect claim for specifying user groups
   *
   * @schema K10PropsAuthLdap#groupnameClaim
   */
  readonly groupnameClaim?: string;

  /**
   * Prefix for user group name
   *
   * @schema K10PropsAuthLdap#groupnamePrefix
   */
  readonly groupnamePrefix?: string;

}

/**
 * Converts an object of type 'K10PropsAuthLdap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthLdap(obj: K10PropsAuthLdap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'restartPod': obj.restartPod,
    'dashboardURL': obj.dashboardUrl,
    'host': obj.host,
    'insecureNoSSL': obj.insecureNoSsl,
    'insecureSkipVerifySSL': obj.insecureSkipVerifySsl,
    'startTLS': obj.startTls,
    'bindDN': obj.bindDn,
    'bindPW': obj.bindPw,
    'bindPWSecretName': obj.bindPwSecretName,
    'userSearch': toJson_K10PropsAuthLdapUserSearch(obj.userSearch),
    'groupSearch': toJson_K10PropsAuthLdapGroupSearch(obj.groupSearch),
    'secretName': obj.secretName,
    'usernameClaim': obj.usernameClaim,
    'usernamePrefix': obj.usernamePrefix,
    'groupnameClaim': obj.groupnameClaim,
    'groupnamePrefix': obj.groupnamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for VBRIntegratipnAPI service
 *
 * @schema K10PropsOptionalColocatedServicesVbrintegrationapi
 */
export interface K10PropsOptionalColocatedServicesVbrintegrationapi {
  /**
   * Set true to enable VBRIntegratipnAPI service
   *
   * @schema K10PropsOptionalColocatedServicesVbrintegrationapi#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsOptionalColocatedServicesVbrintegrationapi' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsOptionalColocatedServicesVbrintegrationapi(obj: K10PropsOptionalColocatedServicesVbrintegrationapi | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure namespaceSelector for namespace containing the workloads to inject Kansiter Sidecar
 *
 * @schema K10PropsInjectKanisterSidecarNamespaceSelector
 */
export interface K10PropsInjectKanisterSidecarNamespaceSelector {
  /**
   * Set of labels to select namespaces in which sidecar injection is enabled for workloads
   *
   * @schema K10PropsInjectKanisterSidecarNamespaceSelector#matchLabels
   */
  readonly matchLabels?: any;

}

/**
 * Converts an object of type 'K10PropsInjectKanisterSidecarNamespaceSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsInjectKanisterSidecarNamespaceSelector(obj: K10PropsInjectKanisterSidecarNamespaceSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchLabels': obj.matchLabels,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure objectSelector for the workloads to inject Kansiter Sidecar
 *
 * @schema K10PropsInjectKanisterSidecarObjectSelector
 */
export interface K10PropsInjectKanisterSidecarObjectSelector {
  /**
   * Set of labels to filter workload objects in which the sidecar is injected
   *
   * @schema K10PropsInjectKanisterSidecarObjectSelector#matchLabels
   */
  readonly matchLabels?: any;

}

/**
 * Converts an object of type 'K10PropsInjectKanisterSidecarObjectSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsInjectKanisterSidecarObjectSelector(obj: K10PropsInjectKanisterSidecarObjectSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchLabels': obj.matchLabels,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure sidecar injector webhook server
 *
 * @schema K10PropsInjectKanisterSidecarWebhookServer
 */
export interface K10PropsInjectKanisterSidecarWebhookServer {
  /**
   * Port number on which the mutating webhook server accepts request
   *
   * @schema K10PropsInjectKanisterSidecarWebhookServer#port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'K10PropsInjectKanisterSidecarWebhookServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsInjectKanisterSidecarWebhookServer(obj: K10PropsInjectKanisterSidecarWebhookServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure resource request and limits by Generic Volume Snapshot restore pods
 *
 * @schema K10PropsGenericVolumeSnapshotResources
 */
export interface K10PropsGenericVolumeSnapshotResources {
  /**
   * Generic Volume Snapshot resource requests configuration
   *
   * @schema K10PropsGenericVolumeSnapshotResources#requests
   */
  readonly requests?: K10PropsGenericVolumeSnapshotResourcesRequests;

  /**
   * Generic Volume Snapshot resource limits configuration
   *
   * @schema K10PropsGenericVolumeSnapshotResources#limits
   */
  readonly limits?: K10PropsGenericVolumeSnapshotResourcesLimits;

}

/**
 * Converts an object of type 'K10PropsGenericVolumeSnapshotResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGenericVolumeSnapshotResources(obj: K10PropsGenericVolumeSnapshotResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requests': toJson_K10PropsGenericVolumeSnapshotResourcesRequests(obj.requests),
    'limits': toJson_K10PropsGenericVolumeSnapshotResourcesLimits(obj.limits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure importRunActions garbage collector
 *
 * @schema K10PropsGarbagecollectorImportRunActions
 */
export interface K10PropsGarbagecollectorImportRunActions {
  /**
   * Set true to enable importRunActions collector
   *
   * @schema K10PropsGarbagecollectorImportRunActions#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsGarbagecollectorImportRunActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGarbagecollectorImportRunActions(obj: K10PropsGarbagecollectorImportRunActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure retireActions garbage collector
 *
 * @schema K10PropsGarbagecollectorRetireActions
 */
export interface K10PropsGarbagecollectorRetireActions {
  /**
   * Set true to enable importRunActions collector
   *
   * @schema K10PropsGarbagecollectorRetireActions#enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsGarbagecollectorRetireActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGarbagecollectorRetireActions(obj: K10PropsGarbagecollectorRetireActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration for K10 executor service
 *
 * @schema K10PropsServicesExecutor
 */
export interface K10PropsServicesExecutor {
  /**
   * Whether the executor pods may use the node network
   *
   * @schema K10PropsServicesExecutor#hostNetwork
   */
  readonly hostNetwork?: boolean;

  /**
   * Count of running executor workers
   *
   * @schema K10PropsServicesExecutor#workerCount
   */
  readonly workerCount?: number;

  /**
   * Limit of concurrent restore CSI snapshots operations per each restore action
   *
   * @schema K10PropsServicesExecutor#maxConcurrentRestoreCsiSnapshots
   */
  readonly maxConcurrentRestoreCsiSnapshots?: number;

  /**
   * Limit of concurrent restore generic volume snapshots operations per each restore action
   *
   * @schema K10PropsServicesExecutor#maxConcurrentRestoreGenericVolumeSnapshots
   */
  readonly maxConcurrentRestoreGenericVolumeSnapshots?: number;

  /**
   * Limit of concurrent restore workloads operations per each restore action
   *
   * @schema K10PropsServicesExecutor#maxConcurrentRestoreWorkloads
   */
  readonly maxConcurrentRestoreWorkloads?: number;

}

/**
 * Converts an object of type 'K10PropsServicesExecutor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServicesExecutor(obj: K10PropsServicesExecutor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostNetwork': obj.hostNetwork,
    'workerCount': obj.workerCount,
    'maxConcurrentRestoreCsiSnapshots': obj.maxConcurrentRestoreCsiSnapshots,
    'maxConcurrentRestoreGenericVolumeSnapshots': obj.maxConcurrentRestoreGenericVolumeSnapshots,
    'maxConcurrentRestoreWorkloads': obj.maxConcurrentRestoreWorkloads,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsServicesDashboardbff
 */
export interface K10PropsServicesDashboardbff {
  /**
   * Whether the dashboardbff pods may use the node network
   *
   * @schema K10PropsServicesDashboardbff#hostNetwork
   */
  readonly hostNetwork?: boolean;

}

/**
 * Converts an object of type 'K10PropsServicesDashboardbff' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServicesDashboardbff(obj: K10PropsServicesDashboardbff | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostNetwork': obj.hostNetwork,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Custom securityContext for K10 service containers
 *
 * @schema K10PropsServicesSecurityContext
 */
export interface K10PropsServicesSecurityContext {
  /**
   * User ID K10 service containers run as
   *
   * @schema K10PropsServicesSecurityContext#runAsUser
   */
  readonly runAsUser?: number;

  /**
   * FSGroup that owns K10 service container volumes
   *
   * @schema K10PropsServicesSecurityContext#fsGroup
   */
  readonly fsGroup?: number;

}

/**
 * Converts an object of type 'K10PropsServicesSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServicesSecurityContext(obj: K10PropsServicesSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'runAsUser': obj.runAsUser,
    'fsGroup': obj.fsGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsServicesAggregatedapis
 */
export interface K10PropsServicesAggregatedapis {
  /**
   * Whether the aggregatedapis pods may use the node network
   *
   * @schema K10PropsServicesAggregatedapis#hostNetwork
   */
  readonly hostNetwork?: boolean;

}

/**
 * Converts an object of type 'K10PropsServicesAggregatedapis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsServicesAggregatedapis(obj: K10PropsServicesAggregatedapis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostNetwork': obj.hostNetwork,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The resolver used for service discovery in the API gateway
 *
 * @schema K10PropsApigatewayServiceResolver
 */
export enum K10PropsApigatewayServiceResolver {
  /** dns */
  DNS = "dns",
  /** endpoint */
  ENDPOINT = "endpoint",
}

/**
 * Configure resource request and limits by Gateway pod
 *
 * @schema K10PropsGatewayResources
 */
export interface K10PropsGatewayResources {
  /**
   * Gateway resource requests configuration
   *
   * @schema K10PropsGatewayResources#requests
   */
  readonly requests?: K10PropsGatewayResourcesRequests;

  /**
   * Gateway resource limits configuration
   *
   * @schema K10PropsGatewayResources#limits
   */
  readonly limits?: K10PropsGatewayResourcesLimits;

}

/**
 * Converts an object of type 'K10PropsGatewayResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGatewayResources(obj: K10PropsGatewayResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requests': toJson_K10PropsGatewayResourcesRequests(obj.requests),
    'limits': toJson_K10PropsGatewayResourcesLimits(obj.limits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Custom labels for all manifests
 *
 * @schema K10PropsGrafanaExtraLabels
 */
export interface K10PropsGrafanaExtraLabels {
  /**
   * Component name
   *
   * @schema K10PropsGrafanaExtraLabels#component
   */
  readonly component?: string;

}

/**
 * Converts an object of type 'K10PropsGrafanaExtraLabels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGrafanaExtraLabels(obj: K10PropsGrafanaExtraLabels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'component': obj.component,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Pod labels
 *
 * @schema K10PropsGrafanaPodLabels
 */
export interface K10PropsGrafanaPodLabels {
  /**
   * Component name
   *
   * @schema K10PropsGrafanaPodLabels#component
   */
  readonly component?: string;

}

/**
 * Converts an object of type 'K10PropsGrafanaPodLabels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGrafanaPodLabels(obj: K10PropsGrafanaPodLabels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'component': obj.component,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Grafana rbac resources
 *
 * @schema K10PropsGrafanaRbac
 */
export interface K10PropsGrafanaRbac {
  /**
   * Create Role if set true. Otherwise create ClusterRole
   *
   * @schema K10PropsGrafanaRbac#namespaced
   */
  readonly namespaced?: boolean;

  /**
   * Enable Grafana Pod Security Policy
   *
   * @schema K10PropsGrafanaRbac#pspEnabled
   */
  readonly pspEnabled?: boolean;

}

/**
 * Converts an object of type 'K10PropsGrafanaRbac' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGrafanaRbac(obj: K10PropsGrafanaRbac | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaced': obj.namespaced,
    'pspEnabled': obj.pspEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * primaryKey is used for enabling encryption of K10 primary key
 *
 * @schema K10PropsEncryptionPrimaryKey
 */
export interface K10PropsEncryptionPrimaryKey {
  /**
   * Ensures AWS CMK is used for encrypting K10 primary key
   *
   * @schema K10PropsEncryptionPrimaryKey#awsCmkKeyId
   */
  readonly awsCmkKeyId?: string;

  /**
   * Vault Transit key name for Vault integration
   *
   * @schema K10PropsEncryptionPrimaryKey#vaultTransitKeyName
   */
  readonly vaultTransitKeyName?: string;

  /**
   * Vault transit path for Vault integration
   *
   * @schema K10PropsEncryptionPrimaryKey#vaultTransitPath
   */
  readonly vaultTransitPath?: string;

}

/**
 * Converts an object of type 'K10PropsEncryptionPrimaryKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsEncryptionPrimaryKey(obj: K10PropsEncryptionPrimaryKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsCmkKeyId': obj.awsCmkKeyId,
    'vaultTransitKeyName': obj.vaultTransitKeyName,
    'vaultTransitPath': obj.vaultTransitPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema K10PropsKubeVirtVMsSnapshot
 */
export interface K10PropsKubeVirtVMsSnapshot {
  /**
   * Time within which K10 is expected to complete the Virtual Machine's backup and thaw the Virtual Machine.
   *
   * @schema K10PropsKubeVirtVMsSnapshot#unfreezeTimeout
   */
  readonly unfreezeTimeout?: string;

}

/**
 * Converts an object of type 'K10PropsKubeVirtVMsSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsKubeVirtVMsSnapshot(obj: K10PropsKubeVirtVMsSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unfreezeTimeout': obj.unfreezeTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Change default pullPolicy for all the images
 *
 * @schema K10PropsGlobalImagePullPolicy
 */
export enum K10PropsGlobalImagePullPolicy {
  /** IfNotPresent */
  IF_NOT_PRESENT = "IfNotPresent",
  /** Always */
  ALWAYS = "Always",
  /** Never */
  NEVER = "Never",
}

/**
 * Change default AccessMode for Persistent Volumes
 *
 * @schema K10PropsGlobalPersistenceAccessMode
 */
export enum K10PropsGlobalPersistenceAccessMode {
  /** ReadWriteOnce */
  READ_WRITE_ONCE = "ReadWriteOnce",
  /** ReadOnlyMany */
  READ_ONLY_MANY = "ReadOnlyMany",
  /** ReadWriteMany */
  READ_WRITE_MANY = "ReadWriteMany",
}

/**
 * Configure Persistence Volume for metering service
 *
 * @schema K10PropsGlobalPersistenceMetering
 */
export interface K10PropsGlobalPersistenceMetering {
  /**
   * If not set, global.persistence.size is used
   *
   * @schema K10PropsGlobalPersistenceMetering#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistenceMetering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistenceMetering(obj: K10PropsGlobalPersistenceMetering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Persistence Volume for catalog service
 *
 * @schema K10PropsGlobalPersistenceCatalog
 */
export interface K10PropsGlobalPersistenceCatalog {
  /**
   * If not set, global.persistence.size is used.
   *
   * @schema K10PropsGlobalPersistenceCatalog#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistenceCatalog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistenceCatalog(obj: K10PropsGlobalPersistenceCatalog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Persistence Volume for jobs service
 *
 * @schema K10PropsGlobalPersistenceJobs
 */
export interface K10PropsGlobalPersistenceJobs {
  /**
   * If not set, global.persistence.size is used.
   *
   * @schema K10PropsGlobalPersistenceJobs#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistenceJobs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistenceJobs(obj: K10PropsGlobalPersistenceJobs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Persistence Volume for logging service
 *
 * @schema K10PropsGlobalPersistenceLogging
 */
export interface K10PropsGlobalPersistenceLogging {
  /**
   * If not set, global.persistence.size is used.
   *
   * @schema K10PropsGlobalPersistenceLogging#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistenceLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistenceLogging(obj: K10PropsGlobalPersistenceLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Persistence Volume for grafana service
 *
 * @schema K10PropsGlobalPersistenceGrafana
 */
export interface K10PropsGlobalPersistenceGrafana {
  /**
   * If not set, global.persistence.size is used.
   *
   * @schema K10PropsGlobalPersistenceGrafana#size
   */
  readonly size?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPersistenceGrafana' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPersistenceGrafana(obj: K10PropsGlobalPersistenceGrafana | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure prometheus
 *
 * @schema K10PropsGlobalPrometheusExternal
 */
export interface K10PropsGlobalPrometheusExternal {
  /**
   * Set prometheus host name
   *
   * @schema K10PropsGlobalPrometheusExternal#host
   */
  readonly host?: string;

  /**
   * Set prometheus port number
   *
   * @schema K10PropsGlobalPrometheusExternal#port
   */
  readonly port?: string;

  /**
   * Set prometheus baseURL
   *
   * @schema K10PropsGlobalPrometheusExternal#baseURL
   */
  readonly baseUrl?: string;

}

/**
 * Converts an object of type 'K10PropsGlobalPrometheusExternal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGlobalPrometheusExternal(obj: K10PropsGlobalPrometheusExternal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'host': obj.host,
    'port': obj.port,
    'baseURL': obj.baseUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * What to do in case of an insecure traffic edge termination
 *
 * @schema K10PropsRouteTlsInsecureEdgeTerminationPolicy
 */
export enum K10PropsRouteTlsInsecureEdgeTerminationPolicy {
  /** None */
  NONE = "None",
  /** Allow */
  ALLOW = "Allow",
  /** Redirect */
  REDIRECT = "Redirect",
  /**  */
  VALUE_ = "",
}

/**
 * Set termination Schema
 *
 * @schema K10PropsRouteTlsTermination
 */
export enum K10PropsRouteTlsTermination {
  /** edge */
  EDGE = "edge",
  /** passthrough */
  PASSTHROUGH = "passthrough",
  /** reencrypt */
  REENCRYPT = "reencrypt",
}

/**
 * Configure Prometheus server securityContext
 *
 * @schema K10PropsPrometheusServerSecurityContext
 */
export interface K10PropsPrometheusServerSecurityContext {
  /**
   * Set securityContext runAsUser ID
   *
   * @schema K10PropsPrometheusServerSecurityContext#runAsUser
   */
  readonly runAsUser?: number;

  /**
   * Enable securityContext runAsNonRoot
   *
   * @schema K10PropsPrometheusServerSecurityContext#runAsNonRoot
   */
  readonly runAsNonRoot?: boolean;

  /**
   * Set securityContext runAsGroup ID
   *
   * @schema K10PropsPrometheusServerSecurityContext#runAsGroup
   */
  readonly runAsGroup?: number;

  /**
   * Set securityContext fsGroup ID
   *
   * @schema K10PropsPrometheusServerSecurityContext#fsGroup
   */
  readonly fsGroup?: number;

}

/**
 * Converts an object of type 'K10PropsPrometheusServerSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServerSecurityContext(obj: K10PropsPrometheusServerSecurityContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'runAsUser': obj.runAsUser,
    'runAsNonRoot': obj.runAsNonRoot,
    'runAsGroup': obj.runAsGroup,
    'fsGroup': obj.fsGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus deployment strategy
 *
 * @schema K10PropsPrometheusServerStrategy
 */
export interface K10PropsPrometheusServerStrategy {
  /**
   * Prometheus rollingUpdate config
   *
   * @schema K10PropsPrometheusServerStrategy#rollingUpdate
   */
  readonly rollingUpdate?: K10PropsPrometheusServerStrategyRollingUpdate;

  /**
   * Change default deployment strategy
   *
   * @schema K10PropsPrometheusServerStrategy#type
   */
  readonly type?: K10PropsPrometheusServerStrategyType;

}

/**
 * Converts an object of type 'K10PropsPrometheusServerStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServerStrategy(obj: K10PropsPrometheusServerStrategy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rollingUpdate': toJson_K10PropsPrometheusServerStrategyRollingUpdate(obj.rollingUpdate),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configure Prometheus persistent volume
 *
 * @schema K10PropsPrometheusServerPersistentVolume
 */
export interface K10PropsPrometheusServerPersistentVolume {
  /**
   * Create PersistentVolumeClaim for Prometheus server
   *
   * @schema K10PropsPrometheusServerPersistentVolume#enabled
   */
  readonly enabled?: boolean;

  /**
   * Setting this option overwrites global StorageClass value
   *
   * @schema K10PropsPrometheusServerPersistentVolume#storageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'K10PropsPrometheusServerPersistentVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServerPersistentVolume(obj: K10PropsPrometheusServerPersistentVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'storageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create service account for Prometheus Alertmanager service
 *
 * @schema K10PropsPrometheusServiceAccountsAlertmanager
 */
export interface K10PropsPrometheusServiceAccountsAlertmanager {
  /**
   * Set true to create ServiceAccount for Alertmanager service
   *
   * @schema K10PropsPrometheusServiceAccountsAlertmanager#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccountsAlertmanager' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccountsAlertmanager(obj: K10PropsPrometheusServiceAccountsAlertmanager | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create service account for Prometheus KubeStateMetrics service
 *
 * @schema K10PropsPrometheusServiceAccountsKubeStateMetrics
 */
export interface K10PropsPrometheusServiceAccountsKubeStateMetrics {
  /**
   * Set true to create ServiceAccount for KubeStateMetrics service
   *
   * @schema K10PropsPrometheusServiceAccountsKubeStateMetrics#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccountsKubeStateMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccountsKubeStateMetrics(obj: K10PropsPrometheusServiceAccountsKubeStateMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create service account for Prometheus NodeExporter service
 *
 * @schema K10PropsPrometheusServiceAccountsNodeExporter
 */
export interface K10PropsPrometheusServiceAccountsNodeExporter {
  /**
   * Set true to create ServiceAccount for NodeExporter service
   *
   * @schema K10PropsPrometheusServiceAccountsNodeExporter#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccountsNodeExporter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccountsNodeExporter(obj: K10PropsPrometheusServiceAccountsNodeExporter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create service account for Prometheus PushGateway service
 *
 * @schema K10PropsPrometheusServiceAccountsPushgateway
 */
export interface K10PropsPrometheusServiceAccountsPushgateway {
  /**
   * Set true to create ServiceAccount for PushGateway service
   *
   * @schema K10PropsPrometheusServiceAccountsPushgateway#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccountsPushgateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccountsPushgateway(obj: K10PropsPrometheusServiceAccountsPushgateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Whether to create service account for Prometheus Server
 *
 * @schema K10PropsPrometheusServiceAccountsServer
 */
export interface K10PropsPrometheusServiceAccountsServer {
  /**
   * Set true to create ServiceAccount for Prometheus Server
   *
   * @schema K10PropsPrometheusServiceAccountsServer#create
   */
  readonly create?: boolean;

}

/**
 * Converts an object of type 'K10PropsPrometheusServiceAccountsServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServiceAccountsServer(obj: K10PropsPrometheusServiceAccountsServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'create': obj.create,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The type of prompt to be used during authentication
 *
 * @schema K10PropsAuthOidcAuthPrompt
 */
export enum K10PropsAuthOidcAuthPrompt {
  /** none */
  NONE = "none",
  /** consent */
  CONSENT = "consent",
  /** login */
  LOGIN = "login",
  /** select_account */
  SELECT_ACCOUNT = "select_account",
}

/**
 * AD/LDAP user search config
 *
 * @schema K10PropsAuthLdapUserSearch
 */
export interface K10PropsAuthLdapUserSearch {
  /**
   * The base Distinguished Name to start the AD/LDAP search from
   *
   * @schema K10PropsAuthLdapUserSearch#baseDN
   */
  readonly baseDn?: string;

  /**
   * Optional filter to apply when searching the directory
   *
   * @schema K10PropsAuthLdapUserSearch#filter
   */
  readonly filter?: string;

  /**
   * Attribute used for comparing user entries when searching the directory
   *
   * @schema K10PropsAuthLdapUserSearch#username
   */
  readonly username?: string;

  /**
   * AD/LDAP attribute in a user's entry that should map to the user ID field in a token
   *
   * @schema K10PropsAuthLdapUserSearch#idAttr
   */
  readonly idAttr?: string;

  /**
   * AD/LDAP attribute in a user's entry that should map to the email field in a token
   *
   * @schema K10PropsAuthLdapUserSearch#emailAttr
   */
  readonly emailAttr?: string;

  /**
   * Attribute in a user's entry that should map to the name field in a token
   *
   * @schema K10PropsAuthLdapUserSearch#nameAttr
   */
  readonly nameAttr?: string;

  /**
   * AD/LDAP attribute in a user's entry that should map to the preferred_username field in a token
   *
   * @schema K10PropsAuthLdapUserSearch#preferredUsernameAttr
   */
  readonly preferredUsernameAttr?: string;

}

/**
 * Converts an object of type 'K10PropsAuthLdapUserSearch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthLdapUserSearch(obj: K10PropsAuthLdapUserSearch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseDN': obj.baseDn,
    'filter': obj.filter,
    'username': obj.username,
    'idAttr': obj.idAttr,
    'emailAttr': obj.emailAttr,
    'nameAttr': obj.nameAttr,
    'preferredUsernameAttr': obj.preferredUsernameAttr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * AD/LDAP group search config
 *
 * @schema K10PropsAuthLdapGroupSearch
 */
export interface K10PropsAuthLdapGroupSearch {
  /**
   * The base Distinguished Name to start the AD/LDAP group search from
   *
   * @schema K10PropsAuthLdapGroupSearch#baseDN
   */
  readonly baseDn?: string;

  /**
   * filter to apply when searching the directory for groups
   *
   * @schema K10PropsAuthLdapGroupSearch#filter
   */
  readonly filter?: string;

  /**
   * List of field pairs that are used to match a user to a group
   *
   * @schema K10PropsAuthLdapGroupSearch#userMatchers
   */
  readonly userMatchers?: K10PropsAuthLdapGroupSearchUserMatchers[];

  /**
   * The AD/LDAP attribute that represents a group's name in the directory
   *
   * @schema K10PropsAuthLdapGroupSearch#nameAttr
   */
  readonly nameAttr?: string;

}

/**
 * Converts an object of type 'K10PropsAuthLdapGroupSearch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthLdapGroupSearch(obj: K10PropsAuthLdapGroupSearch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseDN': obj.baseDn,
    'filter': obj.filter,
    'userMatchers': obj.userMatchers?.map(y => toJson_K10PropsAuthLdapGroupSearchUserMatchers(y)),
    'nameAttr': obj.nameAttr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Generic Volume Snapshot resource requests configuration
 *
 * @schema K10PropsGenericVolumeSnapshotResourcesRequests
 */
export interface K10PropsGenericVolumeSnapshotResourcesRequests {
  /**
   * Generic Volume Snapshot restore pods memory request
   *
   * @schema K10PropsGenericVolumeSnapshotResourcesRequests#memory
   */
  readonly memory?: string;

  /**
   * Generic Volume Snapshot restore pods cpu request
   *
   * @schema K10PropsGenericVolumeSnapshotResourcesRequests#cpu
   */
  readonly cpu?: string;

}

/**
 * Converts an object of type 'K10PropsGenericVolumeSnapshotResourcesRequests' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGenericVolumeSnapshotResourcesRequests(obj: K10PropsGenericVolumeSnapshotResourcesRequests | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memory': obj.memory,
    'cpu': obj.cpu,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Generic Volume Snapshot resource limits configuration
 *
 * @schema K10PropsGenericVolumeSnapshotResourcesLimits
 */
export interface K10PropsGenericVolumeSnapshotResourcesLimits {
  /**
   * Generic Volume Snapshot restore pods memory limit
   *
   * @schema K10PropsGenericVolumeSnapshotResourcesLimits#memory
   */
  readonly memory?: string;

  /**
   * Generic Volume Snapshot restore pods cpu limit
   *
   * @schema K10PropsGenericVolumeSnapshotResourcesLimits#cpu
   */
  readonly cpu?: string;

}

/**
 * Converts an object of type 'K10PropsGenericVolumeSnapshotResourcesLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGenericVolumeSnapshotResourcesLimits(obj: K10PropsGenericVolumeSnapshotResourcesLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memory': obj.memory,
    'cpu': obj.cpu,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Gateway resource requests configuration
 *
 * @schema K10PropsGatewayResourcesRequests
 */
export interface K10PropsGatewayResourcesRequests {
  /**
   * Gateway pod memory request
   *
   * @schema K10PropsGatewayResourcesRequests#memory
   */
  readonly memory?: string;

  /**
   * Gateway pod cpu request
   *
   * @schema K10PropsGatewayResourcesRequests#cpu
   */
  readonly cpu?: string;

}

/**
 * Converts an object of type 'K10PropsGatewayResourcesRequests' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGatewayResourcesRequests(obj: K10PropsGatewayResourcesRequests | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memory': obj.memory,
    'cpu': obj.cpu,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Gateway resource limits configuration
 *
 * @schema K10PropsGatewayResourcesLimits
 */
export interface K10PropsGatewayResourcesLimits {
  /**
   * Gateway pod memory limit
   *
   * @schema K10PropsGatewayResourcesLimits#memory
   */
  readonly memory?: string;

  /**
   * Gateway pod cpu limit
   *
   * @schema K10PropsGatewayResourcesLimits#cpu
   */
  readonly cpu?: string;

}

/**
 * Converts an object of type 'K10PropsGatewayResourcesLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsGatewayResourcesLimits(obj: K10PropsGatewayResourcesLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memory': obj.memory,
    'cpu': obj.cpu,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Prometheus rollingUpdate config
 *
 * @schema K10PropsPrometheusServerStrategyRollingUpdate
 */
export interface K10PropsPrometheusServerStrategyRollingUpdate {
  /**
   * The number of pods that can be created above the desired amount of pods during an update
   *
   * @schema K10PropsPrometheusServerStrategyRollingUpdate#maxSurge
   */
  readonly maxSurge?: string;

  /**
   * The number of pods that can be unavailable during the update process
   *
   * @schema K10PropsPrometheusServerStrategyRollingUpdate#maxUnavailable
   */
  readonly maxUnavailable?: string;

}

/**
 * Converts an object of type 'K10PropsPrometheusServerStrategyRollingUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsPrometheusServerStrategyRollingUpdate(obj: K10PropsPrometheusServerStrategyRollingUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxSurge': obj.maxSurge,
    'maxUnavailable': obj.maxUnavailable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Change default deployment strategy
 *
 * @schema K10PropsPrometheusServerStrategyType
 */
export enum K10PropsPrometheusServerStrategyType {
  /** Recreate */
  RECREATE = "Recreate",
  /** RollingUpdate */
  ROLLING_UPDATE = "RollingUpdate",
}

/**
 * @schema K10PropsAuthLdapGroupSearchUserMatchers
 */
export interface K10PropsAuthLdapGroupSearchUserMatchers {
  /**
   * Attribute in the user's entry that must match with the groupAttr while searching for groups
   *
   * @schema K10PropsAuthLdapGroupSearchUserMatchers#userAttr
   */
  readonly userAttr?: string;

  /**
   * Attribute in the group's entry that must match with the userAttr while searching for groups
   *
   * @schema K10PropsAuthLdapGroupSearchUserMatchers#groupAttr
   */
  readonly groupAttr?: string;

}

/**
 * Converts an object of type 'K10PropsAuthLdapGroupSearchUserMatchers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_K10PropsAuthLdapGroupSearchUserMatchers(obj: K10PropsAuthLdapGroupSearchUserMatchers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userAttr': obj.userAttr,
    'groupAttr': obj.groupAttr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
