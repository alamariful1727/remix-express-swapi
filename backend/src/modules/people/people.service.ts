import config from "config";
import { request } from "./../../utils/request";
import { IPeople } from "./people.type";
import { GetPeopleInput } from "./people.validation";
import { toQueryString } from "./../../utils//toQueryString";

interface IPeopleResult {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPeople[];
}

interface IGetPeopleRequest {
	page: number;
	search: GetPeopleInput["query"]["search"];
}

export const getPeople = async (queryInfo: IGetPeopleRequest) => {
	const swapiURL = config.get<string>("swapiURL");
	const requestURL = `${swapiURL}/people?${toQueryString(queryInfo)}`;

	return await request<IPeopleResult>(requestURL);
};
