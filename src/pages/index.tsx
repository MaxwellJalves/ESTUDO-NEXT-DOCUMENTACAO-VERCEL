import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h2>Home Page</h2>
      <Link href="/promocao">Promoções</Link>
    </>
  );
};

export default Home;
