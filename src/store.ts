import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './services/theme/theme-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
