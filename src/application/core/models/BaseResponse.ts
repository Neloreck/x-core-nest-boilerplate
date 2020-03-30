import { ApiProperty } from "@nestjs/swagger";

export abstract class BaseResponse<T> {

  @ApiProperty()
  public time: number = Date.now();

  public data: T;

  @ApiProperty({ required: false })
  public error?: string;

  public constructor(success: boolean, data: T) {
    this.data = data;
  }

}
