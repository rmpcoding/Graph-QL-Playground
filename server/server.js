const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema,  } = require('graphql');

const app = express();

const PORT = process.env.PORT || 3001;

const quoteOfTheDay = () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
};

const schema = buildSchema(`
    type Query {
        hello: String,
        quoteOfTheDay: String
    }
`);

const root = {
    hello: () => {
        return 'Hello, World!';
    },
    quoteOfTheDay
};

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
        pretty: true
    })
);

app.listen(PORT, () => {
    console.log(`🌎  Server running on http://localhost:${PORT}`);
});
