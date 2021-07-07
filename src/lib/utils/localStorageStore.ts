import { writable } from 'svelte/store';

const client = typeof window !== "undefined";

const asyncLocalStorage = {
	setItem: async function (key: string, value: string | object): Promise<void> {
		return Promise.resolve().then(function () {
			typeof value != 'string'
				? localStorage.setItem(key, JSON.stringify(value))
				: localStorage.setItem(key, value);
		});
	},
	getItem: async function (key: string): Promise<JSON> {
		return Promise.resolve().then(function () {
			let value = localStorage.getItem(key);
			return typeof value != 'string'
				? JSON.parse(value)
				: value
		});
	},
};

// Adapted from https://svelte.dev/repl/7b4d6b448f8c4ed2b3d5a3c31260be2a?version=3.34.0
const localStorageStore = (key: string, value: any) => {
	const { set: setStore, ...readableStore } = writable(value, () => {
		if (!client) return;

		getAndSetFromLocalStorage();

		const updateFromStorageEvents = (event) => {
			if (event.key === key) getAndSetFromLocalStorage();
		};
		window.addEventListener("storage", updateFromStorageEvents);
		return () => window.removeEventListener("storage", updateFromStorageEvents);
	});

	// Set both localStorage and this Svelte store
	const set = async (value: any) => {
		setStore(value);
		try {
			await asyncLocalStorage.setItem(key, value);
		} catch (error) {
			console.error(`the \`${key}\` store's new value \`${value}\` could not be persisted to localStorage because of ${error}`);
		}
	};

	// Synchronize the Svelte store with localStorage
	const getAndSetFromLocalStorage = async () => {
		let localValue = null;
		try {
			localValue = await asyncLocalStorage.getItem(key);
		} catch (error) {
			console.error(`the \`${key}\` store's value could not be restored from localStorage because of ${error}`);
		}

		if (localValue === null) set(value);
		else {
			try {
				setStore(localValue);
			} catch {
				set(value);
			}
		}
	};

	return { ...readableStore, set };
};

export default localStorageStore
