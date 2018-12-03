import expect from 'expect';
import nRandom from '../../utils/nRandom.util';

describe('Test nRandom utility function', () => {
  it('it returns empty array when given an empty array', () => {
    expect(nRandom([], 5)).toEqual([]);
  });

  it('it returns n elements when requested for 5 random ones', () => {
    expect(nRandom([1, 2, 3, 4, 5], 3).length).toBe(3);
  });

  it('it returns all elements when requested for more elements than it has', () => {
    expect(nRandom([1, 2, 4], 100).length).toBe(3);
  });
});
