const { sum, mul, sub, div } = require('./math');

describe('Operações Matematicas', () => {
  it('Somando 1 + 1 é igual a 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('Multiplicando 1 * 1 é igual a 1', () => {
    expect(mul(1, 1)).toBe(1);
  });

  it('Subtraindo 1 - 1 é igual a 0', () => {
    expect(sub(1, 1)).toBe(0);
  });

  it('Dividindo 1 / 1 é igual a 1', () => {
    expect(div(1, 1)).toBe(1);
  });
});