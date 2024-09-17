module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [0, "always"], // Set the severity to 0 to disable this rule
    },
}
