export default (() => {
  try {
    return JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line
  } catch (e) {}
  return null;
});
