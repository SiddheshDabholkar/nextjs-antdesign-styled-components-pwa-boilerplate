import styled from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: ${({ full }) => (full ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: ${({ full }) => (full ? "100%" : "50%")};
  height: ${({ full }) => (full ? "70vh" : "auto")};
  @media (max-width: 700px) {
    height: auto;
  }
`;
