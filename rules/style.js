// Stylistic issues
// ================
// Properties listed according to groupings on the stylelint documentation.
// (Jump links provided below)
//
// Unset properties (e.g. null or empty array) will be left commented-out;
// here for reference only, or until they come into use.
//
// -- https://stylelint.io/user-guide/rules/#stylistic-issues

module.exports = {
    /**
     * Color
     * -----
     * https://stylelint.io/user-guide/rules/#color-2
     */
    "color-hex-case": "lower",
    "color-hex-length": "short",

    /**
     * Font family
     * -----------
     * https://stylelint.io/user-guide/rules/#font-family-1
     */
    "font-family-name-quotes": "always-where-recommended",

    /**
     * Font weight
     * -----------
     * https://stylelint.io/user-guide/rules/#font-weight
     */
    // "font-weight-notation": null,

    /**
     * Function
     * --------
     * https://stylelint.io/user-guide/rules/#function-2
     */
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    // "function-parentheses-space-inside": null,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",

    /**
     * Number
     * ------
     * https://stylelint.io/user-guide/rules/#number-1
     */
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,

    /**
     * String
     * ------
     * https://stylelint.io/user-guide/rules/#string-1
     */
    "string-quotes": "double",

    /**
     * Length
     * ------
     * https://stylelint.io/user-guide/rules/#length
     */
    "length-zero-no-unit": true,

    /**
     * Unit
     * ----
     * https://stylelint.io/user-guide/rules/#unit-2
     */
    "unit-case": "lower",

    /**
     * Value
     * -----
     * https://stylelint.io/user-guide/rules/#value-1
     */
    "value-keyword-case": "lower",

    /**
     * Value list
     * ----------
     * https://stylelint.io/user-guide/rules/#value-list
     */
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    /**
     * Custom property
     * ---------------
     * https://stylelint.io/user-guide/rules/#custom-property-1
     */
    // "custom-property-empty-line-before": null,

    /**
     * Property
     * --------
     * https://stylelint.io/user-guide/rules/#property-2
     */
    "property-case": "lower",

    /**
     * Declaration
     * -----------
     * https://stylelint.io/user-guide/rules/#declaration-1
     */
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": ["never", { except: ["after-comment"] }],

    /**
     * Declaration block
     * -----------------
     * https://stylelint.io/user-guide/rules/#declaration-block-2
     */
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never-single-line",
    "declaration-block-trailing-semicolon": "always",

    /**
     * Block
     * -----
     * https://stylelint.io/user-guide/rules/#block-1
     */
    "block-closing-brace-empty-line-before": ["never", { except: ["after-closing-brace"] }],
    "block-closing-brace-newline-after": ["always", { ignoreAtRules: ["if", "else"] }],
    "block-closing-brace-newline-before": "always-multi-line",
    // "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    // "block-opening-brace-newline-after": null,
    // "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    /**
     * Selector
     * --------
     * https://stylelint.io/user-guide/rules/#selector-2
     */
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",

    /**
     * Selector list
     * -------------
     * https://stylelint.io/user-guide/rules/#selector-list
     */
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    /**
     * Rule
     * ----
     * https://stylelint.io/user-guide/rules/#rule
     */
    "rule-empty-line-before": "always-multi-line",

    /**
     * Media feature
     * -------------
     * https://stylelint.io/user-guide/rules/#media-feature-2
     */
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    /**
     * Media query list
     * ----------------
     * https://stylelint.io/user-guide/rules/#media-query-list
     */
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",

    /**
     * At-rule
     * -------
     * https://stylelint.io/user-guide/rules/#at-rule-2
     */
    "at-rule-empty-line-before": [
        "always",
        {
            except: ["after-same-name", "first-nested", "inside-block"],
            ignore: ["after-comment", "first-nested"]
        }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",

    /**
     * Comment
     * -------
     * https://stylelint.io/user-guide/rules/#comment-2
     */
    // "comment-empty-line-before": null,
    "comment-whitespace-inside": "always"

    /**
     * General / Sheet
     * ---------------
     * https://stylelint.io/user-guide/rules/#general--sheet-2
     *
     * @DEV_NOTE: The following rules should ALWAYS be set by
     * Editor preferences/Prettier formatting.
     * Detailing here for reference only.
     */
    // "indentation": null,
    // "linebreaks": null,
    // "max-empty-lines": null,
    // "max-line-length": null,
    // "no-eol-whitespace": null,
    // "no-empty-first-line": null,
    // "no-missing-end-of-source-newline": null
};
