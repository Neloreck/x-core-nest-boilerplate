import * as path from "path";

export const applicationConfig = {
  ENVIRONMENT: {
    MODE: process.env.NODE_ENV as string || "development",
    get IS_DEV(): boolean {
      return this.MODE !== "production";
    }
  },
  PATHS: {
    SOURCE_ROOT: path.resolve(__dirname, "../../../"),
    get RESOURCES_ROOT(): string {
      return path.resolve(this.SOURCE_ROOT, "resources/");
    },
    get ENV_CONFIG(): string {
      return path.resolve(this.RESOURCES_ROOT, "configs/", applicationConfig.ENVIRONMENT.MODE + ".env");
    }
  },
  SERVER: {
    PORT: process.env.APPLICATION_PORT || "3000"
  },
  DOCS: {
    URL_PATH: "/docs",
    VERSION: "0.0.0",
    TITLE: "Boilerplate.",
    DESCRIPTION: "Swagger api docs."
  }
};
