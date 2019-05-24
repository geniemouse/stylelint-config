/**
 * stylelint rules
 * ===============
 * For more details on rules:
 * -- https://stylelint.io/user-guide/rules/
 */

const { alphabetizeByKeyName } = require("./utils/object");

// Using Object.assign as rules object is shallow
// Would need to be replaced with a deep merge plugin, should this ever change
const rules = Object.assign(
    {},
    require("./rules/errors"),
    require("./rules/language"),
    require("./rules/style"),
    // PLUGIN RULES: `stylelint-a11y`
    // -- https://github.com/YozhikM/stylelint-a11y
    {
        "a11y/media-prefers-reduced-motion": true,
        "a11y/no-outline-none": true,
        "a11y/selector-pseudo-class-focus": true
    }
);

module.exports = {
    plugins: ["stylelint-a11y"],
    // Make resulting rules object more human-readable by ensuring they are
    // listed in alphabetical order. E.g. calling:
    //   `yarn stylelint FILEPATH --print-config`
    // outputs the full stylelint rules being used on that path.
    //
    // @NOTE: If other stylelint configurations or overriding rules are added to
    // a project using @geniemouse/stylelint-config, they will appear (out of
    // alphabetical order) at the bottom of the rule-sets. This is as expected.
    rules: alphabetizeByKeyName(rules)
};
