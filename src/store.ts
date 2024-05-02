import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './services/theme/theme-slice';
import countriesReducer from './services/countries/countries-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
