import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCountriesApi } from '../../api/api';
import { ICountries } from '../../utils/interfaces';

export const getCountries = createAsyncThunk(
  'countries/get-countries',
  async (_, { rejectWithValue }) => {
    try {
      const countries = await getCountriesApi();

      return countries;
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

interface IInitialCountriesSlice {
  initialCountries: ICountries[];
}

export const initialState: IInitialCountriesSlice = {
  initialCountries: [],
};

export const initialCountriesSlice = createSlice({
  name: 'initialCountries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.initialCountries = action.payload;
    });
  },
});

export default initialCountriesSlice.reducer;
