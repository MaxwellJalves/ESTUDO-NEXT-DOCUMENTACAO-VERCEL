import * as I from "../../types/iprodutos";
import * as Data from "../../shared/uteis/data/dataformat";
import Header from "../header";

import { ContainerGlobal } from "../../pages/styled";
import * as S from "./styled";

const Lista = ({ item, produtos }: I.IItem) => {
  return (
    <ContainerGlobal>
      <Header />

      <S.TextoPrincipal>{item}</S.TextoPrincipal>

      {produtos.map((p, index) => (
        <S.ItemCard key={index}>
          <h3>{p.descricao}</h3>
          {console.log(p.validade)}
          <p>{`Validade: ${Data.getDateFormatBr(new Date(p.validade))}`}</p>
        </S.ItemCard>
      ))}
    </ContainerGlobal>
  );
};

export default Lista;
