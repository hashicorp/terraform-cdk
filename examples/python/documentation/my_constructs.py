from constructs import Construct


class KubernetesWebAppDeployment(Construct):
    def __init__(self, scope, name, **attributes):
        super().__init__(scope, name)

        # The content is left to the readers imagination
