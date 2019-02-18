import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Application.
import { ApplicationModule } from "@Application/Application.Module";

// Lib.
import { EntryPoint } from "@Lib/utils/EntryPoint";

@EntryPoint()
export class Application {

  private static logger: Logger = new Logger(Application.name);

  public static async main(): Promise<void> {

    Application.logger.log("X-Core application starting.");

    const app = await NestFactory.create(ApplicationModule);

    await app.listen(process.env.PORT || 3000);

    Application.logger.log("X-Core application started.");
  }

}
