import React, { useEffect, useState } from "react";

const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setFriends(data));
	}, []);

	return <div></div>;
};

export default Friends;
