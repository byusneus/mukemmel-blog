const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withImages(withCSS({
  env: {
    development: 'http://yunusemrealpak.com',
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
        'sass-loader',
      ],
    })

    return config
  }
}))

// const withPlugins = require("next-compose-plugins");
// const withCSS = require("@zeit/next-css");
// const withFonts = require('next-fonts');
// const webpack = require('webpack');

// module.exports = withPlugins([withCSS, withFonts, new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery',
//   'window.jQuery': 'jquery'
// })], {
//   target: "serverless",
//   webpack: (config, { defaultLoaders }) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         defaultLoaders.babel,
//         {
//           loader: require('styled-jsx/webpack').loader,
//           options: {
//             type: 'scoped',
//           },
//         },
//         'sass-loader',
//       ],
//     })

//     return config
//   },
// });