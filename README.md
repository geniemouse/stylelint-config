# `@geniemouse/stylelint-config`

Keep project CSS formatting consistent and free of obvious errors across projects with [stylelint] and this base configuration.

This configuration is strict.

## Installation

1. [Install] _stylelint_ locally:

```shell
# Using npm:
npm install stylelint --save-dev

# Using yarn:
yarn add stylelint --dev
```

2. Install the _GenieMouse stylelint_ configuration package locally:

```shell
# Using npm:
npm install @geniemouse/stylelint-config --save-dev

# Using yarn:
yarn add @geniemouse/stylelint-config --dev
```

## Configuration

Reference the configuration package in your project's `package.json` file:

```jsonc
{
    // ...
    "stylelint": {
        "extends": ["@geniemouse/stylelint-config"]
        "rules": {
            // Add new/overriding rules, as necessary
        }
    },
    // ...
}
```

Or add them to a `.stylelintrc` file at the project root:

```jsonc
{
    "extends": ["@geniemouse/stylelint-config"],
    "rules": {
        // Add new/overriding rules, as necessary
    }
}
```

Additional _stylelint_ rules/overrides should be written to the `rules` property.

More information about _stylelint's_ settings can be found on their site:

-   [configuration]
-   [rules]

### Using alongside Prettier

If [Prettier] is being used in your project or editor, some additional `node` packages will be required to have the two configurations running well together.

```shell
# Using npm:
npm install stylelint-prettier stylelint-config-prettier --save-dev

# Using yarn:
yarn add stylelint-prettier stylelint-config-prettier --dev
```

Add the `stylelint-prettier/recommended` configuration to the plugins `extends` array.

E.g. For a `.stylelintrc` file, it looks like this:

```jsonc
{
    "extends": [
        "@geniemouse/stylelint-config",
        "stylelint-prettier/recommended" // Ensure that stylelint-prettier is called last
    ],
    "rules": {
        // Add new/overriding rules, as necessary
    }
}
```

<!-- LINK REFERENCES -->

[prettier]: https://prettier.io/
[stylelint]: https://stylelint.io/
[configuration]: https://stylelint.io/user-guide/configuration/
[rules]: https://stylelint.io/user-guide/rules/
[install]: https://stylelint.io/#getting-started
[stylelint-prettier]: https://www.npmjs.com/package/stylelint-prettier
[stylelint-config-prettier]: https://www.npmjs.com/package/stylelint-config-prettier

<!-- end: LINK REFERENCES -->
