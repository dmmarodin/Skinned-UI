import { writable, type Writable } from 'svelte/store';
import { Toast, type ToastOpts } from "./types.js";

import WarningIcon from '$lib/components/Icon/WarningIcon.svelte';
import WarningToast from './WarningToast.svelte';

class ToastStore {
    store: Writable<Toast[]> = writable(new Array());
    public subscribe = this.store.subscribe;

    warning(title: string, content: string, opts?: ToastOpts) {
        this.push(new Toast(WarningToast, { title, content }, {
            ...opts,
            icon: WarningIcon
        }))
    }

    push(toast: Toast) {
        console.log("pushing: " + JSON.stringify(toast));
        this.store.update((s) => [{ ...toast }, ...s]);
    }

    delete(id: string) {
        this.store.update((s) => s.filter(v => v.id != id));
    }
}

export const toast = new ToastStore();