import { addUserName } from './';
import store from '../';

describe('User reducer', () => {
  it('should have initial name user', () => {
    const { name } = store.getState().user;
    expect(name).toBe('');
  });

  it('initial name user', () => {
    store.dispatch(addUserName('teste user name'));
    const { name } = store.getState().user;
    expect(name).toBe('teste user name');
  });
});
