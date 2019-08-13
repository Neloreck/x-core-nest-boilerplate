import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as Supertest from "supertest";

// Application.
import { ApplicationModule } from "@Application/Application.module";

// todo: Tests configuration.

describe("Main controller (e2e)", () => {

  let app: INestApplication;

  beforeEach(async () => {

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ApplicationModule
      ]
    })
      .compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it("/api/info (GET)", () => {
    return Supertest.request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});
