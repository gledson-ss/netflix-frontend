import Image from "next/image";
import React, { useEffect } from "react";

import * as St from "./styles";

const Main: React.FC = () => {
  return (
    <St.Container>
      <St.ImageHome>
        <St.Horizontal>
          <St.InfoMovie>
            <St.TitleContainer>
              <Image
                src="/images/title_movie.png"
                width="612px"
                height="260px"
              />
            </St.TitleContainer>
            <St.DescriptionMovie>
              Nesta história real que inspirou Moby Dick, a tripulação de um
              navio baleeiro luta desesperadamente para sobreviver ao ataque de
              uma baleia gigante.
            </St.DescriptionMovie>
            <St.ButtonContainer>
              <St.ButtonPlay>
                <St.PlayIcon />
                <St.TextButtonPlay>Assistir</St.TextButtonPlay>
              </St.ButtonPlay>
              <St.ButtonMoreInfo>
                <St.MoreInfoIcon />
                <St.TextButtonMoreInfo>Mais informações</St.TextButtonMoreInfo>
              </St.ButtonMoreInfo>
            </St.ButtonContainer>
          </St.InfoMovie>
        </St.Horizontal>
      </St.ImageHome>
    </St.Container>
  );
};

export default Main;
