import { Collection } from "./functions/collection";
import { Crypto } from "./functions/crypto";
import { DateTime } from "./functions/datetime";
import { Encoding } from "./functions/encoding";
import { Filesystem } from "./functions/filesystem";
import { Network } from "./functions/network";
import { Numeric } from "./functions/numeric";
import { String } from "./functions/string";
import { Type } from "./functions/type";

export { Collection } from "./functions/collection";
export { Crypto } from "./functions/crypto";
export { DateTime } from "./functions/datetime";
export { Encoding } from "./functions/encoding";
export { Filesystem } from "./functions/filesystem";
export { Network } from "./functions/network";
export { Numeric } from "./functions/numeric";
export { String } from "./functions/string";
export { Type } from "./functions/type";

export class Fn {
  public static collection = Collection;
  public static crypto = Crypto;
  public static dateTime = DateTime;
  public static encoding = Encoding;
  public static filesystem = Filesystem;
  public static network = Network;
  public static numeric = Numeric;
  public static str = String;
  public static type = Type;
}
