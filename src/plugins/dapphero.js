module.exports = function (context, options) {
    return {
      name: 'docusaurus-plugin',
      injectHtmlTags() {
        return {
          headTags: [],
          preBodyTags: [],
          postBodyTags: [
            {
              tagName: 'script',
              attributes: {
                src: 'https://package.dapphero.io/main.js',
                id: 'dh-apiKey',
                'data-api': "1599746631616x252317767955120130"
              },
            },
          ],
        };
      },
    };
  };