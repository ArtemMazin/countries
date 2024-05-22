import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCountryByNameApi } from '../../api/api';
import { ICountry } from '../../utils/interfaces';

export const getCountryByName = createAsyncThunk(
  'countries/get-country-by-name',
  async (name: string, { rejectWithValue }) => {
    try {
      const country = await getCountryByNameApi(name);
      return country[0];
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

interface IDetailSlice {
  detail: any;
}

export const initialState: IDetailSlice = {
  detail: null,
};

export const detailSlice = createSlice({
  name: 'initialCountries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCountryByName.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default detailSlice.reducer;
