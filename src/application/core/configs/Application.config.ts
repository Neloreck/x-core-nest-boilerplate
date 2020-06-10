import { environmentConfig } from "@Core/configs/Environment.config";

export const applicationConfig = {
  MODE: process.env.NODE_ENV as string || "development",
  get IS_DEV(): boolean {
    return this.MODE !== "production";
  },
  SERVER: {
    get PORT(): string {
      return environmentConfig.get("APPLICATION_PORT") || "3000";
    }
  },
  DOCS: {
    URL_PATH: "/docs",
    VERSION: "0.0.0",
    TITLE: "Boilerplate.",
    DESCRIPTION: "Swagger api docs."
  }
};
