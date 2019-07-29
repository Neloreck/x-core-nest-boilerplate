import { Controller, Get, Inject } from "@nestjs/common";

// Application.
import { AuthService } from "@Application/auth/services";

@Controller("/api/auth")
export class AuthController {

  @Inject()
  private readonly authService!: AuthService;

  @Get("/info")
  public getAuthInfo(): object {

    return {
      authenticated: this.authService.isAuthenticated(),
      success: true
    };
  }

}
