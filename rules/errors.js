// Possible errors
// ===============
// Properties listed according to groupings on the stylelint documentation.
// (Jump links provided below)
//
// Unset properties (e.g. null or empty array) will be left commented-out;
// here for reference only, or until they come into use.
//
// -- https://stylelint.io/user-guide/rules/#possible-errors

module.exports = {
    /**
     * Color
     * -----
     * https://stylelint.io/user-guide/rules/#color
     */
    "color-no-invalid-hex": true,

    /**
     * Font family
     * -----------
     * https://stylelint.io/user-guide/rules/#font-family
     */
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,

    /**
     * Function
     * --------
     * https://stylelint.io/user-guide/rules/#function
     */
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,

    /**
     * String
     * ------
     * https://stylelint.io/user-guide/rules/#string
     */
    "string-no-newline": true,

    /**
     * Unit
     * ----
     * https://stylelint.io/user-guide/rules/#unit
     */
    "unit-no-unknown": true,

    /**
     * Property
     * --------
     * https://stylelint.io/user-guide/rules/#property
     */
    "property-no-unknown": true,

    /**
     * Keyframe declaration
     * --------------------
     * https://stylelint.io/user-guide/rules/#keyframe-declaration
     */
    "keyframe-declaration-no-important": true,

    /**
     * Declaration block
     * -----------------
     * https://stylelint.io/user-guide/rules/#declaration-block
     */
    "declaration-block-no-duplicate-properties": [
        true,
        {
            ignore: ["consecutive-duplicates-with-different-values"]
        }
    ],
    "declaration-block-no-shorthand-property-overrides": true,

    /**
     * Block
     * -----
     * https://stylelint.io/user-guide/rules/#block
     */
    "block-no-empty": true,

    /**
     * Selector
     * --------
     * https://stylelint.io/user-guide/rules/#selector
     */
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,

    /**
     * Media feature
     * -------------
     * https://stylelint.io/user-guide/rules/#media-feature
     */
    "media-feature-name-no-unknown": true,

    /**
     * At-rule
     * -------
     * https://stylelint.io/user-guide/rules/#at-rule
     */
    "at-rule-no-unknown": true,

    /**
     * Comment
     * -------
     * https://stylelint.io/user-guide/rules/#comment
     */
    "comment-no-empty": true,

    /**
     * General / Sheet
     * ---------------
     * https://stylelint.io/user-guide/rules/#general--sheet
     */
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true
};
