import expect from 'expect';
import { authUserHeader } from '../../api';

describe('Test authUserHeader utility function', () => {
  it('test', () => {
    expect(authUserHeader()).toEqual({});
  });

  it('has', () => {
    const token = 'xafaoufadf';
    global.localStorage.setItem('user', JSON.stringify({ token }));

    expect(authUserHeader()).toEqual({ Authorization: token });
  });
});
