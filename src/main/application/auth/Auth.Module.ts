import { Module } from "@nestjs/common";

// Application.
import { AuthController, AuthService } from "@Application/auth";

@Module({
  controllers: [
    AuthController
  ],
  exports: [
    AuthService
  ],
  imports: [
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
