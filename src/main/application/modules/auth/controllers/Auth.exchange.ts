import { ApiModelProperty } from "@nestjs/swagger";

// Application.
import { BaseResponse } from "@General/models/BaseResponse";

export class AuthInfoDTO {

  @ApiModelProperty()
  public authenticated!: boolean;

}

export class AuthInfoResponse extends BaseResponse<AuthInfoDTO> {

  public data!: AuthInfoDTO;

}
