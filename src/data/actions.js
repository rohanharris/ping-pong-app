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



// action creators that hold the actions (type)