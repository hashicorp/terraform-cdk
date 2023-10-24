import { Token } from "cdktf";
// Cloud-Agnostic Building Blocks
/**
 * Service connecting to the "hosting" service, e.g. Lambda connecting to DB
 */
export abstract class Plug {}
/**
 * Service being connected to, e.g. DB
 */
export abstract class Socket {}
/**
 * Connector connecting one or many Plugs to a Socket
 */
export abstract class Connector {
  constructor(protected serviceProvider: Socket) {}
  abstract get plug(): Plug;
}

export interface DatbaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
}

export class DatabaseUser extends Plug {
  connect(db: DatabaseProvider): DatbaseConfig {
    db.connect(this);

    return {
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
    };
  }
}
export abstract class DatabaseProvider extends Socket {
  abstract get host(): string;
  abstract get port(): number;
  abstract get user(): string;
  abstract get password(): string;
  abstract connect(subjectPlug: DatabaseUser): DatbaseConfig;
}
/**
 * Generic database connector connecting one or many services to a database
 */
export abstract class DatabaseConnector extends Connector {
  constructor(serviceProvider: DatabaseProvider) {
    super(serviceProvider);
  }
  abstract get plug(): DatabaseUser;
}

export class EnvironmentDatabasePlug extends Plug {
  constructor(private database: DatabaseProvider) {
    super();
  }

  get env(): Record<string, string> {
    return {
      DB_HOST: this.database.host,
      DB_PORT: Token.asString(this.database.port),
      DB_USER: this.database.user,
      DB_PASSWORD: this.database.password,
    };
  }
}

export abstract class AwsDatabaseProvider extends DatabaseProvider {
  connect(_subjectPlug: DatabaseUser): DatbaseConfig {
    // TODO: Create required resources e.g. for request pooling etc.
    return {
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
    };
  }
}
