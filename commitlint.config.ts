module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 200],
    'body-max-line-length': [2, 'always', 200], // Limita las líneas del cuerpo a 100 caracteres
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'style',
      'test',
      'emojis', // Permitir emojis en el tipo de commit
    ]],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  }
};
