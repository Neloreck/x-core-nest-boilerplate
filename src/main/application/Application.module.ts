import { Module } from "@nestjs/common";

// Application.
import { GeneralModule } from "@General/General.module";
import { AuthModule } from "@Modules/auth";
import { ConfigurationModule } from "@Modules/configuration";
import { DatabaseModule } from "@Modules/database";

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    DatabaseModule,
    GeneralModule
  ]
})
export class ApplicationModule {
}
