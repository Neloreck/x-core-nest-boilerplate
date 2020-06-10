import { Controller, Get, HttpCode, HttpStatus, Inject, Logger } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { AuthInfoResponse } from "@Modules/auth/controllers/Auth.exchange";
import { AuthService } from "@Modules/auth/services";

@Controller("/auth")
@ApiTags("auth")
export class AuthController {

  @Inject()
  private readonly authService!: AuthService;

  @Get("/info")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Got current auth status info.", type: AuthInfoResponse })
  public getAuthInfo(): AuthInfoResponse {
    Logger.log("Got remote request.");

    return new AuthInfoResponse(true,{ authenticated: this.authService.isAuthenticated() });
  }

}
