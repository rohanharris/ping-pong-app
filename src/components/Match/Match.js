import React, { Component } from "react";




class Match extends Component{
    constructor(props){
        super(props);

        this.state={ 
        
        }

    }



    render(){
        let  {playing} = this.props;

        
        return(
            <>
                <h2> ...to rule them all! </h2>

                <div> 
                    <p>playing list</p> 

                    {playing.map((player,index) => (
                        
                       
                    <div key={index}>{player[0]} vs {player[1]}</div>
                    
                    
                ))}

                </div>
                <button onClick= { this.props.handleReset }>Reset</button>
            </>
        )
    }




}

export default Match;

// https://github.com/rohanharris/ping-pong-app