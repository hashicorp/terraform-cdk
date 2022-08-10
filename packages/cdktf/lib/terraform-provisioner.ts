// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ref } from "./tfExpression";
import { Token } from "./tokens/token";
import { snakeCase } from "./util";
/**
 * Most provisioners require access to the remote resource via SSH or WinRM and expect a nested connection block with details about how to connect.
 *
 * See {@link https://www.terraform.io/language/resources/provisioners/connection connection}
 */
export interface SSHProvisionerConnection {
  /**
   * The connection type. Valid values are "ssh" and "winrm".
   * Provisioners typically assume that the remote system runs Microsoft Windows when using WinRM.
   * Behaviors based on the SSH target_platform will force Windows-specific behavior for WinRM, unless otherwise specified.
   */
  readonly type: "ssh";

  /**
   * The user to use for the connection.
   *
   * @default root
   */
  readonly user?: string;

  /**
   * The password to use for the connection.
   */
  readonly password?: string;

  /**
   * The address of the resource to connect to.
   */
  readonly host: string;

  /**
   * The port to connect to.
   *
   * @default 22
   */
  readonly port?: number;

  /**
   * The timeout to wait for the connection to become available.
   * Should be provided as a string (e.g., "30s" or "5m".)
   *
   * @default 5m
   */
  readonly timeout?: string;

  /**
   * The path used to copy scripts meant for remote execution.
   * Refer to {@link https://www.terraform.io/language/resources/provisioners/connection#how-provisioners-execute-remote-scripts How Provisioners Execute Remote Scripts below for more details}
   */
  readonly scriptPath?: string;

  /**
   * The contents of an SSH key to use for the connection.
   * These can be loaded from a file on disk using the file function.
   * This takes preference over password if provided.
   */
  readonly privateKey?: string;

  /**
   * The contents of a signed CA Certificate.
   * The certificate argument must be used in conjunction with a private_key.
   * These can be loaded from a file on disk using the the file function.
   */
  readonly certificate?: string;

  /**
   * Set to false to disable using ssh-agent to authenticate.
   * On Windows the only supported SSH authentication agent is Pageant.
   */
  readonly agent?: string;

  /**
   * The preferred identity from the ssh agent for authentication.
   */
  readonly agentIdentity?: string;

  /**
   * The public key from the remote host or the signing CA, used to verify the connection.
   */
  readonly hostKey?: string;

  /**
   * The target platform to connect to.
   * Valid values are "windows" and "unix".
   * If the platform is set to windows, the default script_path is c:\windows\temp\terraform_%RAND%.cmd, assuming the SSH default shell is cmd.exe.
   * If the SSH default shell is PowerShell, set script_path to "c:/windows/temp/terraform_%RAND%.ps1"
   * @default unix
   */
  readonly targetPlatform?: "unix" | "windows";

  /**
   * Setting this enables the bastion Host connection.
   * The provisioner will connect to bastion_host first, and then connect from there to host.
   */
  readonly bastionHost?: string;

  /**
   * The public key from the remote host or the signing CA, used to verify the host connection.
   */
  readonly bastionHostKey?: string;

  /**
   * The port to use connect to the bastion host.
   */
  readonly bastionPort?: number;

  /**
   * The user for the connection to the bastion host.
   */
  readonly bastionUser?: string;

  /**
   * The password to use for the bastion host.
   */
  readonly bastionPassword?: string;

  /**
   * The contents of an SSH key file to use for the bastion host.
   * These can be loaded from a file on disk using the file function.
   */
  readonly bastionPrivateKey?: string;

  /**
   * The contents of a signed CA Certificate.
   * The certificate argument must be used in conjunction with a bastion_private_key.
   * These can be loaded from a file on disk using the the file function.
   */
  readonly bastionCertificate?: string;

  /**
   * The ssh connection also supports the following fields to facilitate connections by SSH over HTTP proxy.
   */
  readonly proxyScheme?: "http" | "https";

  /**
   * Setting this enables the SSH over HTTP connection.
   * This host will be connected to first, and then the host or bastion_host connection will be made from there.
   */
  readonly proxyHost?: string;

  /**
   * The port to use connect to the proxy host.
   */
  readonly proxyPort?: number;

  /**
   * The username to use connect to the private proxy host.
   * This argument should be specified only if authentication is required for the HTTP Proxy server.
   */
  readonly proxyUserName?: string;

  /**
   * The password to use connect to the private proxy host.
   * This argument should be specified only if authentication is required for the HTTP Proxy server.
   */
  readonly proxyUserPassword?: string;
}

/**
 * Most provisioners require access to the remote resource via SSH or WinRM and expect a nested connection block with details about how to connect.
 *
 * See {@link https://www.terraform.io/language/resources/provisioners/connection connection}
 */
export interface WinrmProvisionerConnection {
  /**
   * The connection type. Valid values are "ssh" and "winrm".
   * Provisioners typically assume that the remote system runs Microsoft Windows when using WinRM.
   * Behaviors based on the SSH target_platform will force Windows-specific behavior for WinRM, unless otherwise specified.
   */
  readonly type: "winrm";

  /**
   * The user to use for the connection.
   *
   * @default root
   */
  readonly user?: string;

  /**
   * The password to use for the connection.
   */
  readonly password?: string;

  /**
   * The address of the resource to connect to.
   */
  readonly host: string;

  /**
   * The port to connect to.
   *
   * @default 22
   */
  readonly port?: number;

  /**
   * The timeout to wait for the connection to become available.
   * Should be provided as a string (e.g., "30s" or "5m".)
   *
   * @default 5m
   */
  readonly timeout?: string;

