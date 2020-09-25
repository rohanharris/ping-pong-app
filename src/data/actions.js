export const addPlayer = ( players ) => {
    return {
        type: "ADDPLAYER",
        players: players,
    }

}


export const deletePlayer = (id) => {
    return {
        type: "DELETEPLAYER",
        id: id,
    }

}


export const reset = () => {
    return {
        type: "RESET"
    }
}



// action creators that hold the actions (type)