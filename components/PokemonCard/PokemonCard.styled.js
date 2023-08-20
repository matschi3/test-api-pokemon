import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

export const Card = styled.article`
  border-radius: 1em;
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: lightgrey;
  overflow: hidden;
`;

export const BackgroundBall = styled.span`
  background-color: ${(props) => props.color || "lightgrey"};
  border-radius: 50%;
  width: 110vw;
  height: 110vw;
  position: absolute;
  top: -60vw;
`;

export const CardImage = styled(Image)`
  position: absolute;
  top: 2em;
`;

export const CardName = styled.h2`
  position: absolute;
  top: 12em;
  color: ${(props) => props.color || "var(--color-black)"};
`;
