import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Logo</Navbar.Brand>
					<Nav className="ms-auto">
						<Nav.Link href="/">
							<Link to="/">Home</Link>
						</Nav.Link>
						<Nav.Link href="/">
							<Link to="about">About</Link>
						</Nav.Link>
						<Nav.Link href="/about">
							<Link to="friends">Friends</Link>
						</Nav.Link>

						{/* <Nav.Link href="/friends">Friends</Nav.Link> */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
