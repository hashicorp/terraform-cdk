#!/bin/bash

# Microsoft.Net.Test.Sdk NuGet package includes an MSBuild .targets file that adds an <OutputType>Exe</OutputType> property to the test project, this automatically generates a Program file.
# For simplicity of setting up this integration test, the testing file is placed in the same project as the Program.cs file. 
# Setting <GenerateProgramFile>false</GenerateProgramFile> avoids the error of having multiple entry points in a single project.

get_property() {
  cat <<EOF
    <GenerateProgramFile>false</GenerateProgramFile>
EOF
}


prop=$(get_property)
f_prop=${prop//$'\n'/\\$'\n'}

# Checks OS to account for differences in sed command between linux and mac os
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|<PropertyGroup>|<PropertyGroup>\n${f_prop}|" "MyTerraformStack.csproj"
else
  sed -i.bak "s|<PropertyGroup>|<PropertyGroup>\n${f_prop}|" "MyTerraformStack.csproj"
fi