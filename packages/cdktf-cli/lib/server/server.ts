import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { execute, subscribe } from "graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { PubSub } from "graphql-subscriptions";
import path from "path";
import { WatchClient, WatchState } from "./WatchClient";
import { GraphQLWatchState, mapWatchState } from "./util";

type WatchInputs = {
  targetDir: string;
  synthCommand: string;
  autoApprove: boolean;
  targetStack?: string;
};

const pubsub = new PubSub();
const WATCH_EVENT = "WATCH";

const PORT = process.argv[2];

let watchClient: WatchClient | undefined;

async function startApolloServer() {
  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => "Hello world!!!",
    },
    Subscription: {
      watch: {
        subscribe: async (
          _parent: undefined,
          args: { inputs: WatchInputs }
        ) => {
          // create this here so that events with errors published
          // while startup reach the client
          const iterator = pubsub.asyncIterator([WATCH_EVENT]);

          if (watchClient && watchClient.isRunning()) {
            console.warn(
              "There is already a watch running, you will receive the updates from that run but no new one is started."
            );
          } else {
            try {
              watchClient = new WatchClient(args.inputs);

              // subscribe returns an unsubscribe function but that connect reliably
              // be used with PubSub – that lib is recommended by Apollo docs but seems to
              // be unmaintained, maybe ditch it? see https://github.com/apollographql/graphql-subscriptions/issues/240#issuecomment-767568596
              watchClient.subscribe((state: WatchState) =>
                pubsub.publish(WATCH_EVENT, {
                  watch: mapWatchState(state),
                })
              );
              await watchClient.start();
            } catch (e) {
              const state: GraphQLWatchState = {
                resources: [],
                stacks: [],
                status: "IDLE",
                error: {
                  origin: "SERVER",
                  message: e.message,
                  timestamp: Date.now(),
                  recoverable: false,
                },
              };
              // we should get rid if this hack somehow.
              // this has to be done because the client won't receive this
              // error if it is published before the iterator has been returned
              setTimeout(
                () => pubsub.publish(WATCH_EVENT, { watch: state }),
                1000
              );
            }
          }

          return iterator;
        },
      },
    },
  };

  const schema = await loadSchema(
    path.resolve(path.join(__dirname, "schema.graphql")),
    {
      // load from a single schema file
      loaders: [new GraphQLFileLoader()],
      resolvers,
    }
  );

  // setup express and base http server
  const app = express();
  app.get("/up", (_, res) => res.send("OK"));
  const httpServer = createServer(app);

  // setup apollo server
  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    debug: true,
  });
  await server.start();
  server.applyMiddleware({ app });

  // setup subscription server
  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => {
      subscriptionServer.close();
      process.exit();
    });
  });

  await new Promise((resolve) =>
    httpServer.listen({ port: PORT }, resolve as () => void)
  );
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  return { server, app };
}
startApolloServer();
