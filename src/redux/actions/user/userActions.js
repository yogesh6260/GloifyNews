import {
  REMOVE_REACTIONS,
  SET_LOGIN,
  SET_LOGOUT,
  SET_NEWS_TOPICS,
  SET_REACTIONS,
  SET_THEME,
  SET_USER_DATA,
} from './userActionTypes';

export const saveUserData = ({id, name, email, contact}) => ({
  type: SET_USER_DATA,
  payload: {id, name, email, contact},
});

export const saveuserTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export const saveNewsTopics = newsTopics => ({
  type: SET_NEWS_TOPICS,
  payload: newsTopics,
});

export const saveUserReactions = ({articleId, reaction}) => ({
  type: SET_REACTIONS,
  payload: {articleId, reaction},
});

export const removeUserReactions = ({articleId}) => ({
  type: REMOVE_REACTIONS,
  payload: {articleId},
});

export const setLogin = () => ({
  type: SET_LOGIN,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});
