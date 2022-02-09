import React from "react";
import * as St from "./styles";

const ProfileHeader: React.FC = () => {
  return (
    <St.Container>
      <St.ProfileImage src="/images/Profile.png" width="28px" height="28px" />
      <St.ArrawIcon />
    </St.Container>
  );
};

export default ProfileHeader;
