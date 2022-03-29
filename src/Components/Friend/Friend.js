import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
	const { name, username, email, id } = friend;

	const navigate = useNavigate();

	const showFriendDetails = () => {
		const path = `/friend/${id}`;
		navigate(path);
	};

	return (
		<div className="border w-25 m-3 p-3">
			<h3>{name}</h3>
			<h5>{username}</h5>
			<p>{email}</p>
			<button onClick={showFriendDetails} className="btn btn-primary">
				Show Details
			</button>
		</div>
	);
};

export default Friend;
