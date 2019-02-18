import { Module } from "@nestjs/common";

// Application.
import { AuthModule, AuthService } from "@Application/auth";
import { MainModule } from "@Application/main";

@Module({
  controllers: [
  ],
  imports: [
    AuthModule,
    MainModule
  ],
  providers: [
    AuthService
  ]
})
export class ApplicationModule {}
