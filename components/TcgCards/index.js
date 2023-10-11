import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import {
  StyledButton,
  StyledButtonContainer,
} from "../StyledButton/StyledButton.styled.js";

export default function TcgCards({ tcg }) {
  const [activeTcgCard, setActiveTcgCard] = useState("");
  return (
    <>
      {activeTcgCard === "" ? (
        <span>Choose a Set to show the Trading Card</span>
      ) : (
        ""
      )}

      {activeTcgCard === "" ? (
        ""
      ) : (
        <Image
          src={activeTcgCard}
          alt={tcg.data[0].name}
          width={367}
          height={512}
          loading="lazy"
          style={{ margin: "0.5em", borderRadius: "0.5em" }}
        />
      )}
    </>
  );
}
