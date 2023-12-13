import uniqueId from '../../utils/uniqueId.js';

export interface ToastOpts {
    duration: number,
    onClick?: () => void,
    onClose?: () => void
}

const defaultOpts = {
    duration: 0,
}

export class Toast {
    public id: string;
    public opts: ToastOpts;

    constructor(public content: string, opts?: ToastOpts) {
        this.id = uniqueId();
        this.opts =
        {
            ...defaultOpts,
            ...opts
        };
    }
}