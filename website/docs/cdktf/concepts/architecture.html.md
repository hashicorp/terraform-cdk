---
layout: "docs"
page_title: "CDKTF Architecture"
sidebar_current: "cdktf"
description: "Learn the key components of CDK for Terraform applications and how they communicate with Terraform."
---

# Architecture

**Existing content - use if helpful, delete if not helpful**

When you use CDKTF, you create an **application** that uses CDKTF libraries to convert infrastructure definitions into JSON configuration files for Terraform. An application can have one or more **stacks**, which represent a collection of infrastructure that will be synthesized as a dedicated Terraform configuration. This allows you to separate the state management for multiple environments with the same infrastructure, like test and production.

## Applications

CDK for Terraform apps are structured as a tree of [constructs](https://github.com/aws/constructs). The classes `App`, `TerraformStack`, `TerraformResource` and `Resource` are all deriving from `Construct` and are therefore represented as a node in the application tree, where the `App` node is the root.


