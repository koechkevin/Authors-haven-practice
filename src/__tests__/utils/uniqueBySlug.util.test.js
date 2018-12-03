import expect from 'expect';
import uniqueBySlug from '../../utils/uniqueBySlug.util';

const withSlugs = [
  { slug: 'a' },
  { slug: 'a' },
  { slug: 'z' },
  { slug: 't' },
  { slug: 'b' },
  { slug: 't' },
];

describe('Test uniqueBySlug utility function', () => {
  it('removes duplicates based on slugs', () => {
    expect(uniqueBySlug(withSlugs)).toEqual([
      { slug: 'a' },
      { slug: 'b' },
      { slug: 't' },
      { slug: 'z' },
    ]);
  });

  it('returns an empty array if passed an empty array', () => {
    expect(uniqueBySlug([])).toEqual([]);
  });
});
