import {ENDPOINTS} from '../../../api';
import {api} from '../api';

const newsApi = api.injectEndpoints({
  endpoints: builder => ({
    // GET NEWS ARTICLES
    getNewsArticles: builder.query({
      query: params => {
        return {
          url: `${ENDPOINTS.GET_EVERYTHING}`,
          params: params,
        };
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
