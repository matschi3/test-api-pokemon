import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useRouter } from "next/router";
import stringSimilarity from "string-similarity";
import { pokemonNames } from "@/src/pokemonNames";
import UseSettingsStore from "../UseStore/UseSettingsStore";
import Image from "next/image";

export default function Header({ tcg }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { settings, setSetting } = UseSettingsStore((state) => state);

  let activeSetDropdownTitle = "";
  settings.activeSet === ""
    ? (activeSetDropdownTitle = "TCG-Set")
    : (activeSetDropdownTitle = settings.activeSetName);

  function handleFixActiveSet() {
    const tcgSetShort = settings.activeSet.split("-")[0];
    UseSettingsStore.getState().setSetting("activeSet", tcgSetShort);
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const matches = stringSimilarity.findBestMatch(searchQuery, pokemonNames);
    const bestMatch = matches.bestMatch.target.toLowerCase();
    setSearchQuery(bestMatch);

    handleFixActiveSet();

    router.push(`/pokemon/${bestMatch}`);
  };

  return (
    <Navbar sticky="top" expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="/sprites/poke-ball.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TCG-Dex
        </Navbar.Brand>
        {router.pathname === "/pokemon/[id]" && (
          <Dropdown title={activeSetDropdownTitle} id="basic-nav-dropdown">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {activeSetDropdownTitle}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {tcg.data.map((tcgSet) => (
                <Dropdown.Item
                  key={tcgSet.id}
                  onClick={() => {
                    UseSettingsStore.getState().setSetting(
                      "activeSet",
                      tcgSet.id
                    );
                    UseSettingsStore.getState().setSetting(
                      "activeSetName",
                      tcgSet.set.name
                    );
                  }}
                >
                  <Image
                    src={tcgSet.set.images.symbol}
                    alt={tcgSet.set.name}
                    width={30}
                    height={30}
                    loading="lazy"
                    style={{ verticalAlign: "middle", marginRight: "0.5em" }}
                  />
                  {tcgSet.set.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
              <Button variant="outline-dark" onClick={handleSearchSubmit}>
                Search
              </Button>
            </Form>
          </div>
          <div className="d-flex">
            <Nav className="me-auto">
              <Nav.Link href="/pokemon">Pokemons</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
