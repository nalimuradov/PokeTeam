import React from "react";

class Pkmn extends React.Component {
	render(){
		return (
			<div class="container">
				<div class="row">
					<div class='col-m-6'>
						<object><img src={this.props.pk1Img} /></object>
						<p className='pkmn__value'>{this.props.pk1}</p>
						<object><img src={this.props.pk2Img} /></object>
						<p className='pkmn__value'>{this.props.pk2}</p>
						<object><img src={this.props.pk3Img} /></object>
						<p className='pkmn__value'>{this.props.pk3}</p>
					</div>
					<div class='col-m-6'>
						<object><img src={this.props.pk4Img} /></object>
						<p className='pkmn__value'>{this.props.pk4}</p>
						<object><img src={this.props.pk5Img} /></object>
						<p className='pkmn__value'>{this.props.pk5}</p>
						<object><img src={this.props.pk6Img} /></object>
						<p className='pkmn__value'>{this.props.pk6}</p>
					</div>
				</div>
				
				
				

			</div>
		);
	}
};

export default Pkmn;