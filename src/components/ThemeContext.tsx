"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["vietnamese"] });
export const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#7367F0",
        contrastText: "#ACB0CC",
        dark: "#6F78A6",
      },
      secondary: {
        main: "#655BD3",
        light: "#8781C9",
      },
      background: {
        paper: "#2F3349",
        default: "#25293C",
      },
      info: {
        main: "#5F58BF",
      },
      text: {
        primary: "#ACB0CC",
        secondary: "rgba(208, 212, 241, 0.42)",
        // hint: "#443E6D",
        disabled: "rgba(208,195,195,0.38)",
      },
    },

    typography: {
      fontFamily: public_sans.style.fontFamily, // Set your desired font family
      button: {
        fontWeight: 500,
      },
      h5: {
        color: "#fff",
      },
      h6: {
        color: "#fff",
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "outlined", // Set default variant
          size: "small", // Set default size
          InputLabelProps: {
            shrink: true, // Shrink label on focus
          },
          InputProps: {
            inputProps: {
              style: {
                WebkitBoxShadow: "0 0 0 1000px #2F3349 inset",
                WebkitTextFillColor: "#ACAEC6",
              },
            },
            // // ...other default styles
          },
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3F435A",
                borderRadius: "5px",
                borderWidth: "1px",
              },
              "&.Mui-focused fieldset": {
                borderWidth: "1px",
              },
            },
          },
          // ...other default styles
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          contained: {
            color: "#fff", // Set text color for text variant
            textTransform: "capitalize",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#3F435A", // Your desired default color
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#ACB0CC",
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
