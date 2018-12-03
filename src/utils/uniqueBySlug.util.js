export default (arr = []) => arr.sort((a, b) => {
  if (a.slug < b.slug) {
    return -1;
  }
  if (b.slug < a.slug) {
    return 1;
  }
  return 0;
}).reduce((acc, curr) => { // remove duplicates
  const { length } = acc;
  if (length === 0 || acc[length - 1].slug !== curr.slug) {
    acc.push(curr);
  }
  return acc;
}, []);
