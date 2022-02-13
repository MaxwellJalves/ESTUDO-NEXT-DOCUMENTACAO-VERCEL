import Lista from "../../components/Lista";

const Produtos = () => {
  return (
    <Lista
      item="Lista de Produtos"
      produtos={[
        {
          descricao: "AGUA",
          validade: new Date("2022-03-15"),
        },
        {
          descricao: "CAFE",
          validade: new Date("2022-03-15"),
        },
        {
          descricao: "CHOCOLATE",
          validade: new Date("2022-03-15"),
        },
      ]}
    />
  );
};

export default Produtos;
