import { Router } from "express";
import { getProductHandler } from "./people.controller";
import validateResource from "../../middleware/zodValidation";
import { getPeopleValidation } from "./people.validation";
const router = Router();

router.route("/").get(validateResource(getPeopleValidation), getProductHandler);

export default router;
