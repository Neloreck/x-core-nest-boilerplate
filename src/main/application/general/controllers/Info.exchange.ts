import { ApiModelProperty } from "@nestjs/swagger";

// Application.
import { BaseResponse } from "@General/models/BaseResponse";

export class ServerInfoDTO {

  @ApiModelProperty()
  public name!: string;

  @ApiModelProperty()
  public started!: Date;

}

export class ServerInfoResponse extends BaseResponse<ServerInfoDTO> {

  @ApiModelProperty()
  public data!: ServerInfoDTO;

}
