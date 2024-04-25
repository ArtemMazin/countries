import { createSlice } from '@reduxjs/toolkit';

interface IThemeSlice {
  theme: 'light' | 'dark';
}

export const initialState: IThemeSlice = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
