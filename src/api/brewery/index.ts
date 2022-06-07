import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBrewery } from '../../store/brewery/types';
import axios from 'axios';

export const fetchBreweries = createAsyncThunk<
  IBrewery[],
  void,
  {
    rejectValue: string | undefined;
  }
>('breweries/fetchAllBreweries', async (_, thunkApi) => {
  try {
    const response = await axios.get('https://api.openbrewerydb.org/breweries');
    return response?.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.message || 'Request failed fetch all breweries!',
    );
  }
});
