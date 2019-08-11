import queryString from 'query-string';
import cookies from 'js-cookie';

export const getQuery = () => queryString.parse(window.location.search);

export const setQuery = query => { window.location.search = queryString.stringify(query) };

export function getCookie(name) {
  return cookies.get(name);
}

export const generateParams = params => {
  const paramsArr = [];

  Object.keys(params).forEach(key => 
    paramsArr.push(`${key}=${params[key]}`)
  );

  return paramsArr.join('&');
}

export const setJWT = (token) => {
  cookies.set('JWT', token, { expires: 365 })
}