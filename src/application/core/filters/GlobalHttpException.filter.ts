import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";

// Application.
import { ErrorResponse } from "@Core/models/ErrorResponse";

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {

  public catch(exception: HttpException, host: ArgumentsHost): void {

    const response: Response = host.switchToHttp().getResponse<Response>();

    // todo: ?

    // @ts-ignore
    const message: string = exception.description || (exception.message.error || exception.getResponse && exception.getResponse());
    // @ts-ignore
    const status: number = exception.code || (exception.getStatus && exception.getStatus()) || 500;

    response
      .status(status)
      .json(new ErrorResponse(message|| "Something unexpected happened.", status));
  }

}
