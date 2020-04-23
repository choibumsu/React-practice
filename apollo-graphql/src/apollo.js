import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
  //   uri: "https://movieql.now.sh/",
});

export default client;
