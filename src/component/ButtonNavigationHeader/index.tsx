import React from "react";

import * as St from "./styles";

type ButtonNavigationHeaderProps = {
  link: string;
  active: boolean;
  text: string;
  id: number;
  setId: (id: number) => void;
};

const ButtonNavigationHeader: React.FC<ButtonNavigationHeaderProps> = ({
  active,
  link,
  text,
  id,
  setId,
}) => {
  return (
    <St.Container>
      <St.ButtonNavigation onClick={() => setId(id)}>
        <St.ButtonLink href={link}>
          <St.ButtonText active={active}>{text}</St.ButtonText>
        </St.ButtonLink>
      </St.ButtonNavigation>
    </St.Container>
  );
};

export default ButtonNavigationHeader;
