import styled from "styled-components";
import { MainBackgroundColor } from "../../styles/theme";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ fullvh }) => (fullvh ? "100vh" : "auto")};
  padding: 70px 0px 10px 0px;
  background-color: ${MainBackgroundColor};
`;
