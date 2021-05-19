import localStorageStore from './localStorageStore'
import { get } from 'svelte/store'
import themes from './themes'

const initialTheme = globalThis.localStorage && 'theme' in localStorage
	? localStorage.getItem('theme')
	: 'light'

export const theme = localStorageStore('theme', initialTheme);

let verbose = true; 	// Change to false to disable console logs.
const log = verbose   	// Colorful console.log with optional theming, i.e.:  log(`x = ${x})`, 'purple', 20, 'blue')
	? (str, color = 'lightblue', font_size = 15, border = 'gray',) => console.log(`%c${str}`, `size:${font_size}px;color:${color};border:1px solid ${border};padding:5px;`)
	: (s, c, f, b) => { };
if (verbose && import.meta.env.NODE_ENV == 'production') verbose = false;

const mapTheme = (theme = themes.light) => {
	return {
		'--brand-a': theme.brandA || '',
		'--brand-a-rgb': theme.brandARGB || '',
		'--brand-b': theme.brandB || '',
		'--brand-b-rgb': theme.brandBRGB || '',
		'--brand-c': theme.brandC || '',
		'--brand-c-rgb': theme.brandCRGB || '',
		'--light-a': theme.lightA || '',
		'--light-a-rgb': theme.lightARGB || '',
		'--light-b': theme.lightB || '',
		'--light-b-rgb': theme.lightBRGB || '',
		'--light-c': theme.lightC || '',
		'--light-c-rgb': theme.lightCRGB || '',
		'--light-d': theme.lightD || '',
		'--light-d-rgb': theme.lightDRGB || '',
		'--dark-a': theme.darkA || '',
		'--dark-a-rgb': theme.darkARGB || '',
		'--dark-b': theme.darkB || '',
		'--dark-b-rgb': theme.darkBRGB || '',
		'--dark-c': theme.darkC || '',
		'--dark-c-rgb': theme.darkCRGB || '',
		'--dark-d': theme.darkD || '',
		'--dark-d-rgb': theme.darkDRGB || '',
		'--always-dark': theme.alwaysDark || '',
		'--invert': theme.invert || '',
	};
};

export const applyTheme = (activeTheme = 'light') => {
	log(`applyTheme(${activeTheme})`, 'purple');
	const currentTheme = mapTheme(themes[activeTheme]);
	if (!currentTheme) console.log('Unsupported theme.');
	if (!currentTheme) return;

	const root = document.body;
	Object.keys(currentTheme).forEach((property) => {
		if (property === 'name') {
			return;
		}
		root.style.setProperty(property, currentTheme[property]);
	});
	try {
		theme.set(activeTheme);
	} catch (err) {
		console.log('%c Unable to save theme preference in local storage 😕', 'color:coral');
	}
};

export const applySystemTheme = () => {
	const supports_color_scheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
	const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)');
	
	log('applySystemTheme()', 'coral');
	supports_color_scheme && prefers_dark.matches ? applyTheme('dark') : applyTheme('light');
};

function detectSystemPreference(e) {
	log('Detected change', 'cyan', 29);
	if (e.matches) {
		//? system prefers darkMode
		log('system prefers darkMode', 'pink');
		applyTheme('dark');
	} else {
		applyTheme('light');
	}
}

export const initTheme = async () => {
	const supports_color_scheme = globalThis.matchMedia('(prefers-color-scheme)').media !== 'not all';
	const prefers_dark = globalThis.matchMedia('(prefers-color-scheme: dark)');

	log('initTheme()', 'orange');

	if (supports_color_scheme) prefers_dark.addEventListener('change', detectSystemPreference);

	if (localStorage)
		if ('theme' in localStorage) {
			try {
			const pref = get(theme)
			if (pref) {
					log('theme found in localStorage: ' + pref, 'green');
					applyTheme(pref);
				}
			} catch (err) {
				console.log('%c Unable to access theme preference in local storage 😕', 'color:coral');
				console.error(err);
				localStorage.removeItem('theme');
			}
		} else {
			applySystemTheme();
		}
};

export const toggleTheme = () => {
	const activeTheme = get(theme);
	log(`toggleTheme(${activeTheme})`, 'blue');
	if (activeTheme == 'light') {
		applyTheme('dark');
	} else if (activeTheme == 'dark') {
		applyTheme('light');
	};
};