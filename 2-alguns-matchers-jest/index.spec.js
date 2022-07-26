describe('Devo conhecer alguns matchers do jest', () => {
  it('O valor declarado deve ser nulo', () => {
    const case1 = null;

    expect(case1).toBeNull();
  });

  it('Formas diferentes de aplicar matchers', () => {
    const case2 = 7;

    expect(case2).toBe(7);
    expect(case2).not.toBeNull();
    expect(case2).toEqual(7);
    expect(case2).toBeGreaterThan(5);
    expect(case2).toBeLessThan(10);
  });

  it('Deve conter as propriedades nome e email', () => {
    const user = { name: 'John', mail: 'john@mail.com' };

    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('mail');
  });

  it('Devo entender a comparação entre objetos', () => {
    const body = { name: 'John', mail: 'john@mail.com' };
    const mockBody = { name: 'John', mail: 'john@mail.com' };

    expect(body).toEqual(mockBody);
  });
});