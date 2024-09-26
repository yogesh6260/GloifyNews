import {
  CHANGE_CATEGORY,
  CHANGE_NAVIGATE_FROM,
  REMOVE_REACTIONS,
  SET_LOGIN,
  SET_LOGOUT,
  SET_NEWS_TOPICS,
  SET_REACTIONS,
  SET_THEME,
  SET_USER_DATA,
  SET_USERS_REACTIONS,
} from '../actions/user/userActionTypes';

const initialState = {
  isLoggedIn: false,
  isCategoryChange: false,
  screenBeforeCategory: 'login',
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
  additional: {
    reactions: [
      {
        articleId: '74590d7b-7ba5-4c1f-87b4-9c5cecf72ce4',
        reactions: ['LIKE', 'HAHA', 'WOW', 'LOVE'],
      },
    ],
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {...state, isLoggedIn: true};
    case SET_USER_DATA:
      return {
        ...state,
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
          reactions: [...state.preference.reactions, action.payload],
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
    case SET_USERS_REACTIONS:
      return {
        ...state,
        additional: {
          ...state.additional,
          reactions: [...state.additional.reactions, action.payload],
        },
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        isCategoryChange: action.payload,
      };
    case CHANGE_NAVIGATE_FROM:
      return {
        ...state,
        screenBeforeCategory: action.payload,
      };
    default:
      return state;
  }
}
