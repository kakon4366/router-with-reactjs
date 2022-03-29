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
						<Nav.Link>
							<Link to="/" className="text-white text-decoration-none">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to="about"
								className="text-white text-decoration-none"
							>
								About
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to="friends"
								className="text-white text-decoration-none"
							>
								Friends
							</Link>
						</Nav.Link>

						{/* <Nav.Link href="/friends">Friends</Nav.Link> */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
