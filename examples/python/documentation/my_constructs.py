from constructs import Construct


class KubernetesWebAppDeployment(Construct):
    def __init__(self, scope, name, **attributes):
        super().__init__(scope, name)

        # The content is left to the readers imagination

class DockerBackend(Construct):
    def __init__(self, scope: Construct, id: str, vpc_id: str, docker_image: str):
        super().__init__(scope, id)