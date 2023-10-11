import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import {
  StyledButton,
  StyledButtonContainer,
} from "../StyledButton/StyledButton.styled.js";

export default function TcgCards({ tcg, activeTcgSet }) {
  const [activeTcgCard, setActiveTcgCard] = useState("");
  return (
    <>
      {activeTcgSet === "" ? (
        <span>Choose a Set to show the Trading Card</span>
      ) : (
        ""
      )}

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
