import { Module } from "@nestjs/common";

import { AuthController, AuthService } from "@Modules/auth/index";

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
export class AuthModule {
}
