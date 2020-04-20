import { expectImportMatchSnapshot } from "./util";
import { GetProvider } from "../../lib/get/providers";

const getProvider = (provider: string) =>
  expectImportMatchSnapshot(provider, () => new GetProvider());

getProvider('aws@~> 2.0');