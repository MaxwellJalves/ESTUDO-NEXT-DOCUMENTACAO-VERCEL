import Lista from "../../components/Lista";
import { mock } from "../../mock/mock";

const Produtos = () => {
  return <Lista item="Produtos promocionais" produtos={mock.produtos} />;
};

export default Produtos;
