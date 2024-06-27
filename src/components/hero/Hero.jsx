import React from "react";
import $ from "./Hero.module.css";

const Hero = () => {
	return (
		<div className="container">
			<div className={$.hero}>
				<div className={$.hero__content}>
					<h1 className={$.hero__title}>The Forbidden Kingdom Adventure War</h1>
					<a href="#">More Details</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
