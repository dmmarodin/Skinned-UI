import { writable, type Writable } from 'svelte/store';
import type { Toast } from './types.ts';

class ToastStore {
    store: Writable<Toast[]> = writable(new Array());
    public subscribe = this.store.subscribe;

    push(toast: Toast) {
        console.log("pushing: " + JSON.stringify(toast));
        this.store.update((s) => [{ ...toast }, ...s]);
    }

    delete(id: string) {
        this.store.update((s) => s.filter(v => v.id != id));
    }
}

export const toast = new ToastStore();