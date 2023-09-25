module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  bracketSameLine: false,
  printWidth: 80,
  useTabs: false,
  quoteProps: "as-needed",
  overrides: [
    {
      files: "*.sol",
      options: {
        semi: true,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: "none",
        bracketSpacing: true,
        arrowParens: "avoid",
        printWidth: 120,
        useTabs: false,
        explicitTypes: "always",
        compiler: "^0.8.9",
      },
    },
  ],
};
