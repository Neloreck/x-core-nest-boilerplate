import { ApiProperty } from "@nestjs/swagger";

// Application.
import { BaseResponse } from "@Core/models/BaseResponse";

export class AuthInfoDTO {

  @ApiProperty()
  public authenticated!: boolean;

}

export class AuthInfoResponse extends BaseResponse<AuthInfoDTO> {

  public data!: AuthInfoDTO;

}
