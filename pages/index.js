import Header from "@/components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6} xxl={5}>
            <Card className="text-center">
              <Card.Header>Hello there!</Card.Header>
              <Card.Body>
                <Card.Title>Check out Pokemon Trading Cards here</Card.Title>
                <Card.Text>
                  By scrolling down a list of Pkmn or by searching for a
                  specific one.
                </Card.Text>
                <Button variant="primary" href="/pokemon">
                  Pick a Pokemon
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Got your Pkmn? Pick a Set!
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
