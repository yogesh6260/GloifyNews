import {ENDPOINTS} from '../../../api';
import {api} from '../api';
import {YOUTUBE_API_KEY} from '@env';

const youtubeDataApi = api.youtubeDataApi.injectEndpoints({
  endpoints: builder => ({
    // GET YOUTUBE DATA
    getYoutubeData: builder.query({
      query: ({
        searchTerm,
        maxResults = 5,
        order = 'relevance',
        type = 'video',
      }) => {
        const queryParams = new URLSearchParams({
          part: 'snippet',
          q: searchTerm,
          maxResults: maxResults.toString(),
          order: order,
          type: type,
          key: YOUTUBE_API_KEY,
        }).toString();

        return {
          url: `${ENDPOINTS.GET_YOUTUBE_DATA}?${queryParams}`,
          method: 'GET',
        };
      },
      providesTags: ['Youtube'],
    }),
  }),
  overrideExisting: false,
});

export const {useGetYoutubeDataQuery} = youtubeDataApi;
