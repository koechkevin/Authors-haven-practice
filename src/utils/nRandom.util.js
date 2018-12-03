export default (arr, n) => [...arr].sort(() => (0.5 - Math.random())).slice(0, n);
