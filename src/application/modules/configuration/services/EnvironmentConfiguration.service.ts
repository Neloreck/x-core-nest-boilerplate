import * as fs from "fs";
import * as path from "path";
import { Injectable, Logger } from "@nestjs/common";
import * as dotenv from "dotenv";

import { applicationConfig } from "@Core/configs";
import { IStringIndexed } from "@Lib/types/general";

@Injectable()
export class EnvironmentConfigurationService {

  private readonly logger: Logger = new Logger(EnvironmentConfigurationService.name);
  private readonly envConfig: IStringIndexed<string>;

  public constructor() {
    this.logger.log(`Loading ENV configuration for: ${applicationConfig.ENVIRONMENT.MODE}.`);
    this.logger.log(`Config path: ${applicationConfig.PATHS.ENV_CONFIG}.`);

    this.envConfig = dotenv.parse(fs.readFileSync(path.join(applicationConfig.PATHS.ENV_CONFIG)));
  }

  public getEnvConfig(): IStringIndexed<string> {
    return this.envConfig;
  }

  public getEnvValue(key: string): string {
    return this.envConfig[key];
  }

}
