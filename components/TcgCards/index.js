import Image from "next/image";

export default function TcgCards({ tcg, activeTcgSet }) {
  return (
    <>
      {activeTcgSet === ""
        ? ""
        : tcg.data.map((tcgCard) => {
            if (tcgCard.id === activeTcgSet) {
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
          })}
    </>
  );
}
