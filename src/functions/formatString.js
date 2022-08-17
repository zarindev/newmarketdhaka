const titleCase = (str) => {
  const titleCased = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  return titleCased;
};

const capitalCase = (str) => {
  const capitalCased =
    str.replace(/_/g, ' ').charAt(0).toUpperCase() +
    str.replace(/_/g, ' ').slice(1);
  return capitalCased;
};

const itCapitalCase = (service_type) => {
  if (capitalCase(service_type) === 'It training') {
    return 'IT training';
  }
};

const checkCase = (service_type) => {
  if (capitalCase(service_type) === 'It training') {
    return itCapitalCase(service_type);
  } else {
    return capitalCase(service_type);
  }
};

const camelCase = (str) => {
  const camelCased = str.replace(/_([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelCased;
};

const snakeCase = (str) => {
  const snakeCased = str.replace(/ /g, '_').toLowerCase();
  return snakeCased;
};

const snakeToTitle = (str) => {
  const snakeToTitled = str.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : ' ' + d.toUpperCase()
  );
  return snakeToTitled;
};

const formatError = (str) => {
  const noSlashHyphen = str
    .substring(str.lastIndexOf('/') + 1)
    .replace(/-/g, ' ');
  const errorMessage =
    noSlashHyphen.charAt(0).toUpperCase() + noSlashHyphen.slice(1);
  return errorMessage;
};

export {
  titleCase,
  capitalCase,
  itCapitalCase,
  checkCase,
  snakeCase,
  camelCase,
  snakeToTitle,
  formatError,
};
