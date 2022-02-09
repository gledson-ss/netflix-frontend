import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  height: 62px;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  z-index: 1000;
  @media (min-width: 1500px) {
    padding: 0 55px;
  }
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, rgba(0, 0, 0, 0.7)),
    color-stop(10%, rgba(0, 0, 0, 0))
  );

  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
`;

export const MenuNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-right: 18px;
`;

export const NetflixLogo = styled(Image).attrs({
  src: "/images/netflix_logo.png",
})``;

export const ButtonContainer = styled.div`
  display: flex;
`;
