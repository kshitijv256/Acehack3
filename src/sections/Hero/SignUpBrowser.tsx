import React from "react";
import { UnstyledLink, BrowserWindowGradient, Link } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import styled, { useTheme } from "styled-components";

import { LargeBodyMedium, BodyBold } from "../../styles";

import { Column } from "./Constants";

const SignUpBrowser: React.FC = () => {
  const theme = useTheme();

  return (
    <SignUpContainer>
      <BrowserWindowGradient
        gradientStartColor={theme.colors.primary.purpleDark}
        gradientEndColor={theme.colors.secondary.purpleLight}
      >
        <BrowserContainer>
          <Link
            newTab={true}
            href="https://acehack-3.devfolio.co/"
            onClick={
              () => {} // Sign Up: Clicked Email Contact
            }
            style={{
              marginTop: "24px",
              backgroundColor: "#8d58e0ff",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <Subtext
              style={{
                borderBottom: "none",
              }}
            >
              Apply with Devfolio
            </Subtext>
          </Link>
          <UnstyledLink
            newTab={true}
            href="https://drive.google.com/file/d/1Wl2124ChuDGRy0FVs6JtzwBqq7w6EJ_X/view?usp=sharing"
            onClick={
              () => {} // Sign Up: Clicked Email Contact
            }
            style={{
              marginTop: "24px",
            }}
          >
            <Subtext>Interested in becoming a sponsor?</Subtext>
          </UnstyledLink>
          <UnstyledLink
            newTab={true}
            href="mailto:acehack@eduhubcommunity.tech"
            style={{
              marginTop: "4px",
            }}
          >
            <Subtext>Interested in becoming a mentor?</Subtext>
          </UnstyledLink>
        </BrowserContainer>
      </BrowserWindowGradient>
    </SignUpContainer>
  );
};

export default SignUpBrowser;

const BrowserContainer = styled(Column)`
  padding: 25px;
  text-align: left;
  line-height: 32px;
  align-items: flex-center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  ${mediaQueries.tablet} {
    padding: 20px;
    line-height: 21px;
  }
`;

const SignUpContainer = styled(Column)`
  width: fit-content;
  ${mediaQueries.tablet} {
    margin: 120px 24px 0 24px;
  }
`;

const TextContainer = styled(LargeBodyMedium)`
  width: fit-content;
  text-align: left;
  margin-bottom: 24px;
  ${mediaQueries.tablet} {
    font-weight: 400;
    margin-bottom: 18px;
  }
`;

const Subtext = styled(BodyBold)`
  width: fit-content;
  text-align: left;
  line-height: 20px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
  ${mediaQueries.tablet} {
    font-weight: 400;
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;
