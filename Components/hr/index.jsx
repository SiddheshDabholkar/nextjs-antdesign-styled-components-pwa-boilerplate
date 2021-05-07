import styled from "styled-components";
import { textColor } from "../../styles/theme";

export const HorizontalLine = styled.hr`
  border: 1 solid ${textColor};
  width: ${({ full }) => (full ? "100%" : "80%")};
`;
