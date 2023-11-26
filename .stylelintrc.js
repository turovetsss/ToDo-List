module.exports = {
    extends: ['stylelint-config-recommended-scss'],
    plugins: ['stylelint-prettier'],
    rules: {
        'import-notation': 'string',
        'selector-class-pattern': null,
        'prettier/prettier': true,
        'no-descending-specificity': null,
    },
};
