import { getCookie } from '../helpers/routing';

export const JWT = getCookie('JWT');
export const IS_DEV = process.env.NODE_ENV === 'development';
export const CAPTCHA_KEY = IS_DEV
  ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  : '6LfoN7MUAAAAAG_SS8g7O-IxcwDMYl7ZkViWQz86';
