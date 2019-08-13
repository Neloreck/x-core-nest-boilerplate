import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerBaseConfig, SwaggerModule } from "@nestjs/swagger";

// Lib.
import { EntryPoint } from "@Lib/decorators/EntryPoint";

// Application.
import { ApplicationModule } from "@Application/Application.module";
import { GlobalHttpExceptionFilter } from "@General/filters";

import "reflect-metadata";

@EntryPoint()
export class Application {

  private static readonly PORT: string = process.env.APPLICATION_PORT || "4000" as string;

  public static async main(): Promise<void> {

    const application: INestApplication = await NestFactory.create(ApplicationModule, { cors: true });

    // Configure globals.
    application.useGlobalFilters(new GlobalHttpExceptionFilter());
    application.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

    this.configureSwagger(application);

    await application.listen(this.PORT);

    Logger.log(`Listening on port: ${this.PORT}.`, Application.name);
  }

  /*
   * Setup swagger api module.
   * localhost:{PORT}/docs for docs list.
   */
  private static configureSwagger(application: INestApplication): void {

    const options: SwaggerBaseConfig = new DocumentBuilder()
      .setTitle("Boilerplate docs.")
      .setDescription("Swagger api docs example.")
      .setVersion("1.0")
      .build();

    SwaggerModule.setup("docs", application, SwaggerModule.createDocument(application, options));
  }

}
