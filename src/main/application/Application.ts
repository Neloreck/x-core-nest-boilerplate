import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Application.
import { ApplicationModule } from "@Application/Application.module";

// Lib.
import { EntryPoint } from "@Lib/utils/EntryPoint";

@EntryPoint()
export class Application {

  private static readonly PORT: number = Number.parseInt(process.env.PORT || "4000", 10);

  public static async main(): Promise<void> {

    const app = await NestFactory.create(ApplicationModule);
    await app.listen(this.PORT);

    Logger.log(`Listening on port: ${this.PORT}.`, Application.name);
  }

}
