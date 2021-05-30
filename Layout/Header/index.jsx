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
  background-color: transparent;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 80px;
  box-shadow: ${BoxShadow};
  a {
    color: ${textColor};
    padding: 15px;
    @media (max-width: 550px) {
      padding: 5px;
      font-size: 12px;
    }
    @media (min-width: 650px) {
      padding: 10px;
      font-size: 18px;
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
  background-color: transparent;
  .ant-drawer-body {
    background-color: ${DrawerColor};
  }
`;
const DrawerContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const DrawerLinkContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  width: ${({ half }) => (half ? "50%" : "100%")};
  justify-content: ${({ end }) => (end ? "flex-end" : "")};
  padding: 5px;
  a {
    color: ${textColor};
    padding: 15px;
    @media (max-width: 550px) {
      font-size: 12px;
    }
    @media (min-width: 650px) {
      font-size: 18px;
    }
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
          <DrawerContainer row>
            <DrawerLinkContainer half>
              <Link href="/">logo</Link>
            </DrawerLinkContainer>
            <DrawerLinkContainer half end>
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
            </DrawerLinkContainer>
          </DrawerContainer>
          <HorizontalLine full />
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
