import localStorageStore from '$lib/utils/localStorageStore';

const initialTheme = globalThis.localStorage && 'theme' in localStorage
	? localStorage.getItem('theme')
	: 'light'

export const theme = localStorageStore('theme', initialTheme);
export default theme;