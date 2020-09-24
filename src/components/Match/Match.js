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
        let { matches, players }= this.props;
        return(
            <>
                 {/* <h2><Link to="/">Home</Link></h2> */}

                <p> One ping to rule them all! </p>

                <div> 
                    {matches.map((match,index) => (
                        <>
                    <div key={index}>{match[0]}</div>
                    <div key={index}>{match[1]}</div>
                    </>
                ))}


                </div>
                <button onClick= { this.props.handleReset }>Reset</button>
            </>
        )
    }




}

export default Match;

// https://github.com/rohanharris/ping-pong-app