package com.mycompany.app.aspects;
import software.constructs.Construct;
import software.constructs.IConstruct;
import com.hashicorp.cdktf.Aspects;
import com.hashicorp.cdktf.IAspect;

import java.util.Map;

/**
 *
 import { IConstruct } from "constructs";
 import { Aspects, IAspect } from "cdktf";

 // Not all constructs are taggable, so we need to filter it
 type TaggableConstruct = IConstruct & {
     tags?: { [key: string]: string };
     tagsInput?: { [key: string]: string };
 };
 function isTaggableConstruct(x: IConstruct): x is TaggableConstruct {
     return "tags" in x && "tagsInput" in x;
 }

 export class TagsAddingAspect implements IAspect {
     constructor(private tagsToAdd: Record<string, string>) {}

     // This method is called on every Construct within the specified scope (resources, data sources, etc.).
     visit(node: IConstruct) {
         if (isTaggableConstruct(node)) {
             // We need to take the input value to not create a circular reference
             const currentTags = node.tagsInput || {};
             node.tags = { ...this.tagsToAdd, ...currentTags };
 }
 }
 }

 // Add tags to every resource defined within `myStack`.
 Aspects.of(myStack).add(new TagsAddingAspect({ createdBy: "cdktf" }));
 */

public class MainAspects {

    public boolean isTaggableConstruct(IConstruct x){
        return false;
    }

    public static class TaggableConstruct {
        public Map tags;
        public Map tagsInput;
        public TaggableConstruct(IConstruct x){
            this.tags = x.
        }
    }

    public class TagsAddingAspect implements IAspect {

        public void visit(IConstruct node){
            if(isTaggableConstruct(node)){
                node.
            }
        }
    }
}
