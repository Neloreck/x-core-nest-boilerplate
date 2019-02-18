import { Injectable } from "@nestjs/common";

@Injectable()
export class InfoService {

  private started: Date = new Date();

  public getStartedDate(): Date {
    return this.started;
  }

}
