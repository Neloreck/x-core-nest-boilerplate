import { Controller, Get, HttpCode, HttpStatus, Inject } from "@nestjs/common";
import { ApiOkResponse, ApiUseTags } from "@nestjs/swagger";

// Application.
import { AuthInfoResponse } from "@Modules/auth/controllers/Auth.exchange";
import { AuthService } from "@Modules/auth/services";

@Controller("/api/auth")
@ApiUseTags("auth")
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
