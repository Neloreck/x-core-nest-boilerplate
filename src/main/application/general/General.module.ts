import { Module } from "@nestjs/common";

// Application.
import { InfoController } from "@General/controllers";
import { InfoService } from "@General/services";
import { ConfigurationModule } from "@Modules/configuration";

@Module({
  controllers: [
    InfoController
  ],
  imports: [
    ConfigurationModule
  ],
  providers: [
    InfoService
  ]
})
export class GeneralModule {
}
