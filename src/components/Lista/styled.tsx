import styled from "styled-components";
import * as Default from "../../shared/uteis/font/textodefault";

export const TextoPrincipal = styled.h2`
  margin-top: 42px;
  text-align: center;
  ${Default.fonteDefault.default}
`;

export const ItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  border: 1px solid #22009e;
  border-radius: 10px;
  margin: 10px;
  ${Default.fonteDefault.default}
`;
