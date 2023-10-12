import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

export default function SpinnerLoading() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="dark" />
    </Container>
  );
}
