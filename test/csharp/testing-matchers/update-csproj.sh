#!/bin/bash

get_property() {
  cat <<EOF
    <GenerateProgramFile>false</GenerateProgramFile>
EOF
}


prop=$(get_property)
f_prop=${prop//$'\n'/\\$'\n'}

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|<PropertyGroup>|<PropertyGroup>\n${f_prop}|" "MyTerraformStack.csproj"
else
  sed -i.bak "s|<PropertyGroup>|<PropertyGroup>\n${f_prop}|" "MyTerraformStack.csproj"
fi