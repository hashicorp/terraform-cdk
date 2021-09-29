import { registerMapping } from "../index";
import {
  Vpc,
  Subnet,
  RouteTable,
  RouteTableAssociation,
  Route,
} from "@cdktf/provider-aws";
import { createGuessingResourceMapper } from "../helper";

registerMapping("AWS::EC2::VPC", {
  resource: createGuessingResourceMapper(Vpc),
  attributes: {
    // TODO: make attributes optional!
    Arn: (vpc: Vpc) => vpc.arn,
    Ref: (vpc: Vpc) => vpc.id,
  },
});

registerMapping("AWS::EC2::Subnet", {
  resource: createGuessingResourceMapper(Subnet),
  attributes: {
    Arn: (subnet: Subnet) => subnet.arn,
    Ref: (subnet: Subnet) => subnet.id,
  },
});

registerMapping("AWS::EC2::Route", {
  resource: createGuessingResourceMapper(Route),
  attributes: {
    Arn: () => {
      throw new Error("Route resource does not have an arn");
    },
    Ref: (route: Route) => route.id,
  },
});

registerMapping("AWS::EC2::RouteTable", {
  resource: createGuessingResourceMapper(RouteTable),
  attributes: {
    Arn: (table: RouteTable) => table.arn,
    Ref: (table: RouteTable) => table.id,
  },
});

registerMapping("AWS::EC2::SubnetRouteTableAssociation", {
  resource: createGuessingResourceMapper(RouteTableAssociation),
  attributes: {
    Arn: () => {
      throw new Error("RouteTableAssociation resource does not have an arn");
    },
    Ref: (a: RouteTableAssociation) => a.id,
  },
});
