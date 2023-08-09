import useSWR from "swr";
import { useRouter } from "next/router";

export default function DetailPokemonPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log(pokemon);
}
