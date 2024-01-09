import React from "react";
import { AnimatedFrame } from "src/assets/img";
import {
  AccordionGroup,
  ContentWrapper,
  SectionWrapper,
  UnstyledLink,
} from "src/components/base";
import GlowText from "src/components/base/GlowText";
import { SectionId } from "src/constants";
import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "src/copy/FAQ";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled from "styled-components";

import { Heading1, theme } from "../../styles";

import Note from "./Note";

const TopFrameContainer = styled.img`
  display: flex;
  width: 100vw;
  margin-top: -3vh;
`;

const Wrapper = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8%;
`;
const InternalLink = styled(UnstyledLink)`
  color: white;
  outline: none;
  width: fit-content;
  text-decoration: underline;
`;

const StyledAccordionGroup = styled(AccordionGroup)`
  flex: 1;
  height: auto;
  width: 50%;

  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: left;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const AccordionWrapper = styled.div`
  display: flex;
  justify-content: between;
  column-gap: 96px;
  margin-top: 6%;
  height: auto;

  ${mediaQueries.tablet} {
    display: block;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 15%;
  }
`;

const FAQ: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  return isTabletOrSmaller !== undefined ? (
    <SectionWrapper id={SectionId.FAQ}>
      <TopFrameContainer
        alt="Animated frame"
        src={AnimatedFrame}
        loading="lazy"
      />
      <ContentWrapper>
        <Wrapper>
          <HeadingContainer>
            <Heading1 style={{ left: 0 }}>
              <GlowText color={theme.colors.primary.purpleLight}>
                Frequently{" "}
              </GlowText>
              asked questions
            </Heading1>
          </HeadingContainer>
          <AccordionWrapper>
            <StyledAccordionGroup
              questionSet={LEFT_QUESTION_SET.map((cur) => {
                return {
                  question: cur.question,
                  answer: <p>{cur.answer}</p>,
                };
              })}
            />
            <StyledAccordionGroup
              shouldOpenFirst={!isTabletOrSmaller}
              questionSet={RIGHT_QUESTION_SET.map((cur) => {
                return {
                  question: cur.question,
                  answer: <p>{cur.answer}</p>,
                };
              })}
            />
          </AccordionWrapper>
        </Wrapper>
        <Note />
      </ContentWrapper>
    </SectionWrapper>
  ) : null;
};

export default FAQ;
