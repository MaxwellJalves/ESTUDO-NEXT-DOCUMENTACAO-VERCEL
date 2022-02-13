import styled from "styled-components";
import * as Default from "../../shared/uteis/font/textodefault";
export const HeaderStyled = styled.nav`
  display: flex;
  max-width: 1240px;
  height: 180px;
  background-color: #22009e;

  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.span`
  height: 120px;
  width: 120px;
  border-radius: 6px;
  display: flex;
  margin-left: 40px;
  background-color: #ffffff;
`;

export const Menu = styled.ul`
  display: flex;

  gap: 5px;
  a {
    ${Default.fonteDefault.default}
    margin-right: 5px;
    color: white;
    padding: 4px;
  }
  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
