module.exports = {
  environments: ['browser', 'jest'],
  danglingCommas: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/{ PropTypes }/, 'PropTypes').replace(/;$/, '');
  },
  useRelativePaths: true,
  namedExports: {
    'prop-types': ['PropTypes'],
  },
}
