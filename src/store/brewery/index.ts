import { fetchBreweries } from '../../api/brewery';
import { createSlice } from '@reduxjs/toolkit';
import { IBrewery, IInitialState, ITag } from './types';

const initialState: IInitialState = {
  loading: true,
  error: '',
  data: [],
};

const breweryReducer = createSlice({
  name: 'brewery',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      state.data = state.data.filter(card => card.id !== action.payload);
    },
    addTagCard: (state, action) => {
      const card = state.data.find(card => card.id === action.payload.cardId);
      if (card) {
        card.tags.splice(card.tags.length - 1, 0, {
          text: '',
          value: action.payload.value,
        });
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBreweries.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = getDataTags(action.payload);
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
    const value = data[item as keyof IBrewery];

    if (item.includes('brewery_type') && value) {
      tags.push({
        text: 'brewery_type',
        value: String(value),
      });
    }
    if (item.includes('postal_code') && value) {
      tags.push({
        text: 'postal_code',
        value: String(value),
      });
    }
    if (item.includes('phone') && value) {
      tags.push({
        text: 'phone',
        value: String(value),
      });
    }
  });

  const defaulTag = { text: 'add_more', value: 'add more' };

  tags.push(defaulTag);

  return tags;
};

export const { addTagCard, removeCard } = breweryReducer.actions;

export default breweryReducer.reducer;
