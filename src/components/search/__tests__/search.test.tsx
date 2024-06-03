import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from '../search';

describe('Search', () => {
  it('should call setSearchQuery with the input value', () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(<Search setSearchQuery={setSearchQuery} />);
    const searchInput = getByPlaceholderText('Search for a country...');
    fireEvent.change(searchInput, { target: { value: 'United States' } });
    expect(setSearchQuery).toHaveBeenCalledWith('United States');
  });

  it('should clear the search query when input is empty', () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(<Search setSearchQuery={setSearchQuery} />);
    const searchInput = getByPlaceholderText('Search for a country...');
    fireEvent.change(searchInput, { target: { value: 'United States' } });
    expect(setSearchQuery).toHaveBeenCalledWith('United States');
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(setSearchQuery).toHaveBeenCalledWith('');
  });
});
