import initial from './initial';

const addPlayer = (state, { players }) => {
  return { 
      ...state,
       players: players,

    };
}

const deletePlayer = (state, {index}) =>{
    let players = state.players;

    players.splice(index, 1);

    return { 
        ...state, 
        players: players,
    };
}


export const divide = players => {
    let pairs = [];
    let match = Math.floor(players.length / (players.length / 2));

    while (players.length) {
        pairs.push(players.splice(0, match));
    }

    return pairs;
};

// Shuffle an array in place using the Fisher-Yates algorithm,
// adapted from http://bost.ocks.org/mike/shuffle/
const shuffled = players => {
    let i, j, t;
    for( i = players.length - 1;  i > 0; i-- ) {
        j = Math.floor( Math.random() * i +1 );
        t = players[i];
        players[i] = players[j];
        players[j] = t;
    }
    return players;
}


const createMatch = (state) => {
    let shuffle = [...state.players]
return {
    ...state, 
    matches: [divide(shuffled(shuffle))],
    players: state.players,
}
}



const tournament = (state) => {
    return {
        ...state,
        tournament: true,
    }
}

const reset = () => {
    return{
        ...initial 
    }
}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADDPLAYER" : return tournament(addPlayer(state, action));
    // case "DELETEPLAYER" : return deletePlayer(state, action);
    case "CREATEMATCH" : return createMatch(state, action);
    case "RESET" : return reset(state);
    default: return state;
  }
}


export default reducer;