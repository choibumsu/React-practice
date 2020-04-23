import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        const movie = cache.data.data[`Movie:${id}`];
        console.log(movie);
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !movie.isLiked,
          },
        });
      },
    },
  },
  //   uri: "https://movieql.now.sh/",
});

export default client;
