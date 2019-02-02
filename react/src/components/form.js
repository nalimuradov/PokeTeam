import React from "react";

class Form extends React.Component {
	render(){
		return (
			<form onSubmit={this.props.getPkmn}>
				<input type='text' name='game' placeholder='Game...'/>
				<button>Enter</button>
				<button></button>
				<select name="cars">
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="fiat">Fiat</option>
				  <option value="audi">Audi</option>
				</select>
			</form> 
		);
	}
};

export default Form;

/**
<input type='text' name='size' placeholder='Size...'/>
*/