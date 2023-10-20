import { StyledFooter } from "./StyledFooter.styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <StyledFooter className="bg-dark text-center text-white">
      <Container className="container p-4 bg-dark text-center text-white">
        <Row>
          <Col className="d-flex flex-column">
            <span>
              Created by <a href="https://github.com/matschi3">Nils Fischer</a>
            </span>
            <span>
              Data made available by the{" "}
              <a href="https://pokemontcg.io/">Pokémon TCG API</a> +{" "}
              <a href="https://pokeapi.co/">Poké API</a>
            </span>
            <span>
              This website is not produced, endorsed, supported, or affiliated
              with Nintendo or The Pokémon Company.
            </span>
            <span>
              Pokémon and Pokémon character names are trademarks of Nintendo.
            </span>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
