import React from "react";
import $ from "./Nav.module.css";

const Nav = () => {
	return (
		<nav>
			<div className="container">
				<ul className={$.nav}>
					<li className={$.nav__item}>
						<a href="#">Game</a>
					</li>
					<li className={$.nav__item}>
						<a href="#">Live score</a>
					</li>
					<li className={$.nav__item}>
						<a href="#">Statistics</a>
					</li>
					<li className={$.nav__item}>
						<a href="#">Analitics</a>
					</li>
					<li className={$.nav__item}>
						<a href="#">Forecasts</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
