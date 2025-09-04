import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('@omits18/token');

export const setToken = (token: string) => {
  cookies.set('@omits18/token', token, { path: '/' });
};

export const removeToken = () =>
  cookies.remove('@omits18/token', { path: '/' });
