// https://nextjs.org/docs/basic-features/eslint#lint-staged

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=0',
    'import-sort --write'
  ],
  'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write']
};
