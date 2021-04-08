import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import type { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';
import type { Shadows as MuiShadows } from '@material-ui/core/styles/shadows';
import type {
  Palette as MuiPalette,
  TypeBackground as MuiTypeBackground
} from '@material-ui/core/styles/createPalette';
import { THEMES } from 'src/constants';
import { softShadows, strongShadows } from './shadows';
import typography from './typography';

import './global.css';

interface TypeBackground extends MuiTypeBackground {
  dark: string;
}

interface Palette extends MuiPalette {
  background: TypeBackground;
  colors: Record<string, any>;
}

export interface Theme extends MuiTheme {
  name: string;
  palette: Palette;
}

type Direction = 'ltr' | 'rtl';

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: string;
}

interface ThemeOptions {
  name?: string;
  direction?: Direction;
  typography?: Record<string, any>;
  overrides?: Record<string, any>;
  palette?: Record<string, any>;
  shadows?: MuiShadows;
  props?: any;
}

const brandRed = '#FC3650'; //'#BD1839'; // #CE1141;
const darkGrey = '#333'; // #3F3356
const neutralGrey = '#808080';
const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography,
  props: {
    MuiInputBase: {
      color: 'secondary'
    }
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiLink: {
      root: {
        cursor: 'pointer'
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    },
    Mui: {
      '&$focused': {
        color: darkGrey
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkGrey
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: darkGrey
        }
      },
      asterisk: {
        color: brandRed,
        '&$error': {
          color: brandRed
        }
      }
    },
    MuiAutocomplete: {
      popupIndicator: {
        color: brandRed
      }
    },
    TableDetailCell: {
      active: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    },
    MuiTableCell: {
      head: { fontWeight: 'bold' }
    }

    // MuiCheckbox: {
    //   root: {
    //     color: darkGrey
    //   },
    //   colorSecondary: {
    //     '&$checked': {
    //       color: brandRed
    //     }
    //   }
    // },
    // MuiRadio: {
    //   root: {
    //     color: darkGrey
    //   },
    //   colorSecondary: {
    //     '&$checked': {
    //       color: brandRed
    //     }
    //   }
    // }
  }
};

const themesOptions: ThemeOptions[] = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          color: neutralGrey,
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      },
      MuiFormLabel: {
        root: {
          color: darkGrey
        }
      },
      MuiSelect: {
        icon: {
          color: darkGrey
        }
      },
      MuiListItem: {
        root: {
          color: neutralGrey
        }
      },
      MuiFormControlLabel: {
        label: {
          fontWeight: 'bold'
        }
      },
      MuiInput: {
        underline: {
          '&::before': {
            borderBottom: 'none'
          },
          '&::after': {
            borderBottom: 'none'
          },
          '&:hover:not(.Mui-disabled):before ': {
            borderBottom: 'none'
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      colors: {
        darkGrey: '#333333',
        midGrey: '#808080',
        lightGrey: '#DADADA'
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#009900'
      },
      secondary: {
        main: darkGrey
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    shadows: softShadows
  },
  {
    name: THEMES.DARK,
    palette: {
      type: 'dark',
      // action: {
      //   active: 'rgba(255, 255, 255, 0.54)',
      //   hover: 'rgba(255, 255, 255, 0.04)',
      //   selected: 'rgba(255, 255, 255, 0.08)',
      //   disabled: 'rgba(255, 255, 255, 0.26)',
      //   disabledBackground: 'rgba(255, 255, 255, 0.12)',
      //   focus: 'rgba(255, 255, 255, 0.12)'
      // },
      colors: {
        neutralGrey: '#808080',
        caution: '#FF8A00'
      },
      background: {
        default: colors.common.white,
        dark: '#F0F0F0',
        paper: colors.common.white
      },
      primary: {
        main: brandRed
      },
      secondary: {
        main: darkGrey
      },
      shape: {
        borderRadius: 0
      },
      text: {
        // primary: '#e6e5e8',
        // secondary: brandRed
      }
    },
    shadows: strongShadows,
    overrides: {
      MuiButton: {
        root: {
          // borderRadius: 0
        }
      }
    }
  }
];

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme({
    ...baseOptions,
    ...themeOptions,
    direction: config.direction
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
};
