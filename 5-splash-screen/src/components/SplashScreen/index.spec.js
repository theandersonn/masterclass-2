import { render, screen } from '@testing-library/react';
import SplashScreen from './';

describe('<SplashScreen />', () => {
  it('deve renderizar texto padrão se não receber propriedades', () => {
    render(<SplashScreen />);

    expect(screen.getByRole('heading', { name: /site em construção/i })).toBeInTheDocument();
    expect(screen.getByText(/novidades em breve/i)).toBeInTheDocument();
  })
});