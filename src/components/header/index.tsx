import Link from "next/link";
import * as S from "./style";
const Header = () => {
  return (
    <S.HeaderStyled>
      <S.Logo />
      <S.Menu>
        <Link href="/">Home</Link>

        <Link href="/promocao">Promoções</Link>

        <Link href="/">Sobre</Link>
      </S.Menu>
    </S.HeaderStyled>
  );
};

export default Header;
