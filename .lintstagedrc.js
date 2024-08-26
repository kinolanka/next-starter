const fs = require('fs').promises;
const micromatch = require('micromatch');

/*
  ESLint Task: For files with extensions .ts, .tsx, .js, or .jsx, it runs ESLint with the --fix option to automatically fix problems, --max-warnings=0 to treat warnings as errors, and --ignore-path .eslintignore to use the .eslintignore file for specifying patterns of files to ignore. The task concatenates all matched file paths into a single command line argument for ESLint.

  Prettier Task: For files with extensions .ts, .tsx, .js, .jsx, .json, or .md, it performs the following steps:

  Asynchronously reads the .prettierignore file to get patterns of files to ignore.
  Splits the contents of .prettierignore by new lines and filters out any empty lines or lines with only whitespace.
  Uses micromatch to filter the staged files against the ignore patterns from .prettierignore, resulting in a list of files that should be formatted.
  Runs prettier --write on the filtered list of files to format them according to Prettier's rules.
*/

/**
 * Filters files based on ignore patterns from a specified ignore file.
 *
 * @param {string[]} files - The list of files to be filtered.
 * @param {string} ignoreFilePath - The path to the ignore file containing patterns.
 * @returns {Promise<string>} - A promise that resolves to the string of files.
 */
async function filterFilesToFormat(files, ignoreFilePath) {
  try {
    const ignoreFileContent = await fs.readFile(ignoreFilePath, 'utf8');
    const ignorePatterns = ignoreFileContent
      .split(/\r?\n/)
      .filter((pattern) => pattern.trim() !== '');

    const projectRoot = process.cwd(); // Get the project's root directory

    const filesToFormat = files.filter((file) => {
      // Remove the project root directory from the file path
      let relativePath = file.startsWith(projectRoot) ? file.substring(projectRoot.length) : file;

      relativePath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;

      return !micromatch.isMatch(relativePath, ignorePatterns);
    });

    if (!filesToFormat.length) {
      return process.exit(0);
    }

    return filesToFormat.join(' ');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  './**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToFormat = await filterFilesToFormat(files, '.eslintignore');

    return `eslint --fix --max-warnings=0 ${filesToFormat}`;
  },

  './**/*.{ts,tsx,js,jsx,json,md}': async (files) => {
    const filesToFormat = await filterFilesToFormat(files, '.prettierignore');

    return `prettier --write ${filesToFormat}`;
  },
};