  /**
   * The path used to copy scripts meant for remote execution.
   * Refer to {@link https://www.terraform.io/language/resources/provisioners/connection#how-provisioners-execute-remote-scripts How Provisioners Execute Remote Scripts below for more details}
   */
  readonly scriptPath?: string;

  /**
   * Set to true to connect using HTTPS instead of HTTP.
   */
  readonly https?: boolean;

  /**
   * Set to true to skip validating the HTTPS certificate chain.
   */
  readonly insecure?: boolean;

  /**
   * Set to true to use NTLM authentication rather than default (basic authentication), removing the requirement for basic authentication to be enabled within the target guest.
   * Refer to Authentication for Remote Connections in the Windows App Development documentation for more details.
   */
  readonly useNtlm?: boolean;

  /**
   * The CA certificate to validate against.
   */
  readonly cacert?: string;
}

/**
 * The file provisioner copies files or directories from the machine running Terraform to the newly created resource.
 * The file provisioner supports both ssh and winrm type connections.
 *
 * See {@link https://www.terraform.io/language/resources/provisioners/file file}
 */
export interface FileProvisioner {
  readonly type: "file";
  /**
   * The source file or directory. Specify it either relative to the current working directory or as an absolute path.
   * This argument cannot be combined with content.
   */
  readonly destination: string;
  /**
   * The direct content to copy on the destination.
   * If destination is a file, the content will be written on that file.
   * In case of a directory, a file named tf-file-content is created inside that directory.
   * We recommend using a file as the destination when using content.
   * This argument cannot be combined with source.
   */
  readonly source?: string;
  /**
   * The destination path to write to on the remote system.
   * See Destination Paths below for more information.
   */
  readonly content?: string;

  /**
   * Most provisioners require access to the remote resource via SSH or WinRM and expect a nested connection block with details about how to connect.
   */
  readonly connection?: SSHProvisionerConnection | WinrmProvisionerConnection;
}

/**
 * The local-exec provisioner invokes a local executable after a resource is created.
 * This invokes a process on the machine running Terraform, not on the resource.
 *
 * See {@link https://www.terraform.io/language/resources/provisioners/local-exec local-exec}
 */
export interface LocalExecProvisioner {
  readonly type: "local-exec";
  /**
   * This is the command to execute.
   * It can be provided as a relative path to the current working directory or as an absolute path.
   * It is evaluated in a shell, and can use environment variables or Terraform variables.
   */
  readonly command: string;
  /**
   * If provided, specifies the working directory where command will be executed.
   * It can be provided as a relative path to the current working directory or as an absolute path.
   * The directory must exist.
   */
  readonly workingDir?: string;
  /**
   * If provided, this is a list of interpreter arguments used to execute the command.
   * The first argument is the interpreter itself.
   * It can be provided as a relative path to the current working directory or as an absolute path
   * The remaining arguments are appended prior to the command.
   * This allows building command lines of the form "/bin/bash", "-c", "echo foo".
   * If interpreter is unspecified, sensible defaults will be chosen based on the system OS.
   */
  readonly interpreter?: string[];
  /**
   *  A record of key value pairs representing the environment of the executed command.
   * It inherits the current process environment.
   */
  readonly environment?: Record<string, string>;
  /**
   * If provided, specifies when Terraform will execute the command.
   * For example, when = destroy specifies that the provisioner will run when the associated resource is destroyed
   */
  readonly when?: "destroy" | "create";
}

/**
 * The remote-exec provisioner invokes a script on a remote resource after it is created.
 * This can be used to run a configuration management tool, bootstrap into a cluster, etc
 * The remote-exec provisioner requires a connection and supports both ssh and winrm.
 *
 * See {@link https://www.terraform.io/language/resources/provisioners/remote-exec remote-exec}
 */
export interface RemoteExecProvisioner {
  readonly type: "remote-exec";

  /**
   * This is a list of command strings.
   * They are executed in the order they are provided.
   * This cannot be provided with script or scripts.
   */
  readonly inline?: string[];

  /**
   * This is a path (relative or absolute) to a local script that will be copied to the remote resource and then executed.
   * This cannot be provided with inline or scripts.
   */
  readonly script?: string;

  /**
   * This is a list of paths (relative or absolute) to local scripts that will be copied to the remote resource and then executed.
   * They are executed in the order they are provided.
   * This cannot be provided with inline or script.
   */
  readonly scripts?: string[];

  /**
   * Most provisioners require access to the remote resource via SSH or WinRM and expect a nested connection block with details about how to connect.
   * A connection must be provided here or in the parent resource.
   */
  readonly connection?: SSHProvisionerConnection | WinrmProvisionerConnection;
}

/**
 * Expressions in connection blocks cannot refer to their parent resource by name.
 * References create dependencies, and referring to a resource by name within its own block would create a dependency cycle.
 * Instead, expressions can use the self object, which represents the connection's parent resource and has all of that resource's attributes.
 * For example, use self.public_ip to reference an aws_instance's public_ip attribute.
 */
export class TerraformSelf {
  private static getInterpolation(key: string) {
    return `self.${snakeCase(key)}`;
  }

  /**
   * Only usable within a connection block to reference the connections parent resource.
   * Access a property on the resource like this: `getString("publicIp")`
   */
  public static getString(key: string): string {
    return Token.asString(ref(TerraformSelf.getInterpolation(key)));
  }

  /**
   * Only usable within a connection block to reference the connections parent resource.
   * Access a property on the resource like this: `getNumber("hostPort")`
   */
  public static getNumber(key: string): number {
    return Token.asNumber(ref(TerraformSelf.getInterpolation(key)));
  }

  /**
   * Only usable within a connection block to reference the connections parent resource.
   * Access a property on the resource like this: `getAny("hostPort")`
   */
  public static getAny(key: string): any {
    return Token.asAny(ref(TerraformSelf.getInterpolation(key)));
  }
}
