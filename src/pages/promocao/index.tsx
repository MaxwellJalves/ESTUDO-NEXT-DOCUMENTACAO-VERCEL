import Lista from "../../components/Lista";

const Produtos = () => {
  return (
    <Lista
      item="Lista de Produtos"
      produtos={[
        {
          descricao: "AGUA",
          validade: new Date("2022-01-01 "),
        },
        {
          descricao: "CAFE",
          validade: new Date("2022-05-31 "),
        },
        {
          descricao: "CHOCOLATE",
          validade: new Date("2022-12-31 "),
        },
      ]}
    />
  );
};

export default Produtos;
