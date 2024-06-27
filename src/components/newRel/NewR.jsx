import React from "react";
import { GameCard } from "../../utils/index.jsx";
import { games } from "../../db/data.js";
import $ from "./NewR.module.css";

const NewR = () => {
	return (
		<div className={$.newR__s}>
			<div className="container">
				<div className={$.newR}>
					<div className={$.newR__content}>
						<h2 className={$.newR__title}>New Released Games</h2>
					</div>
					<div className={$.newR__game}>
						{games.map((game) => (
							<GameCard cardType="hor" game={game} key={game.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewR;
