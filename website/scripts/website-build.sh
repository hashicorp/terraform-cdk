# Set the subdirectory name for the terraform-website app
PREVIEW_DIR=website-preview
# Clone the terraform-website project, if needed
if [ ! -d "$PREVIEW_DIR" ]; then
    echo "⏳ Cloning the terraform-website repo, this might take a while..."
    git clone --depth=1 --branch=brk.feat/tfcdk-remote-content https://github.com/hashicorp/terraform-website.git "$PREVIEW_DIR"
fi
# cd into the preview directory project
cd "$PREVIEW_DIR"

# Run the terraform-website content-repo start script
REPO=cdktf IS_CONTENT_PREVIEW=true npm run build:deploy-preview
