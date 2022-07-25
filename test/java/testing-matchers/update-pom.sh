#!/bin/bash

# Adds junit testing dependencies and maven testing plugin to pom.xml file

get_dependency() {
  cat <<EOF
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.8.0</version>
    </dependency>
EOF
}

get_plugin() {
  cat <<EOF
    <plugin>
         <groupId>org.apache.maven.plugins</groupId>
         <artifactId>maven-surefire-plugin</artifactId>
         <version>2.22.0</version>
    </plugin>
EOF
}


dep=$(get_dependency)
f_dep=${dep//$'\n'/\\$'\n'}
plug=$(get_plugin)
f_plug=${plug//$'\n'/\\$'\n'}
sed -i "" "s|<dependencies>|<dependencies>\n${f_dep}|" "pom.xml"
sed -i "" "s|<plugins>|<plugins>\n${f_plug}|" "pom.xml"
testDir="src/main/java/com/mycompany/app"
resourceDir="src/main/java"
sed -i "" "s|\(<sourceDirectory>\)[^<>]*\(</sourceDirectory>\)|\1${resourceDir}\2|" "pom.xml"
sed -i "" "s|\(<testSourceDirectory>\)[^<>]*\(</testSourceDirectory>\)|\1${testDir}\2|" "pom.xml"

# Checks OS to account for differences in sed command between linux and mac os
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|<dependencies>|<dependencies>\n${f_dep}|" "pom.xml"
  sed -i "" "s|<plugins>|<plugins>\n${f_plug}|" "pom.xml"
  sed -i "" "s|\(<sourceDirectory>\)[^<>]*\(</sourceDirectory>\)|\1${resourceDir}\2|" "pom.xml"
  sed -i "" "s|\(<testSourceDirectory>\)[^<>]*\(</testSourceDirectory>\)|\1${testDir}\2|" "pom.xml"
else
  sed -i "s|<dependencies>|<dependencies>\n${f_dep}|" "pom.xml"
  sed -i "s|<plugins>|<plugins>\n${f_plug}|" "pom.xml"
  sed -i "s|\(<sourceDirectory>\)[^<>]*\(</sourceDirectory>\)|\1${resourceDir}\2|" "pom.xml"
  sed -i "s|\(<testSourceDirectory>\)[^<>]*\(</testSourceDirectory>\)|\1${testDir}\2|" "pom.xml"
fi