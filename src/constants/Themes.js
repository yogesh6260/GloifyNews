import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {LIGHT_THEME, DARK_THEME} from '../styles/colors';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: LIGHT_THEME.BACKGROUND_COLOR,
    text: LIGHT_THEME.TEXT_COLOR,
    border: LIGHT_THEME.BORDER_COLOR,
    btnBackground: LIGHT_THEME.BTN_BACKGROUND_COLOR,
    btnText: LIGHT_THEME.BTN_TEXT_COLOR,
    icon: LIGHT_THEME.ICON_TINT_COLOR,
    tileBackground: LIGHT_THEME.TILE_BACKGROUND_COLOR,
    tileText: LIGHT_THEME.TILE_TEXT_COLOR,
    snackBar: LIGHT_THEME.SNACKBAR,
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: DARK_THEME.BACKGROUND_COLOR,
    text: DARK_THEME.TEXT_COLOR,
    border: DARK_THEME.BORDER_COLOR,
    btnBackground: DARK_THEME.BTN_BACKGROUND_COLOR,
    btnText: DARK_THEME.BTN_TEXT_COLOR,
    icon: DARK_THEME.ICON_TINT_COLOR,
    tileBackground: DARK_THEME.TILE_BACKGROUND_COLOR,
    tileText: DARK_THEME.TILE_TEXT_COLOR,
    snackBar: DARK_THEME.SNACKBAR,
  },
};
