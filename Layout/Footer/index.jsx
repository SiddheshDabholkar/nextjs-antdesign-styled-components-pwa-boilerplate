import React from "react";
import styled, { withTheme } from "styled-components";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import { MainBackgroundColor } from "../../styles/theme";
import { SParagraph } from "../../Typography";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: auto;
  background-color: ${MainBackgroundColor};
`;

function SFooter(props) {
  return (
    <>
      <FooterContainer>
        {/* <HorizontalLine /> */}

        <SParagraph>Copyright © {new Date().getFullYear()}</SParagraph>
        <BackTop>
          {props.theme.mode === "dark" ? (
            <UpCircleOutlined style={{ fontSize: "30px", color: "#fff" }} />
          ) : (
            <UpCircleOutlined style={{ fontSize: "30px" }} />
          )}
        </BackTop>
      </FooterContainer>
    </>
  );
}

export default withTheme(SFooter);
