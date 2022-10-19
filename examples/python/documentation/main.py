import os

entrypoints = ["main-assets.py", "main-constructs.py", "main-data-sources.py",
               "main-functions.py", "main-hcl-interop.py", "main-iterators.py", "main-modules.py", "main-providers.py", "main-remote-backend.py", "main-resources.py", "main-stacks.py", "main-token.py", "main-variables-outputs.py"]

for entrypoint in entrypoints:
    print(f"Running {entrypoint}")
    os.system(f"pipenv run python {entrypoint}")
