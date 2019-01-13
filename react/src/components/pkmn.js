import React from "react";

class Pkmn extends React.Component {
	render(){
		return (
			<div>
				<p>{this.props.pk1}</p>
				<p>{this.props.pk2}</p>
				<p>{this.props.pk3}</p>
				<p>{this.props.pk4}</p>
				<p>{this.props.pk5}</p>
				<p>{this.props.pk6}</p>

			</div>
		);
	}
};

export default Pkmn;