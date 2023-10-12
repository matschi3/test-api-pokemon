import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { useRouter } from "next/router";
import stringSimilarity from "string-similarity";
import { pokemonNames } from "@/src/pokemonNames";
import UseSettingsStore from "../UseStore/UseSettingsStore";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { settings, setSetting } = UseSettingsStore((state) => state);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const matches = stringSimilarity.findBestMatch(searchQuery, pokemonNames);
    const bestMatch = matches.bestMatch.target.toLowerCase();
    setSearchQuery(bestMatch);

    router.push(`/pokemon/${bestMatch}`);
  };

  return (
    <Navbar sticky="top" expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TCG-Dex
        </Navbar.Brand>
        {router.pathname === "/pokemon/[id]" && (
          <Nav className="me-auto">
            <NavDropdown title="TCG-Set" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <div className="d-flex">
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Pokemon"
                className="me-2"
                aria-label="Search Pokemon"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button variant="outline-success" onClick={handleSearchSubmit}>
                Search
              </Button>
            </Form>
          </div>
          <div className="d-flex">
            <Nav className="me-auto">
              <Nav.Link href="/">back</Nav.Link>
              <Nav.Link href="/pokemon">Pokemon+TCG</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
