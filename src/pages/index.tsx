import type { NextPage } from "next";
import Header from "../components/header";
import { ContainerGlobal } from "./styled";

const Home: NextPage = () => {
  return (
    <ContainerGlobal>
      <Header />
      <p> Página inicial</p>
    </ContainerGlobal>
  );
};

export default Home;
