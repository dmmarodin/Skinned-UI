export interface TabData {
	id: string;
	label: string;
	page: HTMLElement;
}

export interface Tabs {
	selected: string | null;
	mode: TabMode;
	data: { [id: string]: TabData };
}

export type TabMode = 'none' | 'opacity' | 'diplay' | 'visibility';
