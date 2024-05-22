import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './services/theme/theme-slice';
import countriesReducer from './services/countries/countries-slice';
import detailReducer from './services/detail/detail-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  detail: detailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
