import React, { useState } from "react";
import Book from "./Book";
const { Rune } = window;

function Instructions({ currentPlayerId }) {
	const [bookVisible, setBookVisible] = useState(false);

	function handleEnterGame() {
		Rune.actions.assignRoles();
		Rune.actions.assignJudgeArray(currentPlayerId);
		Rune.actions.determineRoundStage();
		Rune.actions.assignInitialScores();
	}

	return (
		<>
			{bookVisible ? (
				<div>
					<Book />
				</div>
			) : (
				<div className="amoeba" onClick={() => setBookVisible(!bookVisible)}>
					Let's play!
				</div>
			)}
			<div className="bubble-top">
				<p className="heading">Let's get started!</p>
				<p>Click 'Enter game' to see your role</p>
			</div>
			{/* <div className="bubble-top">
				<p className="heading">Judge</p>
				<ul>
					<li>Click 'start game' to display the word</li>
					<li>Select the definition you like the most</li>
				</ul>
			</div> */}
			{/* <div className="bubble-bottom">
				<p className="heading">Players</p>
				<ul>
					<li>Come up with a fake definition for the given word</li>
					<li>Click on submit to see if who wins!</li>
				</ul>
			</div> */}
			<button onClick={handleEnterGame}>Enter Game</button>
		</>
	);
}

export default Instructions;
