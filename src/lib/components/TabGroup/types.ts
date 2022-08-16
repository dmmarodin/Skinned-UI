export interface TabData {
	id: string;
	label: string;
	page: HTMLElement;
}

export interface Tabs {
	selected: string | null;
	data: { [id: string]: TabData };
}
