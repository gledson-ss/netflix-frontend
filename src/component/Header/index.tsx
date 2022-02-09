import * as St from "./styles";
import { useState } from "react";
import ButtonNavigationHeader from "../ButtonNavigationHeader";
import SecondaryNavigationHeader from "../SecondaryNavigationHeader";

const Header: React.FC = () => {
  const [buttonsActive, setButtonsActive] = useState([
    {
      name: "Início",
      link: "/",
    },
    {
      name: "Série",
      link: "/",
    },
    {
      name: "Filmes",
      link: "/",
    },
    {
      name: "Bombando",
      link: "/",
    },
    {
      name: "Minha lista",
      link: "/",
    },
  ]);

  const [currentButtonActive, setCurrentButtonsActive] = useState(0);

  return (
    <St.Container>
      <St.MenuNavigation>
        <St.ImageContainer>
          <St.NetflixLogo width="85px" height="25px" />
        </St.ImageContainer>
        <St.ButtonContainer>
          {buttonsActive.map((item, index) => {
            return (
              <ButtonNavigationHeader
                active={currentButtonActive === index}
                link={item.link}
                text={item.name}
                key={item.name}
                id={index}
                setId={setCurrentButtonsActive}
              />
            );
          })}
        </St.ButtonContainer>
      </St.MenuNavigation>
      <SecondaryNavigationHeader />
    </St.Container>
  );
};

export default Header;
