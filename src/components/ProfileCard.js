import React from "react";
import "./ProfileCard.css";
const ProfileCard = (props) => {
	return (
		<div className="container">
			<div className="card">
				<div className="person">
					<div className="icon">
						<span>{props.icon}</span>
					</div>
					<div className="name">
						<h2>{props.name}</h2>
					</div>
				</div>
				<div className="work">
					<p>{props.work}</p>
				</div>
				<div className="figures">
					<div className="followers stats">
						<span>{props.fans}</span>
						<p> Followers</p>
					</div>
					<div className="blogs stats">
						<span>{props.blogs}</span>
						<p> Articles</p>
					</div>
					<div className="revenue stats">
						<span>{props.revenue}</span>
						<p>MRR</p>
					</div>
				</div>
				<div className="follow-btn">
					<a href={props.linked} target="_blank" rel="noreferrer">
						<button>{props.buttonMessage}</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
