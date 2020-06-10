import { Module } from "@nestjs/common";

import { AuthModule } from "@Modules/auth";
import { DatabaseModule } from "@Modules/database";

@Module({
  imports: [
    AuthModule,
    DatabaseModule
  ]
})
export class GeneralModule {
}
