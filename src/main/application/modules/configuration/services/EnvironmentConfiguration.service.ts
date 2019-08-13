import { Injectable, Logger } from "@nestjs/common";
import * as Dotenv from "dotenv";
import * as FS from "fs";
import * as Path from "path";

// Lib.
import { IStringIndexed } from "@Lib/types/general";

@Injectable()
export class EnvironmentConfigurationService {

  private static readonly ROOT_DIR: string = Path.resolve(__dirname, "../../../../");
  private static readonly RESOURCES_DIR: string = Path.resolve(EnvironmentConfigurationService.ROOT_DIR, "./resources");
  private static readonly ENV_CONFIGS_DIR: string = Path.resolve(EnvironmentConfigurationService.RESOURCES_DIR, "./configs");

  private readonly logger: Logger = new Logger(EnvironmentConfigurationService.name);
  private readonly envConfig: IStringIndexed<string>;

  public constructor(envFileName: string) {

    if (!envFileName) {
      throw new Error("Failed to load application config. Check providers.");
    }

    this.logger.log(
      `Loading ENV configuration from: ${envFileName} @ '${EnvironmentConfigurationService.ENV_CONFIGS_DIR}/${envFileName}'.`
    );

    const productionConfig: IStringIndexed<string> = this.parseConfigFile("production.env");
    const envConfig: IStringIndexed<string> = this.parseConfigFile(envFileName);

    this.envConfig = { ...productionConfig, ...envConfig };
  }

  public getEnvConfig(): IStringIndexed<string> {
    return this.envConfig;
  }

  public getEnvValue(key: string): string {
    return this.envConfig[key];
  }

  public getResourcesDir(): string {
    return EnvironmentConfigurationService.RESOURCES_DIR;
  }

  public getRootDir(): string {
    return EnvironmentConfigurationService.ROOT_DIR;
  }

  private parseConfigFile(filename: string): IStringIndexed<string> {
    return Dotenv.parse(FS.readFileSync(Path.join(EnvironmentConfigurationService.ENV_CONFIGS_DIR, filename)));
  }

}
