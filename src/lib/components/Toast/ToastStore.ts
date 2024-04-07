import { writable, type Writable } from 'svelte/store';
import { Toast, type ToastOpts } from './types.js';

import WarningIcon from '$lib/components/Icon/WarningIcon.svelte';
import WarningToast from './WarningToast.svelte';
import ErrorIcon from '../Icon/ErrorIcon.svelte';
import ErrorToast from './ErrorToast.svelte';
import CheckIcon from '../Icon/CheckIcon.svelte';
import InfoToast from './InfoToast.svelte';
import InfoIcon from '../Icon/InfoIcon.svelte';
import LoadingIcon from '../Icon/LoadingIcon.svelte';
import LoadingToast from './ProgressToast.svelte';
import SuccessToast from './SuccessToast.svelte';

class ToastStore {
	store: Writable<Toast[]> = writable(new Array());
	public subscribe = this.store.subscribe;

	warning(title: string, content: string, opts?: ToastOpts) {
		this.push(
			new Toast(
				WarningToast,
				{ title, content },
				{
					...opts,
					icon: WarningIcon
				}
			)
		);
	}

	error(title: string, content: string, opts?: ToastOpts) {
		this.push(
			new Toast(
				ErrorToast,
				{ title, content },
				{
					...opts,
					icon: ErrorIcon
				}
			)
		);
	}

	info(title: string, content: string, opts?: ToastOpts) {
		this.push(
			new Toast(
				InfoToast,
				{ title, content },
				{
					...opts,
					icon: InfoIcon
				}
			)
		);
	}

	success(title: string, content: string, opts?: ToastOpts) {
		this.push(
			new Toast(
				SuccessToast,
				{ title, content },
				{
					...opts,
					icon: CheckIcon
				}
			)
		);
	}

	progress(title: string, content: string, opts?: ToastOpts) {
		this.push(
			new Toast(
				LoadingToast,
				{ title, content },
				{
					...opts,
					icon: LoadingIcon
				}
			)
		);
	}

	push(toast: Toast) {
		this.store.update((s) => [{ ...toast }, ...s]);
	}

	delete(id: string) {
		this.store.update((s) => s.filter((v) => v.id != id));
	}
}

export const toast = new ToastStore();
