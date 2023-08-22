type ChartInfo = {
  chartUrl: string;
  chartName: string;
  chartVersion: string;
};

export const testCharts: ChartInfo[] = [
  {
    chartUrl: 'https://prometheus-community.github.io/helm-charts',
    chartName: 'prometheus',
    chartVersion: '23.4.0',
  },
  {
    chartUrl: 'https://helm.releases.hashicorp.com',
    chartName: 'vault',
    chartVersion: '0.25.0',
  },
  {
    chartUrl: 'https://artifacthub.github.io/helm-charts',
    chartName: 'artifact-hub',
    chartVersion: '1.14.0',
  },
  {
    chartUrl: 'https://helm.nginx.com/stable',
    chartName: 'nginx-ingress',
    chartVersion: '0.18.1',
  },
  {
    chartUrl: 'https://codecentric.github.io/helm-charts',
    chartName: 'keycloak',
    chartVersion: '18.4.3',
  },
  {
    chartUrl: 'https://jupyterhub.github.io/helm-chart/',
    chartName: 'jupyterhub',
    chartVersion: '3.0.3-0.dev.git.6306.h83f8ffdd',
  },
  {
    chartUrl: 'https://istio-release.storage.googleapis.com/charts',
    chartName: 'gateway',
    chartVersion: '1.19.0-beta.1',
  },
  {
    chartUrl: 'https://prometheus-community.github.io/helm-charts',
    chartName: 'alertmanager',
    chartVersion: '1.5.0',
  },
  {
    chartUrl: 'https://dagster-io.github.io/helm',
    chartName: 'dagster',
    chartVersion: '1.4.7',
  },
  {
    chartUrl: 'https://codecentric.github.io/helm-charts',
    chartName: 'keycloakx',
    chartVersion: '2.2.2',
  },
  {
    chartUrl: 'https://helm.open-metadata.org',
    chartName: 'openmetadata',
    chartVersion: '1.1.6',
  },
  {
    chartUrl: 'https://airflow.apache.org/',
    chartName: 'airflow',
    chartVersion: '1.10.0',
  },
];
