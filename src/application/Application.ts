import "reflect-metadata";

import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { EntryPoint } from "@Lib/decorators/EntryPoint";

import { applicationConfig } from "@Core/configs";
import { GlobalHttpExceptionFilter } from "@Core/filters";

import { GeneralModule } from "@Modules/General.module";

@EntryPoint()
export class Application {

  public static async main(): Promise<void> {
    const application: INestApplication = await NestFactory.create(GeneralModule, { cors: true });

    this.configureGlobals(application);
    this.configureSwagger(application);

    await application.listen(applicationConfig.SERVER.PORT);

    Logger.log(`Application started, listening port: ${applicationConfig.SERVER.PORT}.`, Application.name);
  }

  /**
   * Configure application global filters, pipes etc.
   */
  private static configureGlobals(application: INestApplication): void {
    application.useGlobalFilters(new GlobalHttpExceptionFilter());
    application.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  }

  /**
   * Setup swagger api module.
   * localhost:{PORT}/docs for docs list.
   */
  private static configureSwagger(application: INestApplication): void {
    // Expose api docs only in dev mode for private usage.
    if (!applicationConfig.IS_DEV) {
      return;
    }

    return SwaggerModule.setup(
      applicationConfig.DOCS.URL_PATH,
      application,
      SwaggerModule.createDocument(
        application,
        new DocumentBuilder()
          .setTitle(applicationConfig.DOCS.TITLE)
          .setDescription(applicationConfig.DOCS.DESCRIPTION)
          .setVersion(applicationConfig.DOCS.VERSION)
          .build()
      )
    );
  }

}
