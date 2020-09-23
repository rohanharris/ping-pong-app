
const addPlayer = (state, { name }) => {
  return { 
      ...state,
       players: [ ...state.players, {"value": name} ],
    };
}

const deletePlayer = (state) => {
    return { ...state, players: state.players };
}



const reducer = (state, action) => {
  switch (action.type) {
    case "ADDPLAYER" : return addPlayer(state, action);
    case "DELETEPLAYER" : return deletePlayer(state, action);
    // case "RESET" : return initial;
    default: return state;
  }
}


export default reducer;