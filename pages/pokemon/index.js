import useSWR from "swr";
import { StyledLinkButton } from "../../components/StyledLinkButton/StyledLinkButton.styled.js";
import Image from "next/image.js";
import { CardContainer } from "../../components/PokemonCard/PokemonCard.styled.js";
import Header from "../../components/Header/index.js";
import Pagination from "react-bootstrap/Pagination";

export default function PokemonPage() {
  const {
    data: fetchData,
    isLoading,
    error,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon`);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = fetchData;

  return (
    <>
      <Header />
      <h1>Pokemons</h1>
      <CardContainer marginbottom="1em">
        {results.map((result) => (
          <StyledLinkButton key={result.name} href={`/pokemon/${result.name}`}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                result.url.match(/\/([0-9]*)\/$/)[1]
              }.png`}
              alt={result.name}
              width={30}
              height={30}
              loading="lazy"
              style={{ verticalAlign: "middle", marginRight: "0.5em" }}
            />
            {result.name[0].toUpperCase() + result.name.slice(1)}
          </StyledLinkButton>
        ))}
      </CardContainer>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}
