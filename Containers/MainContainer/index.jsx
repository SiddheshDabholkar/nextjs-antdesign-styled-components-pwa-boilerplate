import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 70px 0px 10px 0px;
`;
