import styled from "styled-components";
import { HeaderColor, WebsiteName } from "../styles/theme";

export const SHeader = styled.h1`
  font-size: ${({ small }) => (small ? "20px" : "30px")};
  font-weight: ${({ bold }) => (bold ? "bolder" : "")};
  color: ${HeaderColor};
  @media (max-width: 550px) {
    font-size: ${({ small }) => (small ? "15px" : "25px")};
  }
`;

export const SParagraph = styled.p`
  font-size: ${({ small }) => (small ? "13px" : "15px")};
  font-weight: ${({ bold }) => (bold ? "bolder" : "")};
  color: ${HeaderColor};
  @media (max-width: 550px) {
    font-size: ${({ small }) => (small ? "11px" : "13px")};
  }
`;

export const SWebsiteName = styled.h1`
  font-size: ${({ small }) => (small ? "30px" : "40px")};
  font-weight: ${({ bold }) => (bold ? "bolder" : "")};
  color: ${WebsiteName};
  @media (max-width: 550px) {
    font-size: ${({ small }) => (small ? "20px" : "30px")};
  }
`;

export const SWebsiteTagLine = styled.p`
  font-size: ${({ small }) => (small ? "18px" : "32px")};
  font-weight: ${({ bold }) => (bold ? "bolder" : "")};
  color: ${WebsiteName};
  font-style: italic;
  @media (max-width: 550px) {
    font-size: ${({ small }) => (small ? "12px" : "20px")};
  }
`;
