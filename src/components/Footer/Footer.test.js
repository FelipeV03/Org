import React from 'react';
import { render, screen } from '@testing-library/react'; // Importa `screen` aquí
import Header from './Header';

test('Header renders correctly', () => {
render(
<Header />);
const componentElement = screen.getByText(/Component Header/i); // Usa `screen.getByText` aquí
expect(componentElement).toBeInTheDocument();
});