import { Module } from "@nestjs/common";

// Application.
import { ConfigurationService } from "@Application/configuration/services";

@Module({
  exports: [
    ConfigurationService
  ],
  providers: [
    {
      provide: ConfigurationService,
      useValue: new ConfigurationService(`${process.env.NODE_ENV}.env`),
    }
  ]
})
export class ConfigurationModule {
}
