import React from "react";

class Form extends React.Component {
	render(){
		return (
			<form onSubmit={this.props.getPkmn}>
				<input type='text' name='game' placeholder='Game...'/>
				<input type='text' name='size' placeholder='Size...'/>
				<button>Enter</button>
			</form> 
		);
	}
};

export default Form;