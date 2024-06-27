import React from "react";
import $ from "./index.module.css";

const GameCard = ({ game, cardType }) => {
	return (
		<>
			<div className={$.card} data-card-type={cardType}>
				<img
					className={$.card__img}
					src={game.img}
					alt=""
					width={200}
					height={300}
				/>
				<div className={$.game__content}>
					<h3 className={$.game__title}>{game.name}</h3>
					<p className={$.game__text}>
						{game.rating}, {game.category}
					</p>
				</div>
			</div>
		</>
	);
};

export { GameCard };
