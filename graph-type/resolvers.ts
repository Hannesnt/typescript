import {Arsenalplayer, PlayerInput, } from './schema'
import {arsenalplayers} from './playerData';

export const getArsenalplayer = (args: { id: number }): Arsenalplayer | undefined => 
arsenalplayers.find(arsenalplayer => arsenalplayer.id === args.id)

export const getArsenalplayers = (): Arsenalplayer[] => arsenalplayers;

export const createPlayer = (args: { input: PlayerInput}): Arsenalplayer => {
    const user = {
        id: arsenalplayers.length + 1,
        ...args.input,
    }
    arsenalplayers.push(user);
    return user;
}

export const updatePlayer = (args: { arsenalplayer: Arsenalplayer}): Arsenalplayer => {
    const index = arsenalplayers.findIndex(arsenalplayer => arsenalplayer.id === args.arsenalplayer.id);
    const targetPlayer = arsenalplayers[index];

    if (targetPlayer) arsenalplayers[index] = args.arsenalplayer;

    return targetPlayer;
}