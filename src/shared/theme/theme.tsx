"use client";
import { createTheme } from "@mui/material/styles";

// color code
const orange = "#F9423A";
const blue = "#1F2A37";
const white = "#FFF";
const lightGray = "#D2D6DB";
const greySelectedItemColor = "#F3F4F6";
const darkGrey = "#111927";
const lightGrey = "#384250";
const iconSecondaryColor = "#6C737F";
const headBorderGray = "#E5E7EB";
const borderGray = "#111927";
const green = "#17B26A";
const yellow = "#F79009";
const fontGreyText = "#4D5761";

/**
 *  Custom theme
 * NOte: !important is used in custom theme to override the default style of MUI
 */
const customTheme = createTheme({
  palette: {
    primary: {
      main: blue,
      contrastText: white,
    },
    secondary: {
      main: lightGrey,
      contrastText: lightGrey,
    },
    green: {
      main: green,
    },
    yellow: {
      main: yellow,
    },
  },

  // Typography css override
  typography: {
    fontFamily: "IBM Plex Sans, sans-serif",
    h1: {
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "-0.72px",
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
    h2: {
      fontSize: "20px",
      lineHeight: "30px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
    h6: {
      fontSize: "12px",
      lineHeight: "18px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
    body1: {
      fontSize: "14px",
      lineHeight: "20px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
      "&.bold": {
        fontWeight: 700,
      },
      "&.grey-text": {
        color: fontGreyText,
      },
    },
    body2: {
      fontSize: "13px",
      lineHeight: "19px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: "28px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
    subtitle2: {
      fontSize: "16px",
      lineHeight: "24px",
      "&.medium": {
        fontWeight: 500,
      },
      "&.semi-bold": {
        fontWeight: 600,
      },
    },
  },

  components: {
    // Base Style for Body
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          wordWrap: "break-word",
          wordBreak: "Break-word",
        },
      },
    },

    // Collapse Style
    MuiCollapse: {
      styleOverrides: {
        entered: {
          height: "auto !important",
          overflow: "visible",
        },
      },
    },

    // Button Style
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          height: "40px",
          padding: "10px 14px",
          borderRadius: "8px",
          width: "fit-content",
          // minWidth: 200,

          "&.MuiButton-root": {
            textTransform: "none !important",
          },

          "&.dialog-action-btn": {
            maxWidth: "max-content",
            minWidth: 100,
            margin: "0 16px",
          },
          "&.secondary-btn": {
            borderColor: `${lightGray} !important`,
          },
          "&.open-drawer-button": {
            borderRadius: 1,
            backgroundColor: greySelectedItemColor,
            boxShadow:
              "0 2px 4px 0px rgba(16, 24, 40, 0.10), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",
          },
        },
        sizeSmall: {
          padding: "8px 12px",
          height: 36,
          fontSize: 14,
          minWidth: 160,
        },
        startIcon: {
          img: {
            width: "20px !important",
            height: "20px",
          },
        },
        endIcon: {
          img: {
            width: "20px !important",
            height: "20px",
          },
        },
        containedPrimary: {
          border: `1px solid ${blue}`,
        },
        outlinedPrimary: {
          borderColor: blue,
        },
      },
    },

    // Typography Style
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "div",
          subtitle2: "div",
          body1: "span",
          body2: "span",
        },
      },
      styleOverrides: {
        root: {
          "&.button-text": {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "20px",
            color: orange,
            display: "inline-block",
            marginBottom: "4px",
          },
        },
      },
    },

    // Appbar style
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: "55px",
          backgroundColor: white,
          boxShadow: "unset",
          borderBottom: "1px solid lightGrey",
        },
      },
    },

    // button icons
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "unset",
          },
          "&.secondary-icon svg": {
            color: iconSecondaryColor,
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    // Input Base Style
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 44,
          border: "1px",
          borderRadius: "8px !important",
          fontWeight: 400,
          lineHeight: "24px",
          fontSize: "16px",
          borderColor: lightGray,
          padding: "10px 14px",
          marginTop: 6,
        },
        input: {
          height: "100% !important",
          padding: "0 !important",
        },
        multiline: {
          height: 102,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    // MUI menu
    MuiMenu: {
      styleOverrides: {
        root: {
          "&.header-routing-menu .MuiPaper-root": {
            borderRadius: "12px",
            border: `1px solid ${lightGray}`,
            boxShadow: "0 75px 150px 0 rgba(52, 64, 84, 0.14)",
            padding: "0",
          },
          "&.common-menu .MuiPaper-root": {
            borderRadius: "12px",
            border: `1px solid ${lightGray}`,
            boxShadow: "0 75px 150px 0 rgba(52, 64, 84, 0.14)",
            padding: "0",
          },
          "&.header-routing-menu .MuiList-root": {
            padding: "10px",
          },
          "&.common-menu .MuiList-root": {
            padding: "4px",
          },
          "&.common-menu .MuiButtonBase-root": {
            borderRadius: "10px",
            minHeight: "40px",
            padding: "0 5px",
          },
        },
      },
    },

    // MUI menu items
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: lightGrey,
          stroke: lightGrey,
          minWidth: "275px",
          borderLeft: "4px solid transparent",
          transition: "0.5s",
          "&.header-routing-menu-items": {
            color: lightGrey,
            stroke: lightGrey,
            minWidth: "275px",
            padding: "15px 20px",
            borderLeft: "4px solid transparent",
            marginBottom: "10px",
            transition: "0.5s",
          },
          "&.header-routing-menu-items:last-child": {
            marginBottom: "0",
          },
          "&.header-routing-menu-items.MuiMenuItem-root.selectedMenuItem": {
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
            borderLeft: `4px solid ${orange}`,
            backgroundColor: greySelectedItemColor,
            color: darkGrey,
            fill: darkGrey,
          },
          "&.header-routing-menu-items:hover": {
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
            backgroundColor: greySelectedItemColor,
          },
        },
      },
    },

    // comment this because of override css we will resolve it in future
    // MUI backdrop
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    },

    // Circular progress bar
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: blue,
        },
      },
    },

    //MUI form helper text
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderBottom: "4px solid transparent",
          color: iconSecondaryColor,
          "&.Mui-selected": {
            borderBottom: `4px solid ${borderGray}`,
            color: borderGray,
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          height: 40,
          padding: 16,
        },
        head: {
          backgroundColor: greySelectedItemColor,
          fontSize: 12,
          fontWeight: 500,
          height: "16px !important",
          paddingBottom: 12,
          paddingTop: 12,
          lineHeight: "18px",
          borderBottom: `1px solid ${headBorderGray}`,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 500,
          lineHeight: "18px",
          border: `1px solid ${lightGray}`,
          paddingTop: 0,
          paddingBottom: 0,
          height: 24,
          ".MuiChip-label": {
            paddingRight: "5px",
          },
        },
        avatar: {
          borderRadius: "50%",
          width: 8,
          height: 8,
          "&.deployed": {
            backgroundColor: green,
          },
          "&.inReview": {
            backgroundColor: yellow,
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    green?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    green?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }
}

export default customTheme;
