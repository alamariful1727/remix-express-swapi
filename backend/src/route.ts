import { Router } from "express";
import people from "./modules/people/people.route";

const router = Router();

router.use("/people", people);

router.get("/health-check", (_, res) => res.sendStatus(200));

export default router;
