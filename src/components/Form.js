import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props);

        // setting the original state
        this.state= {
            player: [],
            name: "",
            
        }

        // Binding the event handler so that the name can be deconstructed.
        this.handleName = this.handleName.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //  sets the new state to be whatever name is typed into the input box
    handleName(e){
        this.setState({ name: e.currentTarget.value })
    }

    handleClick(e){
        // prevents the page from refreshing 
        e.preventDefault() 

        let name = this.state.name;

        // rests name to empty string. creates new version of state and name is added to player array 
        this.setState({
            player:[...this.state.player, name ],
            name: ""
        })
    }


    render(){
        let player = this.state.player;

        return(

            

        <div>
            

            <form>
                <h2> Add your player</h2>

                <label htmlFor="playerName">Name</label>
                <input 
                    onChange={ this.handleName  } 
                    id="playerName" 
                    type="text" 
                    maxLength="30"
                    value={ this.state.name}
                   
                ></input>

                <button 
                    onClick={ this.handleClick }
                >Add</button>


            </form>

            {/* maps over player array and shows them as list items  */}
            <div>
                <p> Player's names </p>
                <ul>{player.map((value, index) => (
                    <li key={index}>{ value}</li>


                ))}

                </ul>
            </div>
            
            <div>
                 <button> Start Game! </button>
            </div>

        </div>

        )
    }






}


export default Form