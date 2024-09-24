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
    snackBarSuccess: LIGHT_THEME.SNACKBAR_SUCCESS,
    snackBarWarning: LIGHT_THEME.SNACKBAR_WARNING,
    snackBarError: LIGHT_THEME.SNACKBAR_ERROR,
    snackBarTxt: LIGHT_THEME.SNACKBAR_TEXT,
    drawerBackground: LIGHT_THEME.DRAWER,
    drawerLabel: LIGHT_THEME.DRAWER_LABEL,
    headerLabel: LIGHT_THEME.HEADER_LABEL,
    bulletinBackground: LIGHT_THEME.BULLETIN_BACKGROUND,
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
    snackBarSuccess: DARK_THEME.SNACKBAR_SUCCESS,
    snackBarWarning: DARK_THEME.SNACKBAR_WARNING,
    snackBarError: DARK_THEME.SNACKBAR_ERROR,
    snackBarTxt: DARK_THEME.SNACKBAR_TEXT,
    drawerBackground: DARK_THEME.DRAWER,
    drawerLabel: DARK_THEME.DRAWER_LABEL,
    headerLabel: DARK_THEME.HEADER_LABEL,
    bulletinBackground: DARK_THEME.BULLETIN_BACKGROUND,
  },
};
