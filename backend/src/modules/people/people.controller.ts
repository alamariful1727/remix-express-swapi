import { Request, Response, NextFunction } from "express";
import { getPeople } from "./people.service";
import { IPeople } from "./people.type";
import { GetPeopleInput } from "./people.validation";

const getPageValue = (url: string): number | null => {
	const urlObj = new URL(url);
	const page = urlObj.searchParams.get("page");
	return Number(page) ? Number(page) : null;
};

interface IGetPeopleHandlerResponse {
	data: IPeople[];
	currentPage: number;
	count: number;
	nextPage: number | null;
	previousPage: number | null;
}

export const getProductHandler = async (
	req: Request<unknown, unknown, unknown, GetPeopleInput["query"]>,
	res: Response<IGetPeopleHandlerResponse>,
	next: NextFunction,
) => {
	try {
		const { page = "1", search } = req.query;
		const currentPage = parseInt(page, 10);

		const {
			results = [],
			count = 0,
			next,
			previous,
		} = await getPeople({
			search,
			page: currentPage,
		});

		return res.status(200).json({
			data: results,
			currentPage,
			count,
			nextPage: next ? getPageValue(next) : null,
			previousPage: previous ? getPageValue(previous) : null,
		});
	} catch (error) {
		next(error);
	}
};
