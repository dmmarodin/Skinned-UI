import type { SvelteComponent } from 'svelte';
import uniqueId from '../../utils/uniqueId.js';

export interface ToastOpts {
    duration?: number,
    icon?: ConstructorOfATypedSvelteComponent,
    onClick?: () => void,
    onClose?: () => void
}

export interface PromiseToastOpts<T> {
    onSuccess: (v: T) => void,
}

const defaultOpts = {
    duration: 0,
}

export class Toast {
    public id: string;
    public opts: ToastOpts;

    constructor(public component: ConstructorOfATypedSvelteComponent, public props?: object, opts?: ToastOpts) {
        this.id = uniqueId();
        this.opts =
        {
            ...defaultOpts,
            ...opts
        };
    }
}