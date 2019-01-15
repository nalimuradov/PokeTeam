import React from "react";

class Pkmn extends React.Component {
	render(){
		return (
			<div className="pkmn__info">
				<img src={this.props.pk1Img}></img>
				<p className='pkmn__value'>{this.props.pk1}</p>
				<p className='pkmn__value'>{this.props.pk2}</p>
				<p className='pkmn__value'>{this.props.pk3}</p>
				<p className='pkmn__value'>{this.props.pk4}</p>
				<p className='pkmn__value'>{this.props.pk5}</p>
				<p className='pkmn__value'>{this.props.pk6}</p>

			</div>
		);
	}
};

export default Pkmn;