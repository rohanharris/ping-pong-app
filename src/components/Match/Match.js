import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Match extends Component{
    constructor(props){
        super(props);

        this.state=({ 
            winner : 0,
            score: 0
         })

    }


    handleClick(e){
        

    }

    render(){
        return(
            <>
                 {/* <h2><Link to="/">Home</Link></h2> */}

                <p> Lets get going! </p>
                <button>Reset</button>
            </>
        )
    }




}

export default Match;

// https://github.com/rohanharris/ping-pong-app