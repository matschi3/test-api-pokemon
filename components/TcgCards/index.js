import Image from "next/image";
import stringSimilarity from "string-similarity";

export default function TcgCards({ tcg, activeSet }) {
  return (
    <>
      {activeSet === "" ? (
        <>
          <Image
            key="card-backside"
            src="https://archives.bulbagarden.net/media/upload/1/17/Cardback.jpg"
            alt="card-backside"
            width={367}
            height={512}
            loading="lazy"
            style={{ margin: "0.5em", borderRadius: "0.5em" }}
          />
          <span style={{ marginBottom: "5em", borderRadius: "0.5em" }}>
            Pick a TCG-Set to display a TradingCard
          </span>
        </>
      ) : (
        tcg.data.map((tcgCard) => {
          const similarity = stringSimilarity.compareTwoStrings(
            tcgCard.id,
            activeSet
          );
          if (similarity > 0.6) {
            // set a threshold for similarity
            return (
              <Image
                key={tcgCard.id}
                src={tcgCard.images.large}
                alt={tcgCard.name}
                width={367}
                height={512}
                loading="lazy"
                style={{ margin: "0.5em", borderRadius: "0.5em" }}
              />
            );
          }
          return null;
        })
      )}
    </>
  );
}
