import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu, Drawer, Button } from "antd";
import { HorizontalLine } from "../../Components/hr";

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
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
  a {
    color: #000;
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
`;

const StyledMenuItem = styled(Menu.Item)`
  display: flex;
  justify-content: center;
`;

export default function SHeader() {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };
  return (
    <>
      <HeaderContainer>
        <LeftContainer>
          <Button
            icon={<MenuUnfoldOutlined />}
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
        </RightContainer>
      </HeaderContainer>

      {/* Drawer */}

      <StyledDrawer
        // title="lol"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={state}
      >
        <Menu>
          <StyledMenuItem key="1">
            <Link href="/">
              <a onClick={() => setState(false)}>lol</a>
            </Link>
          </StyledMenuItem>
          <HorizontalLine />
          <StyledMenuItem key="1">
            <Link href="/">
              <a onClick={() => setState(false)}>Home</a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="2">
            <Link href="/About">
              <a onClick={() => setState(false)}>About</a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="3">
            <Link href="/Features">
              <a onClick={() => setState(false)}>Features</a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="4">
            <Link href="/ContactUs">
              <a onClick={() => setState(false)}>ContactUs</a>
            </Link>
          </StyledMenuItem>
        </Menu>
      </StyledDrawer>
    </>
  );
}
