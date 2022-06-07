import store from '../';

describe('Brewery reducer', () => {
  it('should have initial data', () => {
    const { loading, error, data } = store.getState().brewery;
    expect(loading).toBeTruthy();
    expect(error).toBe('');
    expect(data).toEqual([]);
  });
});
