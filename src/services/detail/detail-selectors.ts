import { RootState } from '../../store';

export const getDetail = (state: RootState) => state.detail.country;
export const getBorders = (state: RootState) => state.detail.borders;
