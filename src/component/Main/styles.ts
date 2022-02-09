import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FiRotateCw } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
export const Container = styled.div``;

export const Vertical = styled.div`
  width: inherit;
`;

export const ImageHome = styled.div`
  background-image: url("/images/home_logo.png");
  background-position: center;
  background-size: cover;
  max-width: 100%;
  width: 100%;
`;

export const Horizontal = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  padding-left: 60px;
  justify-content: space-between;

  background: -webkit-linear-gradient(
    13deg,
    rgba(0, 0, 0, 0.6) 0,
    rgba(0, 0, 0, 0) 85%
  );
  background: -moz-
    oldlinear-gradient(13deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%);
  background: -o-linear-gradient(
    13deg,
    rgba(0, 0, 0, 0.6) 0,
    rgba(0, 0, 0, 0) 85%
  );
  background: linear-gradient(
    77deg,
    rgba(0, 0, 0, 0.6) 0,
    rgba(0, 0, 0, 0) 85%
  );
`;

export const InfoMovie = styled.div`
  width: 40%;
  padding-top: 200px;
`;

export const TitleContainer = styled.div``;

export const DescriptionMovie = styled.p`
  font-family: Roboto, sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonPlay = styled.button`
  border: none;
  width: auto;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  padding-left: 2rem;
  padding-right: 2.4rem;
  border-radius: 4px;
  margin-top: 28px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  transition: color ease 0.5s;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.textPrimaryHover};
    opacity: 1;
  }
`;

export const PlayIcon = styled(FaPlay)`
  width: 32px;
  height: 32px;
`;

export const TextButtonPlay = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  margin-left: 1rem;
`;

export const ButtonMoreInfo = styled.button`
  border: none;
  width: auto;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  padding-left: 2rem;
  padding-right: 2.4rem;
  border-radius: 4px;
  margin-top: 28px;
  margin-left: 1rem;
  background-color: rgba(109, 109, 110, 0.7);
  color: ${(props) => props.theme.colors.white};
  transition: color ease 0.5s;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    background-color: rgba(109, 109, 110, 0.5);
  }
`;

export const TextButtonMoreInfo = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
  margin-left: 1rem;
  :hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const MoreInfoIcon = styled(MdOutlineInfo)`
  color: ${(props) => props.theme.colors.white};
  width: 30px;
  height: 30px;
  :hover {
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
  }
`;

export const ResetAgeGroup = styled.div`
  display: flex;
`;

export const ResetIconContainer = styled.div``;

export const ResetIconBorder = styled.div`
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 100%;
  padding: 9px;
`;

export const ResetIcon = styled(FiRotateCw)`
  width: 25px;
  height: 22px;
  padding-top: 2px;
  color: ${(props) => props.theme.colors.white};
`;
