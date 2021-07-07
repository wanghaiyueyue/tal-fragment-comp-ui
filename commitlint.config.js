// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
// https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore', // 日常事务
        'ci',
        'docs',
        'feat', // 壮举
        'fix',
        'improvement',
        'perf', // 性能
        'refactor', // 重构
        'revert', // 还原
        'style',
        'test'
      ]
    ]
  }
};
