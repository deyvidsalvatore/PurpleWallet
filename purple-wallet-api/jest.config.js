module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: ".*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  rootDir: "./",
};

