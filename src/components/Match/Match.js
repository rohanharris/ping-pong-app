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
                <h2 className='pong-text'> ...One Pong to bind them! </h2>

                <div className='card match'> 
                    <h2 className="match-head">Battle list</h2> 

                    {playing.map((player,index) => (
                        
                       
                    <p className='battle' key={index}>{player[0]} <span>vs</span> {player[1]}</p>
                    
                    
                ))}

                </div>
                <div className='reset'>
                <button className='reset-btn' onClick= { this.props.handleReset }>Reset</button>
                </div>
            </>
        )
    }




}

export default Match;

// https://github.com/rohanharris/ping-pong-app