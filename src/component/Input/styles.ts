import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

type ContainerInputProps = {
  show: boolean;
};

export const ContainerInput = styled.div<ContainerInputProps>`
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  padding: 4px;
`;

export const SearchIconFirst = styled(FaSearch)`
  width: 18px;
  height: 22px;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 0;
  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;

  :focus {
    outline: none;
  }
  color: ${(props) => props.theme.colors.white};
`;

export const SearchIcon = styled(FaSearch)`
  width: 18px;
  height: 22px;
  color: ${(props) => props.theme.colors.white};
  padding: 1px;
  margin-left: 4px;
  margin-right: 10px;
`;

export const ClearIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20px;
`;

export const ClearIcon = styled(MdClear)`
  color: ${(props) => props.theme.colors.white};
  width: 40px;
`;
