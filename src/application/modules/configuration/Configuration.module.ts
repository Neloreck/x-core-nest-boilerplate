import { Module } from "@nestjs/common";

// Application.
import { EnvironmentConfigurationService } from "@Application/modules/configuration/services";

@Module({
  exports: [
    EnvironmentConfigurationService
  ],
  providers: [
    EnvironmentConfigurationService
  ]
})
export class ConfigurationModule {
}
