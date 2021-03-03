export default (function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  return {};
})() as any;
