import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div``;

export const ButtonNavigation = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  margin-left: 20px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

type ButtonTextProps = {
  active: boolean;
};

export const ButtonText = styled.p<ButtonTextProps>`
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.textPrimary};
  font-weight: ${(props) => (props.active ? 600 : 400)};
  font-size: 13px;
  transition: color ease 0.5s;
  :hover {
    color: ${(props) =>
      props.active
        ? props.theme.colors.white
        : props.theme.colors.textPrimaryHover};
    opacity: 1;
    cursor: ${(props) => (props.active ? "default" : "pointer")};
  }

  :focus {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
  }
`;
