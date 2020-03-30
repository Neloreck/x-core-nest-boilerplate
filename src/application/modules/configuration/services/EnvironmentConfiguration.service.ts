import { Injectable, Logger } from "@nestjs/common";
import * as Dotenv from "dotenv";
import * as FS from "fs";
import * as Path from "path";

// Lib.
import { IStringIndexed } from "@Lib/types/general";

// Application.
import { applicationConfig } from "@Core/configs";

@Injectable()
export class EnvironmentConfigurationService {

  private readonly logger: Logger = new Logger(EnvironmentConfigurationService.name);
  private readonly envConfig: IStringIndexed<string>;

  public constructor() {

    this.logger.log(`Loading ENV configuration for: ${applicationConfig.ENVIRONMENT.MODE}.`);
    this.logger.log(`Config path: ${applicationConfig.PATHS.ENV_CONFIG}.`);

    this.envConfig =  Dotenv.parse(FS.readFileSync(Path.join(applicationConfig.PATHS.ENV_CONFIG)));
  }

  public getEnvConfig(): IStringIndexed<string> {
    return this.envConfig;
  }

  public getEnvValue(key: string): string {
    return this.envConfig[key];
  }

}
