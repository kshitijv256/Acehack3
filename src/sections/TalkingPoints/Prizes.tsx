import React from "react";
import {
  CreateSomethingImg,
  GlobalCommunityImg,
  LastingMemoriesImg,
} from "src/assets/img";
import { BrowserWindow } from "src/components/base";
import { theme } from "src/styles";
import styled, { useTheme } from "styled-components";

const Prizes: React.FC = () => {
  return (
    <PrizeContainer>
      <PrizeItem
        title="1st Prize"
        prize="₹ 30,000"
        color="#F7CE58"
        space="justify-end"
      />
      <PrizeItem
        title="2nd Prize"
        prize="₹ 20,000"
        color="#1FA6FF"
        space="justify-end"
      />
      <PrizeItem
        title="3rd Prize"
        prize="₹ 15,000"
        color="#68D391"
        space="justify-end"
      />
      {/* <PrizeItem
        title="Top Female participant"
        prize="₹ 10,000"
        color="#FF2CFB"
      />
      <PrizeItem color="#5b21b6" title="4th-10th Prize" prize="Swag Box" /> */}
    </PrizeContainer>
  );
};

type PrizeItemProps = {
  title: string;
  prize: string;
  color?: string;
  space?: string;
  image?: JSX.Element;
};

const PrizeItem = (props: PrizeItemProps) => {
  return (
    <BrowserWindow
      gradientStartColor={props.color!}
      gradientEndColor={theme.colors.text.light.white!}
    >
      <PrizeItemContainer {...props}>
        {props.image}
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: props.color,
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: props.color,
          }}
        >
          {props.prize}
        </p>
      </PrizeItemContainer>
    </BrowserWindow>
  );
};

export default Prizes;

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-bottom: 5rem;
`;

const PrizeItemContainer = styled.div<PrizeItemProps>`
  font-family: "Castledown";
  font-size: 48px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1rem;
  width: 20rem;
`;
