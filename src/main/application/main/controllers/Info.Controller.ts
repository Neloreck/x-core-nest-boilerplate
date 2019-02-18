import { Controller, Get } from "@nestjs/common";

// Application.
import { ConfigurationService } from "@Application/configuration/services";
import { InfoService } from "@Application/main/services";

@Controller("/api/info")
export class InfoController {

  public constructor(private readonly infoService: InfoService, private readonly configurationService: ConfigurationService) {}

  @Get()
  public getInfo(): object {

    return {
      name: this.configurationService.getApplicationName(),
      started: this.infoService.getStartedDate(),
      success: true
    };
  }

}
