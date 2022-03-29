import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<Link to="/">Logo</Link>
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Nav.Link>
							<CustomLink
								to="/"
								className="text-white text-decoration-none"
							>
								Home
							</CustomLink>
						</Nav.Link>
						<Nav.Link>
							<CustomLink
								to="about"
								className="text-white text-decoration-none"
							>
								About
							</CustomLink>
						</Nav.Link>
						<Nav.Link>
							<CustomLink
								to="friends"
								className="text-white text-decoration-none"
							>
								Friends
							</CustomLink>
						</Nav.Link>

						{/* <Nav.Link href="/friends">Friends</Nav.Link> */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
