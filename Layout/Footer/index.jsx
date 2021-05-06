import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import { HorizontalLine } from "../../Components/hr";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: auto;
`;

export default function SFooter() {
  return (
    <>
      <FooterContainer>
        <HorizontalLine />
        <p>Copyright © {new Date().getFullYear()}</p>
        <BackTop>
          <UpCircleOutlined style={{ fontSize: "30px" }} />
        </BackTop>
      </FooterContainer>
    </>
  );
}
