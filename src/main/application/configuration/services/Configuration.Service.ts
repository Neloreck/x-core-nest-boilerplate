import { Logger } from "@nestjs/common";
import * as Dotenv from "dotenv";
import * as FS from "fs";
import * as Path from "path";

export class ConfigurationService {

  private static readonly RESOURCES_DIR: string = Path.resolve(__dirname, "../../../resources");
  private static readonly ENV_CONFIGS_DIR: string = Path.resolve(ConfigurationService.RESOURCES_DIR, "./configs");

  private readonly logger: Logger = new Logger(ConfigurationService.name);
  private readonly envConfig: { [key: string]: string };

  public constructor(envFileName: string) {

    this.logger.log(`Loading ENV configuration from: ${envFileName} @ '${ConfigurationService.ENV_CONFIGS_DIR}/${envFileName}'.`);
    this.envConfig = Dotenv.parse(FS.readFileSync(Path.join(ConfigurationService.ENV_CONFIGS_DIR, envFileName)));
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public getResourcesDir(): string {
    return ConfigurationService.RESOURCES_DIR;
  }

  public getApplicationName(): string {
    return this.envConfig.APPLICATION_NAME;
  }

}
