import {
  SET_LOGIN,
  SET_LOGOUT,
  SET_NEWS_TOPICS,
  SET_THEME,
  SET_USER_DATA,
} from './userActionTypes';

export const saveUserData = ({name, email, contact}) => ({
  type: SET_USER_DATA,
  payload: {name, email, contact},
});

export const saveuserTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export const saveNewsTopics = newsTopics => ({
  type: SET_NEWS_TOPICS,
  payload: newsTopics,
});

export const setLogin = () => ({
  type: SET_LOGIN,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});
