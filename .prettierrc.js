module.exports = {
  // Core Prettier options
  printWidth: 80,
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',

  // Import sorting plugin options
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react', '^@?\\w', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
