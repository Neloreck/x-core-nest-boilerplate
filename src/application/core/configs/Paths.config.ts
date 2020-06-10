import * as path from "path";

import { applicationConfig } from "@Core/configs/Application.config";

export const pathsConfig = {
  SOURCE_ROOT: path.resolve(__dirname, "../../../"),
  get RESOURCES_ROOT(): string {
    return path.resolve(this.SOURCE_ROOT, "resources/");
  },
  get ENV_CONFIG(): string {
    return path.resolve(this.RESOURCES_ROOT, "configs/", applicationConfig.MODE + ".env");
  }
};
