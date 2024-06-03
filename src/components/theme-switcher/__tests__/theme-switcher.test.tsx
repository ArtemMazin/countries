import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '../theme-switcher';

describe('ThemeSwitcher', () => {
  it('should call toggleTheme when clicked', () => {
    const toggleTheme = jest.fn();
    const { getByText } = render(<ThemeSwitcher toggleTheme={toggleTheme} theme="light" />);
    fireEvent.click(getByText('Dark Mode'));
    expect(toggleTheme).toHaveBeenCalled();
  });
});
