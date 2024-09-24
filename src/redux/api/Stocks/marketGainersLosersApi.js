import {ENDPOINTS} from '../../../api';
import {api} from '../api';

const marketGainersLosersApi = api.marketGainersLosersApi.injectEndpoints({
  endpoints: builder => ({
    // GET MARKET TRENDS
    getMarketTrends: builder.query({
      query: trendType => ({
        url: `${ENDPOINTS.GET_MARKET_TRENDS}`,
        method: 'GET',
        params: {
          trend_type: trendType,
          country: 'in',
        },
      }),

      providesTags: ['Market'],
    }),
  }),
  overrideExisting: false,
});

export const {useGetMarketTrendsQuery} = marketGainersLosersApi;
