import {ENDPOINTS} from '../../../api';
import {api} from '../api';
import CryptoJS from 'crypto-js';

const generateArticleId = article => {
  const {title, author, url, publishedAt} = article;
  // Creating a hash from the article's title, author, url, and publishedAt
  return CryptoJS.MD5(`${title}-${author}-${url}-${publishedAt}`).toString();
};

const newsApi = api.newsApi.injectEndpoints({
  endpoints: builder => ({
    // GET NEWS ARTICLES
    getNewsArticles: builder.query({
      query: ({page, ...restParams}) => ({
        url: `${ENDPOINTS.GET_EVERYTHING}`,
        params: {
          ...restParams,
          page,
        },
      }),
      transformResponse: response => {
        // Assuming `response.articles` is the array of articles
        return response.articles
          .filter(article => article.title !== '[Removed]')
          .map(article => ({
            ...article,
            articleId: generateArticleId(article),
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
