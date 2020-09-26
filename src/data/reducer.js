import initial from './initial';

const addPlayer = (state, {players}) => {
    
  return { 
      ...state,
       players: players,

    };
}



const shuffle = (array) => {
    // use Fisher-Yates algorithm to shuffle arrays
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};




const divide = players => {
    let pairs = [];
    let matches = Math.floor(players.length / (players.length / 2));

    while (players.length) {
        pairs.push(players.splice(0, matches));
    }

    return pairs;
};




const assignPlayers =(state)=> {
    let players = state.players;
    let playing = divide(shuffle(players));

    return {
        ...state,
        playing: playing,
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
    case "ADDPLAYER" : return tournament(assignPlayers(addPlayer(state, action)));
    
    case "RESET" : return reset(state);
    default: return state;
  }
}


export default reducer;