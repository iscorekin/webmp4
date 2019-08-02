import queryString from 'query-string';

export const getQuery = () => queryString.parse(window.location.search);