import {ENDPOINTS} from '../../../api';
import {api} from '../api';

const stockApi = api.stockApi.injectEndpoints({
  endpoints: builder => ({
    // GET STOCKS DATA
    getStockData: builder.query({
      query: symbols => ({
        url: `${ENDPOINTS.GET_STOCK_INFO}`,
        method: 'GET',
        params: {
          region: 'IN',
          symbols: symbols,
        },
      }),

      providesTags: ['Stocks'],
    }),
  }),
  overrideExisting: false,
});

export const {useGetStockDataQuery} = stockApi;
