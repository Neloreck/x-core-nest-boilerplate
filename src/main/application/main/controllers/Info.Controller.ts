import { Controller, Get } from "@nestjs/common";

// Application.
import { InfoService } from "@Application/main/services";

@Controller("/api/info")
export class InfoController {

  public constructor(private readonly infoService: InfoService) {}

  @Get()
  public getInfo(): object {

    return {
      started: this.infoService.getStartedDate(),
      success: true
    };
  }

}
