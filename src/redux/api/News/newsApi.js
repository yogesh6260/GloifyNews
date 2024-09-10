import {ENDPOINTS} from '../../../api';
import {api} from '../api';
import uuid from 'react-native-uuid';

const generateArticleId = () => {
  return uuid.v4();
  // generating id here. customize the id here.
};

const newsApi = api.injectEndpoints({
  endpoints: builder => ({
    // GET NEWS ARTICLES
    getNewsArticles: builder.query({
      query: params => ({
        url: `${ENDPOINTS.GET_EVERYTHING}`,
        params,
      }),
      transformResponse: response => {
        // Assuming `response.articles` is the array of articles
        return response.articles.map(article => ({
          ...article,
          articleId: generateArticleId(),
        }));
      },
      providesTags: ['Articles'],
    }),

    // GET TOP NEWS HEADLINES
    getNewsHeadlines: builder.query({
      query: params => {
        return {
          url: `${ENDPOINTS.GET_TOP_HEADLINES}`,
          params: params,
        };
      },
    }),

    // GET TOP NEWS HEADLINE SOURCES
    getHeadlineSources: builder.query({
      query: params => {
        return {
          url: `${ENDPOINTS.GET_HEADLINES_SOURCES}`,
          params: params,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNewsArticlesQuery,
  useGetNewsHeadlinesQuery,
  useGetHeadlineSourcesQuery,
} = newsApi;
