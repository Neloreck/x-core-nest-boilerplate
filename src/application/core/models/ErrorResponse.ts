import { ApiProperty } from "@nestjs/swagger";

// Application.
import { BaseResponse } from "@Core/models/BaseResponse";

export class ErrorResponse extends BaseResponse<undefined> {

  @ApiProperty()
  public time: number = Date.now();

  @ApiProperty({ required: false })
  public error: string;

  public constructor(error: string, status: number) {

    super(false, undefined);

    // todo: Object with some description?
    this.error = error;
  }

}
