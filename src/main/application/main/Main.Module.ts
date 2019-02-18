import { Module } from "@nestjs/common";

// Application.
import { InfoController, InfoService } from "@Application/main";

@Module({
  controllers: [
    InfoController
  ],
  imports: [
  ],
  providers: [
    InfoService
  ]
})
export class MainModule {}
