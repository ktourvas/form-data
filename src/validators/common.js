export const required = (value) => value.length > 0;
export const email = (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);
export const letters = (value) => /^[A-Za-z]+$/.test(value);
export const numbers = (value) => /^[0-9]+$/.test(value);
export const integer = (value) => Number.isInteger(value);
export const decimal = (value) => /^[-+]?[0-9]+\.[0-9]+$/.test(value);

export const greekphone = (value) => /^\d{10}$/.test(value);
export const greeklandline = (value) => /^21\d{8}$/.test(value);
export const greekmobile = (value) => /^69\d{8}$/.test(value);
export const greekcypriotmobile = (value) => /^69\d{8}$/.test(value) || /^3579\d{7}$/.test(value);
export const greekcypriotmobile10 = (value) => /^69\d{8}$/.test(value) || /^579\d{7}$/.test(value);
