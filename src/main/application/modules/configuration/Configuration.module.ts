import { Module } from "@nestjs/common";

// Application.
import { EnvironmentConfigurationService } from "@Application/modules/configuration/services";

@Module({
  exports: [
    EnvironmentConfigurationService
  ],
  providers: [
    {
      provide: EnvironmentConfigurationService,
      useValue: new EnvironmentConfigurationService(`${process.env.NODE_ENV}.env`),
    }
  ]
})
export class ConfigurationModule {
}
