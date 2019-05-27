import { Module } from "@nestjs/common";

// Application.
import { ConfigurationModule } from "@Application/configuration";
import { InfoController, InfoService } from "@Application/main";

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
export class MainModule {
}
