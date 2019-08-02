import { css } from 'styled-components';
import SIZES from '../constants/sizes';

const sizer = media =>
  Object.keys(SIZES).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (${media(accumulator, label)}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {});

/**
 * Миксин для smaller queries
 * @type {{}}
 */
export const smaller = sizer(
  (accumulator, label) => `max-width: ${SIZES[label] - 1}px`,
);

/**
 * Миксин для bigger queries
 * @type {{}}
 */
export const bigger = sizer(
  (accumulator, label) => `min-width: ${SIZES[label]}px`,
);

/**
 * Применяет правило только для конкретного размера экрана
 * @type {{}}
 */
export const only = sizer((accumulator, label) => {
  const keys = Object.keys(accumulator);
  const index = keys.indexOf(label);
  const nextDevice = SIZES[keys[index + 1]] || 0;
  return `min-width: ${nextDevice + 1}px and max-width: ${SIZES[label]}px`;
});
