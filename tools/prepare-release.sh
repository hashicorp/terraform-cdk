# work around for changelog when pre-release versions exist
# based on https://github.com/conventional-changelog/standard-version/issues/203#issuecomment-872415140

# locally delete non-release tags
git tag -l | grep -vE '^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$' | xargs git tag -d

# provide option to override release type
# i.e. yarn prepare-release --release-as minor
flags="${@:-}"

# skip tag since that is created with the release
yarn release --skip.tag=true --bumpFiles ${flags}

# resotre tags
git fetch origin --tags