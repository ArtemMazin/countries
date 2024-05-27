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
  'countries/get-country-by-code',
  async (codes: string[], { rejectWithValue }) => {
    try {
      const countries = await getCountriesByCodeApi(codes);

      return countries.map((country: ICountry) => country.name.common);
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

interface IDetailSlice {
  country: any;
  borders: any;
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
