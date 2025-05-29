import type { Config } from "jest";
const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

if (process.env.MOCK_API !== "true") {
  // If MOCK_API is true, set up the MSW environment (or anything specific you need)
  config.testEnvironment = "jsdom"; // You can use msw or any other setup
}

export default config;
