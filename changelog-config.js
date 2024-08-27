module.exports = {
  types: [
    { type: 'feat', section: '✨ Features' },
    { type: 'fix', section: '🐛 Bug Fixes' },
    { type: 'chore', section: '🔧 Maintenance', hidden: true },
    { type: 'docs', section: '📝 Documentation' },
    { type: 'style', section: '💄 Code Style' },
    { type: 'refactor', section: '♻️ Refactoring' },
    { type: 'test', section: '✅ Tests' },
  ],
  releaseCommitMessageFormat: 'chore(release): {{currentTag}} [skip ci]'
};