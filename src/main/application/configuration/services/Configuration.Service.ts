import { Logger } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

export class ConfigurationService {

  private static readonly ENV_CONFIGS_DIR: string = path.resolve(__dirname, "../../../resources/configs");

  private readonly logger: Logger = new Logger(ConfigurationService.name);
  private readonly envConfig: { [key: string]: string };

  public constructor(envFileName: string) {

    this.logger.log(`Loading ENV configuration from: ${envFileName} @ '${ConfigurationService.ENV_CONFIGS_DIR}/${envFileName}'.`);
    this.envConfig = dotenv.parse(fs.readFileSync(path.join(ConfigurationService.ENV_CONFIGS_DIR, envFileName)));
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public getApplicationName(): string {
    return this.envConfig.APPLICATION_NAME;
  }

}
