import { Construct } from "constructs";
import { Token } from "cdktf";
import * as l1 from "../l1";

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
  constructor(public subject: { arn: string }) {
    super();
  }
  connect(db: DatabaseProvider): DatbaseConfig {
    db.connect(this);

    return {
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
    };
  }

  get arn(): string {
    return this.subject.arn;
  }
}
export abstract class DatabaseProvider extends Socket {
  abstract get host(): string;
  abstract get port(): number;
  abstract get user(): string;
  abstract get password(): string;
  abstract connect(subjectPlug: DatabaseUser): DatbaseConfig;

  get dbArn(): string {
    return "arn:aws:rds:us-east-1:123456789012:db:mysql-db";
  }
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
  constructor(public scope: Construct) {
    super();
  }
  connect(subjectPlug: DatabaseUser): DatbaseConfig {
    const role = new l1.ServiceRole(this.scope, "db-role", {});
    new l1.AccessPolicy(this.scope, "db-access-policy", {
      role: role,
      from: subjectPlug.arn,
      to: this.dbArn,
    });

    return {
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
    };
  }
}

export class ForwardingDatabaseProvider extends AwsDatabaseProvider {
  constructor(public subject: l1.AwsDbResource) {
    super(subject.node.scope!);
  }

  connect(subjectPlug: DatabaseUser): DatbaseConfig {
    return super.connect(subjectPlug);
  }

  get plug(): DatabaseUser {
    return new DatabaseUser(this.subject);
  }

  get host(): string {
    return this.subject.host;
  }
  get port(): number {
    return this.subject.port;
  }
  get user(): string {
    return this.subject.user;
  }
  get password(): string {
    return this.subject.password;
  }
}

export abstract class ScaleableAwsDatabaseProvider extends AwsDatabaseProvider {
  constructor(scope: Construct) {
    super(scope);
  }
  connect(subjectPlug: DatabaseUser): DatbaseConfig {
    // Scale the database by adding pg-boucer
    const pgBouncer = new l1.PgBouncer(this.scope, "pg-bouncer", {});
    const bouncerDbProvider = new ForwardingDatabaseProvider(pgBouncer);
    const externalDbConfig = subjectPlug.connect(bouncerDbProvider);

    const databaseConnectionConfig = super.connect(bouncerDbProvider.plug);
    pgBouncer.config.dbConnection = databaseConnectionConfig;

    return externalDbConfig;
  }
}
