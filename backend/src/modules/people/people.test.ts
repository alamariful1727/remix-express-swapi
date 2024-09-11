import { Request, Response, NextFunction } from "express";
import { getProductHandler } from "./people.controller";
import { getPeople } from "./people.service";
import { IPeople } from "./people.type";

jest.mock("./people.service");

describe("getProductHandler", () => {
	let req: Partial<Request>;
	let res: Partial<Response>;
	let next: NextFunction;
	let jsonMock: jest.Mock;
	let statusMock: jest.Mock;

	beforeEach(() => {
		jsonMock = jest.fn();
		statusMock = jest.fn().mockReturnValue({ json: jsonMock });

		req = {
			query: {
				page: "1",
				search: "luke",
			},
		};

		res = {
			status: statusMock,
		};

		next = jest.fn();
	});

	it("should return the people data successfully", async () => {
		// Mock the getPeople service to return data
		(getPeople as jest.Mock).mockResolvedValue({
			results: [{ name: "Luke Skywalker" } as IPeople],
			count: 1,
			next: null,
			previous: null,
		});

		await getProductHandler(
			req as Request,
			res as Response,
			next as NextFunction,
		);

		expect(statusMock).toHaveBeenCalledWith(200);
		expect(jsonMock).toHaveBeenCalledWith({
			data: [{ name: "Luke Skywalker" }],
			currentPage: 1,
			count: 1,
			nextPage: null,
			previousPage: null,
		});
		expect(next).not.toHaveBeenCalled();
	});

	it("should handle errors and call next with the error", async () => {
		// Mock getPeople to throw an error
		const error = new Error("Service error");
		(getPeople as jest.Mock).mockRejectedValue(error);

		await getProductHandler(
			req as Request,
			res as Response,
			next as NextFunction,
		);

		expect(next).toHaveBeenCalledWith(error);
	});
});
