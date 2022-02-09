import type { NextPage } from "next";
import Header from "../src/component/Header";
import Main from "../src/component/Main";
import * as St from "./styles";

const Home: NextPage = () => {
  return (
    <St.Container>
      <Header />
      <Main />
    </St.Container>
  );
};

export default Home;
