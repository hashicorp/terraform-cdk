import { ImportOptions } from "./base";
import { ImportKubernetesApi } from "./k8s";
import { ImportCustomResourceDefinition } from './crd';
import { ImportSpec } from '../config';

export async function importDispatch(imports: ImportSpec[], argv: any, options: ImportOptions) {
  for (const importSpec of imports) {
    const importer = await matchImporter(importSpec, argv);

    if (!importer) {
      throw new Error(`unable to determine import type for "${importSpec}"`);
    }

    await importer.import({
      moduleNamePrefix: importSpec.moduleNamePrefix,
      ...options
    });
  }
}

async function matchImporter(importSpec: ImportSpec, argv: any) {
  const k8s = await ImportKubernetesApi.match(importSpec, argv);
  if (k8s) {
    return new ImportKubernetesApi(k8s);
  }

  const crd = await ImportCustomResourceDefinition.match(importSpec);
  if (crd) {
    return new ImportCustomResourceDefinition(crd);
  }

  return undefined;
}
