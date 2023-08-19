import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.section``;

export const Card = styled.article`
  border: solid 1px red;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const BackgroundBall = styled.span`
  background-color: ${(props) => props.color || "lightgrey"};
  border-radius: 50%;
  width: 80vw;
  height: 80vw;
  position: absolute;
  top: -40vw;
`;

export const CardImage = styled(Image)``;
