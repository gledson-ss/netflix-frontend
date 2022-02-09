import styled from "styled-components";

import { MdNotifications } from "react-icons/md";

export const Container = styled.div`
  display: flex;
`;

export const NotificationItem = styled(MdNotifications)`
  color: ${(props) => props.theme.colors.white};
  width: 27px;
  height: 27px;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;
