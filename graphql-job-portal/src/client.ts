import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
});

console.log('httpLink - ', httpLink);
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;


