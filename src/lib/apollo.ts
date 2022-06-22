import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8xb8t1c6y01z21add0xlh/master',
    cache: new InMemoryCache()
})