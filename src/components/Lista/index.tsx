import * as I from "../../types/iprodutos";
import * as Data from "../../shared/uteis/data/dataformat";
const Lista = ({ item, produtos }: I.IItem) => {
  return (
    <div>
      <h1>{item}</h1>

      {produtos.map((p, index) => (
        <li key={index}>
          <h3>{p.descricao}</h3>
          {console.log(p.validade)}
          <p>{`Validade: ${Data.getDateFormatBr(p.validade)}`}</p>
        </li>
      ))}
    </div>
  );
};

export default Lista;
