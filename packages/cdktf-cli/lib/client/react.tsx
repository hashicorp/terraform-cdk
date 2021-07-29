import fetch from "cross-fetch";
import { default as WebSocket } from "ws";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
  from,
  NormalizedCacheObject,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { logger } from "../logging";
import { Text } from "ink";
import { startServer } from "../server";
import React, { ReactNode, useEffect, useState } from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";

const useAsyncEffect = (fun: () => Promise<void>, deps: Array<any>) => {
  useEffect(() => {
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const GraphQLServerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [client, setClient] = useState<
    ApolloClient<NormalizedCacheObject> | undefined
  >();
  useAsyncEffect(async () => {
    const { port } = await startServer();
    const webSocketUri = `ws://localhost:${port}/graphql`;

    const wsClient = new SubscriptionClient(
      webSocketUri,
      {
        reconnect: true,
        connectionCallback: (error: any) =>
          logger.debug(error || "CONNECTED to GraphqlEndpoint"),
      },
      WebSocket
    );
    wsClient.onError((event) => {
      throw new Error(
        `Watch could not connect to spawned GraphQL server which handles watching of files and deploying changes: ${event.message}
More debug info can be found in cdktf.log. Enable logging by setting the environment variable CDKTF_DISABLE_LOGGING to false`
      );
    });

    const wsLink = new WebSocketLink(wsClient);
    const httpLink = new HttpLink({
      uri: `http://localhost:${port}/graphql`,
      fetch,
    });

    // Log any GraphQL errors or network error that occurred
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          logger.error(
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

    const apolloClient = new ApolloClient({
      link: from([errorLink, networkLink]),
      cache: new InMemoryCache(),
    });
    setClient(apolloClient);
  }, []);

  if (!client) {
    return <Text>Starting server...</Text>;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
