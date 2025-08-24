module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react', '^@?\\w', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
