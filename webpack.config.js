const HtmlWebpackPlugin = require('html-webpack-plugin')
const { parsed } = require('dotenv').config()

module.exports = {
  mode: "development",
  entry: './public/js/form.js',
  output: {
    path: __dirname + '/public/dest',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/templates/dev-index.html',
        inject: 'body',
        env: {
            ...parsed
        }
    })
  ]
}