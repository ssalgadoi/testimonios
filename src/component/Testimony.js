import React from "react";
import "../styles/Testimony.css"


function Testimony(props) {
	return (
		<div className="container-testimony">
			<img className="image-testimony" src={require("../image/Image01.png")} 
			alt="student" ></img>
			<div className="container-text-testimony">
				<p className="name-testimony">{props.name} en {props.country}</p>
				<p className="employer-testimony">{props.employe} en {props.company}</p>
				<p className="text-testimony">{props.testimony}</p>

			</div>
		</div>
		
	);
}

export default Testimony;