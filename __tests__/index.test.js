const stylelintConfig = require("../");

describe("@geniemouse/stylelint-config:", () => {
    test("returns an object with plugins and rules properties", () => {
        expect(stylelintConfig).toHaveProperty("plugins");
        expect(stylelintConfig).toHaveProperty("rules");
    });

    test("matches the expected output", () => {
        expect(stylelintConfig).toMatchSnapshot();
    });
});
