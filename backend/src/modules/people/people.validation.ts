import { z } from "zod";

export const getPeopleValidation = z.object({
	query: z.object({
		search: z.string().optional(),
		page: z.string().optional(),
	}),
});

export type GetPeopleInput = z.TypeOf<typeof getPeopleValidation>;
