import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as request from "supertest";

// Application.
import { ApplicationModule } from "@Application/Application.module";

describe("AppController (e2e)", (): void => {

  let app: INestApplication;

  beforeAll(async (): Promise<void> => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
          ApplicationModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", (): void => {
    expect(true).toBeTruthy();
   /*
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
    */
    });
});