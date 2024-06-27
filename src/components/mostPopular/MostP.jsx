import React from "react";
import { GameCard } from "../../utils/index.jsx";
import { games } from "../../db/data.js";
import $ from "./MostP.module.css";

const MostP = () => {
	return (
		<div className={$.most__s}>
			<div className="container">
				<div className={$.mostP}>
					<div className={$.mostP__content}>
						<h2 className={$.mostP__title}>Most popular Game</h2>
					</div>
					<div className={$.mostP__game}>
						{games.map((game) => (
							<GameCard cardType="vert" game={game} key={game.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MostP;
