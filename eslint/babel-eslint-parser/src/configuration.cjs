exports.normalizeESLintConfig = function (options) {
  const {
    babelOptions = {},
    // ESLint sets ecmaVersion: undefined when ecmaVersion is not set in the config.
    ecmaVersion = 2020,
    sourceType = "module",
    allowImportExportEverywhere = false,
    requireConfigFile = true,
    ...otherOptions
  } = options;

  return {
    babelOptions: { cwd: process.cwd(), ...babelOptions },
    ecmaVersion: ecmaVersion === "latest" ? 1e8 : ecmaVersion,
    sourceType,
    allowImportExportEverywhere,
    requireConfigFile,
    ...otherOptions,
  };
};
