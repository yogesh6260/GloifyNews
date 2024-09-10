import {
  REMOVE_REACTIONS,
  SET_LOGIN,
  SET_LOGOUT,
  SET_NEWS_TOPICS,
  SET_REACTIONS,
  SET_THEME,
  SET_USER_DATA,
} from '../actions/user/userActionTypes';

const initialState = {
  isLoggedIn: false,
  data: {
    id: '',
    name: '',
    email: '',
    contact: '',
  },
  preference: {
    theme: 'light',
    newsTopics: [],
    reactions: [],
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {...state, isLoggedIn: true};
    case SET_USER_DATA:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        data: {
          ...state.data,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          contact: action.payload.contact,
        },
      };
    case SET_THEME:
      return {
        ...state,
        preference: {...state.preference, theme: action.payload},
      };
    case SET_LOGOUT:
      return initialState;
    case SET_NEWS_TOPICS:
      return {
        ...state,
        preference: {...state.preference, newsTopics: action.payload},
      };
    case SET_REACTIONS:
      return {
        ...state,
        preference: {
          ...state.preference,
          reactions: [{...action.payload}],
        },
      };

    case REMOVE_REACTIONS:
      return {
        ...state,
        preference: {
          ...state.preference,
          reactions: state.preference.reactions.filter(
            reaction => reaction.articleId !== action.payload.articleId,
          ),
        },
      };
    default:
      return state;
  }
}
