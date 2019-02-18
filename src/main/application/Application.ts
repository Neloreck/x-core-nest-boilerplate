import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Application.
import { ApplicationModule } from "@Application/Application.Module";

// Lib.
import { EntryPoint } from "@Lib/utils/EntryPoint";

@EntryPoint()
export class Application {

  private static readonly PORT: number = Number.parseInt(process.env.PORT || "3000", 10);
  private static readonly LOGGER: Logger = new Logger(Application.name);

  public static async main(): Promise<void> {

    const app = await NestFactory.create(ApplicationModule);
    await app.listen(this.PORT);

    this.LOGGER.log(`Listening on port: ${this.PORT}.`);
  }

}
