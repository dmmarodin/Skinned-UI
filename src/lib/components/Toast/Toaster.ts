import { CheckIcon, ErrorIcon, InfoIcon, SpinnerIcon, WarningIcon } from '$lib/index.js';
import uniqueId from '$lib/utils/uniqueId.js';
import ErrorToast from './ErrorToast.svelte';
import InfoToast from './InfoToast.svelte';
import PromiseToast from './PromiseToast.svelte';
import SuccessToast from './SuccessToast.svelte';
import { toastStore } from './ToastStore.js';
import WarningToast from './WarningToast.svelte';
import { Toast, type ToastOpts } from './types.js';

class Toaster {
	public success(title: string, content: string, opts?: ToastOpts) {
		const id = uniqueId();
		const toast = new Toast(id, SuccessToast, title, content, { ...opts, icon: CheckIcon });
		toastStore.push(toast);
	}

	public error(title: string, content: string, opts?: ToastOpts) {
		const id = uniqueId();
		const toast = new Toast(id, ErrorToast, title, content, { ...opts, icon: ErrorIcon });
		toastStore.push(toast);
	}
	public info(title: string, content: string, opts?: ToastOpts) {
		const id = uniqueId();
		const toast = new Toast(id, InfoToast, title, content, { ...opts, icon: InfoIcon });
		toastStore.push(toast);
	}

	public warning(title: string, content: string, opts?: ToastOpts) {
		const id = uniqueId();
		const toast = new Toast(id, WarningToast, title, content, { ...opts, icon: WarningIcon });
		toastStore.push(toast);
	}

	public promise(promise: Promise<unknown>, title: string, content: string, opts?: ToastOpts) {
		const loadingToastId = uniqueId();
		const loadingToast = new Toast(loadingToastId, PromiseToast, title, content, {
			...opts,
			icon: SpinnerIcon,
			progress: false
		});
		toastStore.push(loadingToast);

		return promise
			.then((result) => {
				toastStore.delete(loadingToastId);
				const successToast = new Toast(uniqueId(), SuccessToast, title, content, {
					...opts,
					icon: CheckIcon
				});
				toastStore.push(successToast);
				return new Promise((res) => res(result));
			})
			.catch((e) => {
				toastStore.delete(loadingToastId);
				const rejectionToast = new Toast(uniqueId(), ErrorToast, title, content, {
					...opts,
					icon: ErrorIcon
				});
				toastStore.push(rejectionToast);
				return new Promise((_, rej) => rej(e));
			});
	}
}

export const toaster = new Toaster();
