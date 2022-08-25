# documentation-code-snippets

We want all of the code in our documentation translated and tested, this is why we have the examples/lang/documentation. To make sure the examples in the docs stays in sync with these examples we created this tool that keeps them in sync.

## How to add a new example

1. Create a marker in the docs for the next code block for the language you want to support (`<!-- #NEXT_CODE_BLOCK_SOURCE:ts examples/typescript/documentation#assets -->`).
2. Create opening and closing markers inside of the example (`# DOCS_BLOCK_START:assets,constructs` && `# DOCS_BLOCK_END:constructs`)
3. Run `yarn install && yarn update-snippets` to rollout the code
