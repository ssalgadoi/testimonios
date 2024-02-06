import React from "react";
import "../styles/testimony.css"


class Testimony extends React.Component {
	render() {
		return (
			<div className="container-testimony">
			<img 
      className="image-testimony" 
      src={require(`../image/Image-${this.props.image}.png`)} 
			alt={`Foto $this.props.name }`} />
			<div className="container-text-testimony">
				<p className="name-testimony">{this.props.name} en {this.props.country}</p>
				<p className="employer-testimony">{this.props.employe} en {this.props.company}</p>
				<p className="text-testimony">"{this.props.testimony}"</p>
			</div>
		</div>
		);
	}
}

export default Testimony;