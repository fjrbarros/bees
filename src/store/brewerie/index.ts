import { fetchBreweries } from '../../api/brewerie';
import { createSlice } from '@reduxjs/toolkit';
import { IBrewery, IInitialState, ITag } from './types';

const initialState: IInitialState = {
  loading: true,
  error: '',
  data: [],
};

const brewerieReducer = createSlice({
  name: 'brewerie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBreweries.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = getDataTags(action.payload);
    });

    builder.addCase(fetchBreweries.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchBreweries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const getDataTags = (data: IBrewery[]): IBrewery[] => {
  data.forEach(brewery => (brewery.tags = getTags(brewery)));
  return data;
};

const getTags = (data: IBrewery): ITag[] => {
  const tags: ITag[] = [];

  Object.keys(data).forEach(item => {
    if (item.includes('brewery_type')) {
      tags.push({
        text: 'brewery_type',
        value: String(data[item as keyof IBrewery]),
      });
    }
    if (item.includes('postal_code')) {
      tags.push({
        text: 'postal_code',
        value: String(data[item as keyof IBrewery]),
      });
    }
    if (item.includes('phone')) {
      tags.push({
        text: 'phone',
        value: String(data[item as keyof IBrewery]),
      });
    }
  });

  return tags;
};

export default brewerieReducer.reducer;
