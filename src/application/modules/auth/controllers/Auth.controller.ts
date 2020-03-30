import { Controller, Get, HttpCode, HttpStatus, Inject } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

// Application.
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
    return new AuthInfoResponse(true,{ authenticated: this.authService.isAuthenticated() });
  }

}
