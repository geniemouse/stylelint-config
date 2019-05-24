// Limit language features
// =======================
// Properties listed according to groupings on the stylelint documentation.
// (Jump links provided below)
//
// Unset properties (e.g. null or empty array) will be left commented-out;
// here for reference only, or until they come into use.
//
// -- https://stylelint.io/user-guide/rules/#limit-language-features

module.exports = {
    /**
     * Color
     * -----
     * https://stylelint.io/user-guide/rules/#color-1
     */
    // "color-named": null,
    // "color-no-hex": null,

    /**
     * Function
     * --------
     * https://stylelint.io/user-guide/rules/#function-1
     */
    // "function-blacklist": [],
    "function-url-no-scheme-relative": true,
    // "function-url-scheme-blacklist": [],
    // "function-url-scheme-whitelist": [],
    // "function-whitelist": [],

    /**
     * Keyframes
     * ---------
     * https://stylelint.io/user-guide/rules/#keyframes
     */
    // "keyframes-name-pattern": null,

    /**
     * Number
     * ------
     * https://stylelint.io/user-guide/rules/#number
     */
    "number-max-precision": 7,

    /**
     * Time
     * ----
     * https://stylelint.io/user-guide/rules/#time
     */
    // "time-min-milliseconds": null,

    /**
     * Unit
     * ----
     * https://stylelint.io/user-guide/rules/#unit-1
     */
    // "unit-blacklist": [],
    // "unit-whitelist": [],

    /**
     * Shorthand property
     * ------------------
     * https://stylelint.io/user-guide/rules/#shorthand-property
     */
    "shorthand-property-no-redundant-values": true,

    /**
     * Value
     * -----
     * https://stylelint.io/user-guide/rules/#value
     */
    "value-no-vendor-prefix": true,

    /**
     * Custom property
     * ---------------
     * https://stylelint.io/user-guide/rules/#custom-property
     */
    // "custom-property-pattern": null,

    /**
     * Property
     * --------
     * https://stylelint.io/user-guide/rules/#property-1
     */
    // "property-blacklist": [],
    "property-no-vendor-prefix": true,
    // "property-whitelist": [],

    /**
     * Declaration
     * -----------
     * https://stylelint.io/user-guide/rules/#declaration
     */
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-no-important": true,
    // "declaration-property-unit-blacklist": [],
    "declaration-property-unit-whitelist": {
        "font-size": ["em", "rem"]
    },
    // "declaration-property-value-blacklist": [],
    // "declaration-property-value-whitelist": [],

    /**
     * Declaration block
     * -----------------
     * https://stylelint.io/user-guide/rules/#declaration-block-1
     */
    "declaration-block-single-line-max-declarations": 1,

    /**
     * Selector
     * --------
     * https://stylelint.io/user-guide/rules/#selector-1
     */
    // "selector-attribute-operator-blacklist": [],
    // "selector-attribute-operator-whitelist": [],
    // "selector-class-pattern": null,
    // "selector-combinator-blacklist": [],
    // "selector-combinator-whitelist": [],
    // "selector-id-pattern": null,
    "selector-max-attribute": 2,
    "selector-max-class": 2,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 2,
    "selector-max-pseudo-class": 2,
    // "selector-max-specificity": null,
    "selector-max-type": [2, { ignore: ["child", "compounded", "next-sibling"] }],
    "selector-max-universal": 2,
    // "selector-nested-pattern": null,
    // "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": true,
    // "selector-pseudo-class-blacklist": [],
    // "selector-pseudo-class-whitelist": [],
    // "selector-pseudo-element-blacklist": [],
    // "selector-pseudo-element-whitelist": [],

    /**
     * Media feature
     * -------------
     * https://stylelint.io/user-guide/rules/#media-feature-1
     */
    // "media-feature-name-blacklist": [],
    "media-feature-name-no-vendor-prefix": true,
    // "media-feature-name-value-whitelist": [],
    // "media-feature-name-whitelist": [],

    /**
     * Custom media
     * ------------
     * https://stylelint.io/user-guide/rules/#custom-media
     */
    // "custom-media-pattern": null,

    /**
     * At-rule
     * -------
     * https://stylelint.io/user-guide/rules/#at-rule-1
     */
    // "at-rule-blacklist": [],
    "at-rule-no-vendor-prefix": true,
    // "at-rule-property-requirelist": [],
    // "at-rule-whitelist": [],

    /**
     * Comment
     * -------
     * https://stylelint.io/user-guide/rules/#comment-1
     */
    // "comment-word-blacklist": [],

    /**
     * General / Sheet
     * ---------------
     * https://stylelint.io/user-guide/rules/#general--sheet-1
     */
    "max-nesting-depth": [
        3,
        {
            ignore: ["blockless-at-rules", "pseudo-classes"],
            ignoreAtRules: ["media", "page", "supports"]
        }
    ]
    // "no-unknown-animations": null
};
