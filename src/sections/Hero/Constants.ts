import { theme } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled, { css } from "styled-components";

import { Heading2, LargeBody } from "../../styles";

export const AboutText =
  "This year, be part of an extraordinary gathering of 1,000+ innovators from around the nation. At AceHack 3.0, dive into a world of collaborative hacking, connect with industry-leading mentors, and build because you love to create. Experience riveting workshops, thrilling activities, and network with the most influential tech companies – it's an event you'll never forget. Coming from outside Jaipur? We've got you covered! Your food and lodging are on us, ensuring you focus solely on transforming your ideas into reality.";
export const AboutACM =
  "ACM, the world's largest educational and scientific computing society, delivers resources that advance computing as a science and a profession. ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career resources.";
export const AboutEduhub =
  "Empower Your Blockchain & Open-Source Journey with India's Largest Community Of Enthusiast People. We are Bridging the Gap between Tech Industry & Student Communities, Platform for Students to Learn new Skills, Network With Industry Professionals and grow as an individual.";
export const YouBelongText =
  "Join us for a 24-hour hackathon where creativity meets technology. Powered by UEM Jaipur ACM Student Chapter and Eduhub Community, this event is your platform to revolutionize India's present. Show off your ingenious ideas, compete with peers, and craft solutions for real-world issues. Get ready to innovate, collaborate, and ignite change!";
interface BrowserProps {
  inView: boolean;
}

export const PopUpWrapper = styled.div<BrowserProps>`
  transform: scale(0);
  ${({ inView }) =>
    inView
      ? css`
          animation: scaleUp 0.9s 1 forwards;
          animation-delay: 0.1s;
        `
      : css`
          animation: none;
          transform: scale(0);
        `}

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface GradientProps {
  gradientStartColor: string;
  gradientEndColor: string;
}

export const GradientOverlay = styled.div<GradientProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
  opacity: 0.2;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveH2 = styled(Heading2)`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.dark.white};
  ${mediaQueries.tablet} {
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const ResponsiveLB = styled(LargeBody)`
  color: ${({ theme }) => theme.colors.text.dark.gray};
  line-height: 32px;
  ${mediaQueries.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;
