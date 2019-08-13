import { ApiModelProperty } from "@nestjs/swagger";

export abstract class BaseResponse<T> {

  @ApiModelProperty()
  public success: boolean;

  @ApiModelProperty()
  public time: number = Date.now();

  public data: T;

  @ApiModelProperty({ required: false })
  public status?: number;

  @ApiModelProperty({ required: false })
  public error?: string;

  public constructor(success: boolean, data: T) {
    this.success = success;
    this.data = data;
  }

}
