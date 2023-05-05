/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Match, toHaveResourceWithProperties } from "../match";
import { DockerContainer } from "../../../test/helper";

const stack = JSON.stringify({
  data: {
    docker_image: {
      id: {
        name: "nginx:latest",
      },
    },
  },
  provider: {
    docker: [{}],
  },
  resource: {
    docker_container: {
      "nginx-2-cdktf": {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: 8002,
            internal: 81,
            ip: "0.0.0.1",
            protocol: "udp",
          },
        ],
        privileged: false,
      },
      "nginx-cdktf": {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: 8000,
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      },
    },
    docker_image: {
      "nginx-latest": {
        keep_locally: false,
        name: "${data.docker_image.id.name}",
      },
    },
  },
  terraform: {
    required_providers: {
      docker: {
        source: "kreuzwerker/docker",
        version: "2.25.0",
      },
    },
  },
});

describe("Match functions operate accordingly", () => {
  describe("Match.isAny", () => {
    it("matches to whatever value is present", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isAny(),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: Match.isAny(),
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.someMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
  });
  it("matches to the value within a array of the property", () => {
    const expected = {
      image: "${docker_image.nginx-latest.name}",
      name: "nginx-python-cdktf",
      ports: [Match.isAny()],
      privileged: Match.isAny(),
    };
    const result = toHaveResourceWithProperties(
      stack,
      DockerContainer,
      Match.someMatch(expected)
    );
    console.log(result.message);
    expect(result.pass).toBe(true);
  });
  it("matches to the value of the property", () => {
    const expected = {
      image: "${docker_image.nginx-latest.name}",
      name: "nginx-python-cdktf",
      ports: Match.isAny(),
      privileged: Match.isAny(),
    };
    const result = toHaveResourceWithProperties(
      stack,
      DockerContainer,
      Match.someMatch(expected)
    );
    console.log(result.message);
    expect(result.pass).toBe(true);
  });
  describe("Match.isContainedIn", () => {
    it("matches to a value contained within the property", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isContainedIn([8000, 8001, 8002]),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      console.log("matches to a value contained within the property");
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.someMatch(expected)
      );
      console.log("matches to a value contained within the property END");
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("does not match to a value contained within the property", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isContainedIn([1, 2, 3]),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.someMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
  });
  describe("Match.isRegex", () => {
    it("matches received property to given regex", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: 8000,
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.someMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("does not match received property to given regex", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-cdktf"),
        ports: [
          {
            external: 8000,
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.someMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
  });
  describe("Match.oneMatches", () => {
    it("matches just one resource", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8001, 8002]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      console.log("matches just one resource");
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.oneMatches("nginx-cdktf", expected)
      );
      console.log("matches just one resource END");
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("does not match to non-existent id", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8001, 8002]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.oneMatches("nginx-cdktf3", expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
  });
  describe("Match.oneMatches", () => {
    it("fails due to excluded properties", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isAny(),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.oneMatches("nginx-cdktf", expected, ["privileged"])
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
    it("passes with excluded properties", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isAny(),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.oneMatches("nginx-cdktf", expected, ["foo"])
      );
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("strictly matches resource", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isAny(),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.strict.oneMatches("nginx-cdktf", expected, ["foo"])
      );
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("fails to strictly match resource with missing property 'privileged'", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: "nginx-python-cdktf",
        ports: [
          {
            external: Match.isAny(),
            internal: 80,
            ip: "0.0.0.0",
            protocol: "tcp",
          },
        ],
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.strict.oneMatches("nginx-cdktf", expected, ["foo"])
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
  });
  describe("Match.allMatch", () => {
    it("matches all resources", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8001, 8002]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      console.log("matches all resources");
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.allMatch(expected)
      );
      console.log("matches all resources END");
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("fails to matches all resources", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: 8000,
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.allMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
    it("matches all resources excluding properties", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8002]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      console.log("matches all resources excluding properties");
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.allMatch(expected, ["foo"])
      );
      console.log("matches all resources excluding properties END");
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("fails to match all resources excluding properties", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: 8000,
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.allMatch(expected, ["privileged"])
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
    it("strictly match all resources", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8002]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
        privileged: false,
      };
      console.log("strictly match all resources");
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.strict.allMatch(expected)
      );
      console.log("strictly match all resources END");
      console.log(result.message);
      expect(result.pass).toBe(true);
    });
    it("fails to strictly match all resources - missing property 'privileged'", () => {
      const expected = {
        image: "${docker_image.nginx-latest.name}",
        name: Match.isRegex("[A-Za-z]+-[A-Za-z]+-cdktf"),
        ports: [
          {
            external: Match.isContainedIn([8000, 8001]),
            internal: Match.isContainedIn([80, 81]),
            ip: Match.isContainedIn(["0.0.0.0", "0.0.0.1"]),
            protocol: Match.isAny(),
          },
        ],
      };
      const result = toHaveResourceWithProperties(
        stack,
        DockerContainer,
        Match.strict.allMatch(expected)
      );
      console.log(result.message);
      expect(result.pass).toBe(false);
    });
  });
});
