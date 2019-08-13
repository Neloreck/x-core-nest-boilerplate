import { ApiModelProperty } from "@nestjs/swagger";

// Application.
import { BaseResponse } from "@General/models/BaseResponse";

export class ErrorResponse extends BaseResponse<undefined> {

  @ApiModelProperty()
  public success!: boolean;

  @ApiModelProperty()
  public time: number = Date.now();

  @ApiModelProperty({ required: false })
  public status: number;

  @ApiModelProperty({ required: false })
  public error: string;

  public constructor(error: string, status: number) {

    super(false, undefined);

    this.error = error;
    this.status = status;
  }

}
