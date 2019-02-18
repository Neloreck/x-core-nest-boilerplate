import { Controller, Get } from "@nestjs/common";

// Application.
import { AuthService } from "@Application/auth/services";

@Controller("/api/auth")
export class AuthController {

  public constructor(private readonly authService: AuthService) {}

  @Get("/info")
  public getAuthInfo(): object {

    return {
      authenticated: this.authService.isAuthenticated(),
      success: true
    };
  }

}
