import theme from "styled-theming";

export const MainBackgroundColor = theme("mode", {
  light: "#fff",
  dark: "#121213",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const BoxShadow = theme("mode", {
  light: "0 10px 20px #0000000a, 0 6px 6px #00000008;",
  dark: " 0 10px 20px #ffffff30, 0 6px 6px #fff0",
});

export const DrawerColor = theme("mode", {
  light: "#fff",
  dark: "#000",
});

export const HeaderColor = theme("mode", {
  light: "#000",
  dark: "#e8e3e3e0",
});

export const WebsiteName = theme("mode", {
  light: "#000",
  dark: "#9fa5f1e0",
});
