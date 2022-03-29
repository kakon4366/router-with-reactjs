import React from "react";

const Friend = ({ friend }) => {
	const { name, username, email } = friend;
	return (
		<div className="border w-25 m-3 p-3">
			<h3>{name}</h3>
			<h5>{username}</h5>
			<p>{email}</p>
			<button className="btn btn-primary">Show Details</button>
		</div>
	);
};

export default Friend;
