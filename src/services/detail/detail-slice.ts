import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCountriesByCodeApi, getCountryByNameApi } from '../../api/api';
import { ICountry } from '../../utils/interfaces';

export const getCountryByName = createAsyncThunk(
  'countries/get-country-by-name',
  async (name: string, { rejectWithValue }) => {
    try {
      const { data } = await getCountryByNameApi(name);

      return data;
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

export const getCountriesByCode = createAsyncThunk(
  'countries/get-borders',
  async (codes: string[], { rejectWithValue }) => {
    try {
      const countries = await getCountriesByCodeApi(codes);

      return countries;
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

interface IDetailSlice {
  country: ICountry | null;
  borders: string[] | null;
}

export const initialState: IDetailSlice = {
  country: null,
  borders: null,
};

export const detailSlice = createSlice({
  name: 'initialCountries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCountryByName.fulfilled, (state, action) => {
      state.country = action.payload;
    });
    builder.addCase(getCountriesByCode.fulfilled, (state, action) => {
      state.borders = action.payload;
    });
  },
});

export default detailSlice.reducer;
