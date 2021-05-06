import styled from "styled-components";

export const RestContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ auto }) => (auto ? "auto" : "600px")};
`;
