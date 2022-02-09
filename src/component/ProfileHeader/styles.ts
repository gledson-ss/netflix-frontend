import styled from "styled-components";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ArrawIcon = styled(IoMdArrowDropdown)`
  color: ${(props) => props.theme.colors.white};
  width: 17px;
  height: 17px;
  margin-left: 5px;
`;
