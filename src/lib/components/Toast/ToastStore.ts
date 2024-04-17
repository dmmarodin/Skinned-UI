import { writable, type Writable } from 'svelte/store';
import type { Toast, ToastDict } from './types.js';
class ToastStore {
	store: Writable<ToastDict> = writable({});
	public subscribe = this.store.subscribe;

	push(toast: Toast) {
		this.store.update((s) => ({ ...s, [toast.id]: toast }));
	}

	delete(id: string) {
		this.store.update((s) => {
			const tmp = { ...s };
			if (Object.keys(tmp).includes(id)) {
				delete tmp[id];
			}
			return tmp;
		});
	}
}

export const toastStore = new ToastStore();
