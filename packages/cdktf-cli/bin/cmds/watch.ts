import * as yargs from "yargs";
import React from "react";
import { Watch } from "./ui/watch";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./render-ink";
import * as chalk from "chalk";
import fetch from "cross-fetch";
import { default as WebSocket } from "ws";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
  from,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { displayVersionMessage } from "./version-check";
import { startServer } from "../../lib/server";
import { logger } from "../../lib/logging";
import { SubscriptionClient } from "subscriptions-transport-ws";

const chalkColour = new chalk.Instance();

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "watch [stack] [OPTIONS]";
  public readonly describe =
    "Watch for file changes and automatically trigger a deploy";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Deploy stack which matches the given id only. Required when more than one stack is present in the app",
        type: "string",
      })
      .option("app", {
        default: config.app,
        required: true,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        required: true,
        desc: "Output directory",
        alias: "o",
      })
      .option("auto-approve", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Auto approve",
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    await displayVersionMessage();
    const command = argv.app;
    const outdir = argv.output;
    const autoApprove = argv.autoApprove;
    const stack = argv.stack;

    if (!autoApprove) {
      console.error(
        chalkColour`{redBright ERROR: The watch command currently always automatically deploys and approves changes. Please add the --auto-approve flag to confirm you understand this behaviour.}`
      );
      process.exit(1);
    }

    // TODO: extract into separate file, maybe even inside a React Provider that sets this up
    // and then renders the ApolloProvider, maybe in lib/client/react.ts ?
    const port = await startServer();
    const webSocketUri = `ws://localhost:${port}/graphql`;

    const wsClient = new SubscriptionClient(
      webSocketUri,
      {
        reconnect: true,
        connectionCallback: error => logger.debug(error || 'CONNECTED to GraphqlEndpoint'),
      },
      WebSocket,
    );
    wsClient.onError(event => {
      throw new Error(`Internal Error: Could not connect to GraphQL server ${event.message}`);
    })

    const wsLink = new WebSocketLink(wsClient);
    const httpLink = new HttpLink({
      uri: `http://localhost:${port}/graphql`,
      fetch,
    });

    // Log any GraphQL errors or network error that occurred
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const networkLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    );

    const client = new ApolloClient({
      link: from([errorLink, networkLink]),
      cache: new InMemoryCache(),
    });

    await renderInk(
      // Apollo TypeScript types require us to have children in props
      // eslint-disable-next-line react/no-children-prop
      React.createElement(
        ApolloProvider,
        { client, children: null },
        React.createElement(Watch, {
          targetDir: outdir,
          targetStack: stack,
          synthCommand: command,
          autoApprove,
        })
      )
    );
  }
}

module.exports = new Command();
