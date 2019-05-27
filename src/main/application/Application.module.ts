import { Module } from "@nestjs/common";

// Application.
import { AuthModule } from "@Application/auth";
import { ConfigurationModule } from "@Application/configuration";
import { MainModule } from "@Application/main";

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    MainModule
  ]
})
export class ApplicationModule {
}
