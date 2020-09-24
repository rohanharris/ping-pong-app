export const addPlayer = ( players ) => {
    return {
        type: "ADDPLAYER",
        players: players,

    }

}


export const deletePlayer = () => {
    return {
        type: "DELETEPLAYER"
    }

}

export const reset = () => {
    return {
        type: "RESET"
    }
}



// action creators that hold the actions (type)