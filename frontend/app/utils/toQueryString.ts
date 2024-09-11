// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toQueryString = (params: Record<string, any>): string => {
	return Object.keys(params)
		.filter((key) => !!params[key])
		.map(
			(key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]),
		)
		.join("&");
};