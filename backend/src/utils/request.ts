export const request = async <T>(url: string): Promise<T> =>
	await fetch(url, {
		headers: {
			accept: "application/json",
		},
	}).then((res) => res.json() as Promise<T>);
