import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import config from "config";
import createServer from "./server";
import log from "./utils/logger";

const PORT = config.get<number>("port");

const app = createServer();

app.listen(PORT, () => {
	log.info(`Server is listening at http://localhost:${PORT}`);
});
