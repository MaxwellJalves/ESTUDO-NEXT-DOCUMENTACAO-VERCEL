import * as I from "../../types/iprodutos";
const Lista = ({ item, produtos }: I.IItem) => {
  return (
    <div>
      <h1>{item}</h1>

      {produtos.map((p, index) => (
        <li key={index}>
          <h3>{p.descricao}</h3>
          <p>{`Validade: ${p.validade.getDate()}/0${p.validade.getMonth()}/${p.validade.getFullYear()}`}</p>
        </li>
      ))}
    </div>
  );
};

export default Lista;
