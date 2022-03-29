import React from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
	const params = useParams();

	return (
		<div>
			<h2>This component is friend details here</h2>
			<p>wowwwwwwwwwwwww-{params.friendId}</p>
		</div>
	);
};

export default FriendDetails;
