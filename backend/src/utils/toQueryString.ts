export const toQueryString = (params: Record<string, any>): string => {
	return Object.keys(params)
		.filter((key) => !!params[key])
		.map(
			(key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]),
		)
		.join("&");
};
