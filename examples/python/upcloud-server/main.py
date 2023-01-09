#!/usr/bin/env python

from os import getenv

from constructs import Construct
from cdktf import App, TerraformOutput, TerraformStack

from imports.upcloud.provider import UpcloudProvider
from imports.upcloud.server import Server, ServerLogin, ServerNetworkInterface, ServerTemplate


def get_server_login(user=None):
    """Get ServerLogin with ssh-key from PUBLIC_KEY_PATH environment variable

    As a fallback, create one-time password, if PUBLIC_KEY_PATH is undefined or its value is an empty string.
    """
    public_key_path = getenv("PUBLIC_KEY_PATH")

    if public_key_path:
        with open(public_key_path) as f:
            ssh_key = f.read()
        return ServerLogin(user=user, keys=[ssh_key])
    else:
        return ServerLogin(
            user=user,
            create_password=True,
            password_delivery="email")


class ExampleStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        UpcloudProvider(self, "upcloud")

        # If there are no SSH keys avaivable, we will have to use older
        # template as one-time passwords are not supported by the most recent
        # templates.
        login = get_server_login("example")
        template_name = "Ubuntu Server 22.04 LTS (Jammy Jellyfish)" if login.keys else "Ubuntu Server 20.04 LTS (Focal Fossa)"

        server = Server(
            self,
            "server",
            hostname="cdktf-example-python-upcloud-server-vm",
            login=login,
            network_interface=[
                ServerNetworkInterface(
                    type="public",
                    ip_address_family="IPv4",
                ),
                ServerNetworkInterface(
                    type="utility",
                    ip_address_family="IPv4",
                ),
            ],
            plan="1xCPU-1GB",
            metadata=True,
            template=ServerTemplate(
                size=25,
                storage=template_name
            ),
            zone="pl-waw1",
        )

        TerraformOutput(
            self,
            "server_ip",
            value=server.network_interface.get(0).ip_address
        )


app = App()
ExampleStack(app, "python-upcloud-server")

app.synth()
