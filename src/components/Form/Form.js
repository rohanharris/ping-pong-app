import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props);

        // setting the original state
        this.state= {
            name: "",
            players: [],
            errorName: false,
            errorLength: false,
            
        };

        // Binding the event handler so that the name can be deconstructed and 'this' can be used.

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 


    // when a name is typed in name is set to the value being entered. The errors are set to false so they disappear when something new is typed. 
    handleChange(e){
        this.setState({ 
            name: e.currentTarget.value,
            errorName: false,
            errorLength: false,
        });

    }


    // rests name to empty string. creates new version of state and name is added to a new version of players array. 
    handleClick(e){
        // prevents the page from refreshing 
        e.preventDefault();
        
        let { name, players } = this.state;
        
        if( name !== ""){
        this.setState({
            players: [ ...players, name],
            name: ""
            });
        }else{
             this.setState({ errorName: true})
        }
    }


    //submits names to be matched if the criteria is met
    handleSubmit(e){
        e.preventDefault();

        let {players} = this.state;

        if(players.length > 0 && players.length % 2 === 0){
            this.props.handlePlayers(players);
        } else {
            this.setState({ errorLength: true })
        }

    }



    handleDelete(id){
        this.props.delete(id);

    }


    render(){
        let { players, name, errorName, errorLength } = this.state;

        let wrongName = "You must enter a name!";
        let wrongLength = " You must have an even number of players!"

        return(
            <>
            <div>
                <p>
                    {/* error messages will appear if criteria not met */}
                    { errorName ?  wrongName : errorLength ? wrongLength :  null } 
                </p>
            </div>

            <div className="container">
            <form className="form-component">
                <h2> Add your player</h2>

                <label htmlFor="playerName">Name</label>
                <input 
                    onChange={ this.handleChange  } 
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
                <ul>{players.map((player, index) => (

                    // <Name key={ index } index={ index } name={ player.name } />       
                    <li key={index}>
                    <span >{ player}</span>
                    <button onClick={ () => this.handleDelete(index)}>Delete</button>
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

 