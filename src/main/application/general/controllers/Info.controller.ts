import { Controller, Get, HttpCode, HttpStatus, Inject } from "@nestjs/common";
import { ApiOkResponse, ApiUseTags } from "@nestjs/swagger";

// Application.
import { ServerInfoResponse } from "@General/controllers/Info.exchange";
import { InfoService } from "@General/services";
import { EnvironmentConfigurationService } from "@Modules/configuration/services";

@Controller("/api/info")
@ApiUseTags("info")
export class InfoController {

  @Inject()
  private readonly infoService!: InfoService;

  @Inject()
  private readonly configurationService!: EnvironmentConfigurationService;

  @Get("/")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Got current server status info.", type: ServerInfoResponse })
  public getInfo(): ServerInfoResponse {

    return new ServerInfoResponse(true, {
      name: this.configurationService.getEnvValue("APPLICATION_NAME"),
      started: this.infoService.getStartedDate()
    });
  }

}
