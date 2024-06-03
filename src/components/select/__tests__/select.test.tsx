import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from '../select';

describe('Select', () => {
  it('should call setRegion with the selected value', () => {
    const setRegion = jest.fn();
    const { getByRole } = render(<Select setRegion={setRegion} />);
    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Africa' } });
    expect(setRegion).toHaveBeenCalledWith('Africa');
  });

  it('should render all options', () => {
    const setRegion = jest.fn();
    const { getAllByRole } = render(<Select setRegion={setRegion} />);
    const options = getAllByRole('option');
    expect(options).toHaveLength(6);
    expect(options.map((option) => option.textContent)).toEqual([
      'Filter by Region',
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania',
    ]);
  });
});
