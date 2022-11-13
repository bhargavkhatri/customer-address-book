import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

export const client = new ApolloClient({
  //   uri: "https://rjstest.seepossible.link/graphql",
  link: new HttpLink({
    uri: "https://rjstest.seepossible.link/graphql",
  }),
  cache: new InMemoryCache(),
});
