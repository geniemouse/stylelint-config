const stylelintConfig = require("../");

describe("@geniemouse/stylelint-config:", () => {
    test("returns an object with plugins and rules properties", () => {
        expect(stylelintConfig).toHaveProperty("plugins", expect.any(Array));
        expect(stylelintConfig).toHaveProperty("rules", expect.any(Object));
    });

    test("ensure stylelint-a11y plugin is present", () => {
        expect(stylelintConfig.plugins).toContain("stylelint-a11y");
    });

    test("matches the expected output", () => {
        expect(stylelintConfig).toMatchSnapshot();
    });
});
