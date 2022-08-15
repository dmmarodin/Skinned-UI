export interface TabData {
	id: string;
	label: string;
	page: HTMLElement;
}

export interface Tabs {
	selected: string;
	data: { [id: string]: TabData };
}
