import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import Link from "next/link";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { HorizontalLine } from "../../Components/hr";
import { useTheme } from "../../styles/ThemeContext";
import { CloudFilled } from "@ant-design/icons";
import { BoxShadow, DrawerColor, textColor } from "../../styles/theme";

const HeaderContainer = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(178, 60, 253, 0);
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 60px;
  box-shadow: ${BoxShadow};
  a {
    color: ${textColor};
    padding: 15px;
    @media (max-width: 550px) {
      padding: 5px;
      font-size: 12px;
    }
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  float: right;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 359px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: flex-start;
  align-items: center;
  float: left;
`;
const StyledDrawer = styled(Drawer)`
  backdrop-filter: blur(7px);
  background-color: rgba(178, 60, 253, 0);
  .ant-drawer-body {
    background-color: ${DrawerColor};
  }
`;
const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;
const DrawerLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  a {
    color: ${textColor};
    padding: 15px;
  }
`;

function SHeader(props) {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const themeToggle = useTheme();
  const toggle = () => {
    themeToggle.toggle();
  };

  return (
    <>
      <HeaderContainer>
        <LeftContainer>
          <Button
            icon={
              props.theme.mode === "dark" ? (
                <MenuUnfoldOutlined style={{ color: "#fff" }} />
              ) : (
                <MenuUnfoldOutlined />
              )
            }
            type="text"
            onClick={showDrawer}
          ></Button>
          <a>lol</a>
        </LeftContainer>
        <RightContainer>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Features">Features</Link>
          <Link href="/ContactUs">ContactUs</Link>
          <Button
            type="text"
            icon={
              props.theme.mode === "dark" ? (
                <CloudFilled style={{ color: "#fff" }} />
              ) : (
                "☼"
              )
            }
            onClick={toggle}
          ></Button>
        </RightContainer>
      </HeaderContainer>

      {/* Drawer */}

      <StyledDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={state}
      >
        <DrawerContainer>
          <DrawerLinkContainer>
            <Link href="/">
              <a onClick={() => setState(false)}>Home</a>
            </Link>
          </DrawerLinkContainer>
          <DrawerLinkContainer>
            <Link href="/About">
              <a onClick={() => setState(false)}>About</a>
            </Link>
          </DrawerLinkContainer>
          <DrawerLinkContainer>
            <Link href="/Features">
              <a onClick={() => setState(false)}>Features</a>
            </Link>
          </DrawerLinkContainer>
          <DrawerLinkContainer>
            <Link href="/ContactUs">
              <a onClick={() => setState(false)}>ContactUs</a>
            </Link>
          </DrawerLinkContainer>
        </DrawerContainer>
      </StyledDrawer>
    </>
  );
}

export default withTheme(SHeader);
