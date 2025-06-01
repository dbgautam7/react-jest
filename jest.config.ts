import type { Config } from "jest";
const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

// if (process.env.REACT_APP_MOCK_API === "false") {
//   // If MOCK_API is false, set up the jsdom environment
//   config.testEnvironment = "jsdom";
// }

export default config;
