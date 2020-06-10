import { Module } from "@nestjs/common";

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
