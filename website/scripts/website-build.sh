# Repo which we are cloning and executing npm run build:deploy-preview within
REPO_TO_CLONE=terraform-website
# Set the subdirectory name for the terraform-website app
PREVIEW_DIR=website-preview
CLONE_DIR=website-preview

from_cache=false

if [ -d "$PREVIEW_DIR" ]; then
  echo "$PREVIEW_DIR found"
  CLONE_DIR="$PREVIEW_DIR-tmp"
  from_cache=true
fi

# Clone the terraform-website project, if needed
echo "⏳ Cloning the terraform-website repo, this might take a while..."
git clone --depth=1 --branch=brk.feat/tfcdk-remote-content https://github.com/hashicorp/$REPO_TO_CLONE.git "$CLONE_DIR"

if [ "$from_cache" = true ]; then
  echo "Setting up $PREVIEW_DIR"
  cp -R "./$CLONE_DIR/." "./$PREVIEW_DIR"
fi

# cd into the preview directory project
cd "$PREVIEW_DIR"

# Run the terraform-website content-repo start script
REPO=cdktf IS_CONTENT_PREVIEW=true npm run build:deploy-preview
