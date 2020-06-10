import { ApiProperty } from "@nestjs/swagger";

import { BaseResponse } from "@Core/models/BaseResponse";

export class AuthInfoDTO {

  @ApiProperty()
  public authenticated!: boolean;

}

export class AuthInfoResponse extends BaseResponse<AuthInfoDTO> {

  public data!: AuthInfoDTO;

}
