import { Module } from "@nestjs/common";

// Application.
import { ConfigurationModule } from "@Modules/configuration";

@Module({
  controllers: [
  ],
  imports: [
    ConfigurationModule
  ],
  providers: [
  ]
})
export class CoreModule {
}
