import { buildSchema } from 'graphql';
export const schema = buildSchema(`
    type Query {
        getArsenalplayer(id: Int!): Arsenalplayer
        getArsenalplayers: [Arsenalplayer]
    }

    type Arsenalplayer {
        id: Int!
        name: String!
        position: String!
    }

    input PlayerInput {
        name: String!
        position: String!
    }

    type Mutation {
        createPlayer(input: PlayerInput): Arsenalplayer
        updatePlayer(id: Int!, input: PlayerInput): Arsenalplayer
    }
`);
export type Arsenalplayer = {
    id: number;
    name: string;
    position: string;
   }
   
  export type PlayerInput = 
       Pick<Arsenalplayer, 'name' | 'position'>