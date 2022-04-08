import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const AboutHero = styled.div`
  margin-left: 14vw;
  padding-top: 115px;
  font-family: ${fonts.itc_avante_garde};
`;

export const AboutHeroText = styled.div`
  font-size: ${fonts.Heading2Size};
  font-weight: 700;
  margin-bottom: 62px;
`;

export const AboutHeroParagraph = styled.div`
  display: flex;
`;

export const ParagraphColumn = styled.div`
  color: ${colors.black};
  width: 35vw;
  margin-right: 62px;
  padding-bottom: 114px;
  font-weight: 300;
  font-size: ${fonts.BodySize};
`;

export const AboutContainer = styled.div`
  background-color: ${colors.white};
`;

export const AboutPrinciples = styled.div`
  margin-bottom: 314px;
`;

export const PrinciplesHeader = styled.div`
  font-size: ${fonts.Heading2Size};
  text-align: center;
  font-family: ${fonts.itc_avante_garde};
`;

export const PrinciplesSubHeader = styled.div`
  margin-top: 34px;
  margin-bottom: 58px;
  font-size: ${fonts.BookSub};
  text-align: center;
  font-weight: 300;
  font-family: ${fonts.itc_avante_garde};
`;

export const GuidingPrinciples = styled.div`
  display: flex;
  justify-content: center;
`;

export const GuidingPrinciple = styled.div`
  width: 44vw;
  display: flex;
  justify-content: center;
`;

export const HeroHeadline = styled.span`
  ${({ black }) =>
    black ? `color: ${colors.black};` : `color: ${colors.black}`}
`;
export const GuidingPrincipleHeader = styled.div`
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BookSub};
  margin-bottom: 24px;
`;

export const GuidingDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  margin-bottom: 24px;
`;

export const GuidingPrincipleImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const GuidingPrincipleText = styled.div`
  margin-left: 57px;
`;

export const TheProblem = styled.div`
  margin-left: 14vw;
`;

export const TheProblemHeader = styled.div`
  font-size: ${fonts.NumberSmall};
  font-family: ${fonts.itc_avante_garde};
`;

export const TheProblemDescription = styled.div`
  margin-top: 34px;
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde};
  width: 37vw;
  font-weight: 300;
`;

export const SolutionWrapper = styled.div`
  position: relative;
  margin-bottom: 311px;
`;

export const TheSolution = styled.div`
  position: absolute;
  right: 11vw;
  text-align: right;
  width: 37vw;
`;

export const TheSolutionHeader = styled.div`
  font-size: ${fonts.NumberSmall};
  font-family: ${fonts.itc_avante_garde};
`;

export const TheSolutionDescription = styled.div`
  margin-top: 34px;
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 300;
`;

export const AboutCTA = styled.a`
  background-color: ${colors.black};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BodySize};
  text-decoration: none;
  border-radius: 12px;
  padding: 30px 60px;
`;

export const AboutCTAContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 109px;
`;
