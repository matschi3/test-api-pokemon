import useSWR from "swr";
import { StyledLinkButton } from "@/components/StyledLinkButton/StyledLinkButton.styled.js";
import Image from "next/image.js";
import Header from "@/components/Header/index.js";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef } from "react";

export default function PokemonPage() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const inputRef = useRef(null);

  const { data: fetchData, isLoading, error } = useSWR(`${url}`);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results, previous, next, count } = fetchData;

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputRef.current.value);
    if (pageNumber > 0 && pageNumber <= Math.round(count / 20)) {
      setPage(pageNumber);
      setUrl(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          (pageNumber - 1) * 20
        }&limit=20`
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGoToPage();
    }
  };

  return (
    <>
      <Header />
      <h1>Pokemons</h1>
      <Container style={{ marginBottom: "5em" }}>
        <Row>
          {results.map((result) => (
            <Col key={result.name} xs={6} sm={4} md={3} lg={2} xl={2}>
              <Row>
                <Col>
                  <StyledLinkButton
                    href={`/pokemon/${result.name}`}
                    className="d-flex flex-column align-items-center"
                    position="relative"
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        result.url.match(/\/([0-9]*)\/$/)[1]
                      }.png`}
                      alt={result.name}
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                    {result.name[0].toUpperCase() + result.name.slice(1)}
                  </StyledLinkButton>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="fixed-bottom d-flex justify-content-center">
        <Pagination size="lg">
          {page === 1 ? (
            // disabled on first page
            <Pagination.Prev disabled />
          ) : (
            <Pagination.Prev
              onClick={() => {
                setUrl(
                  `https://pokeapi.co/api/v2/pokemon?offset=${
                    (page - 2) * 20
                  }&limit=20`
                );
                setPage(page - 1);
              }}
            />
          )}
          <Pagination.Item active>
            <input
              type="number"
              min="1"
              max={Math.round(count / 20)}
              ref={inputRef}
              style={{ width: "1.6em" }}
              onKeyDown={handleKeyDown}
              placeholder={`${page}`}
            />
            {" / "}
            {Math.round(count / 20)}
          </Pagination.Item>
          {page === Math.round(count / 20) ? (
            // disabled on last page
            <Pagination.Next disabled />
          ) : (
            <Pagination.Next
              onClick={() => {
                setUrl(
                  `https://pokeapi.co/api/v2/pokemon?offset=${
                    page * 20
                  }&limit=20`
                );
                setPage(page + 1);
              }}
            />
          )}
        </Pagination>
      </Container>
    </>
  );
}
