import queryString from 'query-string';

export const getQuery = () => queryString.parse(window.location.search);

export const setQuery = query => { window.location.search = queryString.stringify(query) };

export function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const generateParams = params => {
  const paramsArr = [];

  Object.keys(params).forEach(key => 
    paramsArr.push(`${key}=${params[key]}`)
  );

  return paramsArr.join('&');
}

export const setCookie = (key, value) => {
  document.cookie = `${document.cookie} ${key}=${value};`;
}