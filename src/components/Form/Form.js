import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Form extends Component{
    constructor(props){
        super(props);

        // setting the original state
        this.state= {
            players: [],
            name: "",
            error: false,
            
        };

        // Binding the event handler so that the name can be deconstructed and 'this' can be used.
        this.handleName = this.handleName.bind(this);
        this.handleAddName = this.handleAddName.bind(this);
        this.handleError = this.handleError.bind(this);
       
    }

    //  sets the new state to be whatever name is typed into the input box
    handleName(e){
        this.setState({ name: e.currentTarget.value });
    }


    handleError(e){
        this.setState({ error: true });
    }


    handleAddName(e){
        // prevents the page from refreshing 
        e.preventDefault();

        let name = this.state.name;

        
        // rests name to empty string. creates new version of state and name is added to player array 
        this.setState({
            players: [ ...this.state.players],
           name: ""
        })
    }


    render(){
        let { players } = this.props;

        return(

            
        <>
        <div className="container">
            <form className="form-component">
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
                    onClick={ this.handleAddName }
                >
                Add
                </button>
            


            </form>
            </div>

            <div>

            {/* maps over player array and shows them as list items  */}
            <div>
                <p> Player's names </p>
                <li>{players.map((value, index) => (
                    <>
                    <span key={index}>{ value}</span>
                    <button>Delete</button>
                    </>


                ))}
                </li>
            </div>
            
            <div>
                 <button><Link to="/match">Start Game!</Link>  </button>
            </div>

        </div>
        </>

        )
    }

}


export default Form;