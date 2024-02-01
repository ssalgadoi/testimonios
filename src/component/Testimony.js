import React from "react";


function Testimony() {
	return (
		<div	className="container-testimony">
			<img className="image-testimony" src={require("../image/Image01.png")} 
			alt="student" ></img>
			<div className="container-text-testimony">
				<p className="name-testimony">Juan Perez en Lider</p>
				<p className="employer-testimony">Ingeniero Comercial</p>
				<p className="text-testimony">Lorem ipsum dolor sit amet, consectetur 
				adipiscing elit. Donec vel ipsum sit amet diam maximus aliquet eget a elit. 
				Mauris ornare velit tellus, sed porttitor eros imperdiet tempor. 
				Donec ullamcorper tortor id pulvinar pharetra. Sed aliquam vitae sem ac 
				placerat.</p>

			</div>
		</div>
		
	);
}

export default Testimony;