export const required = (value) => value.length > 0;

export const email = (value) => value.length ? /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) : true;
export const letters = (value) => value.length ? /^[A-Za-z]+$/.test(value) : true;

export const numbers = (value) => value.length ? /^[0-9]+$/.test(value) : true;
export const integer = (value) => value.length ? Number.isInteger(value) : true;
export const decimal = (value) => value.length ? /^[-+]?[0-9]+\.[0-9]+$/.test(value) : true;

export const greekphone = (value) => value.length ? /^\d{10}$/.test(value) : true;
export const greekmobile = (value) => value.length ? /^69\d{8}$/.test(value) : true;
export const greeklandline = (value) => value.length ? /^21\d{8}$/.test(value) : true;
export const greekcypriotmobile = (value) => value.length ? /^69\d{8}$/.test(value) || /^3579\d{7}$/.test(value) : true;
export const greekcypriotmobile10 = (value) => value.length ? /^69\d{8}$/.test(value) || /^579\d{7}$/.test(value) : true;
