import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Form extends Component{
    constructor(props){
        super(props);

        // setting the original state
        this.state= {
            players: [],
            name: "",
            errorName: false,
            errorLength: false,
            
        };

        // Binding the event handler so that the name can be deconstructed and 'this' can be used.
        this.handleName = this.handleName.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
       
    }

    //  sets the new state to be whatever name is typed into the input box
    handleName(e){
        this.setState({ 
            name: e.currentTarget.value, 
            errorName: false
            // this gets rid of the error message when a name is typed
        });
    }

    


    handleClick(e){
        // prevents the page from refreshing 
        e.preventDefault();
        
        let name = this.state.name;
      

        if( name !== ""){
        // rests name to empty string. creates new version of state and name is added to player array 
        this.setState({
            players: [ ...this.state.players, name],
            name: ""
            });
        }else {
             this.setState({ errorName: true})
        }
    }

    handleSubmit(e){
        e.preventDefault();

        let {players} = this.state;

        if(players % 2 === 0){
            this.props.handleMatch(players)
        } else {
            this.setState({ errorLength: true })
        }

        

    }


    render(){
        let { players, name, errorName, errorLength } = this.state;

        // const factorOfTwo = index => {return (index % 2 === 0)}

        let wrongName = "You must enter a name!";
        let wrongLength = " You must have an even number of players!"

        return(
            <>
            <div>
                 <p>{ errorName ?  wrongName : errorLength ? wrongLength :  null }</p>
            </div>

            
       
        <div className="container">
            <form className="form-component">
                <h2> Add your player</h2>

                <label htmlFor="playerName">Name</label>
                <input 
                    onChange={ this.handleName  } 
                    id="playerName" 
                    type="text" 
                    maxLength="30"
                    value={ name}
                   
                ></input>

                <button 
                    onClick={ this.handleClick }
                >
                Add
                </button>
            


            </form>
            </div>

            <div>

            {/* maps over player array and shows them as list items  */}
            <div>
                <p> Player's names </p>
                <ul>{players.map((value, index) => (
                    <li key={index}>
                    <span >{ value }</span>
                    <button>Delete</button>
                    </li>


                ))}
                </ul>
            </div>
            
            <div>
                 <button onClick= { this.handleSubmit }>Start Game! </button>
                 
            </div>

        </div>
        </>

        )
    }

}


export default Form;

 {/* <Link to="/match">Start Game!</Link> */}