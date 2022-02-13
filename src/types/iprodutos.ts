export interface IItem {
  item: string;
  produtos: IProduto[];
}

interface IProduto {
  descricao: string;
  validade: Date;
}
