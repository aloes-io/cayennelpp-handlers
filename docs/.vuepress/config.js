module.exports = {
  title: 'CayenneLPP Handlers',
  base: '/cayennelpp-handlers/',
  dest: 'public',
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://framagit.org/aloes/cayennelpp-handlers',
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [{text: 'CayenneLPP', link: '/cayennelpp/'}],
    sidebar: [['/readme/', 'Readme'], ['/cayennelpp/', 'CayenneLPP']],
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
  },
};
