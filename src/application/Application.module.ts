import { Module } from "@nestjs/common";

// Application.
import { CoreModule } from "@Core/Core.module";
import { AuthModule } from "@Modules/auth";
import { ConfigurationModule } from "@Modules/configuration";
import { DatabaseModule } from "@Modules/database";

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    DatabaseModule,
    CoreModule
  ]
})
export class ApplicationModule {
}
