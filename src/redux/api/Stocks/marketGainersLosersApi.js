import {ENDPOINTS} from '../../../api';
import {api} from '../api';

const marketGainersLosersApi = api.marketGainersLosersApi.injectEndpoints({
  endpoints: builder => ({
    // GET MARKET TRENDS
    getMarketTrends: builder.query({
      query: () => ({
        url: `${ENDPOINTS.GET_MARKET_TRENDS}`,
        method: 'GET',
        params: {
          region: 'IN',
        },
      }),

      providesTags: ['Market'],
    }),
  }),
  overrideExisting: false,
});

export const {useGetMarketTrendsQuery} = marketGainersLosersApi;
