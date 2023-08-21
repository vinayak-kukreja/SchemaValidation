import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const MAX_HELM_BUFFER = 10 * 1024 * 1024;

export function pullHelmRepo(
  chartUrl: string,
  chartName: string,
  chartVersion: string,
  dir: string = '../artifacts',
) {
  const workdir = fs.mkdtempSync(path.join(__dirname, dir, 'cdk8s-helm-'));

  const args = new Array<string>();
  args.push('pull');
  args.push(chartName);
  args.push('--repo', chartUrl);
  args.push('--version', chartVersion);
  args.push('--untar');
  args.push('--untardir', workdir);

  const command = 'helm';

  console.log(`Running Command: ${args}`);

  const helm = spawnSync(command, args, {
    maxBuffer: MAX_HELM_BUFFER,
  });

  if (helm.error) {
    const err = helm.error.message;
    if (err.includes('ENOENT')) {
      throw new Error(
        `unable to execute '${command}' to pull the Helm chart. Is it installed on your system?`,
      );
    }

    throw new Error(`error while pulling a helm chart: ${err}`);
  }

  if (helm.status !== 0) {
    throw new Error(helm.stderr.toString());
  }

  return workdir;
}
