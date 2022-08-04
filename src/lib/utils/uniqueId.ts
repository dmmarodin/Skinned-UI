let lastId = 0;

export default () => {
	return `sk-${++lastId}`;
};
