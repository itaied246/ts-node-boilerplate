import {logger} from "./utils/logger";

const main = (name: string) => logger.debug(`hello ${name}`);
main("world!");
