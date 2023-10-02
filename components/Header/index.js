import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledLinkButton } from "../StyledLinkButton/StyledLinkButton.styled";

export default function Header() {
  return (
    <Container>
      <Row>
        <Col xs={6} sm={6} md={{ order: 1, span: 4 }}>
          <StyledLinkButton href="/">back</StyledLinkButton>
        </Col>
        <Col
          xs={{ order: "first", span: 12 }}
          sm={{ order: "first", span: 12 }}
          md={{ order: 2, span: 4 }}
        >
          <span>TCG-Dex</span>
        </Col>
        <Col xs={6} sm={6} md={{ order: 3, span: 4 }}>
          <span>Search/HideBtn</span>
        </Col>
      </Row>
    </Container>
  );
}
