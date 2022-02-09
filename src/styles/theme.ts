type colorType = {
  background: string;
  textPrimary: string;
  textPrimaryHover: string;
  white: string;
  black: string;
};

type colorTheme = {
  colors: colorType;
};

const theme: colorTheme = {
  colors: {
    background: "#141414",
    textPrimary: "#e5e5e5",
    textPrimaryHover: "#b3b3b3",
    white: "#fff",
    black: "#000",
  },
};

export type ThemeType = typeof theme;
export { theme };
export default ThemeType;
