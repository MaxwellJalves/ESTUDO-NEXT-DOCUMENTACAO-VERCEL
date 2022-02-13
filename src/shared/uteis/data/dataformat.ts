/**
 * @Description Utilizando padrão de data UTC no exemplo estou recebendo uma data que não considera o horário da criação do post por esse motivo a data no mock estão com um espaço no final da data
 * @Author : Maxwell
 */

export const getDateFormatBr = (data: Date) => {
  if (data) {
    return `${checkValueObtained(data.getDate())}/${checkValueObtained(
      data.getMonth() + 1
    )}/${data.getFullYear()}`;
  }
};

const checkValueObtained = (dia: number) => {
  return dia < 10 ? "0" + dia : dia;
};
