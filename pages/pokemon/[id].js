import useSWR from "swr";
import { useRouter } from "next/router";
import PokemonCard from "@/components/PokemonCard/index.js";
import TcgCards from "@/components/TcgCards/index.js";
import Header from "@/components/Header/index.js";
import UseSettingsStore from "@/components/UseStore/UseSettingsStore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpinnerLoading from "@/components/SpinnerLoading";

import Footer from "@/components/Footer";

export default function DetailPokemonPage() {
  const router = useRouter();
  const { id } = router.query; // id is a name for tcg api cause no pkmn-id there
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    data: species,
    isLoading: speciesIsLoading,
    error: speciesError,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const {
    data: tcg,
    isLoading: tcgIsLoading,
    error: tcgError,
  } = useSWR(`https://api.pokemontcg.io/v2/cards/?q=name:${id}`);

  const activeSet = UseSettingsStore().settings.activeSet;

  if (isLoading || speciesIsLoading || tcgIsLoading) return;
  <>
    <Header tcg={tcg} />
    <SpinnerLoading />;
  </>;
  if (error || speciesError || tcgError) return;
  <>
    <Header tcg={tcg} />
    <div>Error</div>;
  </>;
  return (
    <>
      <Header tcg={tcg} />
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <PokemonCard pokemon={pokemon} species={species} />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center "
          >
            <TcgCards tcg={tcg} activeSet={activeSet} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
