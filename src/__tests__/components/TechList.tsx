import React from 'react';

import TechList from '@/components/TechList';

import { render, fireEvent } from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add a new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('node.js')).toBeTruthy();
  });
});
