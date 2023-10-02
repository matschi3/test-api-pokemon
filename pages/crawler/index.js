import useSWR from "swr";

export default function Crawler() {
  const {
    data: fetchData,
    isLoading,
    error,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = fetchData;

  let crawlArray = [];
  results.map((result) => {
    crawlArray.push(result.name);
  });

  console.log(crawlArray);
  return <></>;
}
