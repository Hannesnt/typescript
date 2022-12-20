
import { graphqlHTTP } from 'express-graphql';
import express from 'express';
import {schema} from './schema'
import {getArsenalplayer, getArsenalplayers, createPlayer, updatePlayer} from "./resolvers"




const root = {
    getArsenalplayer,
    getArsenalplayers,
    createPlayer,
    updatePlayer,
}


const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
)

const PORT = 9000;
app.listen(PORT)
console.log(`Running at http://localhost:${PORT}/graphql`);