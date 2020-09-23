import react from 'react';




const newPlayer = (state) => {
  return { ...state, players: state.players + players };
}

const deletePlayer = (state) => {
    return { ...state, players: state.players - players}

}



const reducer = (state, action) => {
  switch (action.type) {
    case "NEWPLAYER" : return newPlayer(state);
    case "DELETE" : return deletePlayer(state);
    case "RESET" : return initialState;
    default: return state;
  }
}


export default reducer;