import React from "react";
import Input from "../Input";
import NotificationHeader from "../NotificationHeader";
import ProfileHeader from "../ProfileHeader";

import * as St from "./styles";

const SecondaryNavigationHeader: React.FC = () => {
  return (
    <St.Container>
      <Input />
      <NotificationHeader />
      <ProfileHeader />
    </St.Container>
  );
};

export default SecondaryNavigationHeader;
