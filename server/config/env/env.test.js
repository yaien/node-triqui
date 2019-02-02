const env = require("./index");
const dev = require("./dev");
const prod = require("./prod");

describe("Env Config", () => {
  let tests = [
    {
      title: "Should be prod on production env",
      value: "production",
      expected: prod
    },
    {
      title: "Should be dev on defualt env",
      value: "development",
      expected: dev
    }
  ];

  tests.forEach(t => {
    it(t.title, () => {
      process.env.NODE_ENV = t.value;
      expect(env.load()).toBe(t.expected);
    });
  });
});
