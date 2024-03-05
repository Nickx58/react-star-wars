const base = '/';

export const URI = Object.freeze({
  home: base,
  people: {
    base: `${base}people`,
    detail: `${base}people/:id`,
  },
  planets: {
    base: `${base}planets`,
    detail: `${base}planets/:id`,
  },
});
