import initial from './initial';

const addPlayer = (state, { players }) => {
  return { 
      ...state,
       players: players, 
    };
}

const deletePlayer = (state) => {
    return { ...state, players: state.players };
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
    case "DELETEPLAYER" : return deletePlayer(state, action);
    case "RESET" : return reset(state);
    default: return state;
  }
}


export default reducer;