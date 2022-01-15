import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./components/ProfileCard.css";

const App = () => {
	return (
		<div className="App container-app-grid">
			<ProfileCard
				icon="👧"
				name="Shreya Purohit"
				work="Developer | Technical Writer"
				fans="3.3K"
				blogs="30"
				buttonMessage="Follow"
				revenue="80K"
				linked="https://www.twitter.com/eyeshreya"
			/>
			<ProfileCard
				icon="🧔"
				name="Watson"
				work="Founder, XYZ"
				fans="28K"
				blogs="15"
				buttonMessage="Visit my blog"
				revenue="308K"
				linked="https://www.dev.to"
			/>
			<ProfileCard
				icon="🚀"
				name="Ammy"
				work="Developer, TK"
				fans="3.8K"
				blogs="10"
				buttonMessage="Email me"
				revenue="90K"
				linked="mailto:xyz@xyz.me"
			/>
		</div>
	);
};

export default App;
