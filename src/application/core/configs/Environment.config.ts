import fs from "fs";

import * as dotenv from "dotenv";

import { IStringIndexed } from "@Lib/types";

import { pathsConfig } from "@Core/configs/Paths.config";

export const environmentConfig = {
  get CONFIG(): IStringIndexed<any> {
    const config: IStringIndexed<any> = dotenv.parse(fs.readFileSync(pathsConfig.ENV_CONFIG));

    Object.defineProperty(this, "CONFIG", { value: config, writable: false });

    return config;
  },
  get(key: string): any {
    return environmentConfig.CONFIG[key];
  }
};
