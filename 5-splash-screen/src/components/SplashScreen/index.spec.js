import { render, screen } from '@testing-library/react';
import SplashScreen from './';
import { mockSplash } from '../../data/splash';

describe('<SplashScreen />', () => {
  it('deve renderizar texto padrão se não receber propriedades', () => {
    render(<SplashScreen />);

    expect(screen.getByRole('heading', { name: /site em construção/i })).toBeInTheDocument();
    expect(screen.getByText(/novidades em breve/i)).toBeInTheDocument();
  })

  it('deve renderizar corretamente as propriedades recebidas', () => {
    const { container } = render(<SplashScreen {...mockSplash} />);

    expect(screen.getByRole('heading', mockSplash.title)).toBeInTheDocument();
    expect(screen.getByText(mockSplash.description)).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle(`background-image: url(${mockSplash.image})`);
    expect(screen.getByRole('list')).toBeInTheDocument();
  })
});